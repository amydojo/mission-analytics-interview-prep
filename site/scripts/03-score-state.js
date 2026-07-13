function renderScoreRows() {
  const rows = qs("#score-rows");
  rows.innerHTML = scoring.map(([name, description], index) => `
    <div class="score-row">
      <div class="score-copy"><strong>${name}</strong><small>${description}</small></div>
      <div class="score-options" role="radiogroup" aria-label="${name} score">
        ${[0,1,2].map(value => `
          <input type="radio" id="score-${index}-${value}" name="score-${index}" value="${value}" ${value === 0 ? "checked" : ""} />
          <label for="score-${index}-${value}">${value}</label>
        `).join("")}
      </div>
    </div>
  `).join("");
  qsa("input[type=radio]", rows).forEach(input => input.addEventListener("change", updateScoreTotal));
  updateScoreTotal();
}

function getScoreTotal() {
  return scoring.reduce((sum, _, index) => {
    const selected = qs(`input[name="score-${index}"]:checked`);
    return sum + Number(selected?.value || 0);
  }, 0);
}

function scoreLevel(total) {
  if (total >= 14) return ["ready", "READY"];
  if (total >= 11) return ["usable", "USABLE · REVISE ONCE"];
  if (total >= 8) return ["weak", "WEAK · REBUILD"];
  return ["unsafe", total === 0 ? "UNSCORED" : "UNSAFE"];
}

function updateScoreTotal() {
  const total = getScoreTotal();
  const [level, label] = scoreLevel(total);
  qs("#score-total").textContent = String(total);
  qs("#score-label").textContent = label;
  qs("#score-status").dataset.level = level;
}

function loadAttempts() {
  try { return JSON.parse(safeStorage.get(storageKeys.attempts)) || []; }
  catch { return []; }
}

function renderAttempts() {
  const attempts = loadAttempts();
  const list = qs("#attempts-list");
  if (!attempts.length) {
    list.innerHTML = `<div class="empty-state">No attempts yet.<br />Score immediately after the next answer.</div>`;
    return;
  }
  list.innerHTML = attempts.slice(0, 8).map(attempt => {
    const [, label] = scoreLevel(attempt.total);
    return `
      <div class="attempt-item">
        <div><strong>${escapeHtml(attempt.name)}</strong><small>${attempt.date} · ${label}</small></div>
        <span class="attempt-score">${attempt.total}</span>
      </div>
    `;
  }).join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[char]));
}

function saveAttempt(event) {
  event.preventDefault();
  const total = getScoreTotal();
  const name = qs("#answer-name").value.trim() || "Untitled answer";
  const attempts = loadAttempts();
  attempts.unshift({
    name,
    total,
    date: new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date())
  });
  safeStorage.set(storageKeys.attempts, JSON.stringify(attempts.slice(0, 20)));
  renderAttempts();
  showToast(`Saved “${name}” at ${total} / 16.`);
}

function resetScore() {
  qsa(".score-options", qs("#score-form")).forEach(group => {
    const first = qs("input[value='0']", group);
    if (first) first.checked = true;
  });
  qs("#answer-name").value = "";
  updateScoreTotal();
}

function loadChecklist() {
  try { return JSON.parse(safeStorage.get(storageKeys.checklist)) || {}; }
  catch { return {}; }
}

function renderChecklist() {
  const saved = loadChecklist();
  qs("#day-checklist").innerHTML = checklistItems.map((item, index) => `
    <label class="check-item">
      <input type="checkbox" data-check="${index}" ${saved[index] ? "checked" : ""} />
      <span class="check-box" aria-hidden="true"></span>
      <span>${item}</span>
    </label>
  `).join("");

  qsa("#day-checklist input").forEach(input => input.addEventListener("change", () => {
    const state = loadChecklist();
    state[input.dataset.check] = input.checked;
    safeStorage.set(storageKeys.checklist, JSON.stringify(state));
  }));
}

function bindEvents() {
  qsa(".nav-item").forEach(item => item.addEventListener("click", () => switchView(item.dataset.view)));

  qsa(".mode-switch button").forEach(button => button.addEventListener("click", () => {
    qsa(".mode-switch button").forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    duration = Number(button.dataset.seconds);
    resetTimer();
  }));

  qs("#timer-toggle").addEventListener("click", toggleTimer);
  qs("#next-prompt").addEventListener("click", nextPrompt);
  qs("#reveal-coach").addEventListener("click", () => {
    const content = qs("#coach-content");
    const expanded = content.hidden;
    content.hidden = !expanded;
    qs("#reveal-coach").setAttribute("aria-expanded", String(expanded));
    qs("#reveal-coach span").textContent = expanded ? "×" : "+";
  });

  qs("#score-form").addEventListener("submit", saveAttempt);
  qs("#clear-score").addEventListener("click", resetScore);
  qs("#clear-attempts").addEventListener("click", () => {
    safeStorage.remove(storageKeys.attempts);
    renderAttempts();
    showToast("Attempt history cleared.");
  });
  qs("#reset-checklist").addEventListener("click", () => {
    safeStorage.remove(storageKeys.checklist);
    renderChecklist();
    showToast("Checklist reset.");
  });

  window.addEventListener("hashchange", () => {
    const target = location.hash.slice(1);
    if (qsa(".view").some(view => view.id === target)) switchView(target);
  });
}

function init() {
  renderEvidence();
  renderPrompt();
  renderScoreRows();
  renderAttempts();
  renderChecklist();
  bindEvents();

  const initial = location.hash.slice(1);
  if (qsa(".view").some(view => view.id === initial)) switchView(initial);
}

init();

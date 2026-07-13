const storageKeys = {
  attempts: "missionAnalyticsAttempts",
  checklist: "missionAnalyticsChecklist"
};

const memoryStorage = new Map();
const safeStorage = {
  get(key) {
    try { return localStorage.getItem(key); }
    catch { return memoryStorage.get(key) ?? null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); }
    catch { memoryStorage.set(key, value); }
  },
  remove(key) {
    try { localStorage.removeItem(key); }
    catch { memoryStorage.delete(key); }
  }
};

let activePrompt = 0;
let duration = 90;
let remaining = duration;
let timerId = null;

function qs(selector, scope = document) { return scope.querySelector(selector); }
function qsa(selector, scope = document) { return [...scope.querySelectorAll(selector)]; }

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function switchView(viewId) {
  qsa(".view").forEach(view => view.classList.toggle("is-active", view.id === viewId));
  qsa(".nav-item").forEach(item => {
    const active = item.dataset.view === viewId;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  history.replaceState(null, "", `#${viewId}`);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderEvidence() {
  const grid = qs("#evidence-grid");
  grid.innerHTML = evidenceCards.map((card, index) => `
    <article class="evidence-card" tabindex="0" role="button" aria-expanded="false" aria-label="Reveal ${card.title} retrieval card">
      <div class="evidence-front">
        <span class="evidence-index">0${index + 1}</span>
        <h3>${card.title}</h3>
        <span class="evidence-cue">${card.cue}</span>
        <p>${card.summary}</p>
      </div>
      <div class="evidence-back">
        <div><span>INTERVIEWER CONCERN</span><p>${card.concern}</p></div>
        <div><span>IF ASKED, THEN</span><p>${card.protocol}</p></div>
        <div><span>RETRIEVAL TEST</span><p>${card.test}</p></div>
      </div>
      <span class="evidence-toggle" aria-hidden="true">+</span>
    </article>
  `).join("");

  qsa(".evidence-card", grid).forEach(card => {
    const toggle = () => {
      const open = card.classList.toggle("is-open");
      card.setAttribute("aria-expanded", String(open));
      qs(".evidence-toggle", card).textContent = open ? "×" : "+";
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function updateTimer() {
  qs("#timer-display").textContent = formatTime(remaining);
  const circumference = 2 * Math.PI * 52;
  const progress = duration ? remaining / duration : 0;
  qs("#timer-progress").style.strokeDashoffset = String(circumference * (1 - progress));
}

function resetTimer() {
  window.clearInterval(timerId);
  timerId = null;
  remaining = duration;
  qs("#timer-toggle").textContent = "Start answer";
  updateTimer();
}

function toggleTimer() {
  const button = qs("#timer-toggle");
  if (timerId) {
    window.clearInterval(timerId);
    timerId = null;
    button.textContent = "Resume answer";
    return;
  }

  if (remaining === 0) remaining = duration;
  button.textContent = "Pause";
  timerId = window.setInterval(() => {
    remaining -= 1;
    updateTimer();
    if (remaining <= 0) {
      window.clearInterval(timerId);
      timerId = null;
      remaining = 0;
      updateTimer();
      button.textContent = "Restart";
      showToast("Time. Stop cleanly and score the answer.");
    }
  }, 1000);
}

function renderPrompt() {
  const prompt = prompts[activePrompt];
  const card = evidenceCards[prompt.card];
  qs("#prompt-category").textContent = prompt.category;
  qs("#prompt-count").textContent = `PROMPT ${(activePrompt + 1).toString().padStart(2, "0")} / ${prompts.length}`;
  qs("#prompt-text").textContent = prompt.text;
  qs("#coach-cue").textContent = card.cue;
  qs("#coach-sequence").textContent = card.protocol;
  qs("#coach-threat").textContent = card.concern;
  qs("#coach-close").textContent = prompt.close;
  qs("#coach-content").hidden = true;
  qs("#reveal-coach").setAttribute("aria-expanded", "false");
  qs("#reveal-coach span").textContent = "+";
  resetTimer();
}

function nextPrompt() {
  let next = activePrompt;
  while (next === activePrompt && prompts.length > 1) {
    next = Math.floor(Math.random() * prompts.length);
  }
  activePrompt = next;
  renderPrompt();
}

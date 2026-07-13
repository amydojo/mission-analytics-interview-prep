# Interview interface

The root GitHub Pages site converts the prep repository into an interactive interview operating system.

## Modes

1. **Command**: Positioning, crown evidence, retrieval cards, threats, and live answer rules.
2. **Drill**: Randomized prompts with 30 second, 90 second, and five minute timers. Coaching stays hidden until the answer is complete.
3. **Score**: Eight factor, 16 point feedback system. Attempts are saved in the browser with local storage.
4. **Day of**: Opening map, readiness checklist, gap pivots, candidate questions, and closing language.

## Design principles

- Retrieval over rereading
- Cues over scripts
- Evidence over confidence theater
- One dominant signal per screen
- No external dependencies
- Responsive and keyboard accessible

## Deployment

The Pages workflow assembles the ordered files in `site/styles/` and `site/scripts/` into a dependency free static build.

## Local preview

```bash
mkdir -p .preview
cp index.html 404.html .preview/
cat site/styles/*.css > .preview/styles.css
cat site/scripts/*.js > .preview/app.js
python3 -m http.server 8000 --directory .preview
```

Then open `http://localhost:8000`.

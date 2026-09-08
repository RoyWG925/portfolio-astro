# Roy Wang — Portfolio

Astro portfolio for AI application engineering, evaluation workflows, and selected web projects.

- [Portfolio](https://roywg925.github.io/portfolio-astro/)
- [AI workflow case study](https://roywg925.github.io/portfolio-astro/projects/verifiable-ai-workflow-system/)
- [Public code-review sample](https://github.com/RoyWG925/ai-code-eval-sample)
- [PTT sentiment project](https://github.com/RoyWG925/ptt-sentiment-stock-analysis)

## Local development

Requires Node.js >=22.12.0. Install the locked dependencies, then build:

```bash
npm ci --ignore-scripts
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run preview
```

For development, use `npm run dev`. The static build writes to `dist/`.
The telemetry environment variable is optional; it avoids an unnecessary network request during an offline build.

## Source map

| Path | Purpose |
| --- | --- |
| `src/pages/index.astro` | Homepage and project links |
| `src/pages/projects/verifiable-ai-workflow-system.astro` | Case-study content |
| `src/layouts/BaseLayout.astro` | Shared page layout |
| `src/styles/global.css` | Shared visual styles |
| `public/` | Images and resume |
| `astro.config.mjs` | Site URL and GitHub Pages base path |

## Case-study evidence scope

This repository implements the portfolio website. The RAG, agent-memory, and
validation work described by the case study originated in separate course
projects; this repository is not their runtime or their evaluation harness.

The original course metrics are retained as reported results. Their complete
source revisions, dataset versions, run commands, and raw outputs are not yet
linked on the case-study page. The public code-review sample is a separate,
small executable example; its tests do not substantiate the reported
186-test course suite or the memory benchmark.

## Validation

`npm run build` checks that the two static routes build. It does not validate
RAG quality, model scores, production reliability, or live browser interactions.
The existing Pages workflow publishes the default branch; content changes on
review branches remain separate until merged.

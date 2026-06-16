# Verifiable AI Workflow Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a portfolio case-study page for `Verifiable AI Workflow System` and update the existing homepage so Roy's strongest first impression becomes AI workflow evaluation rather than a broad AI/creative project spread.

**Architecture:** Keep the current Astro single-site structure. Add one static Astro project page under `src/pages/projects/` with page-local styling, then update `src/pages/index.astro` project ordering and hero copy. Do not add dependencies, a CMS, or a visual redesign.

**Tech Stack:** Astro 6, existing `BaseLayout.astro`, existing global CSS design tokens, page-local Astro styles, current industrial/brutalist visual language.

---

## Assumptions Locked For First Pass

- Creative side signal: keep `NUCLEUS.IO` as the single featured creative-tech project.
- Main project external link: use the new internal project page first; do not link the case-study repo publicly until GitHub is cleaned.
- Hero interaction: keep the existing physics hero and HUD for now; reducing visual noise is a separate pass.
- Existing uncommitted changes in `README.md`, `public/Roy_Wang_Resume.pdf`, `src/pages/index.astro`, and `dev-server.log` may belong to the user. Inspect before editing and do not revert them.

## File Structure

- Create: `C:\Users\User\Desktop\專案庫\Active\portfolio-astro\src\pages\projects\verifiable-ai-workflow-system.astro`
  - Static case-study page.
  - Imports `BaseLayout` and `global.css`.
  - Uses local constants for metrics, proof chips, layers, and failure modes.
  - Uses page-local CSS classes prefixed with `case-`.

- Modify: `C:\Users\User\Desktop\專案庫\Active\portfolio-astro\src\pages\index.astro`
  - Add Verifiable AI Workflow System as project `001`.
  - Keep Market Sentiment as project `002`.
  - Keep NUCLEUS.IO as project `003`.
  - Add one `Archive / Experiments` row as project `004`, or leave it disabled if no archive route exists.
  - Update hero focus chips and hero description.
  - Update ticker labels to prioritize RAG/evaluation/agent workflows.

- Read-only reference files:
  - `C:\Users\User\Desktop\專案庫\Active\portfolio-astro\docs\superpowers\specs\2026-06-16-verifiable-ai-workflow-portfolio-design.md`
  - `C:\Users\User\Desktop\專案庫\Active\ai-agent-rag-memory-case-study\deliverables\case-sheet.md`
  - `C:\Users\User\Desktop\專案庫\Active\ai-agent-rag-memory-case-study\deliverables\case-study-final-project.md`
  - `C:\Users\User\Desktop\專案庫\Active\ai-agent-rag-memory-case-study\hw4-agent-memory\REPORT.md`
  - `C:\Users\User\Desktop\專案庫\Active\final-project-jielle2453\report.md`
  - `C:\Users\User\Desktop\專案庫\Active\final-project-jielle2453\OPEN_TRACK.md`

---

### Task 1: Preflight Repo State

**Files:**
- Inspect: `C:\Users\User\Desktop\專案庫\Active\portfolio-astro`

- [ ] **Step 1: Check worktree state**

Run:

```powershell
git -C 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro' status --short
```

Expected:

```text
 M README.md
 M public/Roy_Wang_Resume.pdf
 M src/pages/index.astro
?? dev-server.log
?? docs/superpowers/plans/2026-06-16-verifiable-ai-workflow-portfolio.md
```

If there are additional user changes, preserve them. Do not run reset or checkout commands.

- [ ] **Step 2: Read the current homepage before editing**

Run:

```powershell
Get-Content -LiteralPath 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro\src\pages\index.astro' -Raw
```

Expected: current Astro page with `const projects = [...]`, hero copy, ticker labels, and Matter.js physics script.

- [ ] **Step 3: Commit nothing yet**

No command. This step is intentional. Implementation should be reviewed by build/browser checks first.

---

### Task 2: Add Project Case Study Page

**Files:**
- Create: `C:\Users\User\Desktop\專案庫\Active\portfolio-astro\src\pages\projects\verifiable-ai-workflow-system.astro`

- [ ] **Step 1: Ensure project-page directory exists**

Run:

```powershell
New-Item -ItemType Directory -Force -Path 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro\src\pages\projects'
```

Expected: directory exists and no existing files are deleted.

- [ ] **Step 2: Create the page**

Create `src/pages/projects/verifiable-ai-workflow-system.astro` with this content:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import '../../styles/global.css';

const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;

const proofChips = [
  'Evaluated RAG',
  'Agent Memory Benchmark',
  'Deterministic Validation',
  'Failure Diagnosis',
];

const layers = [
  {
    index: '01',
    title: 'Evaluated RAG System',
    summary:
      'Built an AI-augmented development knowledge RAG system designed to expose retrieved context, citations, and trace logs instead of trusting a final answer alone.',
    proves:
      'Grounding and retrieval quality can be inspected separately from generation quality.',
    details: [
      'BM25 and vector retrieval',
      'pgvector-backed semantic search',
      'RRF fusion and reranking',
      'paragraph-level citations',
      'retrieved snippet previews',
      'query trace logs and golden QA evaluation',
    ],
  },
  {
    index: '02',
    title: 'Agent Memory Retrieval Benchmark',
    summary:
      'Built a local memory workflow around capture, store, retrieve, and inject, then evaluated whether relevant memories actually appeared in the top-k context.',
    proves:
      'Agent memory can be treated as a measurable retrieval problem rather than a vague feature claim.',
    details: [
      'JSON-backed memory store',
      'deterministic BM25 baseline',
      'optional multilingual hybrid retrieval',
      'token-budgeted injection',
      'Recall@k, MRR, and nDCG@k metrics',
      'cross-language and semantic-gap analysis',
    ],
  },
  {
    index: '03',
    title: 'Deterministic Validation Harness',
    summary:
      'Built validation skills for AI-generated outputs so probabilistic model behavior is wrapped by explicit contracts, scripts, and machine-checkable results.',
    proves:
      'AI outputs become more trustworthy when they are constrained by deterministic checks and failure labels.',
    details: [
      'read-only Text2SQL validation',
      'AST, forbidden-import, SLOC, and self-test checks for generated code',
      'bug-hunting probes with AST and edge inputs',
      'memory retrieval evaluator',
      'structured fenced JSON output contracts',
      'machine-checkable failure diagnosis',
    ],
  },
];

const metrics = [
  { mode: 'BM25', recall: '0.810', mrr: '0.810', ndcg: '0.802' },
  { mode: 'Hybrid', recall: '1.000', mrr: '0.905', ndcg: '0.921' },
];

const failureModes = [
  'retrieval misses caused by lexical mismatch',
  'cross-language retrieval gaps',
  'semantically similar but wrong chunks',
  'citation and evidence mismatch',
  'useful memory retrieved below top-k',
  'relevant memory truncated by token budget',
  'duplicate memory IDs inflating metrics',
  'generated code passing visually but failing deterministic checks',
  'SQL output that looks valid but violates execution constraints',
];
---

<BaseLayout>
  <main class="case-page">
    <section class="case-hero">
      <a href={`${base}/#work`} class="case-back">← Back to projects</a>
      <div class="case-kicker">Portfolio Case Study</div>
      <h1>Verifiable AI Workflow System</h1>
      <p class="case-subtitle">
        Evaluated RAG, agent memory, and deterministic validation for trustworthy AI workflows.
      </p>
      <p class="case-thesis">
        Most AI demos are easy to make impressive once. The harder question is whether the workflow can be tested, traced, diagnosed, and improved when it fails.
      </p>
      <div class="case-chip-row" aria-label="Project proof points">
        {proofChips.map((chip) => <span class="case-chip">{chip}</span>)}
      </div>
    </section>

    <section class="case-section case-problem">
      <div class="case-section-label">Problem</div>
      <div class="case-section-body">
        <h2>AI applications often fail silently.</h2>
        <p>
          A RAG system may retrieve plausible but wrong context. Agent memory may inject irrelevant or low-priority memories. Generated outputs can look valid while violating hidden constraints. A model may answer confidently even when the evidence is weak.
        </p>
        <p class="case-callout">
          The practical question: can we see what happened, measure what failed, and improve the workflow?
        </p>
      </div>
    </section>

    <section class="case-section">
      <div class="case-section-label">What I Built</div>
      <div class="case-layer-stack">
        {layers.map((layer) => (
          <article class="case-layer">
            <div class="case-layer-index">[{layer.index}]</div>
            <div>
              <h2>{layer.title}</h2>
              <p>{layer.summary}</p>
              <p class="case-proves">{layer.proves}</p>
              <ul>
                {layer.details.map((detail) => <li>{detail}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section class="case-section">
      <div class="case-section-label">Architecture</div>
      <div class="case-architecture" aria-label="AI workflow architecture">
        <div>User Query</div>
        <span>→</span>
        <div>RAG Retrieval</div>
        <span>→</span>
        <div>Trace Logs / Citations</div>
        <span>→</span>
        <div>Memory Retrieval</div>
        <span>→</span>
        <div>Token-Budget Injection</div>
        <span>→</span>
        <div>AI Output</div>
        <span>→</span>
        <div>Deterministic Validation</div>
        <span>→</span>
        <div>Failure Labels</div>
      </div>
    </section>

    <section class="case-section">
      <div class="case-section-label">Evaluation Evidence</div>
      <div class="case-evidence-grid">
        <article class="case-evidence-card">
          <h2>Memory Retrieval Benchmark</h2>
          <p>
            Pure BM25 missed semantic and cross-language memory queries. Hybrid retrieval improved top-5 coverage while preserving the BM25 baseline path.
          </p>
          <table class="case-metric-table">
            <thead>
              <tr>
                <th>Mode</th>
                <th>Recall@5</th>
                <th>MRR</th>
                <th>nDCG@5</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((row) => (
                <tr>
                  <td>{row.mode}</td>
                  <td>{row.recall}</td>
                  <td>{row.mrr}</td>
                  <td>{row.ndcg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article class="case-evidence-card">
          <h2>Validation Evidence</h2>
          <ul class="case-proof-list">
            <li><strong>186 passed, 1 skipped</strong> local tests</li>
            <li><strong>28/28</strong> repository checks</li>
            <li><strong>21/21</strong> Text2SQL dev-set tasks</li>
            <li>Smoke logs verified across submitted validation skills</li>
          </ul>
          <p class="case-note">
            These are local and course-runtime verification signals, not production reliability claims.
          </p>
        </article>
      </div>
    </section>

    <section class="case-section">
      <div class="case-section-label">Failure Diagnosis</div>
      <article class="case-diagnosis-card">
        <h2>Failure Case: Memory Retrieved But Not Injected</h2>
        <div class="case-diagnosis-grid">
          <div>
            <span>Symptom</span>
            <p>The relevant memory exists in the store but is not included in the final context.</p>
          </div>
          <div>
            <span>Diagnosis</span>
            <p>Retrieval and injection are separate failure surfaces.</p>
          </div>
          <div>
            <span>Check</span>
            <p>Token-budget injection recall and budget-truncated gold IDs.</p>
          </div>
          <div>
            <span>Lesson</span>
            <p>Agent memory should be evaluated under context-budget constraints, not only retrieval ranking.</p>
          </div>
        </div>
      </article>
    </section>

    <section class="case-section">
      <div class="case-section-label">Failure Modes</div>
      <ul class="case-failure-list">
        {failureModes.map((mode) => <li>{mode}</li>)}
      </ul>
    </section>

    <section class="case-section">
      <div class="case-section-label">What This Proves</div>
      <div class="case-section-body">
        <h2>AI output is not enough.</h2>
        <p>
          This project demonstrates my ability to build RAG and agent-memory workflows, design retrieval benchmarks, inspect intermediate traces, classify failure modes, validate AI-generated outputs deterministically, and turn vague AI behavior into measurable system behavior.
        </p>
        <p class="case-callout">
          The workflow needs evidence, traces, tests, and failure diagnosis.
        </p>
      </div>
    </section>

    <section class="case-section case-limits">
      <div class="case-section-label">Honest Limits</div>
      <div class="case-section-body">
        <p>
          This is a portfolio case study, not production SaaS. Some components originated from course projects and were consolidated into one career-facing narrative. The strongest signal is the evaluation and validation pattern, not product polish yet.
        </p>
      </div>
    </section>
  </main>
</BaseLayout>

<style>
  .case-page {
    padding-top: 60px;
    background: var(--bg);
    color: var(--text);
  }

  .case-hero {
    min-height: 82svh;
    padding: 8rem 2rem 5rem;
    border-bottom: 2px solid var(--border);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.5rem;
  }

  .case-back,
  .case-kicker,
  .case-section-label,
  .case-chip,
  .case-layer-index,
  .case-note,
  .case-diagnosis-card span {
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .case-back {
    width: fit-content;
    border: 1px solid var(--border);
    padding: 0.55rem 0.8rem;
    font-size: 0.75rem;
    background: var(--surface);
  }

  .case-back:hover {
    background: var(--border);
    color: var(--surface);
  }

  .case-kicker {
    color: var(--accent);
    font-size: 0.8rem;
    font-weight: 700;
  }

  .case-hero h1 {
    max-width: 1100px;
    font-family: var(--font-display);
    font-size: clamp(4rem, 11vw, 11rem);
    font-weight: 800;
    line-height: 0.86;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  .case-subtitle {
    max-width: 880px;
    font-family: var(--font-display);
    font-size: clamp(1.7rem, 4vw, 3.7rem);
    font-weight: 650;
    line-height: 1.02;
    letter-spacing: -0.02em;
    color: var(--accent);
  }

  .case-thesis {
    max-width: 760px;
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--text-muted);
  }

  .case-chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  }

  .case-chip {
    border: 1px solid var(--border);
    background: var(--surface);
    padding: 0.45rem 0.7rem;
    font-size: 0.72rem;
    font-weight: 700;
  }

  .case-section {
    display: grid;
    grid-template-columns: 220px 1fr;
    border-bottom: 2px solid var(--border);
  }

  .case-section-label {
    padding: 2rem;
    border-right: 2px solid var(--border);
    color: var(--accent);
    font-size: 0.78rem;
    font-weight: 700;
  }

  .case-section-body,
  .case-layer-stack,
  .case-architecture,
  .case-evidence-grid,
  .case-diagnosis-card,
  .case-failure-list {
    padding: 3rem 2rem;
  }

  .case-section-body h2,
  .case-layer h2,
  .case-evidence-card h2,
  .case-diagnosis-card h2 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 0.95;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .case-section-body p,
  .case-layer p,
  .case-evidence-card p,
  .case-diagnosis-card p {
    max-width: 760px;
    font-size: 1.1rem;
    line-height: 1.65;
    color: var(--text-muted);
  }

  .case-callout {
    margin-top: 1.5rem;
    padding: 1.25rem;
    border-left: 6px solid var(--accent);
    background: var(--surface);
    color: var(--text) !important;
    font-weight: 700;
  }

  .case-layer {
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--border);
  }

  .case-layer:first-child {
    padding-top: 0;
  }

  .case-layer:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .case-layer-index {
    color: var(--accent-2);
    font-weight: 700;
  }

  .case-proves {
    margin-top: 0.85rem;
    color: var(--text) !important;
    font-weight: 700;
  }

  .case-layer ul,
  .case-proof-list {
    margin-top: 1.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    list-style: none;
  }

  .case-layer li,
  .case-proof-list li {
    border: 1px solid var(--border);
    background: var(--bg);
    padding: 0.5rem 0.75rem;
    font-family: var(--font-mono);
    font-size: 0.74rem;
  }

  .case-architecture {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
    align-items: center;
  }

  .case-architecture div {
    min-height: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--border);
    background: var(--surface);
    padding: 1rem;
    text-align: center;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 0.78rem;
    text-transform: uppercase;
  }

  .case-architecture span {
    display: none;
  }

  .case-evidence-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    gap: 1rem;
  }

  .case-evidence-card,
  .case-diagnosis-card {
    border: 2px solid var(--border);
    background: var(--surface);
    padding: 2rem;
  }

  .case-metric-table {
    width: 100%;
    margin-top: 1.5rem;
    border-collapse: collapse;
    font-family: var(--font-mono);
    font-size: 0.82rem;
  }

  .case-metric-table th,
  .case-metric-table td {
    border: 1px solid var(--border);
    padding: 0.75rem;
    text-align: left;
  }

  .case-metric-table th {
    background: var(--border);
    color: var(--surface);
    text-transform: uppercase;
  }

  .case-note {
    margin-top: 1.25rem;
    font-size: 0.72rem !important;
    color: var(--text-muted);
  }

  .case-diagnosis-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .case-diagnosis-grid div {
    border-top: 4px solid var(--accent);
    padding-top: 0.8rem;
  }

  .case-diagnosis-card span {
    display: block;
    color: var(--accent);
    font-size: 0.72rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .case-diagnosis-card p {
    font-size: 0.98rem;
  }

  .case-failure-list {
    list-style: none;
    columns: 2;
    column-gap: 2rem;
  }

  .case-failure-list li {
    break-inside: avoid;
    border-bottom: 1px dotted var(--border);
    padding: 0.85rem 0;
    font-size: 1rem;
    font-weight: 600;
  }

  .case-limits {
    background: var(--border);
    color: var(--surface);
  }

  .case-limits .case-section-label {
    border-right-color: var(--surface);
  }

  .case-limits p {
    color: var(--surface);
  }

  @media (max-width: 1024px) {
    .case-section {
      grid-template-columns: 1fr;
    }

    .case-section-label {
      border-right: none;
      border-bottom: 2px solid var(--border);
      padding: 1rem 2rem;
    }

    .case-architecture,
    .case-evidence-grid,
    .case-diagnosis-grid {
      grid-template-columns: 1fr;
    }

    .case-failure-list {
      columns: 1;
    }
  }

  @media (max-width: 640px) {
    .case-hero {
      padding: 6rem 1rem 3rem;
    }

    .case-section-body,
    .case-layer-stack,
    .case-architecture,
    .case-evidence-grid,
    .case-diagnosis-card,
    .case-failure-list {
      padding: 2rem 1rem;
    }

    .case-layer {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }
</style>
```

- [ ] **Step 3: Run a targeted content check**

Run:

```powershell
rg -n "HW3|HW4|Hermes|RAGAs-style|production SaaS|Verifiable AI Workflow System" 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro\src\pages\projects\verifiable-ai-workflow-system.astro'
```

Expected:

- `Verifiable AI Workflow System` appears.
- `production SaaS` appears only in the honest-limits section.
- `HW3`, `HW4`, `Hermes`, and `RAGAs-style` do not appear.

- [ ] **Step 4: Run build**

Run:

```powershell
npm run build
```

Workdir:

```text
C:\Users\User\Desktop\專案庫\Active\portfolio-astro
```

Expected: Astro build succeeds and includes `/projects/verifiable-ai-workflow-system/index.html`.

- [ ] **Step 5: Commit project page**

Run:

```powershell
git -C 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro' add 'src/pages/projects/verifiable-ai-workflow-system.astro'
git -C 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro' commit -m "feat: add verifiable ai workflow case study"
```

Expected: commit contains only the new project page.

---

### Task 3: Update Homepage Positioning And Featured Projects

**Files:**
- Modify: `C:\Users\User\Desktop\專案庫\Active\portfolio-astro\src\pages\index.astro`

- [ ] **Step 1: Replace the projects array**

In `src/pages/index.astro`, replace the current `const projects = [...]` with:

```astro
const projects = [
  {
    num: '001',
    name: 'Verifiable AI Workflow System',
    desc: 'Portfolio case study on making AI workflows testable, traceable, diagnosable, and improvable through evaluated RAG, agent memory benchmarks, and deterministic validation harnesses.',
    tags: ['RAG', 'Agent Memory', 'Evaluation', 'Testing'],
    link: `${base}/projects/verifiable-ai-workflow-system`,
  },
  {
    num: '002',
    name: 'Market Sentiment X TAIEX',
    desc: 'End-to-end NLP data pipeline processing 20,000+ PTT Stock Board posts, with SQLite ingestion, BERT fine-tuning, class-imbalance handling, and evaluation notes around noisy financial text.',
    tags: ['PyTorch', 'BERT', 'Data Engineering'],
    link: 'https://github.com/RoyWG925/ptt-sentiment-stock-analysis',
  },
  {
    num: '003',
    name: 'NUCLEUS.IO',
    desc: 'Flyable 3D universe built with Three.js. A focused creative-tech signal showing interactive interface taste, WebGL implementation, custom GLSL shaders, procedural audio, and multi-layer post-processing.',
    tags: ['Three.js', 'WebGL', 'GLSL', 'Vite', 'Audio'],
    link: 'https://nucleus-io.vercel.app',
  },
  {
    num: '004',
    name: 'Archive / Experiments',
    desc: 'Earlier prototypes and experiments, including realtime product sketches, small games, and creative coding studies. Kept as supporting range, not the main career signal.',
    tags: ['React', 'Firebase', 'Canvas', 'Games'],
    link: 'https://github.com/RoyWG925',
  },
];
```

- [ ] **Step 2: Update hero focus labels**

Replace the three focus values:

```astro
<span class="info-value">AI Application Engineering</span>
<span class="info-value">Full-Stack Development</span>
<span class="info-value">Interactive / Visual Tech</span>
```

with:

```astro
<span class="info-value">AI Application Engineering</span>
<span class="info-value">RAG / Agent Workflows</span>
<span class="info-value">Evaluation / Reliability</span>
```

- [ ] **Step 3: Update hero role block**

Replace:

```astro
<div class="hero-role">AI Application Engineer</div>
<div class="hero-role" style="color: var(--border);">+</div>
<div class="hero-role" style="color: var(--accent-2);">Creative <span style="white-space: nowrap;">TECHN<span id="portal-target-blue" class="portal-text portal-blue" style="text-transform: uppercase; transform: scale(1.3); margin: 0 4px;">o</span>LOGIST</span></div>
```

with:

```astro
<div class="hero-role">AI Application Engineer</div>
<div class="hero-role" style="color: var(--border);">+</div>
<div class="hero-role" style="color: var(--accent-2);">Evaluation <span style="white-space: nowrap;">W<span id="portal-target-blue" class="portal-text portal-blue" style="text-transform: uppercase; transform: scale(1.3); margin: 0 4px;">o</span>RKFLOWS</span></div>
```

This keeps the portal target element used by the physics script.

- [ ] **Step 4: Update hero description**

Replace the current `hero-desc` paragraph text with:

```astro
I build AI workflows that are testable, traceable, and diagnosable, with hands-on work in evaluated RAG, agent memory, NLP/data pipelines, and full-stack product interfaces.
```

- [ ] **Step 5: Update ticker labels**

Replace the repeated ticker item set:

```astro
<span>RAG PIPELINES</span> //
<span>CODE EVALUATION</span> //
<span>THREE.JS</span> //
<span>BERT FINE-TUNING</span> //
<span>TESTING</span> //
<span>REACT</span> //
<span>SYSTEM DESIGN</span> //
```

with:

```astro
<span>RAG EVALUATION</span> //
<span>AGENT MEMORY</span> //
<span>FAILURE DIAGNOSIS</span> //
<span>BERT FINE-TUNING</span> //
<span>FULL-STACK AI</span> //
<span>TRACE LOGS</span> //
<span>HUMAN-AI INTERFACES</span> //
```

Apply the replacement to both repeated ticker groups.

- [ ] **Step 6: Update About copy**

Replace this sentence:

```astro
I work the full vertical — from fine-tuning BERT on 20K+ posts to shipping React/Firebase prototypes and WebGL experiences. Currently focused on <strong>AI application architecture</strong>: evaluated code/LLM workflows, NLP/data pipelines, and product-facing interfaces.
```

with:

```astro
I work across the AI application stack — from NLP/data pipelines and retrieval systems to product-facing interfaces. Currently focused on <strong>AI workflow evaluation</strong>: RAG grounding, agent memory, trace logs, deterministic validation, and failure diagnosis.
```

Replace this sentence:

```astro
My edge: I don't silo. I use agent-assisted workflows to move faster, then ground the output with tests, failure analysis, and practical product constraints.
```

with:

```astro
My edge: I combine Learning Sciences and engineering practice. I care not only whether an AI system answers, but whether its workflow can be inspected, tested, and trusted by real users.
```

- [ ] **Step 7: Update manifest AI / LLM and Quality labels**

Replace:

```astro
<span class="manifest-val">LLM API Integration, RAG Pipelines (learning), Prompt Engineering, HuggingFace Embeddings</span>
```

with:

```astro
<span class="manifest-val">RAG Pipelines, Agent Memory, LLM API Integration, Retrieval Evaluation, HuggingFace Embeddings</span>
```

Replace:

```astro
<span class="manifest-val">Unit Testing, Debugging, Failure Analysis, AI-Generated Code Review</span>
```

with:

```astro
<span class="manifest-val">Unit Testing, Deterministic Validation, Trace Logs, Failure Analysis, AI-Generated Code Review</span>
```

- [ ] **Step 8: Run content checks**

Run:

```powershell
rg -n "GigaJoule|T-Minus|Chewsy|Verifiable AI Workflow System|Creative Technologist|Evaluation WORKFLOWS" 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro\src\pages\index.astro'
```

Expected:

- `Verifiable AI Workflow System` appears.
- `Evaluation WORKFLOWS` appears.
- `GigaJoule`, `T-Minus`, and `Chewsy` do not appear on the homepage.
- `Creative Technologist` does not appear as a primary hero role.

- [ ] **Step 9: Run build**

Run:

```powershell
npm run build
```

Workdir:

```text
C:\Users\User\Desktop\專案庫\Active\portfolio-astro
```

Expected: build succeeds.

- [ ] **Step 10: Commit homepage update**

Run:

```powershell
git -C 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro' add 'src/pages/index.astro'
git -C 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro' commit -m "feat: feature verifiable ai workflow project"
```

Expected: commit contains only `src/pages/index.astro`.

---

### Task 4: Browser QA

**Files:**
- Read: local dev server output
- Inspect: homepage and project page in in-app browser

- [ ] **Step 1: Start local dev server**

Run:

```powershell
npm run dev -- --host 127.0.0.1
```

Workdir:

```text
C:\Users\User\Desktop\專案庫\Active\portfolio-astro
```

Expected: Astro dev server starts, usually at `http://127.0.0.1:4321/portfolio-astro/` because `astro.config.mjs` sets a base path.

- [ ] **Step 2: Open homepage in in-app browser**

Open:

```text
http://127.0.0.1:4321/portfolio-astro/
```

Check:

- Hero text fits on desktop.
- Focus chips show RAG / Agent Workflows and Evaluation / Reliability.
- First project row is Verifiable AI Workflow System.
- Clicking first project opens the project page.

- [ ] **Step 3: Open project page in in-app browser**

Open:

```text
http://127.0.0.1:4321/portfolio-astro/projects/verifiable-ai-workflow-system/
```

Check:

- Title and subtitle fit.
- Architecture block does not overflow.
- Metric table fits desktop width.
- Failure diagnosis card reads clearly.
- Honest limits are visible and not buried.

- [ ] **Step 4: Check mobile width**

Use browser resize or responsive mode around 390px width.

Check:

- Case hero title wraps cleanly.
- Project cards and tables do not overflow horizontally.
- Architecture blocks stack vertically.
- Fixed HUD or nav controls do not cover core text.

- [ ] **Step 5: Stop dev server**

Use Ctrl+C in the terminal session running Astro.

Expected: server exits cleanly.

---

### Task 5: Final Git Review

**Files:**
- Inspect: git diff and status

- [ ] **Step 1: Review final diff**

Run:

```powershell
git -C 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro' diff --stat
git -C 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro' diff -- 'src/pages/index.astro' 'src/pages/projects/verifiable-ai-workflow-system.astro'
```

Expected:

- Only planned homepage and project page changes are present in the implementation commits.
- Existing unrelated dirty files remain untouched unless the user explicitly asks to include them.

- [ ] **Step 2: Confirm status**

Run:

```powershell
git -C 'C:\Users\User\Desktop\專案庫\Active\portfolio-astro' status --short
```

Expected:

- Implementation files are clean if committed.
- Pre-existing unrelated dirty files may remain:

```text
 M README.md
 M public/Roy_Wang_Resume.pdf
?? dev-server.log
```

- [ ] **Step 3: Report to user**

Summarize:

- project page added,
- homepage first project updated,
- build result,
- browser QA result,
- any files intentionally left untouched.


# Verifiable AI Workflow Portfolio Design

Date: 2026-06-16

## Goal

Make `Verifiable AI Workflow System` the first portfolio proof point for Roy's current career positioning:

> AI Application Engineer focused on RAG, agent workflows, evaluation, and full-stack AI products.

The page should help a stranger understand in about 30 seconds that Roy is not presenting another AI demo. He is presenting a case study about making AI workflows testable, traceable, diagnosable, and improvable.

## Current Problem

The current portfolio homepage still frames Roy broadly as:

- AI Application Engineer
- Creative Technologist
- Full-stack / interactive product builder

That is not wrong, but the first impression is too diffuse for the current job-search goal. The strongest career evidence is now the AI workflow reliability line built from:

1. evaluated RAG,
2. agent memory retrieval benchmarking,
3. deterministic validation harnesses for AI-generated outputs.

The new portfolio should make that line visible before the creative-tech side projects.

## Non-Goals

- Do not redesign the entire visual system.
- Do not turn the page into a course-work report.
- Do not present the project as production SaaS.
- Do not make unsupported claims about production deployment, users, or official grading.
- Do not foreground `HW3`, `HW4`, or `Hermes` as the main story.
- Do not add a complex CMS, blog system, database, or search feature.

## Primary Page

Add a portfolio project page for:

```text
Verifiable AI Workflow System
```

Recommended route:

```text
/projects/verifiable-ai-workflow-system
```

Recommended source file:

```text
src/pages/projects/verifiable-ai-workflow-system.astro
```

## Page Narrative

Use this public framing:

> A portfolio case study on making AI workflows testable, traceable, diagnosable, and improvable.

Avoid this framing near the top:

> I combined HW3, HW4, and my final project.

Course-project origins can appear only in the honest-limits/background section.

## Page Structure

### 1. Hero

Title:

```text
Verifiable AI Workflow System
```

Subtitle:

```text
Evaluated RAG, agent memory, and deterministic validation for trustworthy AI workflows.
```

Short thesis:

```text
Most AI demos are easy to make impressive once. The harder question is whether the workflow can be tested, traced, diagnosed, and improved when it fails.
```

Proof chips:

- Evaluated RAG
- Agent Memory Benchmark
- Deterministic Validation
- Failure Diagnosis

### 2. Problem

Explain that AI applications often fail silently:

- RAG can retrieve plausible but wrong context.
- Agent memory can inject irrelevant or low-priority memories.
- Generated outputs can look valid while violating hidden constraints.
- Models can answer confidently when evidence is weak.

The section should end with the practical question:

```text
Can we see what happened, measure what failed, and improve the workflow?
```

### 3. What I Built

Organize into three layers:

1. Evaluated RAG System
2. Agent Memory Retrieval Benchmark
3. Deterministic Validation Harness

Each layer should have:

- what it does,
- what it proves,
- 3 to 6 technical details,
- one evidence point.

### 4. Architecture

Use one simple visual block, not a complicated system map:

```text
User Query
  -> RAG Retrieval
  -> Trace Logs / Citations
  -> Memory Retrieval
  -> Token-Budget Injection
  -> AI Output
  -> Deterministic Validation
  -> Failure Labels
```

This can be implemented as a styled HTML diagram first. Mermaid or image export can come later if needed.

### 5. Evaluation Evidence

Include the HW4 memory retrieval benchmark:

| Mode | Recall@5 | MRR | nDCG@5 |
|---|---:|---:|---:|
| BM25 | 0.810 | 0.810 | 0.802 |
| Hybrid | 1.000 | 0.905 | 0.921 |

Add interpretation:

```text
Pure BM25 missed semantic and cross-language memory queries. Hybrid retrieval improved top-5 coverage while preserving the BM25 baseline path.
```

Include final-project verification evidence, but phrase it carefully:

- local tests: 186 passed, 1 skipped
- repo checks: 28/28
- Text2SQL dev-set: 21/21
- smoke logs exist for submitted skills

Do not overstate this as production reliability.

### 6. Failure Diagnosis Card

Add one highlighted example:

Title:

```text
Failure Case: Memory Retrieved But Not Injected
```

Content:

- Symptom: the relevant memory exists but is not included in the final context.
- Diagnosis: retrieval and injection are separate failure surfaces.
- Check: token-budget injection recall and budget-truncated gold IDs.
- Lesson: agent memory should be evaluated under context-budget constraints, not only retrieval ranking.

### 7. What This Proves

List capabilities:

- build RAG and agent-memory workflows,
- design retrieval benchmarks,
- inspect intermediate traces,
- classify failure modes,
- validate AI-generated outputs deterministically,
- turn vague AI behavior into measurable system behavior.

Primary takeaway:

```text
AI output is not enough. The workflow needs evidence, traces, tests, and failure diagnosis.
```

### 8. Honest Limits

State plainly:

- This is a portfolio case study, not production SaaS.
- Some components originated from course projects and were consolidated into one career-facing case study.
- The strongest signal is the evaluation and validation pattern, not product polish yet.
- Some runtime logs live outside the copied repo.

## Homepage Changes

Update `src/pages/index.astro` after the project page exists.

### Hero

Current role can be softened from:

```text
AI Application Engineer + Creative Technologist
```

to:

```text
AI Application Engineer
RAG, Agent Workflows, Evaluation
```

Creative technology can remain visible as a secondary signal, not the first identity line.

### Description

Replace the broad sentence with:

```text
I build AI workflows that are testable, traceable, and diagnosable, with hands-on work in evaluated RAG, agent memory, NLP/data pipelines, and full-stack product interfaces.
```

### Featured Project Order

Use this order:

1. Verifiable AI Workflow System
2. Market Sentiment X TAIEX
3. One creative-tech project
4. Archive / experiments entry

Chewsy, NUCLEUS.IO, T-Minus, and small game prototypes should not all compete as equal primary projects.

## Evidence Sources

Use these local sources while implementing:

- `C:\Users\User\Desktop\專案庫\Active\ai-agent-rag-memory-case-study\deliverables\case-sheet.md`
- `C:\Users\User\Desktop\專案庫\Active\ai-agent-rag-memory-case-study\deliverables\case-study-final-project.md`
- `C:\Users\User\Desktop\專案庫\Active\ai-agent-rag-memory-case-study\hw4-agent-memory\REPORT.md`
- `C:\Users\User\Desktop\專案庫\Active\final-project-jielle2453\report.md`
- `C:\Users\User\Desktop\專案庫\Active\final-project-jielle2453\OPEN_TRACK.md`

## Implementation Scope

Minimal first pass:

1. Add the project page.
2. Add the project to the homepage as item 001.
3. Adjust hero copy and focus chips.
4. Keep styling consistent with the existing industrial/brutalist visual system.
5. Do not add new dependencies.

## Verification

After implementation:

1. Run the Astro build.
2. Start the local dev server.
3. Open the homepage and project page in the in-app browser.
4. Check desktop and mobile widths for text overflow.
5. Confirm links work.
6. Confirm the page does not imply official production use or unsupported grading evidence.

## Open Decisions

Before implementation, confirm:

1. Which creative-tech project should remain as the single featured side signal?
2. Should the project page link to the local case-study repo now, or wait until the GitHub repo is cleaned and public?
3. Should the homepage keep the interactive physics hero, or should it be reduced later in a separate pass?


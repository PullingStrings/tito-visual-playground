# Tito — Visual Playground

A code-based visual playground for the portfolio redesign. This is intentionally not production portfolio architecture yet; it is where the visual system gets tested against real work, real crops, responsive behaviour and motion.

## Locked direction

- **Digital Editorial**
- North star: **Make the work clear. Make Tito weird.**
- Rule: **Editorial by default. Expressive by interruption.**
- System type: Inter
- Primary display: Antonio
- Rare expressive display: League Gothic
- Base: warm paper + near-black ink
- Accent: Signal Orange
- Project language: oversized project numbers sit behind real media; expressive interruptions stay selective

## Step 4 — Image treatment

Decision:

- **B / Editorial Crop — primary treatment**
- **A / Document — restrained fallback when context matters**
- **C / Detail — rejected**
- Controlled transparency lets the oversized orange project number softly ghost through pale interface areas without washing out the screenshot.

Rule: **Show the work truthfully. Crop it editorially.**

## Step 5 — Metadata / content hierarchy

Current hypothesis:

1. **Role / Client / Agency / Period** establish context quickly.
2. **Focus / Tech** frame the territory without becoming the headline.
3. **Contribution** proves seniority and should carry the most meaning.

Rule under test: **Context first. Tech second. Contribution wins.**

## Run locally

```bash
npm install
npm run dev
```

## Files

- `src/main.jsx` — experiments and content
- `src/styles.css` — visual system, image treatment and metadata experiments
- `src/assets/samsung/` — real Samsung screenshots used in the playground

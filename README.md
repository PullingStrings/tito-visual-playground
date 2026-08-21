# Tito — Visual Playground

A code-based replacement for the Figma visual playground used during the portfolio redesign.

## Current design decisions

- Direction: **Digital Editorial**
- North star: **Make the work clear. Make Tito weird.**
- Rule: **Editorial by default. Expressive by interruption.**
- System type: Inter
- Display type: Antonio
- Rare expressive type: League Gothic
- Base: warm paper + near-black ink
- Accent: Signal Orange
- Project language: oversized project numbers sit behind real media; expressive interruptions are selective, not constant

## Current experiment — Step 4: Image Treatment

The same Samsung Contact Us screenshot is presented three ways:

1. **Document** — preserve the complete UI and context.
2. **Editorial Crop** — crop toward the part of the journey that matters.
3. **Detail** — push the crop until UI starts behaving as graphic material.

The aim is to decide how real client work enters the portfolio without redesigning or misrepresenting the original work.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Where to work

- `src/main.jsx` — experiments and content
- `src/styles.css` — visual system and image treatment rules
- `src/assets/samsung/` — real Samsung screenshots used in the playground

This is intentionally a playground, not production portfolio architecture.

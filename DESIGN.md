---
name: "panorama_biblico"
colors:
  background: "--color-background"
  surface: "--color-surface"
  text: "--color-text-primary"
  primary: "--color-text-primary"
---

# Design System: panorama_biblico

## Visual Theme & Atmosphere

- [observed] Existing first-party theme, shared component, and page sources define the current visual baseline.
- [inferred confidence=medium] Preserve the observed token vocabulary, density, and component conventions when adding new surfaces.

## Color Palette & Roles

- [observed] `--color-text-primary: #1f2937`
- [observed] `--color-text-secondary: #6b7280`
- [observed] `--color-background: #ffffff`
- [observed] `--color-background-light: #f9fafb`
- [observed] `--color-primary: #3b82f6`
- [observed] `--color-primary-hover: #2563eb`
- [observed] `--color-surface: var(--color-background)`
- [observed] `#1f2937`

## Typography Rules

- [inferred confidence=low] Typography hierarchy is not explicit; infer only from representative rendered surfaces.
- [inferred confidence=medium] Reuse the existing font stack and derive hierarchy from shared components before introducing new sizes.

## Component Stylings

- [inferred confidence=low] No shared component path was detected; treat component styling as an unresolved gap.
- [inferred confidence=medium] Prefer existing primitives and variants over page-local replacements.

## Layout Principles

- [inferred confidence=low] No named spacing tokens were detected; confirm the base spacing rhythm.
- [inferred confidence=medium] Match the density and alignment rhythm of representative pages.

## Motion & Interaction

- [observed] `--transition-fast: 150ms ease`
- [inferred confidence=medium] Preserve visible hover, focus, pressed, loading, and reduced-motion behavior from existing primitives.

## Accessibility

- [inferred confidence=medium] Preserve semantic controls, keyboard focus visibility, and non-color state cues present in existing primitives.
- [inferred confidence=low] Contrast, touch targets, text scaling, and reduced-motion behavior require runtime verification.

## Source Evidence & Confidence

- [observed] path: `src/styles.css`
  sha256: `25251b139841b49ab3e6cfb043702a8b6813975592e3be73202897d66bbcaeda`
  confidence: high

## Known Gaps & Exceptions

- [inferred confidence=medium] Semantic intent inferred from implementation must be reviewed before this draft becomes project authority.
- [observed] Shape token `--color-background: #ffffff`
- [observed] Shape token `--color-background-light: #f9fafb`
- [observed] Shape token `--border-radius: 0.5rem`

# What's New in RADCounter 5.1.2

## New: sort the Clario Compare "study types that differ" list
The "study types that differ" section now has a sort toggle:

- **By type** — grouped by modality, then study type, then patient class, then drafted status.
- **By difference (largest first)** — the biggest per-study divergences on top.

## Improved: Clario Compare is now color-coded
In the Clario Compare view, the columns are easier to read at a glance:

- **MosaicTools** numbers are **blue** (the same blue as the current-study readout).
- **Clario** numbers are **white**.
- The **delta** is **green when positive** and **light red when negative**.

## New: sort the Draft Impact view
The Draft Impact (drafted vs not-drafted read times) view now has a sort toggle:

- **By type** — modality, then study type.
- **By difference (largest first)** — sorted by the *signed* time difference, so the study types where drafting saved the most time land at the top and the ones where it was slower land at the bottom.

## Fix: Draft Impact patient-class breakdown is now apples-to-apples
The per-study-type breakdown used to include an "Other" row that lumped together unresolved ("Unknown") classes with real ones like Pre-Admit and Observation — which wasn't a meaningful comparison. It now shows **only Emergency, Inpatient, and Outpatient** locations. The study-type rollup still reflects every study of that type.

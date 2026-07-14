# What's New in v5.1.3

## Bug fixes

- **Window position & size are saved again.** The main RADCounter window now remembers exactly where you put it and how big it was, and restores that on the next launch (including after an auto-update or rebuild). Previously it could reopen in the wrong spot or the wrong size.
- **Three TBWU lookup corrections.** A few procedures were fuzzy-matching to the wrong entry and getting the wrong work unit. Now pinned to the correct value:
  - *CT Chest Angio WWO + CT Abdomen/Pelvis W contrast* → 2.658 (was reading 3.09).
  - *US Lower Extremity Veins Limited — Left* and *— Right* → 0.325 (was reading 0.676).

## Clario Compare tab

- **Compensation breakdown is now four lines:** change due to sign time, plus the TBWU-value change split across *drafted*, *undrafted*, and *all* studies — so you can see the drafting cut separately from the timing effect.
- **"Study types that differ" is split into two sections** — drafted-only and not-drafted-only — so the drafting cut doesn't get mixed in with genuine base disagreements.
- **New "No significant change (RC ≈ Clario)" summary** listing each matching study type with its count broken down by drafted vs not drafted, sorted by modality.
- **Average Δ per study** now shown in its own column on the far right, color-matched to the total delta.
- **Sort by type or by difference**, a **"Deltas only (for sharing)"** mode that hides raw values, and a **"Copy deltas"** button.

## Recent Studies

- **Studies with a neuro compensation multiplier show their Clario number in yellow**, with a short tooltip explaining that RC adds the multiplier on top of Clario's base work unit — so an expected difference no longer looks like an error.

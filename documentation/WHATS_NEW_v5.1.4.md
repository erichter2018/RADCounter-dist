# What's New in v5.1.4

## New: use Clario's official numbers as your primary basis (optional)

A new setting in **Settings → Clario Work-Unit Comparison** — **"Preferably use more accurate Clario data"** (default **off**).

- **When off, nothing changes** — RadCounter computes your TBWU totals, compensation, and projections exactly as before.
- **When on,** Clario's official per-study work unit becomes the primary basis for your TBWU totals, compensation, and projections. RadCounter's own computed value is used automatically wherever Clario doesn't have a number yet, so nothing is ever left blank. Neuro compensation multipliers are re-applied on top of Clario's base.
- **Recent Studies** then shows a **single self-replacing value** per study: RadCounter's estimate in **blue**, replaced in place by Clario's authoritative number in **white** (yellow for multiplier studies) once Clario finalizes it. The read duration moves directly under the number.
- **Hover any value** for a breakdown: RadCounter's own number and Clario's number, each with its work-unit value and a note on where it comes from — plus, for multiplier studies, a reminder that the multiplier is applied here but not on Clario's own screen.

## Clario Compare tab

- The comparison columns are now labeled **RADCounter** (previously mislabeled "MosaicTools").
- Each per-type row in **"Study types that differ"** now shows the **percent change** in parentheses next to the delta.

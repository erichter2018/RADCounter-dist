# What's New in v5.1.5

## New: shift target & glide path

Click the **"est shift total"** value on the main window to set a target — either a **preferred average per hour** or a **total for the shift** (the two convert into each other as you type).

- Once set, the **avg/hour** and **est shift total** readouts color themselves: **green** when you're on target, **red** when behind (using MosaicTools' pace colors).
- Turn on **glide path** and the avg/hour readout adds **"need X/h"** — the average you'd need for the rest of the shift to hit your target. It only appears when you actually have to speed up, and disappears once you're cruising to the goal.

## New: sharpness meter (fatigue vs your own norm)

An optional VU-style meter under the stats panel shows how fast you're reading **compared to your own history for the same study types at the same hour of night** — so it isolates real fatigue from a slow list or a heavy case mix, and from the normal small-hours dip.

- Segments climb green → amber → red as you slow down, with a floating peak-hold tick, plus a gain-style number (e.g. `1.08×`) to its right.
- `1.00×` means you're reading at your usual speed for this work at this hour. Hover for the plain-language read.
- Toggle in **Settings → Display → Sharpness meter** (on by default).

## New: end-of-shift Clario reconciliation

When you end a shift with the Clario reader connected, RADCounter now reconciles your shift against Clario's signed-study ledger **both ways**, in clear dialogs:

- **Studies not matched to Clario** — anything recorded this shift that never matched Clario's ledger is listed with its age. Check the ones to remove (opened-but-never-signed), or choose **Wait for Clario** to keep the shift open a little longer. Nothing is removed unless you check it.
- **Studies missed by RADCounter** — studies signed in Clario that RC never captured can be added back to the shift with one click, using Clario's own work unit and signed time.

## New: TBWU/Clario-aware payroll reconcile

The **Tools → payroll reconcile** now understands the employer's TBWU columns. It reads the authoritative per-study work unit from the payroll file, cross-checks it against RADCounter's Clario numbers, and reports the differences — filling in or correcting Clario work units and patient classes (including the Pre-Admit → Emergency rule) as it reconciles.

## Fixes & changes

- **All statistics now group by sign time, always.** Every per-hour, per-period, and pace calculation buckets a study by when it was **signed**, not when it was opened — consistent across the whole app and correct for studies recovered from Clario.
- **Shift end time snaps to the nearest hour.** A shift that nominally ends on a clock hour now lands exactly on it no matter whether you started a few minutes early or late.
- The Clario Compare tab compares payroll's **base** work unit correctly for multiplier (neuro) studies, so those no longer look mismatched.
- The confusing Yes/No prompt when ending a shift with unmatched studies is gone, replaced by the clear reconciliation dialogs above.

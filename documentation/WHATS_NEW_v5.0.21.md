# What's New in RADCounter 5.0.21

## Fix: finished studies land in Recent Studies immediately
When MosaicTools is connected, a study you just finished used to sit invisible for **3–5 seconds** before showing up in Recent Studies — the app was waiting for MosaicTools to confirm the signature before drawing anything.

- **The study now appears the instant it's finished**, as a greyed *pending* row, and fills in to a normal row the moment the signature confirms. No more staring at an empty list after you've moved on.
- **Nothing is counted early** — the pending row is excluded from every RVU/stat total until it's confirmed. An unsigned/discarded study is removed from the list and never counted.

## Fix: signing a study with no next case no longer leaves it stuck
If you signed a study and **didn't open a next case**, its accession never changed on screen — so the app never noticed it was done. The study stayed showing as the "current study" indefinitely and never moved into Recent Studies.

- **A signed study now counts and moves to Recent Studies right away**, even when it stays on screen with nothing opened after it, and the "current study" readout clears.
- **Reopening a signed study** (to review it) no longer re-shows it as active or double-counts it, and this all survives an app restart mid-study.
- **Signed-then-discarded is corrected automatically** — if you sign a study and then discard it, the count is removed (latest action wins).

## New: Study Mix breakdown on the main counters (optional, off by default)
Click any main-screen counter's label to cycle its secondary line through **compensation ($) → percentile (%) → study mix → hidden**. The new **study mix** shows that counter's breakdown by modality (e.g. `4 CT, 2 MR, 1 XR`).

- **Turn it on per counter** in Settings under the new **Mix** column (Total, Avg, Last Hour, Last Full Hour, Projected, Projected Month, Projected Shift, RVU/Study). Everything defaults off, so nothing changes until you enable it.

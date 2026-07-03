# What's New in RADCounter 5.0.20

## Fix: payroll reconcile no longer inflates hours worked
Running a payroll reconcile could create extra shifts that distorted **hours worked** and everything derived from it. Two cases: a reconciled shift that overlapped a night you'd already tracked live counted that night twice, and studies spread across several days could collapse into one impossible multi-day "shift" (e.g. a 37-hour shift).

- **Orphan studies now attach to any shift they overlap** — previously they only merged when the whole cluster fit *inside* an existing shift, so a cluster that started earlier or ran later spawned a second, overlapping shift for the same night.
- **Clusters are capped at 16 hours** — a run of closely-spaced studies across multiple days can no longer merge into a single multi-day shift.

## Month income projections track the current rate schedule
Projected monthly and annual income estimate the remaining month from your recent productivity. That estimate priced future work at the rates from the trailing three months, so right after the July 1 rate change it lagged behind the new, higher schedule.

- **The remaining month is now projected at today's rates** — historical productivity is re-priced at the current rate schedule, so the estimate reflects the new numbers from day one instead of catching up as the month fills in.
- **Earned income and per-shift totals are unchanged** — each completed study is still priced at the rate that was in effect when it was read.

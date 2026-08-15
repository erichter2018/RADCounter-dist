# What's New in v5.2.2

This release comes out of a hand audit of the July payroll sheet against the database — every study
matched by accession, and the app's own pricing code run over the results. Three things were wrong, and
the payroll reconciler could not have found any of them on its own.

## Fixed — stroke CTAs were under-credited by 30%

**Code-stroke head/neck CTAs were being valued at their plain rate instead of the neuro rate.**

RADCounter carries a list of neuro studies that earn a multiplier — head/neck CTA, brain perfusion, and
similar. The pricing table stores a *separate* row for the stroke version of two of those procedures, and
the stroke rows were not on the list. So `CT HEAD NECK ANGIOGRAPHY WITH IV CONTRAST` correctly earned
×1.3, while `CT HEAD NECK ANGIOGRAPHY WITH IV CONTRAST STROKE` — the same study, read under a code stroke —
quietly earned ×1.0.

A third study was lost a different way: it arrived under Clario's spelling,
`CT ANGIO HEAD NECK W OR W/WO CONTRAST`, which matched no pricing row at all and so lost its multiplier
outright.

Measured against the payroll's own figures, that came to **$412.75 in July and $192.19 in June** —
roughly $200–400 a month, on exactly the studies the multiplier exists to reward. After the fix, July's
work-unit gap against payroll narrows from 11.83 to 4.29, and the dollar gap from $638 to $225.

The remaining $225 is data, not pricing: studies read outside a tracked shift, and a handful of
duplicate captures. Payroll reconciliation clears those.

## Fixed — payroll audit lost the last hour of every month, and would have deleted it

**The audit's date range was read as your local calendar month, but payroll is reckoned in Central time.**

The last Central hour of the month — 11 p.m. on the 31st, which is 12 a.m. on the 1st where you are —
fell outside the window. On the July sheet that was 28 studies. It dropped out of *both* sides at once,
so the missing/extra counts stayed correct and nothing looked wrong: 3,779 sheet rows were reported as
3,751, and 3,768 database rows as 3,740.

It would not have stayed harmless. The date range fills itself in from the filename, so next month's
audit would have covered August 1–31 — and those 28 July-pay studies sit inside that window while being
absent from the August sheet. They would have been classified "extra in the database" and **deleted**:
$1,258.95 of real, already-paid work, at every month boundary.

The audit now reads its dates as the Central pay period, matching the sheet. It converts using the
daylight-saving rules for the date, so it stays correct across the spring and autumn changes. The report
header now says so explicitly.

## Fixed — the audit report called RVU numbers "TBWU"

The comparison near the top of the payroll audit report reads the sheet's wRVU column and the database's
RVU column, but since April it had been labelling both as TBWU. On the July sheet it printed
"Excel TBWU: 3605.6" against "Database TBWU: 3600.4" — a reassuring gap of 5, while the actual work-unit
difference over the same studies was more than twice that and appeared nowhere. Those two lines are now
labelled as RVU. The real work-unit comparison is the Clario/TBWU block below them.

## Worth knowing — holiday pay is not in the estimate

RADCounter's compensation figures are productivity pay: work units × the hourly rate. They do not include
the holiday premium, because the app has no concept of one.

July had one. Every study signed between 10:26 p.m. on the 3rd and 5:58 a.m. on the 5th (Central) earned
a flat **$14 per work unit on top** of the normal rate — 429 studies, **$5,059.23**, paid as
"Holiday_Extra$" on the payroll summary and not included in the per-study pay column that the app and the
reconciler both compare against.

So for July: the app's estimate lands on $175,523, the payroll's regular line is $175,748, and what you
were actually paid is **$180,807**. The estimate is not broken — it is measuring productivity pay, which
is a smaller number than your cheque on any month containing a holiday.

Only one holiday has been observed so far, so the rule behind the window and the rate is not yet known
well enough to build in. Rather than guess it and be wrong in a new way, it is left out until there are
more sheets to check against. June had no premium at all.

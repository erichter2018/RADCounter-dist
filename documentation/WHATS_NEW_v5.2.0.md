# What's New in v5.2.0

A large release. Alongside two new features, this is the first build carrying twelve segments of a
whole-codebase audit — most of it in the parts you never see until they fail: backups, restore, the
settings file, and the payroll reconcile.

## New

**Set your shift target in dollars.** The shift target dialog now offers a financial goal alongside the
work-unit one — either `$ / hour` or `$ total for shift`. The readout stays in TBWU/hour and the glide
path still says "need X/h" in work units, because that is what you can actually act on mid-shift. The
conversion accounts for the fact that hours are not worth the same: a 23:00–08:00 night runs \$47.60 at
11pm, \$56.10 through 2–5am and \$34.00 at 8am, so the rate you still need climbs as the cheap hours
arrive.

**RADCounter now repairs itself if it loses its resources.** If `rvu_rules.yaml` or `tbwu_rules.db` goes
missing or is damaged, the app re-downloads it at startup instead of silently counting every study as
zero. This is the cause behind the occasional "everything shows 0 TBWU" reports, and it no longer needs
a reinstall.

**Warning when RADCounter is run from inside a zip.** Double-clicking the app straight out of a
compressed folder only extracts the program file and leaves its resources behind — which is exactly how
the zero-TBWU problem starts. The app now recognises that and tells you to extract the zip properly.

## Fixes

**"Extra hours" in the monthly projection now affects your projected pay.** It was being counted as time
already worked rather than time still planned, which kept it out of the figure that gets multiplied by
your hourly rate — so the setting moved two labels and not one dollar.

**The "you may be slowing down" warning now clears itself** once your pace recovers, instead of staying
on screen for the rest of the shift until dismissed.

**Pace car no longer reports you hundreds of units behind at the start of an early shift.** Starting
between 22:30 and 22:59 produced a rollover that read as 23.8 hours elapsed, so the comparison pulled in
the whole of the previous shift.

**Opening-minute projections are sane.** One study a minute into a shift used to project thousands of
work units and tens of thousands of dollars.

**Pace comparisons against older shifts are fair.** Shifts before the April TBWU cutover were being
measured in RVU against your current TBWU total — about an 11% built-in handicap against most of your
own history.

**Backups are trustworthy.** Backups could previously be written and verified as "successful" while
missing your most recent studies; restore reported failure on every attempt after it had already
replaced the database; a second restore destroyed the only copy of the original; and Export/Import
Database never worked properly. All of these are fixed, and backups now use a consistent snapshot rather
than a plain file copy.

**Your accession salt is protected.** The settings file holds the one key that links every stored study
to payroll. A settings file that failed to load could previously be overwritten with blank defaults,
losing it permanently. Settings are now written atomically and never overwritten from a failed load.

**Payroll reconcile is safer.** It refuses to run when it cannot match accessions, no longer aborts on a
duplicate row in the spreadsheet, will not delete records when the spreadsheet could not be fully read,
and no longer writes patient identifiers into exported reports.

**Auto-update's crash protection actually works.** The safeguard that stops an update loop only
protected the first restart; a crash seconds later bypassed it entirely.

**Smaller things:** backup retention setting is honoured (it was hardcoded to 10); two backups in the
same minute no longer overwrite each other; the hourly rate shown on screen can no longer disagree with
the pay figures beside it; Settings → Export Settings works.

## Note

If you have seen studies recorded as 0, those rows are still stored that way. A payroll reconcile from
Tools will repair them.

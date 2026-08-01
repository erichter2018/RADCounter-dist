# What's New in v5.3.0

The month-boundary fix below was reported from a live shift and is the reason this release exists.
Everything under it comes from the last four segments of the whole-codebase audit — the parts you never
see until they fail.

## Fixed — the monthly estimate on a shift that crosses into a new month

**"Est this month" was wrong whenever a shift started the evening of the last day of a month**, which is
most month-ends on a night schedule.

Three separate things were wrong, all from the same assumption — that a shift belongs to one month.

**The pay month is reckoned in Central time**, so it does not roll over until 1 a.m. Eastern. A study
signed at 12:30 a.m. on the 1st still belongs to the previous month's pay. RADCounter was bucketing on
the local calendar and putting those studies in the wrong month.

**Before midnight, the closing month was credited the entire remaining shift.** On the shift that
triggered this report, July was counting 10.7 remaining hours when at most 2.6 could still be earned in
July — roughly eight hours of over-estimate. Your own history shows why that matters: the two comparable
month-spanning shifts on file signed 206 of 232 and 212 of 234 of their studies in the *second* month.

**After midnight, the new month could not see the shift at all.** The shift lookup matched on start time
only, so a shift that began at 11 p.m. the previous day was invisible to the new month — which then
projected a full month of shifts on top of work already underway, with the error growing all night.

**And the monthly reset fired an hour early.** At local midnight — before the Central month had actually
turned over — it reset your projection target and extra hours to defaults, mid-shift. There were four
copies of that logic in the app; all four now use the Central pay month, and none of them will fire
except when the month genuinely moves forward.

The same fix is applied to the Statistics views, so the projected income there and on the main screen now
agree.

## Fixed — performance

**RADCounter was re-reading your entire history every five seconds.** With the monthly projection shown,
it loaded all 62,000 records on every refresh to keep the 3,700 in the current month — up to a second of
frozen interface per tick, and it got slower every night as the database grew. It now reads only the
month it needs. The three-month baseline behind that projection was also being recomputed every five
seconds to produce numbers that don't change all night.

**Procedures with no pricing rule were being looked up from scratch, forever.** Every unmatched procedure
re-ran a full scan of all 4,270 pricing rules on every refresh — your logs contained 84,465 of these, and
four procedure names accounted for nearly all of them. A shift with two unmatched studies out of 236 was
spending 219 ms per refresh instead of 3.5 ms. They are now remembered.

**The window no longer freezes for two and a half seconds at launch** building percentile history, and
the pace car no longer re-prices 284 past shifts every five seconds in "best ever" mode.

## Fixed — data safety

**Closing the app could silently discard the study you just signed.** A signed study waits briefly for
MosaicTools to confirm it, and closing inside that window dropped it — never written, no warning. Since
shifts are normally left open rather than ended, that is the ordinary way the app gets closed.

**An update could pair a new version with your old pay rates.** If the pricing files failed to copy the
update still reported success, and nothing detected the mismatch afterwards. Updated pricing files are
now staged and installed at the next launch, and a failure cancels the update instead of reporting it
worked. This also fixes the update overwriting the pricing database while the app had it open.

**Studies signed with no shift running are no longer discarded without warning**, and the app now warns
you before closing if any are unsaved.

**End-of-shift reconciliation could offer to delete studies that really were in Clario**, if an
incomplete read was followed by a failed one — which is routine at end of shift when Clario is closed.

**The "still updating work units, close anyway?" prompt no longer appears during an automatic update**,
where the answer was ignored anyway.

## Fixed — display

- A dollar shift target coloured the work-unit number from a rate-blind estimate, so "est shift total"
  could show red while "avg/hour" showed green at the same instant. It now uses the same rate-aware
  maths as the row above it, and carries an up/down arrow so colour is not the only cue.
- The hourly rate readout could say "$/TBWU" while every other figure on screen was in RVU.
- A Recent Studies tooltip showed a bare number with no unit.
- Settings, Statistics and Tools could open off-screen and unreachable after a monitor was disconnected.
- Closing Settings with the X kept a theme you were only previewing.
- Procedures flagged as unrecognised were nearly invisible in the dark theme, and the current-study timer
  was invisible in light themes.

## Fixed — memory

A leaked database connection each time the Statistics window was opened, an undisposed handle every
minute, and the cloud backup loading the whole database into memory on every upload — the one thing in
the app that grew with your database rather than with the shift.

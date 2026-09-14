# What's New in v5.2.3

## The shift estimate now learns from your own shifts

"Est shift total" used to take the rate you'd managed so far tonight and assume it held until your scheduled end. An hour into a shift there is barely any rate to measure, so the number was at its wildest exactly when you looked at it first.

It now asks a different question: **what do my own recent shifts actually do in the hours I have left?**

- **Recent nights count more.** Weighting is by shift count, not by date, so a holiday doesn't empty the average — it just reaches further back.
- **It still responds to tonight.** A night running hot nudges the remaining hours up. The nudge is deliberately gentle and grows as the shift fills, because the work you've already banked is counted in full and is most of the story.
- **Day of week is tracked**, but held back hard until a day has earned it — see below.
- **It works from your second shift.** Before that it uses the built-in curve, so a fresh install behaves as it always did.

Measured by replaying every shift on file, each one predicted using only the shifts that had already finished when it began:

| | typical error | worst 10% of readings |
|---|---|---|
| v5.2.2 | 11.6% | 25.6% |
| v5.2.3 | **5.4%** | **10.9%** |

The difference is biggest early, where it mattered most — **one hour in, 25.8% → 7.5%**.

Everything is learned from the database on your own machine. Nothing is shared or pooled between users, so each reader's estimate reflects their own hours, volume and shift shape.

**On day of week:** on the data available, there isn't one. Work per hour runs 20.2 on Mondays to 18.9 on Fridays, a spread that turns up by chance three times in five. The 7am hour and end-of-week fatigue were both checked specifically and neither shows. Splitting the days apart made the estimate *worse*. So the day term is there but heavily damped: it costs nothing now, and if a real pattern ever appears — a schedule change, a different site — it surfaces on its own.

## Fixes

- **The pace bar and the shift estimate no longer contradict each other.** They were running on two different clocks: the pace bar counted from 11pm, the estimate counted from whenever RadCounter was launched. On a night started eleven minutes late that single gap pushed one readout toward "behind" and the other toward a flattering total, at the same instant, on the same work. Both now measure the same shift the same way.

- **The comparison night stopped getting free time.** The pace bar measured *you* from 11pm but measured the *night you were being compared against* from whenever that shift happened to start. Of the recent shifts on file, 45 of 46 began after 11pm, so the comparison was almost always handed extra minutes — up to 22.7 of them, about 9 work units of deficit that no amount of working could close.

- **Launching RadCounter a second time now brings back a lost window.** If the main window ends up parked off-screen where Windows stashes it, there was no way back: no tray icon, no hotkey, and a second launch just said "already running" and quit. Task Manager was the only escape. A second launch now means "show me the window" — it un-minimizes, pulls the position back on-screen, recentres on your primary monitor if the saved spot no longer exists, and brings it to the front. It also logs the window's state each time, so a repeat leaves evidence.

- **The shift-end backup is visible.** OneDrive and Dropbox snapshots were being written correctly at every shift end, but the only signal was bound to nothing — a good backup and a failed one looked identical. There's now a status bar: amber while running, green on success, red and persistent on failure, and it names which destination broke. A dead Dropbox token no longer reads as "Backup saved".

- **Payroll reconciliation stops overwriting RadCounter's own sign times.** It was replacing the detected time on every matched row, so all 3,779 July rows ended up identical to the payroll timestamp. It now fills only the rows RadCounter never captured. The overwrite was worth about $10.61 across a period and cost the ability to tell how accurate the app's own sign detection is.

- **A late start is judged against the shift it could actually work.** A 49-minute-late start was being measured against a full nine hours of target, and the pace bar jumped when the comparison mode changed on such a night.

- **Clario Compare** now reports how many studies actually carry a Clario time, and distinguishes "$0.00, exactly" from "$0.00, couldn't measure".

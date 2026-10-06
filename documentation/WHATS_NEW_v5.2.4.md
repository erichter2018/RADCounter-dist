# What's New in v5.2.4

## New: "This Shift"

A new box under the pace car, showing **one bar per hour since your shift started** — the work units you signed in each hour. Tightly packed, so a whole night fits in the width of the window.

- Bars scale against your **busiest complete hour**, not a fixed ceiling. The point is the shape of the night — where the busy and dead hours fell — and a fixed ceiling would flatten a quiet night into a row of stubs.
- The hour in progress is drawn but never sets the scale, so a bar two minutes old can't shrink every finished bar beside it.
- **Thin white lines mark every 10 work units** (10, 20, 30…), so the bars have absolute magnitude as well as shape. They're dropped entirely on a very busy night rather than crowding into a white block.
- A quiet hour and an empty hour look different: any non-zero hour keeps a visible sliver, zero stays at zero.
- Hover any bar for its hour and value.

On by default. Settings → **"This Shift (work units per hour)"**.

## Fixed: the "you may be slowing down" warning

Two problems, both now addressed.

**You can turn it off.** Settings → **"Slowdown warning"**. Previously the only control was the dismiss box on the banner itself, and the warning re-armed 30 minutes later — so there was no way to stop it.

**And it was mostly a false alarm.** Replayed over 137 completed shifts, the old version fired on **88% of shifts, an average of six times each**. Three separate things pushed it the same way:

1. **It compared you against your own fastest hour.** The first hour of a shift averages 1.72 minutes per study against 2.15 for the rest — so the yardstick sat 25% below the shift's own average before anything else happened. If you deliberately front-load — crank the first few hours and grind out the last few — the warning was structurally guaranteed.
2. **The case mix changed underneath it.** Quick MSK plain films are 20.4% of the first hour and 8.4% of the last three; abdomen/pelvis CTs go the other way, 14.6% to 18.8%, and take four times as long. That alone accounted for about a quarter of the apparent slowdown. Nobody had slowed down — the work had changed.
3. **The number it tested wasn't centred.** Read times are right-skewed, so an average of ratios sits at 1.25 rather than 1.0. The "40% slower" threshold was really about the 70th percentile of a perfectly ordinary half hour.

It now prices each study against **your own usual time for that study type at that hour**, and judges the window by its median rather than its average. The threshold was recalibrated against the real distribution.

| | shifts firing | alerts per shift |
|---|---|---|
| Before | 88% | 6.0 |
| Now | 54% | **1.0** |

Six times fewer alerts. It fires on about half of nights, usually once — and when it does, the typical study in the last half hour genuinely took twice as long as you normally take for that work at that hour.

The wording changed to match: it now says **"longer per study than you usually take at this hour"**, because that is what it measures. "Than start of shift" was never a fair comparison for anyone who front-loads on purpose.

## Fixed: a study left open over a break no longer counts as a slow read

The slowdown detector had no upper limit on how long a study could take. One study left open over a meal break — an hour or more — entered the average, which could both wreck the baseline and trigger the warning by itself. Now capped at 30 minutes, the same guard the sharpness meter has always used.

## New: "run me first" in the download

The zip now includes **run me first.bat**. Windows tags files from a browser-downloaded zip with a hidden marker, and Windows 11 24H2 no longer offers "Run anyway" on an unsigned program — so the block is a dead end rather than a prompt, and RADCounter simply won't start.

Run that file once after extracting and it clears the marker. It needs no administrator rights, changes no Windows security setting, and touches nothing outside its own folder. Only first-time installs need it; updates were never affected.

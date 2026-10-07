# What's New in v5.2.5

## Fixed: the "This Shift" bars are on the clock now

The hourly bar graph added in v5.2.4 was counting from the **moment your shift started**, not from the clock. On a shift beginning at 23:06, the bar labelled "3am" actually covered **3:06 to 4:06**.

Everything else on that screen — "last full hour", "est this hour" — counts real clock hours. So the same hour could show two different numbers an inch apart. A real example from a 23:06 shift:

| | window | reads |
|---|---|---|
| "3am" bar | 3:06:49 – 4:06:49 | 15.1 |
| last full hour | 3:00:00 – 4:00:00 | 19.1 |

The shift *total* was always right, which is exactly why it looked like a display quirk rather than a boundary being drawn in the wrong place.

Bars are clock hours now. A bar labelled "3am" means 3:00 to 4:00, and it matches the last-full-hour row exactly. Verified across 2,464 hour-by-hour comparisons on 349 past shifts — every bar now agrees.

**One visible consequence:** there are two short bars instead of one. The last is the hour in progress, as before. The first is now short whenever you start part-way into an hour, which is usually — a 23:06 start only has 53 minutes in its first clock hour. Neither of those short bars is allowed to set the height of the others, so an ordinary late start no longer reads as a slow one.

# What's New in v5.2.6

Two readouts that disagreed with the numbers next to them. Both are boundary errors, both are fixed.

## Fixed: "est this hour" no longer charges you the minutes before you clocked on

It divided by the minutes since the top of the hour, not since your shift actually started. So on a shift beginning at 11:09, the first hour's rate was measured over 56 minutes when only 46 of them existed.

A real example, at 11:56 on a 23:09 start with 30.0 work units in:

| | divided by | showed |
|---|---|---|
| avg/hour | 46.2 min — what you worked | **38.9** |
| est this hour | 56.0 min — since 11pm | **32.1** |

Same work, same instant, 17% apart. And it healed itself at midnight, once the clock hour sat fully inside the shift — which is exactly why it read as a glitch rather than a boundary in the wrong place.

The rate window now starts at whichever is later, the top of the hour or your shift start. Measured across 34,000 replayed samples on past shifts: in the first clock hour the two rows now agree within 1% on **99%** of samples, against **1%** before. Nothing after the first hour changes at all — 31,592 samples came out identical.

## Fixed: the "This Shift" bars now match their own numbers

The bar heights were scaled against the tallest **whole** hour, with the partial hours at each end left out. When the busiest hour happened to be a partial one — which it often is, since the first hour of a shift is usually a short one — that hour's bar ran off the top of the scale and got flattened to full height. Everything at or above the scale then drew the same size.

Measured on a real shift:

| hour | work units | drawn before | now |
|---|---|---|---|
| 11pm | **29.7** | 31 px | 31 px |
| 12am | 18.0 | 28 px | **19 px** |
| 1am | **19.8** | 31 px | **21 px** |

29.7 and 19.8 were drawn the same height. They are 50% apart.

The scale is simply the tallest bar now, partial hours included. The old exclusion could never have helped — the scale is a maximum, so a short bar cannot raise it; all the exclusion could do was cause the flattening.

Replayed across 5,237 graph renders from past shifts, the number of renders containing a bar drawn more than 5% off its true size drops from **853 to 10** — and all ten remaining are the deliberate minimum height that keeps a very quiet hour from looking identical to an empty one. The worst case before had two bars of 25.3 and 6.9 drawn at the same height.

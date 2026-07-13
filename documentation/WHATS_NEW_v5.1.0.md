# What's New in RADCounter 5.1.0

## New: Clario work-unit comparison, side by side with yours (opt-in)
RADCounter can now read **Clario's own per-study work unit** directly and show it next to RADCounter's computed TBWU — so you can see, study by study, where the two agree and where they don't.

- **In Recent Studies**, each study now shows RADCounter's TBWU in **blue** with **Clario's own number in white** directly underneath, aligned. Clario's number appears once it finalizes (a minute or so after you sign).
- **The comparison never changes your counts.** Every RVU/TBWU/compensation total stays computed exactly as before — Clario's number is display-and-compare only.
- **Opt-in:** turn it on under **Settings → CDP → Enable Clario CDP**, then run the one-click **Set up Clario CDP** and launch Clario from the shortcut it creates. Off by default.

## New: "Clario Compare" statistics view
A new view in Statistics (last button) that, for the period you pick, compares **your numbers against Clario's** over studies that have both:

- **Compensation delta** at the top — priced with *your* TBWU on both sides, so the difference isolates the **timestamp** effect (your detected completion time vs Clario's official signed time landing in different rate hours).
- **Work-unit totals** and a **drafted / not-drafted** split.
- **Study types that differ** — flags procedures where your TBWU and Clario's work unit diverge by more than a hundredth per study (e.g. a lumbar spine CT that you compute high vs Clario's lower number), so real discrepancies surface and rounding noise doesn't.

## New: RADCounter keeps tracking even when MosaicTools isn't running (opt-in)
If the MosaicTools bridge is down, RADCounter can now read the **current study straight from Mosaic** instead of relying only on the accessibility tree — more reliable identification of what you're reading.

- **Only a fallback:** when MosaicTools is running, its bridge is used exactly as before. This kicks in only when the bridge is down.
- **Opt-in:** **Settings → CDP → Enable Mosaic CDP reader**, run **Set up Mosaic CDP**, and restart Mosaic once. Off by default.

## New: Integration status lights in the bottom bar
The bottom status bar is now three at-a-glance **liveness lights** — **Clario CDP · Mosaic CDP · MosaicTools** — each **green when live, red when down**. Hover any light for its exact state, and **right-click** the bar for a quick jump to the CDP settings.

## Improved: cleaner Recent Studies rows
Each study now reads as two tidy lines: the **procedure and your TBWU** on top, and **"7 minutes ago, 1m 19s read duration"** with Clario's TBWU on the line below.

## Fix: completed studies no longer land as patient class "Unknown"
If a study finished before its patient class had been read from Clario, it could be recorded as **Unknown** even though the class was available moments later.

- RADCounter now **holds the last-known-good patient class** for the study, and **back-fills it** onto the record if it arrives after the study was saved. No more stray "Unknown" outpatients.

## Fix: discarded studies aren't counted, and signed studies don't jump early
Tightened how RADCounter interprets sign/discard signals from MosaicTools (a coordinated fix across both apps):

- **A study you discard is never counted** — even if it briefly reloads on screen.
- **A study no longer jumps into Recent Studies before you've actually signed it**, and a single sign counts exactly once (no more triple-count from repeated signals).
- **Discard, then rework and sign the same study, and it counts correctly** — the latest action wins.

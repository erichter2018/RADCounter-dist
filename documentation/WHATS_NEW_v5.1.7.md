# What's New in v5.1.7

## Fix: signed study no longer lingers as "current" when no next case opens

When you signed a study in Mosaic and no new study auto-opened right after, the just-signed study
could sometimes stay shown as the current/open study and not move into Recent Studies until the next
study finally opened. This was intermittent.

A cross-checked audit traced it to the sign signal not always being durably delivered, combined with a
per-tick optimization that could skip the check that finalizes the study. RadCounter now:

- Forces a full re-check whenever a study on screen still has an unconsumed "signed" signal, so it
  completes on the very next tick instead of waiting for the next study.
- No longer drops a "signed" message that arrives during a momentary bridge disconnect — a study
  you're already tracking is still completed.
- Won't let a brief signed-then-unsigned flicker resurrect a study that was already counted.

(Paired with a MosaicTools-side change that keeps the "signed" state asserted while the study stays on
screen.)

## New: "Switched servers" dismiss at end of shift

If you dictate on a different Clario server partway through a shift, those studies are real and tracked
but won't match your home server's Clario ledger when you end the shift — so the end-of-shift check
would list them as unmatched.

The end-of-shift "studies not matched to Clario" dialog now has a **"Switched servers"** button. One
click keeps every listed study (nothing removed) and ends the shift, so a server change during your
shift can't put your real work at risk of being cleaned up.

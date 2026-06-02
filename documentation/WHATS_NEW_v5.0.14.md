# What's New in RADCounter 5.0.14

## CAPTURE-status studies now counted
Ultrasound tech-worksheet / OCR-vision studies that carry a **CAPTURE** status (content present, but not drafted the normal way) were previously invisible to the draft-aware metrics. RADCounter now reads the new `capture` flag from MosaicTools and treats it as a form of "drafted" for storage and analysis.

- New `capture` field consumed from the MosaicTools pipe (additive — older MosaicTools builds that don't send it keep working unchanged).
- Tracked as live state while a study is open (re-evaluated on every update, same as drafted), persisted with each study record, and included in the **Draft Impact** read-time comparison.
- The Draft Impact view's display is unchanged: CAPTURE studies are folded into the existing "Drafted" bucket.

## Quick download links in Settings
The About section now has **"Download the latest version"** and **"Direct .zip download"** links that always point to the newest release, so updating by hand is one click away.

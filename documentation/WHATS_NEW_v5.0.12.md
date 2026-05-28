# What's New in RADCounter 5.0.12

## Draft Impact: honest, case-mix-adjusted comparison
The Draft Impact tab now compares drafted vs not-drafted read times **within each study type** instead of pooling everything together — so complex studies that are rarely drafted (Brain MRI, CT chest/abd/pelvis, etc.) can no longer skew the top-line number.

- **Overall Δ is now case-mix adjusted:** a weighted average of per-study-type deltas, restricted to types with ≥3 studies on each side. The label tells you how many study types contributed.
- **One consolidated per-type table.** Every study type with known draft data shows in a single section with its drafted vs not-drafted columns side by side, Δ, and Δ%. Patient-class rows (Stroke, Trauma, Emergency, Inpatient, Outpatient) are indented under types that have enough data on both sides for a real comparison.

## Fix: What's New window now actually works
The What's New window has been silently broken for every 5.0.x release — it tried to download release notes into a `documentation/` folder that nothing created at runtime, so the write always failed and the window came up empty. The doc downloader now creates the folder before writing, so release notes load on first launch.

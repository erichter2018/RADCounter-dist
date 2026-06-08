# What's New in RADCounter 5.0.15

## Draft Impact: cleaner "Deltas only" sharing view
The deltas-only view (the **"Deltas only (for sharing)"** toggle in Draft Impact) is now built for sharing without exposing raw read times.

- **Absolute read times are hidden** — the per-bucket averages and the **Δ avg** (absolute minutes) column no longer appear in deltas-only mode. The relative **Δ %** is what's shared.
- **New "Show # studies" toggle** — optionally include the drafted vs not-drafted **study counts** in the deltas-only view (on by default). Hidden when you want a pure Δ %-only table.
- **Copy always matches the screen** — the **Copy deltas** button now exports exactly the columns currently displayed, so the clipboard text mirrors what you see (counts + Δ %, or Δ % alone).

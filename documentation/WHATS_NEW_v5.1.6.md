# What's New in v5.1.6

## Fix: Clario work units now read reliably — no shift selection needed

RadCounter's Clario work-unit reader no longer depends on the Clario **Shift dialog** being open or scoped to your current shift. Previously, if that dialog wasn't set up just right — for example on a fresh setup, or after a Clario restart — the reader could come back empty even with every connection light green, so Recent Studies never filled in Clario's numbers.

Now the reader scopes purely by **your Clario login plus a time window RadCounter computes itself**. You don't have to open or select anything in Clario — as long as you're signed in and the Clario CDP light is green, your work units flow in.

## New: it now tells you what's wrong instead of failing silently

If work units still aren't landing during a shift, RadCounter shows a specific banner explaining why, rather than a silent green light:

- **Not signed in** — "Clario is open but not signed in…"
- **No studies returned** — "connected but returning no studies for your login…"
- **Studies don't match** — "Clario is returning studies but none match yours — likely an accession-format mismatch."

Each points at the actual problem so it can be fixed on the spot.

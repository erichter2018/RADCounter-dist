# What's New in RADCounter 5.0.19

## Fix: a slow or restarting MosaicTools can no longer freeze the UI
RADCounter sends shift info to MosaicTools on every refresh (~twice a second) and fires distraction alerts as studies run long. Those sends ran synchronously on the UI thread, and a named-pipe write blocks until the other side reads it — so whenever MosaicTools was busy, hung, or mid-restart, the whole interface froze until it caught up. Against a flapping MosaicTools this showed up as repeated **13–24 second freezes**, bad enough to force a restart.

- **Sends moved to a background writer** — all pipe traffic now drains from a queue on a dedicated worker thread, so the UI thread never waits on MosaicTools.
- **3-second per-write timeout** — if MosaicTools can't accept a write in time, RADCounter drops the connection and reconnects (falling back to its own scraping) instead of blocking on it.
- **shift_info is coalesced** — only the newest shift snapshot is kept while the pipe is backed up, so a brief stall never becomes a backlog of stale updates. Distraction alerts are still delivered in order.

# What's New in RADCounter 5.0.13

## Long-running stability: leak audit + fixes
A full memory/resource leak audit (cross-checked with two external code-review tools) identified seven concrete contributors to slow workstation degradation over multi-day runs. All seven are fixed in this build.

- **Named-pipe handle leak** — when reconnecting to MosaicTools, certain connect-failure paths leaked an OS pipe handle each time. Multi-day uptime with intermittent MosaicTools restarts could leak hundreds.
- **Clario enrichment fan-out** — the 500 ms scan loop could launch many concurrent Clario UIA traversals for the same accession while the previous one was still running. Now there's an in-flight guard so only one runs per accession.
- **Unbounded patient-info caches** — five dictionaries (patient class, patient name, site code, accession, MRN) grew without eviction. They are now capped at 1,000 entries each with FIFO eviction.
- **Clario UIA double-release bug** — a fallback path could store the same COM RCW under two cache slots, leading to a double `Marshal.ReleaseComObject` on the same object during cache invalidation.
- **Parent window leak in Clario notes/critical findings** — `GetExamNotes`/`GetCriticalFindings` were leaking the parent Clario window on every call. Now released safely (unless it's the cached one).
- **Stale desktop COM leak** — when the cached UIA desktop element fails its liveness check, the stale COM wrapper is now released before it's replaced.
- **Mosaic extractor never disposed** — the wrapper around `MosaicUIA.MosaicUIAExtractor` didn't implement `IDisposable`, so its COM cleanup never ran. Now disposed on shutdown.

## UI Automation circuit breaker
A new safeguard: if a UIA call hangs (synchronous COM call that can't be cancelled), the worker thread is permanently blocked. After 5 such abandoned threads in a row, RADCounter now **pauses UIA work for 30 seconds** so no more threads get sacrificed. The next periodic UIA reset clears the breaker and resumes normal operation.

If you ever see "UIA abandoned-task circuit breaker TRIPPED" in the log, that's the workstation telling RADCounter to back off briefly — which is the correct response.

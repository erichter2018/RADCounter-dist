# What's New in RADCounter 5.0.18

## Smoother Mosaic — less load on the Info Hub
RADCounter reads your current study from Mosaic's Info Hub using Windows accessibility. This update makes that polling much lighter on Mosaic, especially during the gaps between studies.

- **No more constant full-tree scans while you're between studies.** When no study is open, RADCounter now backs off its scanning instead of scanning twice a second — which had been adding up to a noticeable load on Mosaic over a long shift. A study you open is still picked up right away.
- **The accessibility connection to Mosaic is refreshed more often** (every 10 minutes instead of every 30), which keeps Mosaic's accessibility tree from bloating over time.

No action needed — the fix applies automatically after updating.

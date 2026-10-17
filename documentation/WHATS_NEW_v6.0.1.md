# What's New in v6.0.1

## New

- **Payroll sheets in folders inside Downloads are found too.** RADCounter used to look only at the top of your Downloads folder, so a sheet filed in, say, `Downloads\Payroll\2026` was missed until you clicked **Add sheet**. It now also looks in the folders inside Downloads, up to four folders deep, every time it starts. Each sheet is still read only once, and only Matrix payroll sheets that are yours are used. `%LOCALAPPDATA%\RADCounter` is still searched at its top level only.

# What's New in v6.0.0

## New

- **RADCounter no longer ships TBWU and associated compensation information.** Every earlier version carried the hourly pay schedule, the work-unit value of every procedure, the RVU list and the multipliers for neuro studies inside the download, where anyone holding the zip could read them. This version carries none of it. Every number RADCounter now uses to value your work comes from two places only: **Clario**, as you sign each study, and **your own monthly Matrix payroll sheets**. Nothing in the download is anyone's pay — and you can only ever see your own.

- **Put your payroll sheets where RADCounter looks for them.** Each month, save the Matrix payroll spreadsheet you receive (the `.xlsx`) in either of these places:
  - your **Downloads** folder — where it usually lands anyway, or
  - **`%LOCALAPPDATA%\RADCounter`** — the folder RADCounter itself lives in. Paste that into the Explorer address bar to open it.

  Every time RADCounter starts it checks both places, reads any sheet it has not seen before, and tells you what it learned in a blue bar at the top of the window. A sheet saved anywhere else: click **Add sheet** on that bar and pick it — you can pick several at once. Each sheet is read once and what it teaches is kept, so you can move or delete the file afterwards and lose nothing. **Add every month you have, not just the latest** — the more months it has seen, the more of your work it can value without help. Until it has seen at least one sheet, RADCounter shows work units but no dollar amounts.

- **What it learns from a sheet, and the rules it follows.** For every procedure you were paid for: what it pays in each patient class, drafted and not drafted, the multiplier payroll applied to it, and its RVU. For every clock hour you worked, weekday and weekend: your rate. All of it **month by month**.
  - **Every month is kept.** A study is valued with the prices and rates of its own pay month. A new month never overwrites an old one: when October's draft deduction differs from September's, September's studies keep September's numbers. A month nothing has been learned for uses the latest month before it.
  - **A corrected sheet replaces the original.** Two sheets for the same month: the one saved more recently wins that month.
  - **Only your own sheets.** The first sheet sets whose numbers these are, by payroll login. A colleague's sheet sitting in your Downloads is ignored, and the bar says so.
  - **A skipped weekend uplift is put back.** If a sheet marks studies as weekend but paid them at the weekday rate, RADCounter values them at what you are owed, using the weekend uplift it learned from your other months.
  - **Pre-Admit cannot set a price.** Payroll does not price Pre-Admit studies consistently, so a Pre-Admit row is only used for a procedure you have never been paid for in any other class.

- **It learns from Clario too, a month before payroll does.** Clario values every study as you sign it, while a payroll sheet arrives a month later. So RADCounter also learns from the values Clario has already given your studies, and fills in any month the sheets have not covered yet. That's how a price change — such as a new month's draft deduction — reaches RADCounter within days instead of a month later. Two safeguards keep a stray study from moving a price:
  - A study Clario priced in a **different patient class** than RADCounter recorded is ignored.
  - A **change** of price needs at least two studies agreeing on it. A procedure you are reading for the first time needs only one.

  For a month a payroll sheet does cover, the sheet always wins, because its patient class is the one you were paid in.

- **A procedure you have never read is not guessed.** Nothing is borrowed from a different procedure — a portable 1-view chest is never priced as a 2-view chest. Until Clario reports its value, usually within a minute, it counts as zero. From then on RADCounter knows it. The one exception is left and right versions of the same study, which share a price.

- **Clario CDP is highly encouraged.** Without it, RADCounter cannot learn within the month. It learns only when your next payroll sheet arrives, so a price change — such as a new month's draft deduction — goes unnoticed until then. A procedure you have never been paid for counts as zero until that sheet arrives too. With it, Clario's own value for each study is used the moment you sign it and always wins over a learned one. The Clario connection is switched on for everyone. If Clario is still not connected 30 seconds after RADCounter starts, a red bar says so and offers **Set up**, which creates the "Clario CDP" desktop shortcut — close every Chrome window, then always open Clario from that shortcut. Hiding the bar lasts until the next start.

- **"—" when a rate is not known.** An hour none of your sheets covers — a daytime hour for an overnight reader, say — has no known rate, and RADCounter used to quote it as $0. It now shows **—** instead: for the "Current" rate, and for any dollar amount made only of such hours. An amount that is only partly known gets a **+** — "at least this much". **$0 now only ever means zero.** The All Studies export leaves those cells empty rather than writing 0.

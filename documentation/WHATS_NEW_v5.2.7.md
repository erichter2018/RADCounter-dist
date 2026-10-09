# What's New in v5.2.7

## Updates now install when they used to give up

A reader sat on v5.2.2 through four releases. Every attempt downloaded the whole 76 MB fine and then
failed at the last step, because one leftover folder in their RADCounter folder could not be deleted.
Nothing ever cleared it, so every later attempt hit exactly the same wall. The only trace was a line
in the log.

- The update no longer needs to delete that folder. It reuses it, and keeps a list of the files it
  staged so nothing left over from an older release can slip into your pay rules.
- **The failure message now tells you what went wrong.** It used to say only "Failed to download or
  apply the update" and point at the downloads page — which, in that reader's case, would have failed
  in the same place. It now names the folder and what is holding it.
- Slow connections get **15 minutes** instead of 5. The download needed a steady 2 Mbit/s to finish in
  time; now it needs about 0.7.

## RADCounter can move itself somewhere that works

Where you unzip RADCounter is where it lives, and that is usually the Desktop or Downloads. At this
company the Desktop is inside OneDrive, which is where the update failures above were found.

On startup, if RADCounter is in a folder that causes trouble — OneDrive, Desktop, Downloads, a
temporary folder, or Program Files — it offers to move itself to your own app folder and carry on from
there.

- Your settings, your logs and your **whole history** come with it.
- **A RADCounter shortcut goes on your Desktop**, so you never have to find the folder again.
- Every file is checked after the copy. If anything does not match, the move is abandoned and
  RADCounter carries on exactly where it was.
- **Nothing is deleted.** Your old folder stays, with a note in it saying where RADCounter went.

Already in a sensible folder? You will never see the prompt.

## RADCounter will no longer run from inside a zip

If you open the downloaded zip and double-click RVUCounter.exe inside it, Windows quietly unpacks only
that one file into a temporary folder and runs it there. Its pay rules are left behind in the zip.

RADCounter used to warn about this and carry on. It now **stops**, because carrying on is worse than
it sounds: with no pay rules, **every study counts as zero and is saved that way**, into a folder
Windows empties on its own schedule — so there is nothing left to repair it from afterwards.

The message walks through the fix: right-click the zip, choose "Extract All", then run RADCounter from
the folder that appears.

## Starting fresh? Your history can come back

On a new PC, or any time RADCounter starts with no history at all, it looks for your most recent
OneDrive backup and offers to restore it. It shows you the backup's date and how many studies are in
it before you decide.

- It only ever offers this when there is **no** history to lose.
- Backups are checked before use, and a half-synced one is skipped in favour of the one before it.
- One thing worth knowing: a backup holds the database, not your settings. Your history, statistics
  and projections all come back. A **payroll reconcile** over the restored period needs the privacy
  key from your old settings folder, so copy that across too if you still have it. The prompt says so
  on screen.

## "This Shift" bars are now coloured by how the hour went

The bar graph under the pace car already showed how much each hour earned. Now its colour shows how
that compares with your own history for the same hour of the day.

Red is among your slowest hours, your theme colour is among your fastest, purple is an ordinary hour.
The scale is measured from your own shifts, not picked by eye: full red is your slowest 5% and full
colour your fastest 5%. Hover a bar for the plain-English version, for example
*"1am: 19.8 — 18% below your usual for 1am"*.

- An hour with nothing to compare against stays grey rather than being given a verdict it has not
  earned. That includes clock hours you have not worked often enough yet.
- **The first hour of a shift now counts as a full hour once it covers 45 minutes**, so a shift that
  starts at five past the hour gets a colour like any other. Those part-hours also now count toward
  your history, which they did not before — the 11pm bar could never earn enough samples to be
  judged.
- On a theme whose accent colour is too close to red, RADCounter uses blue for the fast end instead,
  so the two ends of the scale never look the same.

## Smaller things

- **Settings:** the bar graph switch is now labelled "This Shift bar graph (work units per hour)", so
  it is clear what it turns off.
- **MosaicTools:** RADCounter now sends your hourly figures and their colours over the pipe, so
  MosaicTools can draw the same graph inside Clario.
- **First install:** "run me first.bat" now offers to install RADCounter properly and put the shortcut
  on your Desktop, instead of leaving it in your Downloads folder. Run it again after downloading a
  newer zip and it updates the program without touching your settings or history.

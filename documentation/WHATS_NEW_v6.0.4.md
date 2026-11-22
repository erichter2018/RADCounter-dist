# What's New in v6.0.4

## Fixes

- **Studies are counted again after you move to a new computer.** On a new PC, RADCounter offers to restore your history from your OneDrive backup. The backup holds your studies but not the private key RADCounter uses to scramble accession numbers — on purpose, so that key never sits in the cloud next to them. After such a restore, RADCounter refused to save any new study: Recent Studies stayed at 0 however many cases you read. It now makes a new key in that case, and every new study is saved as normal. Your restored history still counts in your statistics and pace. Only a payroll check over the months before the move needs the old key; to bring it back, copy `settings\user_settings.yaml` from the old computer.
- **Window size is kept when RADCounter closes minimized or maximized.** Closing while minimized saved the tiny taskbar size, so the main window came back at its smallest size next time; closing while maximized saved the whole screen. The main, Settings, Statistics and Tools windows now save their normal size. A window that already saved a tiny size opens at its default size, in the same place.
- **The current-hour rate updates as soon as you save Settings**, not at the top of the next hour.

## New

- **Hide the $ sign on the main screen.** Settings → Display → "Hide the $ sign on the main screen". Money then shows as plain numbers — (1,234) instead of ($1,234) — and the current-hour rate without the $. Off by default, so nothing changes unless you turn it on. The Statistics window keeps the $.

## Changes

- **New colours for the "This Shift" graph.** Pink for your slowest hours, Carolina blue for an ordinary hour, dark blue for your fastest, with smooth steps in between. An ordinary hour used to be a pinkish purple, which read as slow. The colours are now the same in every theme, and MosaicTools, which draws the same graph inside Clario, shows them too.
- **The "Mosaic CDP" light in the bottom bar is now "Mosaic Bridge".** It shows whether MosaicTools is connected to Mosaic, and turns green when it is. It needs a MosaicTools version that reports this: with an older one the light stays red and its tooltip says "waiting for status from MosaicTools".

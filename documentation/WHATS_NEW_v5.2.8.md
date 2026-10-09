# What's New in v5.2.8

Two fixes to the "move me somewhere that works" feature that v5.2.7 introduced yesterday. Both were
found the same afternoon, by the MosaicTools side spotting them in its own copy of the idea.

## RADCounter can no longer replace itself with an older version

v5.2.7 refused to move into a folder that already held a RADCounter — but it decided that by looking
for a database, and **"run me first.bat" installs the program without creating one**.

So this was possible:

1. You run "run me first.bat" from a new download. The newer RADCounter installs, with no history yet.
2. Later you start the **older** copy still sitting in your old folder.
3. It sees no database, decides the folder is free, and copies **itself** over the newer program.

You would have been quietly moved backwards a version, with your own history arriving alongside to
make it look like it had worked.

RADCounter now compares the two programs and refuses, telling you to start the newer one instead.

## A moved copy could end up unable to start

Windows puts a hidden "downloaded from the internet" mark on files that come out of a browser-
downloaded zip, and refuses to run a marked program. Copying a file **carries that mark with it** —
so if you had never cleared it, moving RADCounter faithfully reproduced the block in its new home.
The move reported success and then nothing would start.

RADCounter now clears the mark on the copy it has just made.

## Nothing else changed

Everything from v5.2.7 behaves exactly as it did. If RADCounter is already in a sensible folder, none
of this ever comes up.

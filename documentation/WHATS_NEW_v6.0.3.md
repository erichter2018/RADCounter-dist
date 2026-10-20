# What's New in v6.0.3

## New

- **Linked studies are counted.** In Mosaic you can link a second study to the one you are reading, and one sign signs both. Mosaic only tells RADCounter about the study that was open, so the linked one was never counted during the shift — it only turned up in the end-of-shift list of missed studies. RADCounter now finds it in Clario, which lists both studies with the same signed time: a few minutes after you sign, the linked study is added to your shift by itself, with Clario's work units and the patient class of the study it was signed with. This needs the Clario connection (Clario CDP). Any other study Clario has and RADCounter does not is still offered at the end of the shift, as before.

## Fixes

- **Studies added from Clario get clean names.** Clario sends a procedure name followed by extra spaces and a 5-digit code — "CTA NECK", 17 spaces, "70498". Studies added from Clario, linked ones and the end-of-shift missed ones, are now saved as just "CTA NECK".

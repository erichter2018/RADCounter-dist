# What's New in RADCounter 5.0.17

## Bug fix: patient class now recovers from Clario without MosaicTools
RADCounter reads each study's **patient class** (e.g. *Routine Outpatient*, *STAT Emergency*) straight from the Clario worklist. When MosaicTools wasn't running, this had stopped working and every study showed **Unknown**.

- Patient class is now read correctly from Clario on its own, whether or not MosaicTools is running.
- This restores accurate per–patient-class breakdowns and TBWU compensation (which depends on patient class).

No action needed — the fix applies automatically after updating.

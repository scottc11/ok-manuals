

bug fixes:
    - After recording a sequence, ratcheting would prevent any recorded gate signals from triggering
    - Using a really low frequency LFO, the quantizer would not latch the input to any new notes
    - CV input hysterisis (this was kind of a cool effect at times, but its gone now)
    - No more random system crashes when 10V @ CV inputs
    - Pitch bend below lowest degree
    - Disabled certain menu actions when record is enabled for stability
    - smoother transition of bender from idle position to active position


Features / Enhancements:
    - Sequencing octave touch pads (mono + qunatizer mode)
    - Saving sequences between power cycles
    - Holding a channel select pad in qunatizer mode will let you override the incoming CV when touching the touch pads


ALT Firmware:
    - Sequencing is now based on a time signature / beats per bar
    - The LENGTH button no longer sets a sequences length, but sets the active time signature (options are 3/4, 4/4, 5/4, or 7/4)
    - Each sequence can have its own time signiature. The sequence time signature is determined by whatever time signature is set using the LENGTH button
    - The FREEZE LED will indicate beat 1 of the bar
    - Enabling and disabling sequence record always happens on beat 1 of the bar
    - Pressing the RECORD button will "arm" sequence recording (REC LED will Flash / blink). Recording only gets enabled (and disabled) once beat 1 of the bar rolls over.
    - This means each sequence will either be 1 bar long, 2 bars long, 3 bars long, etc.
    - Reset will reset all sequences to beat 1, as well as the current bar to beat 1
    - Progress of a channels sequence is now displayed like a clock face (much like ableton does it with their clip looping)
    


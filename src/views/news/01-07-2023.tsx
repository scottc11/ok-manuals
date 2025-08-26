import React from 'react';

export const meta = {
    title: 'DEGREE Firmware Update + ALT sequencing firmware',
    slug: 'degree-firmware-update',
    date: '01-07-2023',
}

const News_01_07_2023 = () => {
    return (
        <div>
            <h1>{meta.title}</h1>
            <p>{meta.date}</p>
            <p>Over the last year, I have been slowly putting together a firmware update for the DEGREE to deal with some reported bugs discovered after its initial release, as well as some features / enhancements that were suggested by users 👌.</p>

            <p>For everyone who wrote in, I can't say I included everyones feature requests, but that doesn't mean I didn't appreciate the feedback 🙏. If I left it out, it was either too hard 😅 or it was too much a departure from the original theme / vision I had for the design.</p>

            <p>👉 Click <a href="https://github.com/joshuajohnson/degree-firmware/releases/tag/v1.0.0">here</a> to update your firmware 👈</p>

            <p>Here is a list of everything that changed 👇.</p>

            <h2>Bug fixes:</h2>
            <ul>
                <li>After recording a sequence, ratcheting would prevent any recorded gate signals from triggering</li>
                <li>When using a really low frequency LFO as CV input for quantizing, the quantizer would not latch the input to any new notes</li>
                <li>CV input hysteresis (rapid triggering of the gate output). This was kind of a cool effect at times, but its gone now...</li>
                <li>Sending a +10V signal to the CV input would randomly crash the system 😬</li>
                <li>Allow pitch bend below lowest degree / note</li>
                <li>Disabled certain menu actions when record is enabled for stability</li>
                <li>smoother transition of bender from idle position to active position 👌</li>
            </ul>

            <h2>Features / Enhancements:</h2>
            <ul>
                <li>Sequencing octave touch pads (mono + quantizer mode). This was by popular demand... I am still not super sold on this yet because I do miss being able to jump a sequence up and down an octave, but it does allow for some more interesting melodies...</li>
                <li>Saving sequences between power cycles (check the manual to see how this works)</li>
                <li>Holding a channel select pad in quantizer mode will let you override the incoming CV when touching the touch pads. Really minor enhancement, but a nice thing to have while improvising / performing.</li>
            </ul>

            <h2>ALT Firmware</h2>
            <p>In parallel with the bug fixes and enhancements, I have also been working on an alternate version of the firmware, in an attempt to make the live sequencing a little more forgiving and predictable. This is only a slight departure from the original firmware, and it might not be for everyone which is why I will be maintaining both firmware versions going forward.</p>
            
            <h3>ALT firmware summary:</h3>
            <ul>
                <li>Sequencing is now based on a time signature / beats per bar</li>
                <li>The LENGTH button no longer sets a sequences length, but sets the active time signature (options are 3/4, 4/4, 5/4, or 7/4)</li>
                <li>Each sequence can have its own time signiature. The sequence time signature is determined by whatever time signature is set using the LENGTH button</li>
                <li>The FREEZE LED will indicate beat 1 of the bar</li>
                <li>Enabling and disabling sequence record always happens on beat 1 of the bar</li>
                <li>Pressing the RECORD button will "arm" sequence recording (REC LED will Flash / blink). Recording only gets enabled (and disabled) once beat 1 of the bar rolls over.</li>
                <li>This means each sequence will either be 1 bar long, 2 bars long, 3 bars long, etc.</li>
                <li>Reset will reset all sequences to beat 1, as well as the current bar to beat 1</li>
                <li>Progress of a channels sequence is now displayed like a clock face (much like ableton does it with their clip looping)</li>
                <li>If this isn't clear, I basically took the clip looping / recording from the Ableton Live Session View 🙂.</li>
            </ul>

            <p>Make sure to check out the manual as well, I updated it.</p>

            <p>You can also check a video of me demoing this firmware here:</p>
            <video src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </div>
    )
}

export default News_01_07_2023;
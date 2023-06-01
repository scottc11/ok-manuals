import React from "react";
import ManualHeader from "../components/ManualHeader/ManualHeader";
import Image from '../components/Image/Image';
import degree_img from '../media/DEGREE.png';

const DegreeManual = () => {
    return (
        <div>
            <ManualHeader text={'Manual'}/>
            <div>
                <Image source={degree_img} width="50%" />
                <ol>
                    <li>1V/O Output (0..+6V) - Volt per octave output for each channel</li>
                    <li>GATE Output (5V) - Each channel outputs a gate signal. How/when that trigger occurs depends on each channels active MODE</li>
                    <li>CV Input (+/-10V) - Quantizing external CV into 1v/o signals :: VCO Frequency detection for auto-calibration</li>
                    <li>Bender Output (+/-8V) - raw CV output of a Bender component</li>
                    <li>Channel Selection - Selects a channel to be altered via the Freeze, Reset, Clear PB, and Clear SEQ pads. You can select multiple channels at once.</li>
                    <li>Channel Selection (ALL) - Holding down this touch pad selects all channels at once</li>
                    <li>FREEZE - While this pad is touched, “freezes” all voltage outputs and sequences in their current state</li>
                    <li>RESET - on touch, resets all 4 channels sequences to step 1</li>
                    <li>STEPS - hold this down to enter the “Sequence Length” UI. More on that later…</li>
                    <li>RECORD - when touched, record arms / disarms all channels. LED ON == armed :: LED OFF == disarmed</li>
                    <li>Scale Selection Toggle Switches - each switch has three positions for adjusting each scale degree</li>
                    <li>Mode Button - toggles between MONOPHONIC MODE and QUANTIZER MODE</li>
                    <li>Slew Control - controls how much slew/portamento/glide is applied to the 1v/o OUTPUT</li>
                    <li>Octave Selection - Each channel outputs 4 octaves of 1v/o. These 4 capacitive touch pads represent which octave is currently being output.</li>
                    <li>Scale Degree Selection - 8 capacitive touch discs per channel control which degree in the scale is either being output (in monophonic mode) or selected for quantization (quantizer mode)</li>
                    <li>CLOCK Input - When using the Sequencer Modes (see below), you can externally clock the module. Each clock signal advances the sequence by 1 Step. There are 96 PPQN per step.</li>
                    <li>CLOCK Output - For each internal clock signal step</li>
                    <li>Global Gate Output - Sums all Gate events into one output</li>
                    <li>Global Bender Output - Sums all Bender events into one output</li>
                </ol>
            </div>
        </div>
    )
}

export default DegreeManual;
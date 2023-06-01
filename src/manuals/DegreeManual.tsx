import React from "react";
import ManualHeader from "../components/ManualHeader/ManualHeader";
import Image from '../components/Image/Image';
import degree_img from '../media/DEGREE.png';
import monophonic_gif from '../media/monophonic-demo.gif';
import quantizer_gif from '../media/quantizer-demo.gif';
import Col from "../components/Col/Col";
import Grid from "../components/Grid/Grid";

const DegreeManual = () => {
    return (
        <div>
            <ManualHeader text={'Manual'}/>
            <div>
                <Image source={degree_img} paddingTop={24} paddingBottom={24} />
                <ol>
                    <li><b>1V/O Output (0..+6V)</b> - Volt per octave output for each channel</li>
                    <li><b>GATE Output (5V)</b> - Each channel outputs a gate signal. How/when that trigger occurs depends on each channels active MODE</li>
                    <li><b>CV Input (+/-10V)</b> - Quantizing external CV into 1v/o signals :: VCO Frequency detection for auto-calibration</li>
                    <li><b>Bender Output (+/-8V)</b> - raw CV output of a Bender component</li>
                    <li><b>Channel Selection</b> - Selects a channel to be altered via the Freeze, Reset, Clear PB, and Clear SEQ pads. You can select multiple channels at once.</li>
                    <li><b>Channel Selection (ALL)</b> - Holding down this touch pad selects all channels at once</li>
                    <li><b>FREEZE</b> - While this pad is touched, “freezes” all voltage outputs and sequences in their current state</li>
                    <li><b>RESET</b> - on touch, resets all 4 channels sequences to step 1</li>
                    <li><b>STEPS</b> - hold this down to enter the “Sequence Length” UI. More on that later…</li>
                    <li><b>RECORD</b> - when touched, record arms / disarms all channels. LED ON == armed :: LED OFF == disarmed</li>
                    <li><b>Scale Selection Toggle Switches</b> - each switch has three positions for adjusting each scale degree</li>
                    <li><b>Mode Button</b> - toggles between MONOPHONIC MODE and QUANTIZER MODE</li>
                    <li><b>Slew Control</b> - controls how much slew/portamento/glide is applied to the 1v/o OUTPUT</li>
                    <li><b>Octave Selection</b> - Each channel outputs 4 octaves of 1v/o. These 4 capacitive touch pads represent which octave is currently being output.</li>
                    <li><b>Scale Degree Selection</b> - 8 capacitive touch discs per channel control which degree in the scale is either being output (in monophonic mode) or selected for quantization (quantizer mode)</li>
                    <li><b>CLOCK Input</b> - When using the Sequencer Modes (see below), you can externally clock the module. Each clock signal advances the sequence by 1 Step. There are 96 PPQN per step.</li>
                    <li><b>CLOCK Output</b> - For each internal clock signal step</li>
                    <li><b>Global Gate Output</b> - Sums all Gate events into one output</li>
                    <li><b>Global Bender Output</b> - Sums all Bender events into one output</li>
                </ol>
            </div>
            <Grid>
                <Col>
                    <h1>Introduction</h1>
                    <p>DEGREE is a performance oriented VCO controller designed around custom manufactured illuminated capacitive touch pads. The modules main purpose is to control the pitch of 4 independent VCOs by interacting with the touch pads.  Additionally, the module can auto-calibrate your VCOs 1v/o tracking, quantize incoming CV, output gate/triggers, apply analog slew/portamento, and has 4 custom “Bender” components for classic synth pitch bend effects.</p>
                    <p>The module is internally clocked with a resolution of 96 pulses per quarter note (PPQN), allowing you to record sequences of touch events / pitch bend action and play them back in real-time.</p>
                    <h3>Each channel consists of the following hardware:</h3>
                    <ul>
                        <li>8 illuminated capacitive touch pads for scale degree selection</li>
                        <li>4 illuminated capacitive touch pads for octave selection</li>
                        <li>Tactile Mode button for toggling between MONOPHONIC/QUANTIZER modes</li>
                        <li>Toggle switch for activating / deactivating the pitch bend</li>
                        <li>Slew control via slide potentiometer</li>
                        <li>1V/O Output</li>
                        <li>+-8V Pitch Bend Output</li>
                        <li>Gate/Trigger Output</li>
                        <li>CV Input jack</li>
                        <li>Bender component</li>
                        <li>16 LEDs indicating sequence length and position</li>
                    </ul>
                    <p>At any given time each channel operates in one of two modes. <b>MONOPHONIC</b> Mode, and <b>QUANTIZER</b> Mode.</p>
                </Col>
            </Grid>
            <Grid>
                <Col>
                    <h1>Monophonic Mode</h1>
                </Col>
                <Col size={8}>
                    <p>This is the most basic of modes. For each channel, only one scale degree can be active at a time.</p>
                    <p>The only input the module takes is that of your fingers. Touching any of the touch pads pads immediately outputs the respective scale degrees voltage to that channel's 1V/O output.</p>
                    <p>Additionally, when a touch pad is touched the corresponding channels GATE output is set to HIGH (+5V), and on release set back to LOW (0V).</p>
                </Col>
                <Col size={4}>
                    <Image source={monophonic_gif} />
                </Col>
            </Grid>
            <Grid>
                <Col>
                    <h1>Quantizer Mode</h1>
                </Col>
                <Col size={8}>
                    <p>In quantizer mode, all 8 degrees become available options which incoming CV signals get latched to. If a degree is illuminated, it means that incoming CV can be latched to it. When a CV voltage latches to a active degree; that degrees LED will dim; the 1V/O output gets updated; and a trigger signal gets triggered.</p>
                </Col>
                <Col size={4}>
                    <Image source={quantizer_gif} />
                </Col>
            </Grid>

            <Grid>
                <Col>
                    <h1>Sequencing</h1>
                </Col>
                <Col>
                    <p>Both <b>MONOPHONIC</b> and <b>QUANTIZER</b> modes have the ability to enter a third mode: <b>SEQUENCER mode</b>. When in sequencer mode, the module will record touch and bend events, map them to a 32 step (96 PPQN) grid, and play them back in real-time.</p>
                    <p>To enable recording, press the RECORD button. The button will illuminate RED to signify recording is now active / enabled.</p>
                    <p>When RECORD is enabled, all TOUCH and BENDER events will be recorded into the running sequence. Additionally, as the sequence plays back any new events will overdub / overwrite previously existing events (should they overlap).</p>
                    <p>Press the RECORD button once more to disable RECORD MODE. If any events occurred on any of the channels while RECORD was enabled, then those channels will continue to playback and remain in SEQUENCER mode. If during this process a channel didn’t receive any new events, this channel will be reverted to its previous mode (prior to enabling RECORD).</p>
                </Col>
            </Grid>
        </div>
    )
}

export default DegreeManual;
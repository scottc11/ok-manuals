import React from "react";
import { AiFillClockCircle } from 'react-icons/ai';
import ManualHeader from "../components/ManualHeader/ManualHeader";
import Image from '../components/Image/Image';
import degree_img from '../media/DEGREE/DEGREE.png';
import degree_svg from '../media/DEGREE/DEGREE.svg';
import degree_switch_legend from '../media/DEGREE/degree-switch-legend.png';
import monophonic_gif from '../media/DEGREE/monophonic-demo.gif';
import quantizer_gif from '../media/DEGREE/quantizer-demo.gif';
import Col from "../components/Col/Col";
import Grid from "../components/Grid/Grid";
import Anchor from "../components/Anchor/Anchor";
import Note from "../components/Note/Note";
import { DEGREE_LEGEND } from "./Degree";
import LegendContainer from "../components/LegendContainer/LegendContainer";
import PanelSVG from "./Degree/PanelSVG";

const DegreeManual = () => {
    return (
        <div>
            <ManualHeader text={'Manual'}/>
            <div>
                {/* <Image source={degree_img} paddingTop={24} paddingBottom={24} /> */}
                <PanelSVG />
                <LegendContainer items={DEGREE_LEGEND} />
            </div>
            <Grid>
                <Col>
                    <h1>
                        <Anchor text="Introduction" />
                    </h1>
                </Col>
                <Col>
                    <p>DEGREE is a performance oriented VCO controller designed around custom manufactured illuminated capacitive touch pads. The modules main purpose is to control the pitch of 4 independent VCOs by interacting with the touch pads.  Additionally, the module can auto-calibrate your VCOs 1v/o tracking, quantize incoming CV, output gate/triggers, apply analog slew/portamento, and has 4 custom “Bender” components for classic synth pitch bend effects.</p>
                    <p>The module is internally clocked with a resolution of 96 pulses per quarter note (PPQN), allowing you to record sequences of touch events / pitch bend action and play them back in real-time.</p>
                    <h3>Each channel consists of the following hardware:</h3>
                    <ul>
                        <li>8 illuminated capacitive touch pads for scale degree selection</li>
                        <li>4 illuminated capacitive touch pads for octave selection</li>
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
                <Col>
                    <h3>Monophonic Sequence Mode</h3>
                </Col>
                <Col>
                    <p>When a channel is in this mode it will constantly listen for new touch and/or bend events, while simultaneously playing back any pre-existing touch or bend events. To add an event, just touch one of the channels touch pads. On touch, the sequencer sets the GATE OUT HIGH, and on release sets the GATE OUT LOW. If a new event overlaps with any pre-existing events, the new event will take priority and any pre-existing events will be permanently over-written.</p>
                </Col>

                <Col>
                    <h3>Quantizer Sequence Mode</h3>
                </Col>
                <Col>
                    <p>In this mode - when you touch a degree - it will enable/disable that degree from an ACTIVE DEGREES list, then insert a “snapshot” of this list as a new event in the sequence. As the sequence progresses, it will update the ACTIVE DEGREES list based on each events “snapshot”.</p>
                </Col>

                <Col>
                    <h3>Sequence Override</h3>
                </Col>
                <Col>
                    <p>After a sequence has been recorded, and RECORD has been disabled, the sequence will continue to playback. In this state, any new TOUCH or BENDER events will now over-ride the current sequence until you release your finger from the touch pad and/or return the Bender to its original position.</p>
                </Col>

                <Col>
                    <h3>Sequence Length</h3>
                </Col>
                <Col>
                    <p>The length of a sequence can range from 2 steps to 32 steps. Each LED in the sequence display accounts for 2 steps.</p>
                    <p>To adjust the length (number of steps) of a sequence, press the LENGTH button.  The Sequencer display will illuminate the length of each channel's sequence. You can now use the BENDERs to increase or decrease the length of a sequence (by pushing / pulling the BENDER up or down). Presently, you can only have sequence lengths of even division. (ie. 2 steps, 4, steps, 6 steps, 8 steps, etc.)</p>
                    <p>NOTE: The Sequencer Display uses 16 LEDs to represent the 32 steps of a sequence.</p>
                </Col>
                <Col>
                    <h3>
                        <Anchor text="Quantizing a Recorded Sequence" />
                    </h3>

                    <p>You can quantize a sequences touch events to quarter notes, 8th nots, 16th notes, 32nd notes, and 64th notes.</p>

                    <p>You can set a channels quantization amount using the "quantize amount" UI. To enter this UI, hold down the ALT + RANGE button. After performing this gesture, the LEDs of each channels degree touch pads will start flashing at varying rates. The rates each LED is flashing at corresponds to the level of quantization. For example, the bottom most LED will be flashing at the same rate as the CLOCK LED. Selecting this value will set the quantization amount to “quarter notes”.</p>

                    <p>Pressing the Quantize button will iterate through each active sequence of touch events and then quantize those events to whichever</p>

                    <p>If you only want to quantize a particular channel, then hold your finger on that channels “select” pad, and then press the quantize button. This will only quantize that channel.</p>
                </Col>
            </Grid>

            <Grid>
                <Col>
                    <h1>Clocking <span><AiFillClockCircle /></span></h1>
                </Col>
                <Col>
                    <p>The internal clock ranges from 20 BPM up to 240 BPM.</p>
                    <p>To use an external clock source for the DEGREE, turn the TEMPO knob all the way to the left. The clock resolution works best when sending the DEGREE 1PPQN (quarter note pulses).</p>
                </Col>                
            </Grid>

            <Grid>
                <Col>
                    <h1>Scale Selection</h1>
                </Col>
                
                <Col size={8}>
                    <p>There are 8 3-stage toggle switches which based on their position determines the scale for all 4 channels.</p>
                    <p>If you toggle any of these switches, all channels will immediately update and output the newly desired scale degree.</p>
                    <p>They are not recordable, nor modifiable via CV.</p>
                    <p>Each position of a toggle switch represents a single semitone. If you change the position of the switch upwards, all 4 channels horizontally will increase their pitch by one semitone. If you go downwards, then it will decrease their pitch by one semitone.</p>
                    <p>If you have each of the 8 toggle switches set in their middle position, then each degree would be a separated by a “whole-tone” (ie. two semi-tones).</p>
                </Col>
                <Col size={4}>
                    <Image source={degree_switch_legend} />
                </Col>
            </Grid>

            <Grid>
                <Col>
                    <h1>The Benders 👌</h1>
                </Col>
                
                <Col>
                    <p>
                        Each of the four channels hosts a dedicated bender module which acts as a conduit between your finger and your modular system. 
                        It can be used in a variety of ways to modify the various outputs of the DEGREE, 
                        as well as provide a modulation source for other modules via its dedicated +-8V CV output.
                    </p>
                    
                    <p>As mentioned, there is a variety of modes a BENDER can be in at any one time. It can either be in Pitch Bend Mode, Ratchet Mode, Pitch Bend + Ratchet Mode, or simply just “off”.</p>
                    
                    <Note>
                        <p>NOTE: regardless of which mode a BENDER is in, it will ALWAYS output the raw CV value. You cannot disable this. (and why would you?!)</p>
                    </Note>
                </Col>
                
                <Col>
                    <h2>
                        <Anchor text="Bender Modes" />
                    </h2>
                    
                    <h3>
                        <Anchor text="Pitch Bend Mode" />
                    </h3>
                    
                    <p>When the 🔃 symbol is illuminated, the BENDER is in “Pitch Bend” mode. In this mode, the BENDER will apply a pitch bend effect to the 1V/O output of that channel.</p>

                    <p>Pitch Bend Range: When holding down the BEND RANGE button, you can set the range in which the BENDER effects the Volt Per Octave output (in semi-tones). There are 8 possible semi-tone ranges: 1, 2, 3, 4, 5, 7, 10, and 12 semi-tones.</p>

                    <h3>
                        <Anchor text="Ratchet Mode" />
                    </h3>
                    
                    <p>When the ⏸ symbol is illuminated, the bender is in “Ratchet” mode, and will directly effect the GATE output of the corresponding channel.</p>

                    <p>When pushing the BENDER “upwards” (ie. towards the top of the module), then the GATE output will begin creating trigger events at an increasing rate (quarter notes ^ 8th notes ^^ 16th notes ^^^ 32nd notes)</p>

                    <p>When pushing the BENDER “downwards” (ie. towards the bottom of the module), then the GATE output will create trigger events that are triplets.</p>

                    <h3>
                        <Anchor text="Pitch Bend + Ratchet Mode" />
                    </h3>

                    <p>In this mode, both the 🔃 and the ⏸ symbols will be illuminated, and thus execute the corresponding modes simultaneously</p>

                    <h3>
                        <Anchor text="OFF Mode" />
                    </h3>

                    <p>There is no good name for this mode, but it is still quite useful. In the case when you don’t want the benders effecting the GATE outputs or the 1VO outputs, but still wish to use the raw CV output of the bender for modulating other modules in your system, use this mode.</p>
                </Col>
                
                
                <Col>
                    <h2>
                        <Anchor text="Bender Sequencing" />
                    </h2>
                    <p>
                        To record the movements of the BENDERs into a channels sequence, enable RECORD and start bending. 
                        The sequencer will record the raw CV values of the bender into the sequence, giving you the option 
                        to apply Pitch Bend or Ratchet effects after the fact, should you wish too.
                    </p>
                </Col>
                
                <Col>
                    <h2>
                        <Anchor text="Bender Calibration" />
                    </h2>
                    
                    <p>The Bender components are very sensitive analog components. Each Bender component in your DEGREE is unique, and react differently from one another. Because of this, they must be calibrated by the on-board microcontroller to obtain the most stable and consistent operation.</p>

                    <p>To enter Bender Calibration Mode, hold down ALT and then press BEND MODE. Once calibration has been initialized, the sequencer display will illuminate the top most and bottom most LEDs. When you see this, start push/pulling the benders to their maximum bend ranges (as limited by the panel). When you have done this for all the benders, hold down ALT and then press BEND MODE to exit the calibration process. The new calibration data will now be saved to flash and preserved between power downs.</p>

                    <Note>
                        NOTE: You should only need to do this once, but it would be worth while to re-calibrate your benders whenever you relocate your modular system - as the temperature of the air does effects the sensitivity of the analog sensors attached to the bender components.
                    </Note>

                    <p><b>Bender Replacement:</b> Should any of your Bender components become faulty, please contact me and I will provide a replacement. You only need a screw driver to replace a Bender component yourself.</p>
                </Col>
                
                <Col>
                    <h1>
                        <Anchor text="Settings and Gestures" />
                    </h1>
                    
                    <p>For each channel, the following settings are stored between power cycles of the module:</p>

                    <ul>
                        <li>1 V/O calibration data</li>
                        <li>Bender calibration data</li>
                        <li>Quantize amount</li>
                        <li>Default Bender mode</li>
                        <li>Pitch Bend range</li>
                    </ul>

                    <p>If you ever want to save or reset the current configuration of the module, use the following gestures 👇.</p>

                    <h3>Config. Reset</h3>                    
                    <p>Holding ALT + the FREEZE button with reset any/all of the the saved configuration data on the module. This includes the 1v/o calibration, the bender calibration, and the various channel settings to their default values.</p>

                    <h3>Config. Save</h3>
                    <p>Holding ALT + the REC button will save the current settings of each channel so you don't need to reconfigure things after a power cycle. This includes what the default bender mode will be on startup, the quantize amount, the Pitch Bend range</p>
                </Col>
            </Grid>
        </div>
    )
}

export default DegreeManual;
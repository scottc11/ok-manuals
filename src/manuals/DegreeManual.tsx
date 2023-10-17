import React, { useState, createContext, useContext } from "react";
import { AiFillClockCircle } from 'react-icons/ai';
import ManualHeader from "../components/ManualHeader/ManualHeader";
import Image from '../components/Image/Image';
import degree_switch_legend from '../media/DEGREE/degree-switch-legend.png';
import monophonic_gif from '../media/DEGREE/monophonic-demo.gif';
import quantizer_gif from '../media/DEGREE/quantizer-demo.gif';
import Col from "../components/Col/Col";
import Grid from "../components/Grid/Grid";
import Anchor from "../components/Anchor/Anchor";
import Note from "../components/Note/Note";
import { ALT_BTN, BENDER, BENDER_MODE_BTN, BENDER_OUTPUT, BENDER_RANGE_BTN, CLOCK_INPUT, CLOCK_LED, CV_INPUT, CV_MODE_BTN, DEGREE_LEGEND, DEGREE_SWITCH, DEGREE_TOUCH_PAD, FREEZE_BTN, GATE_OUTPUT, GLIDE_CONTROL, OCTAVE_TOUCH_PAD, QUANTIZE_BTN, RECORD_BTN, SELECT_PAD, SEQ_DISPLAY, TEMPO_POT, VO_OUTPUT } from "./Degree";
import LegendContainer from "../components/LegendContainer/LegendContainer";
import PanelSVG from "../components/PanelSVG/PanelSVG";
import { ACTIVE_DEGREES, ALT_FIRMWARE, BENDER_CALIBRATION_MODE, BEND_EVENT, CHANNEL, MONOPHONIC_MODE, PITCH_BEND_MODE, QUANTIZER_MODE, QUANTIZE_GRID_UI, RATCHET_MODE, SEQUENCER_MODE, TIME_SIGNATURE, TOUCH_EVENT } from "./Degree/Legend/definitions";
import Definition from "../components/Definition/Definition";
import Link from "../components/Link/Link";
import Section from "../components/Section/Section";
import ContentsContextProvider from "../context";
import TableOfContents from "../components/TableOfContents/TableOfContents";

const DegreeManual = () => {
    return (
        <ContentsContextProvider>
            <ManualHeader text={'DEGREE Manual'}/>

            <PanelSVG />
            
            <TableOfContents />

            <LegendContainer items={DEGREE_LEGEND} />

            <Grid>
                <Col>
                    <h1>
                        <Anchor key={1} text="Introduction" />
                    </h1>
                </Col>
                <Col>
                    <p><span className="accent--blue">DEGREE</span> is a performance oriented VCO controller / sequencer designed around custom manufactured illuminated capacitive touch pads. The modules main purpose is to control the pitch of 4 independent VCOs by interacting with the touch pads.  Additionally, the module can auto-calibrate your VCOs 1v/o tracking, quantize incoming CV, output gate/triggers, apply analog slew/portamento, and has 4 custom <Definition item={BENDER} /> components for pitch bend and ratcheting effects.</p>
                    <p>The module contains 4 identical <Definition item={CHANNEL} plural />, with each channel consisting of the following hardware:</p>
                    <ul>
                        <li><Definition item={DEGREE_TOUCH_PAD} plural />: <span className="accent--silver">{DEGREE_TOUCH_PAD.description}</span></li>
                        <li><Definition item={OCTAVE_TOUCH_PAD} plural />: <span className="accent--silver">{OCTAVE_TOUCH_PAD.description}</span></li>
                        <li><Definition item={GLIDE_CONTROL} />: <span className="accent--silver">{GLIDE_CONTROL.description}</span></li>
                        <li><Definition item={VO_OUTPUT} />: <span className="accent--silver">{VO_OUTPUT.description}</span></li>
                        <li><Definition item={GATE_OUTPUT} />: <span className="accent--silver">{GATE_OUTPUT.description}</span></li>
                        <li><Definition item={CV_INPUT} />: <span className="accent--silver">{CV_INPUT.description}</span></li>
                        <li><Definition item={BENDER} />: <span className="accent--silver">{BENDER.description}</span></li>
                        <li><Definition item={SEQ_DISPLAY} />: <span className="accent--silver">{SEQ_DISPLAY.description}</span></li>
                    </ul>

                    <p>The module has a column of 8 3-stage toggle switches for setting the "scale".</p>

                    <p>The module is internally clocked with a resolution of 96 pulses per quarter note (PPQN), allowing you to record sequences of <Definition item={TOUCH_EVENT} plural /> and <Definition item={BEND_EVENT} plural/> and play them back in real-time.</p>
                    
                </Col>
            </Grid>
            <Grid>
                <Col>
                    <h1><Anchor text="Channel Modes" /></h1>
                    <p>At any given time each channel operates in one of two modes. <Definition item={MONOPHONIC_MODE} /> or <Definition item={QUANTIZER_MODE} />.</p>
                    <p>You can toggle between a channels modes by holding your finger on a <Definition item={SELECT_PAD} /> and pressing the <Definition item={CV_MODE_BTN} />.</p>
                </Col>
                <Col>
                    <h3><Anchor text="Monophonic Mode" /></h3>
                </Col>
                <Col md={12} xl={8}>
                    <p>This is the most basic of modes.</p>
                    <p>For each channel, only one touch pad will be illuminated at a time.</p>
                    <p>Touching any of the touch pads pads immediately outputs the respective scale degrees voltage to that channel's <Definition item={VO_OUTPUT}/>.</p>
                    <p>Additionally, when a touch pad is touched the corresponding channels GATE output is set to HIGH (+5V), and on release set back to LOW (0V).</p>
                </Col>
                <Col md={12} xl={4}>
                    <Image source={monophonic_gif} />
                </Col>
            </Grid>
            <Grid>
                <Col>
                    <h3><Anchor text="Quantizer Mode" /></h3>
                </Col>
                <Col md={12} xl={8}>
                    <p>In quantizer mode, all 8 degrees become available options for incoming CV signals to get latched to. If a touch pad is illuminated, incoming CV can be latched to it.</p>
                    <p>When a CV voltage latches to an active degree, that touch pad LED will dim; the <Definition item={VO_OUTPUT}/> gets updated; and a trigger signal will appear at the <Definition item={GATE_OUTPUT} />.</p>
                </Col>
                <Col md={12} xl={4}>
                    <Image source={quantizer_gif} />
                </Col>
            </Grid>

            <Grid>
                <Col>
                    <h1>Sequencing</h1>
                </Col>
                <Col>
                    <p>Both <Definition item={MONOPHONIC_MODE} /> and <Definition item={QUANTIZER_MODE} /> have the ability to enter a third mode: <Definition item={SEQUENCER_MODE} />. When in sequencer mode, the module will record touch and bend events, map them to a 32 step (96 PPQN) grid, and play them back in real-time.</p>
                    
                    <p>To enable recording, press the <Definition item={RECORD_BTN}/>. The button will illuminate RED to signify recording is now active / enabled.</p>
                    
                    <p>When RECORD is enabled, each channel will constantly listen for new <Definition item={TOUCH_EVENT} plural /> and/or <Definition item={BEND_EVENT} plural /> and add them to the actively running sequence, while simultaneously playing back any pre-existing touch or bend events.</p>
                    
                    <p>As a sequence plays back, new events will overdub / overwrite previously existing events (should they overlap).</p>
                    
                    <p>To disable sequence recording, press the <Definition item={RECORD_BTN} /> once more. If any <Definition item={TOUCH_EVENT} plural /> or <Definition item={BEND_EVENT} plural /> occurred on any of the channels while RECORD was enabled, then those channels will remain in <Definition item={SEQUENCER_MODE} /> and continue to playback the recorded sequence. If during this process a channel didn’t receive any new events, this channel will be reverted to its previous mode (prior to enabling record).</p>

                    <Note>
                        <p><Definition item={ALT_FIRMWARE} />: In the alternate firmware, sequence recording works a little differently. </p>
                        <p>Pressing the <Definition item={RECORD_BTN} /> will "arm" sequence recording (LED will Flash / blink). Recording only gets enabled (or disabled) once beat 1 of the bar rolls over.</p>
                        <p>Note: Although recording theoretically doesn't begin until beat 1 occurs, there is a short grace period no longer then a 16th note prior to beat 1 which will listen for touch events and include them in the recorded sequence (they get quantized to beat 1 of the bar).</p>
                    </Note>
                </Col>
                <Col>
                    <h3>Sequencing in {MONOPHONIC_MODE.label}</h3>
                </Col>
                <Col>
                    <p>To add an event, just touch one of the channels touch pads while record is enabled. On touch, the sequencer sets the GATE OUT HIGH, and on release sets the GATE OUT LOW. If a new event overlaps with any pre-existing events, the new event will take priority and any pre-existing events will be permanently over-written.</p>
                    
                    <h4>Sequence override:</h4>
                    <p>During playback of a sequence, should record be <b>disabled</b>, interacting with the touch pads will <b>override</b> the playback of a sequence.</p>
                    <p>On touch: stops playback of sequence, sets the <Definition item={GATE_OUTPUT}/> HIGH, and outputs the 1VO value associated with that touch pad.</p>
                    <p>On release: sets <Definition item={GATE_OUTPUT} /> LOW, and resumes playback of sequence </p>
                    <Note>
                        <p>When freezing a sequence, the sequence will continue to progress through its steps in the background. This way, the sequence will "pick up where it left off", so to speak.</p>
                    </Note>
                </Col>

                <Col>
                    <h3>Sequencing in {QUANTIZER_MODE.label}</h3>
                </Col>
                <Col>
                    <p>In this mode, a sequence contains a series of <Definition item={ACTIVE_DEGREES} /> <span>"snapshots"</span>.</p>
                    <p>Touching a pad will either add or remove that degree/octave from an <Definition item={ACTIVE_DEGREES} /> list, then insert a “snapshot” of this list and insert it as a new event in the sequence. As the sequence progresses, it will update the <Definition item={ACTIVE_DEGREES} /> list based on each events “snapshot”.</p>
                    <Note>
                        <p><span className="accent--blue">Gesture: </span>If you hold your finger on a channels <Definition item={SELECT_PAD} /> while a sequence is playing back in <Definition item={QUANTIZER_MODE} />, interacting with the touch pads will override the incoming signal at the <Definition item={CV_INPUT} /> and output the 1VO value associated with that touch pad.</p>
                    </Note>
                </Col>

                <Col>
                    <h3>Sequence Length</h3>
                </Col>
                <Col>
                    <p>The length of a sequence can range from 2 steps to 32 steps. Each LED in the sequence display accounts for 2 steps.</p>
                    <p>To adjust the length (number of steps) of a sequence, press the LENGTH button.  The Sequencer display will illuminate the length of each channel's sequence. You can now use the BENDERs to increase or decrease the length of a sequence (by pushing / pulling the BENDER up or down). Presently, you can only have sequence lengths of even division. (ie. 2 steps, 4, steps, 6 steps, 8 steps, etc.)</p>
                    <p>NOTE: The Sequencer Display uses 16 LEDs to represent the 32 steps of a sequence.</p>
                    <Note>
                        <p>
                            <Definition item={ALT_FIRMWARE} />: The sequence length is measured in bars instead of steps. For example, if the <Definition item={TIME_SIGNATURE} /> is set to <b>4/4</b>, the sequence length would either be 4 steps, 8 steps, 12 steps... with a max of 32 steps.
                        </p>
                    </Note>
                </Col>
                <Col>
                    <h3>
                        <Anchor text="Quantizing a Recorded Sequence" />
                    </h3>

                    <p>Using the <Definition item={QUANTIZE_BTN}/>, you can quantize a sequences touch events to a grid of quarter notes, 8th notes, 16th notes, 32nd notes, and 64th notes.</p>

                    <p>You can set a channels quantization amount using the <Definition item={QUANTIZE_GRID_UI} /> UI. To enter this UI, hold down the <Definition item={ALT_BTN} /> + <Definition item={BENDER_RANGE_BTN} />.</p>
                    
                    <p>After performing this gesture, the LEDs of each channels degree touch pads will start flashing at varying rates. The rates at which each LED is flashing corresponds to the level of quantization.</p>

                    <p>For example, the bottom most LED will be flashing at the same rate as the <Definition item={CLOCK_LED} />. Selecting this value will set the quantization amount to “quarter notes”.</p>

                    <p>Once the <Definition item={QUANTIZE_BTN} /> is pressed, the firmware will iterate through each active sequence of touch events (for every channel) and snap those events to whichever <Definition item={QUANTIZE_GRID_UI}/> presently selected.</p>

                    <Note>
                        <p>If you only want to quantize a particular channel, hold your finger on one of the <Definition item={SELECT_PAD} plural/> before pressing the <Definition item={QUANTIZE_BTN}/>. This will only quantize that channel.</p>
                    </Note>
                </Col>
            </Grid>

            <Grid>
                <Col>
                    <h1>Clocking <span><AiFillClockCircle /></span></h1>
                </Col>
                <Col>
                    <p>The internal clock ranges from 20 BPM up to 240 BPM, and is set using the <Definition item={TEMPO_POT} />.</p>
                    <p>If you want to use an external clock source for the DEGREE, plug the external clock signal into the <Definition item={CLOCK_INPUT}/> jack and turn the <Definition item={TEMPO_POT}/> all the way to the left.</p>
                    <Note>
                        <p>NOTE: The clock resolution works best when sending the DEGREE 1PPQN (quarter note pulses).</p>
                    </Note>
                </Col>                
            </Grid>

            <Grid>
                <Col>
                    <h1>Scale Selection</h1>
                </Col>
                
                <Col>
                    <p>There are 8 3-stage toggle switches (<Definition item={DEGREE_SWITCH} />) which, based on their position, determine the musical scale for all 4 channels.</p>
                    <p>If you toggle any of these switches, all channels will immediately update and output the newly desired scale degree.</p>
                    <p>They are not recordable, nor modifiable via CV.</p>
                </Col>

                <Col>
                    <h3>Logic and Theory</h3>
                    <p>The DEGREE is very muched centered around the <Link href="https://en.wikipedia.org/wiki/Chromatic_scale" external>12 notes of western music</Link>.</p>
                    <p>In western music, a scale usually consists of a total of 7 notes, but if you were to include the upper octave you would get 8 notes (ex. <b>C</b>, D, E, F, G, A, B, <b>C</b>).</p>
                    <p>The DEGREE offers the option to build such a scale using the 8 <Definition item={DEGREE_SWITCH} plural e />.</p>
                </Col>

                <Col md={12} xl={8}>
                    <h3>Building a scale</h3>
                    <p>If you want to start from a clean slate when building a <Link href="https://en.wikipedia.org/wiki/Scale_(music)" external>scale</Link>, switch all the <Definition item={DEGREE_SWITCH} plural e /> to their middle position.</p>
                    <p>When all 8 switches are in their middle position, they are each seperated by a whole tone (two semi-tones). In this state, you get what is called a <Link href="https://en.wikipedia.org/wiki/Whole-tone_scale" external>"whole tone scale"</Link>.</p>
                    <p>Each position of a toggle switch represents a single semitone. If you change the position of the switch upwards, all 4 channels horizontally will increase their pitch by one semitone. If you go downwards, then it will decrease their pitch by one semitone.</p>
                </Col>
                <Col md={12} xl={4}>
                    <Image source={degree_switch_legend} />
                </Col>
                <Col>
                    <p>If musical theory isn't your thing and you just want to set-and-forget the configuration of these switches, use the following switch configurations for reference:</p>
                    <h4>Minor Scale:</h4>
                    <ul>
                        <li>Switch 8 :: UP or MIDDLE :: (either a Major 2nd or a minor 3rd)</li>
                        <li>Switch 7 :: MIDDLE :: (Tonic octave)</li>
                        <li>Switch 6 :: MIDDLE :: (minor 7)</li>
                        <li>Switch 5 :: DOWN :: (perfect 5th)</li>
                        <li>Switch 4 :: DOWN :: (perfect 4th)</li>
                        <li>Switch 3 :: DOWN :: (Minor 3rd)</li>
                        <li>Switch 2 :: MIDDLE :: (Major 2nd)</li>
                        <li>Switch 1 :: MIDDLE :: (Tonic)</li>
                    </ul>
                    <h4>Major Scale:</h4>
                    <ul>
                        <li>Switch 8 :: MIDDLE :: (major 2nd)</li>
                        <li>Switch 7 :: DOWN or MIDDLE :: (major 7th or Tonic octave)</li>
                        <li>Switch 6 :: DOWN :: (major 6th)</li>
                        <li>Switch 5 :: DOWN :: (perfect 5th)</li>
                        <li>Switch 4 :: DOWN :: (perfect 4th)</li>
                        <li>Switch 3 :: MIDDLE :: (Minor 3rd)</li>
                        <li>Switch 2 :: MIDDLE :: (Major 2nd)</li>
                        <li>Switch 1 :: MIDDLE :: (Tonic)</li>
                    </ul>
                    <Note>
                        <p><span className="accent--blue">NOTE:</span> In most cases you will usually end up with only 6 of the 7 notes in a scale. This is by design. Learn to flick these switches during your permformance to reach certain notes of a scale. In more advanced cases, they can be used to create <Link href="https://en.wikipedia.org/wiki/Modulation_(music)" external>key changes</Link> during a performance.</p>
                    </Note>
                </Col>
            </Grid>

            <Grid>
                <Col>
                    <h1>The Benders 👌</h1>
                </Col>
                
                <Col>
                    <p>Each of the four channels hosts a dedicated <Definition item={BENDER}/> component to act as a conduit between your finger and your modular system.</p>

                    <p>It can be used in a variety of ways to modify the various outputs of the DEGREE, as well as provide a modulation source for other modules via its dedicated <Definition item={BENDER_OUTPUT} /> (+-8V).</p>
                    
                    <p>As mentioned, there is a variety of modes a <Definition item={BENDER} /> can be in at any one time. It can either be in <Definition item={PITCH_BEND_MODE} />, <Definition item={RATCHET_MODE} />, <Definition item={PITCH_BEND_MODE} /> + <Definition item={PITCH_BEND_MODE} />, or simply just “off”.</p>
                    
                    <Note>
                        <p>NOTE: regardless of which mode a <Definition item={BENDER} /> is in, it will ALWAYS output the raw CV value. You cannot disable this. (and why would you?!)</p>
                    </Note>
                </Col>
                
                <Col>
                    <h2>
                        <Anchor text="Bender Modes" />
                    </h2>
                    
                    <h3>
                        <Anchor text="Pitch Bend Mode" />
                    </h3>
                    
                    <p>When the 🔃 symbol is illuminated, the <Definition item={BENDER} /> is in “Pitch Bend” mode. In this mode, the <Definition item={BENDER} /> will apply a pitch bend effect to the <Definition item={VO_OUTPUT} /> of that channel.</p>

                    <p>Pitch Bend Range: When holding down the <Definition item={BENDER_RANGE_BTN} />, you can set the range in which the <Definition item={BENDER} /> effects the <Definition item={VO_OUTPUT} /> (in semi-tones). There are 8 possible semi-tone ranges: 1, 2, 3, 4, 5, 7, 10, and 12 semi-tones.</p>

                    <h3>
                        <Anchor text="Ratchet Mode" />
                    </h3>
                    
                    <p>When the ⏸ symbol is illuminated, the <Definition item={BENDER} /> is in “Ratchet” mode, and will directly effect the <Definition item={GATE_OUTPUT} /> of the corresponding channel.</p>

                    <p>When pressing the <Definition item={BENDER} /> “upwards” (ie. towards the top of the module), then the <Definition item={GATE_OUTPUT} /> will begin creating trigger events at an increasing rate (quarter notes ^ 8th notes ^^ 16th notes ^^^ 32nd notes), etc.</p>

                    <p>When pulling the <Definition item={BENDER} /> “downwards” (ie. towards the bottom of the module), then the <Definition item={GATE_OUTPUT} /> will create trigger events that are triplets (at an increasing rate).</p>

                    <h3>
                        <Anchor text="Pitch Bend + Ratchet Mode" />
                    </h3>

                    <p>In this mode, both the 🔃 and the ⏸ symbols will be illuminated, and thus execute the corresponding modes simultaneously.</p>

                    <h3>
                        <Anchor text="OFF Mode" />
                    </h3>

                    <p>In the case when you don't want the benders effecting the <Definition item={GATE_OUTPUT} /> or the <Definition item={VO_OUTPUT} />, but still wish to use the raw <Definition item={BENDER_OUTPUT} /> of for modulating other modules in your system, use this mode.</p>
                </Col>
                
                
                <Col>
                    <h2>
                        <Anchor text="Bender Sequencing" />
                    </h2>
                    <p>
                        To record the movements of the <Definition item={BENDER} plural /> into a channels sequence, enable RECORD and start bending. 
                        The sequencer will record the raw CV values of the bender into the sequence, giving you the option 
                        to apply Pitch Bend or Ratchet effects after the fact, should you wish too.
                    </p>
                </Col>
                
                <Col>
                    <h2>
                        <Anchor text="Bender Calibration" />
                    </h2>
                    
                    <p>The <Definition item={BENDER} /> components are very sensitive analog components. Each Bender component in your DEGREE is unique, and will react differently from its neighbor. Because of this, they must be calibrated by the on-board microcontroller to obtain the most stable and consistent operation.</p>

                    <p>To enter <Definition item={BENDER_CALIBRATION_MODE} />, hold down <Definition item={ALT_BTN} /> and then press the <Definition item={BENDER_MODE_BTN} />. Once calibration has been initialized, the sequencer display will illuminate the top most and bottom most LEDs. When you see this, start push/pulling the <Definition item={BENDER} plural /> to their maximum bend ranges (as limited by the panel). When you have done this for all the benders, hold down <Definition item={ALT_BTN} /> and then press the <Definition item={BENDER_MODE_BTN} /> to exit the calibration process. The new calibration data will now be saved in the flash memory of the device and preserved between power cylces.</p>

                    <Note>
                        <p>NOTE: You should only need to do this once, but it would be worth while to re-calibrate your benders whenever you relocate your modular system - as the temperature of the air does effects the sensitivity of the analog sensors attached to the bender components.</p>
                    </Note>

                    <p><b>Bender Replacement:</b> Should any of your Bender components become faulty, please contact me and I will provide a replacement. You only need a screw driver to replace a Bender component yourself 🙂.</p>
                </Col>
                
                <Col>
                    <h1>
                        <Anchor text="Settings and Gestures" />
                    </h1>
                    
                    <p>For each channel, the following settings are stored between power cycles of the module:</p>

                    <ul>
                        <li>1 V/O calibration data</li>
                        <li>Bender calibration data</li>
                        <li>Channel mode</li>
                        <li>Bender mode</li>
                        <li>Pitch Bend range</li>
                        <li>quantize grid</li>
                        <li>The recorded sequence (should one exist)</li>
                    </ul>

                    <p>If you ever want to save or reset the current configuration of the module, use the following gestures 👇.</p>

                    <h3>Config. Reset</h3>                    
                    <p>Holding <Definition item={ALT_BTN} /> + the <Definition item={FREEZE_BTN} /> with reset any/all of the the saved configuration data on the module. This includes the 1v/o calibration, the bender calibration, and the various channel settings to their default values.</p>

                    <h3>Config. Save</h3>
                    <p>Holding <Definition item={ALT_BTN} /> + the <Definition item={RECORD_BTN} /> will save the current settings of each channel so you don't need to reconfigure things after a power cycle.</p>
                </Col>
            </Grid>
        </ContentsContextProvider>
    )
}

export default DegreeManual;
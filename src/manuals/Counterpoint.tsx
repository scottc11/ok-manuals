import React from 'react';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import ContentsContextProvider from '../context';
import Section from '../components/Section/Section';
import Note from '../components/Note/Note';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionSubheading from '../components/SectionSubHeading/SectionSubHeading';
import Link from '../components/Link/Link';

const Counterpoint: React.FC = () => {    
    return (
        <div className="bg-offwhite text-black font-body pb-8">
            <ContentsContextProvider>

                <Section>
                    <h1 className="text-4xl md:text-6xl pt-12 pb-6 font-bold font-bungee">Counterpoint</h1>
                    <h2 className="text-2xl">Eurorack performance sequencer.</h2>
                    <div className="flex flex-row my-4 justify-center">
                        <img className="p-4" src={require('../media/counterpoint/panel.svg')} alt="Counterpoint panel" />
                    </div>
                </Section>

                <Section>
                    <TableOfContents />
                </Section>

                <Section>
                    <SectionHeading title="👋 Introduction" />
                    <div className="bg-white p-4 rounded-lg font-serif my-4">
                        <p className="mb-2">
                            <span className="text-xl font-bold">coun·ter·point</span>
                            <span className="text-onyx/70 italic ml-2">ˈkoun(t)ərˌpoint'</span>
                        </p>
                        <p>
                            <span className="text-onyx/60 italic mr-2">noun</span>
                        </p>
                        <p className="ml-4 mb-4">
                            <span className="text-onyx/70 mr-2">1.</span>
                            <span className="text-onyx/60 italic mr-2">Music</span>
                            <span>the art or technique of setting, writing, or playing a melody or melodies in conjunction with another, according to fixed rules.</span>
                        </p>
                        <p>
                            <span className="text-onyx/60 italic mr-2">verb</span>
                        </p>
                        <p className="ml-4">
                            <span className="text-onyx/70 mr-2">1.</span>
                            <span className="text-onyx/60 italic mr-2">Music</span>
                            <span>add counterpoint to (a melody).</span>
                            <br />
                            <span className="ml-4 text-onyx/40 italic">"the orchestra counterpoints the vocal part"</span>
                        </p>
                    </div>
                    <p>This is <b>COUNTERPOINT</b>. It is a Eurorack module designed to control multiple oscillators in a modular system, with the core focus being to keep each oscillator musically coherent with each other.</p>
                    <p>It uses four channels of <b>brass touch pads</b> (capacitive touch) to control the pitch of four independant oscillators (VCOs), all while containing them to a common musical scale.</p>
                    <p>The scale is set using 8 "scale degree" switches on the module.</p>
                    <p>It is very hands on and <b>performative</b>. It features a sequencer that allows you to record and playback sequences of notes played on the touch pads.</p>
                    <p>Counterpoint also features a few extra bells and whistles such as an <b>arpeggiator</b>, per channel <b>CV quantization</b>, and per channel <b>pitch bend / portamento</b> effects.</p>
                    <p>This manual will guide you through the various features and functions of the Counterpoint 🤓.</p>
                    <p>For more info on the name, check out <a className="text-azure hover:text-azure/80 underline" href="https://en.wikipedia.org/wiki/Counterpoint" target="_blank" rel="noopener noreferrer">this wikipedia page</a>.</p>
                </Section>

                {/* <Section>
                    <SectionHeading title="🔌 Setup and installation" />
                    <p>How the hoot do you plug this thing in!? 🤔</p>
                    <p>Whats in the box?</p>
                    <p>How do you mount it?</p>
                    <p>How do you hook it up to your Eurorack system?</p>
                </Section> */}

                <Section>
                    <SectionHeading title="🔄 Inputs / outputs" />
                    <div className="flex flex-row m-6 justify-center">
                        <img className="bg-panel p-4 w-3/4" src={require('../media/counterpoint/panel_jacks.svg')} alt="sequence length and meter" />
                    </div>

                    <p>The input / output jacks are split into two sections. On the right side there is a grid of jacks corresponding to each channel (channel A, B, C, D), and on the left side are jacks corrosponding to "universal" controls for all channels.</p>

                    <SectionSubheading title="Channel in/out" />

                    <p>The input / output jacks are arranged as a grid. Each column (A, B, C, D) in the grid contains the input / output jacks for a channel.</p>
                    
                    <p>The rows of the grid corrospond to the type of input / output jack:</p>

                    <table className="w-full mb-4 border-collapse">
                        <thead>
                            <tr className="border-b-2 border-black">
                                <th className="text-left">Label</th>
                                <th className="text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-bold pr-4">1VO</td>
                                <td>1 volt per octave output (-1V to 9V range)</td>
                            </tr>
                            <tr>
                                <td className="font-bold pr-4">GATE</td>
                                <td>5V gate signal</td>
                            </tr>
                            <tr>
                                <td className="font-bold pr-4">B CV</td>
                                <td>CV control over channel slew OR "pitch bend" of 1VO output</td>
                            </tr>
                            <tr>
                                <td className="font-bold pr-4">Q CV</td>
                                <td>When a channel is in Quantizer mode, the voltage present on this input will be quantized to the nearest scale degree</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <SectionSubheading title="Global in/out" />
                    <p>Additionally, there is an isolated column for "global" CV control:</p>
                    
                    <p><b>CLOCK</b>: A clock signal must be present here in order for time related functions to work. See the <b>Clocking</b> section for more information.</p>
                    <p><b>RESET</b>: Reset any active sequences to beat one. (it will wait till the next quarter note occurs before resetting)</p>
                    <p><b>DIR CV</b>: CV control over the direction of the arpeggiator.</p>
                    <p><b>RATE CV</b> CV control over the rate of the arpeggiator.</p>
                </Section>

                <Section>
                    <SectionHeading title="⏰ Clocking" />
                    <p>"Clocking" is the process of using an external clock signal to synchronize the module with the rest of your system. <b>It is necessary for the module to function properly.</b></p>
                    <p>Presently, the Counterpoint can only be clocked externally via the <b>CLOCK</b> input jack.</p>
                    <p>Ideally you will want to use a 1/4 note (quarter note) pulse signal at the <b>CLOCK</b> input jack. The onboard microcontroller will divide this signal into a 24 PPQN (pulses per quarter note) grid in order to achieve various time related functions (sequencing, arpeggiation, etc).</p>
                    <Note>
                        <p>The internal clock will never exceed 240 BPM nor go below 40 BPM (regardless of the clock signal present at the <b>CLOCK</b> input jack).</p>
                    </Note>
                </Section>

                <Section>
                    <hr></hr>
                </Section>

                <Section>
                    <SectionHeading title="🎛️ Channel Modes" />
                    <p className="text-xl">Each channel can be in one of three modes: <b>MONOPHONIC</b> mode, <b>QUANTIZER</b> mode, or <b>ARPEGGIATOR</b> mode.</p>

                    <SectionSubheading title="Monophonic Mode" />
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="basis-full md:basis-2/3">
                            <p>This is the default mode for each channel when the module is powered on.</p>
                            <p>In this mode, the module will output a precise voltage corrosponding to the last touched scale degree.</p>
                            <p>As long as a degree or octave pad is touched, that channels <b>GATE output</b> will be HIGH.</p>
                            <p>When a channel is in MONOPHONIC mode, both the [Q] and [A] symbols will be dimmed.</p>
                        </div>
                        <div className="basis-full md:basis-1/3">
                            <div className="flex flex-row justify-center h-48 m-4">
                                <img className="bg-panel p-4" src={require('../media/counterpoint/channel_mode_symbols.svg')} alt="monophonic mode symbols" />
                            </div>
                        </div>
                    </div>

                    <SectionSubheading title="Quantizer Mode" />
                    <p>In this mode, a channel will detect the voltage present on the <b>Q CV</b> input jack and remap that voltage to the nearest scale degree.</p>
                    <p>You can use the touch pads to activate/deactivate scale degrees and octaves, limiting the range of the <b>1VO</b> output.</p>
                    <p>To enter a channel into <b>QUANTIZER</b> mode, press the <b>Q ON</b> button while touching the <b>SELECT PAD</b> for that channel. The <b>[Q]</b> symbol for that channel will illuminate.</p>
                    <div className="flex flex-row justify-center m-4 gap-8">
                        <img className="w-1/3 bg-panel p-4" src={require('../media/counterpoint/bend_mode_toggle.svg')} alt="bend mode toggle" />
                        <img className="w-1/3 bg-panel p-4" src={require('../media/counterpoint/quant_toggle.svg')} alt="quantizer mode symbols" />
                    </div>
                    
                    <SectionSubheading title="Arpeggiator Mode" />
                    <p>In this mode, a channel will arpeggiate all the currently touched scale degrees based on the active rate and direction of the Arpeggiator.</p>
                    <p>A channels <b>[ARP]</b> symbol will illuminate when the channel is in <b>ARPEGGIATOR</b> mode.</p>
                    <div className="flex flex-row justify-center m-4">
                        <img className="w-1/3 bg-panel p-4" src={require('../media/counterpoint/arp_toggle.svg')} alt="arpeggiator mode symbols" />
                    </div>
                    <p>See the <b>Arpeggiator</b> section for more information.</p>
                    
                </Section>

                <Section>
                    <SectionHeading title="🎼 Scale Degree Switches" />
                    <div className="flex flex-col md:flex-row">
                        <div className="basis-full md:basis-3/4">
                            <p>Each channel has 8 <b><u>scale degree</u></b> switches which can be used to construct a <u>common scale between all 4 channels</u>.</p>
                            <p>
                                When all 8 switches are in their middle position, they are each seperated by a whole tone (two semi-tones). In this state, you get what is called a "whole tone scale".
                            </p>
                            <p>
                                Each position of a toggle switch represents a single semitone. If you change the position of the switch upwards, all 4 channels horizontally will increase their pitch by one semitone. If you go downwards, then it will decrease their pitch by one semitone.
                            </p>
                            <p>
                                If musical theory isn't your thing, use the following switch configurations to get a major or a minor scale <span className="text-xs">(and everything will sound nice 🌈)</span>:
                            </p>
                            <h3 className="text-xl mb-2"><b>Major Scale</b></h3>
                            <table className="w-full mb-8 border-collapse text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black">
                                        <th className="text-left">Switch</th>
                                        <th className="text-left">Position</th>
                                        <th className="text-left">Scale degree</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>8 (top)</td>
                                        <td>CENTER</td>
                                        <td>Major 2nd</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>DOWN or CENTER</td>
                                        <td>Major 7th or Tonic octave</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>DOWN</td>
                                        <td>Major 6th</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>DOWN</td>
                                        <td>Perfect 5th</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>DOWN</td>
                                        <td>Perfect 4th</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>CENTER</td>
                                        <td>Minor 3rd</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>CENTER</td>
                                        <td>Major 2nd</td>
                                    </tr>
                                    <tr>
                                        <td>1 (bottom)</td>
                                        <td>CENTER</td>
                                        <td>Tonic</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3 className="text-xl mb-2"><b>Minor Scale</b></h3>
                            <table className="w-full mb-8 border-collapse text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black">
                                        <th className="text-left">Switch</th>
                                        <th className="text-left">Position</th>
                                        <th className="text-left">Scale degree</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>8 (top)</td>
                                        <td>UP or CENTER</td>
                                        <td>Either a Major 2nd or a minor 3rd</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>CENTER</td>
                                        <td>Tonic octave</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>CENTER</td>
                                        <td>Minor 7th</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>DOWN</td>
                                        <td>Perfect 5th</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>DOWN</td>
                                        <td>Perfect 4th</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>DOWN</td>
                                        <td>Minor 3rd</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>CENTER</td>
                                        <td>Major 2nd</td>
                                    </tr>
                                    <tr>
                                        <td>1 (bottom)</td>
                                        <td>CENTER</td>
                                        <td>Tonic</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="order-first sm:order-last basis-full md:basis-1/4">
                            <div className="flex flex-row justify-center h-96 m-4">
                                <img className="bg-panel p-4" src={require('../media/counterpoint/scale_degree_switches.svg')} alt="scale degree switches" />
                            </div>
                        </div>
                    </div>
                </Section>


                <Section>
                    <SectionHeading title="⤴️ Pitch Bend / Portamento" />
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="basis-full order-first md:order-last md:basis-1/4">
                            <div className="flex flex-row justify-center h-48 md:h-96 m-4">
                                <img className="bg-panel p-4" src={require('../media/counterpoint/bend_controls.svg')} alt="bend controls" />
                            </div>
                        </div>

                        <div className="basis-full md:basis-3/4">
                            <p>Each channel can apply one of <b>PORTAMENTO</b> or <b>PITCH BEND</b> to the <b>1VO</b> output using the vertical <b>sliders</b> and the <b>B CV</b> input.</p>

                            <p><b>PORTAMENTO</b>: Smoothly move between scale degrees</p>
                            <p><b>PITCH BEND</b>: Converts the control voltage present on the <b>B CV</b> input to an unquantized value between 1 and 12 semitones (in both directions).</p>

                            <p>You can toggle the <b>BEND MODE</b> of a channel by pressing the <b>B MODE</b> button while touching the <b>SELECT PAD</b> for that channel.</p>
                            <div className="flex flex-row justify-center m-4">
                                <img className="w-1/3 bg-panel p-2" src={require('../media/counterpoint/bend_mode_toggle.svg')} alt="bend mode toggle" />
                            </div>
                            
                            <p>Both the <b>SLIDER</b> and the <b>B CV</b> input operate differently depending on which <b>BEND MODE</b> the channel is in.</p>

                            <p>In <b>PORTAMENTO</b> mode, the <b>SLIDER</b> sets the amount of time it takes for a channel to move between scale degrees, and CV at the <b>B CV</b> input will add or subtract from that time.</p>
                            <p>In <b>PITCH BEND</b> mode, the <b>SLIDER</b> acts as an attenuator for the control voltage present on the <b>B CV</b> input.</p>

                            <Note>
                                <p>Note: the CV input range for the B CV input is <b>-10V to 10V</b>.</p>
                            </Note>
                        </div>
                    </div>
                </Section>

                <Section>
                    <SectionHeading title="🎵 Arpeggiator" />

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="basis-full order-first md:order-last md:basis-1/4">
                            <div className="flex flex-row justify-center m-4">
                                <img className="bg-panel h-48 md:h-96 p-4" src={require('../media/counterpoint/panel_arp.svg')} alt="Arpeggiator" />
                            </div>
                        </div>
                        
                        <div className="basis-full md:basis-3/4">
                            <p>The arpeggiator is a tool that allows you to play back all of the currently touched scale degrees as an arpeggio at varrying rates.</p>
                            <p>To enable the arpeggiator, touch one of the four ARP RATE pads. As long as one of the ARP RATE pads is touched, any channel that was previously in MONOPHONIC mode will enter in to ARPEGGIATOR mode.</p>
                            <p>As soon as you release the ARP RATE pad, all channels will revert back to MONOPHONIC mode.</p>
                            <p>If you wish to have a channel remain in ARPEGGIATOR mode even after the ARP RATE pad is released, press the ARP LOCK button while touching the SELECT PAD for that channel. Perform the same gesture to exit a channel from ARPEGGIATOR mode.</p>
                            <p>Additionally, pressing the ARP LOCK button without any SELECT PADs being touch will toggle the ARP LOCK for all channels.</p>
                        </div>
                    </div>
                    <Note>
                        <p>Note: Enabling / disabling the arpeggiator will only work if a channel is in MONOPHONIC mode. If it is in QUANTIZER mode, the arpeggiator will not be enabled / disabled.</p>
                    </Note>

                    <SectionSubheading title="Arp Rate" />
                    <p>The arp rate can be set to quarter notes (1/4), eighth notes (1/8), sixteenth notes (1/16), or thirty second notes (1/32).</p>
                    <p>Additionally, if you hold the TRIPLET pad in conjunction with an ARP RATE pad, the arp rate will be set to a triplet of the selected note value.</p>
                    <p>To set the arp rate, touch one of the four <b>ARP RATE</b> pads. The arp rate will change based on the <b>highest arp rate</b> that is touched.</p>

                    <p>The arp rate can also be CV controlled via the <b>RATE CV</b> input (0V to 10V).</p>

                    <SectionSubheading title="Arp Direction" />
                    <p>The arp direction can be set to UP, DOWN, UP/DOWN, or ORDER.</p>
                    <p>To set the arp direction, press the ARP DIR button and use the ARP RATE pads to select the direction.</p>
                    <p>The arp direction can also be CV controlled via the DIR CV input.</p>

                </Section>

                <Section>
                    <SectionHeading title="🎹 Sequencing" />

                    <div className="flex flex-row m-6 justify-center">
                        <img className="bg-panel p-4 w-2/3" src={require('../media/counterpoint/panel_seq_actions.svg')} alt="sequencer actions" />
                    </div>

                    <p className="pt-4">If you have not already noticed, there is a really large <b>RECORD</b> button on the module. This button is used to record interactions with a channels touch pads (and play them back as a sequence).</p>
                    

                    <SectionSubheading title="Recording a sequence" />
                    <p>After pressing the <b className="bg-lava text-black p-1 rounded-sm">RECORD</b> button it will begin to illuminate red. This indicates <b>all channels</b> are primed for sequencing.</p>

                    <p>Once a channel is primed for sequencing, it will playback any touch events that occur on that channels touch pads. This includes the octave pads.</p>

                    <p>As a sequence plays back, new events will overdub / overwrite previously existing events (should they overlap).</p>

                    <p>If this is not already obvious, each channel can be sequenced independently.</p>
                    
                    <Note>
                        <p>Note: Once a sequence is created for a channel, the meter of that sequence will be locked and no longer follows the active meter displayed on the panel.</p>
                        <p>For example, one channel can have a sequence playing back in a meter of 3/4, and another channel can have a sequence playing back in a meter of 4/4.</p>
                    </Note>
                    
                    <SectionSubheading title="Sequence length and meter" />

                    <div className="flex flex-row m-4 justify-center">
                        <img className="bg-panel py-4 px-8 w-2/3" src={require('../media/counterpoint/sequence_length_meter.svg')} alt="sequence length and meter" />
                    </div>

                    <SectionSubheading title="Sequence length" />

                    <div className="flex flex-row items-center">
                        <div className="basis-full order-first md:order-last md:basis-1/3">
                            <div className="flex flex-row justify-center m-4">
                                <img className="bg-panel p-4" src={require('../media/counterpoint/seq_length.svg')} alt="sequence length" />
                            </div>
                        </div>
                        <div className="basis-full md:basis-2/3">
                            <p>A sequences length is determined by both the BARS and the METER settings.</p>
                            <p>If BARS is set to <b>[A]</b>, the sequence length will continue to increment (by bars, not steps) as long as record is enabled.</p>
                            <p>If BARS is set to one of <b>[2]</b>, <b>[4]</b>, or <b>[8]</b>, then the sequence length will be preset to that number of bars.</p>
                            <p>Additionally, you can append one bar to a channels sequence by holding down the corrosponing <b>SELECT PAD</b> and pressing the <b>RECORD</b> button.</p>
                        </div>
                    </div>

                    <Note>
                        <p>How AUTO sequence length works: As long as RECORD is enabled and bars is set to AUTO, the length of a sequence will automatically increase in increments of one bar as time passes. Once you feel the sequence is long enough, you can press the RECORD button again to disable recording.</p>
                    </Note>                    
                    
                    <SectionSubheading title="Sequence meter" />
                    <div className="flex flex-row items-center">
                        <div className="basis-full order-first md:order-last md:basis-1/3">
                            <div className="flex flex-row justify-center m-4">
                                <img className="bg-panel p-4" src={require('../media/counterpoint/seq_meter.svg')} alt="sequence meter" />
                            </div>
                        </div>
                        <div className="basis-full md:basis-2/3">
                            <p>A sequence's 'meter' is the number of beats in a bar. It can be set to <b>[3/4]</b>, <b>[4/4]</b>, <b>[5/4]</b>, or <b>[7/4]</b>.</p>
                            <p>To set the meter of a sequence, press the button between the <b>BARS</b> and <b>METER</b> display while holding down the <b>ALT</b> button.</p>
                            <p>Any new sequences will automatically be set to the active meter. Any existing sequences will not change.</p>
                            <p>To see the meter of an existing sequence, hold the <b>SELECT PAD</b> for that channel. The associated meter will begin pulsing.</p>
                        </div>
                    </div>
                    
                    <SectionSubheading title="Sequencing in Monophonic Mode" />
                    <p>When sequencing a channel that is in <b>MONOPHONIC</b> mode, all touch events to the octave touch pads and degree touch pads will be recorded and played backas a sequence.</p>
                    <p>As long as <b>RECORD</b> is enabled, you can continue adding new events to the sequence.</p>
                    <p>If an new event occurs at the same time as a previous event, the previous event will be overwritten.</p>
                    <p>Additionally, all events which occur before a new event is "released" will be deleted / overwritten by the new event.</p>
                    <Note>
                        <p><b>Sequence Override:</b> If a sequence is playing back and RECORD <b>is not</b> enabled, interacting with the touch pads will override the sequence and output + hold the last touched scale degree. Releasing your finger will re-activate playback of the sequence.</p>
                    </Note>

                    <SectionSubheading title="Sequencing in Quantizer Mode" />
                    <p>When sequencing a channel that is in <b>QUANTIZER</b> mode, touching a degree / octave pad <b>will add a "snapshot"</b> of the current active scale degrees (minus the one you just touched) to the sequence.</p>

                    <SectionSubheading title="Sequencing with the arpeggiator" />
                    <p>You can use the arpeggiator to add events to a sequence, but only when that channel is in <b>MONOPHONIC</b> mode.</p>
                    <p>The <b>GATE</b> associated with events created with the arpeggiator are treated as "trigger" events.</p>
                    
                    <SectionSubheading title="Clear a sequence" />
                    <p>Pressing the <b>CLEAR</b> button will "clear" / delete all sequences.</p>
                    <p>If you want to clear a sequence for a single channel, press the <b>CLEAR</b> button while touching that channel's <b>SELECT PAD</b>.</p>

                    <SectionSubheading title="Reset a sequence" />
                    <p>Pressing the <b>RESET</b> button will reset the sequence, but not immediately. It will wait until the next quarter note occurs before resetting.</p>

                    <SectionSubheading title="Quantizing a sequence" />
                    <p>Pressing <b>ALT</b> + <b>RECORD</b> will "snap" all touch events <b>in all</b> active sequences to a grid of 32nd notes.</p>
                    <p>If you wish quantization to occur automatically, enter <b>SETTINGS</b> and make sure the <b>AQ</b> row is illuminated.</p>
                    <p>If you want to quantize only a single sequence, press the <b>ALT</b> + <b>RECORD</b> button while touching the <b>SELECT PAD</b> for that channel.</p>
                </Section>


                <Section>
                    <SectionHeading title="👌 Gestures" />
                    <p>Counterpoint features a number of gestures which alter the behavior of a particular channel mode, usually to aid in live performance.</p>

                    <table className="w-full mb-4 border-collapse">
                        <thead>
                            <tr className="border-b-2 border-black">
                                <th className="text-left w-1/3">Gesture</th>
                                <th className="text-left w-2/3">Effect</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-dotted border-black pt-4">
                                <td>
                                    SELECT PAD + RECORD
                                </td>
                                <td>
                                    Adds one bar to the actively running sequence, or creates a new sequence with a length of one bar.
                                </td>
                            </tr>
                            <tr className="border-b border-dotted border-black pt-4">
                                <td>
                                    TRIPLET + OCTAVE PAD
                                </td>
                                <td>
                                    Applies an octave offset to the active sequence of the corrosponding channel. (top octave pad is +1 octave, bottom is -1 octave)
                                </td>
                            </tr>
                            <tr className="border-b border-dotted border-black pt-4">
                                <td>
                                    TRIPLET + ARP RATE PAD
                                </td>
                                <td>
                                    Sets the arp rate to a triplet of the corrosponding note value.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </Section>
                
                <Section>
                    <SectionHeading title="📝 Specifications" />
                    <table className="w-full mb-4 border-collapse">
                        <thead>
                            <tr className="border-b-2 border-black">
                                <th className="text-left">Parameter</th>
                                <th className="text-left">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-dotted border-black pt-4">
                                <td className="pt-2">Power consumption</td>
                                <td className="pt-2">+12V rail 60mA, -12V rail 10mA, 5V rail n/a</td>
                            </tr>
                            <tr className="border-b border-dotted border-black">
                                <td className="pt-2">HP</td>
                                <td className="pt-2">42</td>
                            </tr>
                        </tbody>
                    </table>    
                </Section>
            </ContentsContextProvider>
        </div>
    )
}

const ui = {
    bars: {
        label: "bars"
    }
}

export default Counterpoint;
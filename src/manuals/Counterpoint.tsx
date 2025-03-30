import React from 'react';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import ContentsContextProvider from '../context';
import Section from '../components/Section/Section';
import Note from '../components/Note/Note';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionSubheading from '../components/SectionSubHeading/SectionSubHeading';
import Link from '../components/Link/Link';
import { AiOutlineDownload } from 'react-icons/ai';
import { TbCircuitPushbutton } from 'react-icons/tb';
import FirmwareUpdater from '../views/FirmwareUpdater';
import Code from '../components/Code/Code';

const Label = ({children}: {children: React.ReactNode}) => {
    return (
        <span className="text-azure font-unica p-1 rounded-sm">
            {children}
        </span>
    )
}

const Highlight = ({children}: {children: React.ReactNode}) => {
    return (
        <span className="text-black bg-lime/50 font-bold p-1 rounded-sm">
            {children}
        </span>
    )
}

const Micro = ({children}: {children: React.ReactNode}) => {
    return (
        <span className="text-onyx/60 italic text-sm">
            {children}
        </span>
    )
}

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
                    <p>This is <Label>COUNTERPOINT</Label>. It is a Eurorack module designed to <u>control multiple oscillators</u> in a modular system, with the core focus being to keep each oscillator musically coherent with each other.</p>
                    <p>It uses four channels of <b>brass touch pads</b> (capacitive touch) to control the pitch of four independant oscillators (VCOs), all while containing them to a common musical scale.</p>
                    <p>The scale is set using 8 "scale degree" switches on the module.</p>
                    <p>It is very hands on and <b>performative</b>. It features a sequencer that allows you to record and playback sequences of notes played on the touch pads.</p>
                    <p>Counterpoint also features a few extra bells and whistles such as an <Label>arpeggiator</Label>, per channel <Label>CV quantization</Label>, and per channel <Label>pitch bend / portamento</Label> effects.</p>
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

                    <p>The input / output jacks are split into two sections. On the right side there is a grid of jacks corresponding to each channel (channel <Label>A</Label>, <Label>B</Label>, <Label>C</Label>, <Label>D</Label>), and on the left side are jacks corrosponding to "universal" controls for all channels.</p>

                    <SectionSubheading title="Channel in/out" />

                    <p>The input / output jacks are arranged as a grid. Each column (<Label>A</Label>, <Label>B</Label>, <Label>C</Label>, <Label>D</Label>) in the grid contains the input / output jacks for a channel.</p>
                    
                    <p>The rows of the grid corrospond to the type of input / output jack:</p>

                    <table className="w-full mb-4 border-collapse">
                        <thead>
                            <tr className="border-b-2 border-black">
                                <th className="text-left w-32">Label</th>
                                <th className="text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-bold pr-4"><Label>1VO</Label></td>
                                <td>1 volt per octave output (-1V to 9V range)</td>
                            </tr>
                            <tr>
                                <td className="font-bold pr-4"><Label>GATE</Label></td>
                                <td>5V gate signal</td>
                            </tr>
                            <tr>
                                <td className="font-bold pr-4"><Label>B CV</Label></td>
                                <td>CV control over channel slew OR "pitch bend" of 1VO output</td>
                            </tr>
                            <tr>
                                <td className="font-bold pr-4"><Label>Q CV</Label></td>
                                <td>When a channel is in Quantizer mode, the voltage present on this input will be quantized to the nearest scale degree</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <SectionSubheading title="Global in/out" />
                    <p>Additionally, there is an isolated column for "global" CV control:</p>
                    
                    <table className="w-full mb-4 border-collapse">
                        <thead>
                            <tr className="border-b-2 border-black">
                                <th className="text-left w-32">Label</th>
                                <th className="text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-bold pr-4"><Label>CLOCK</Label></td>
                                <td>A clock signal must be present here in order for time related functions to work. See the <b>Clocking</b> section for more information.</td>
                            </tr>
                            <tr>
                                <td className="font-bold pr-4"><Label>RESET</Label></td>
                                <td>Reset any active sequences to beat one. (it will wait till the next quarter note occurs before resetting)</td>
                            </tr>
                            <tr>
                                <td className="font-bold pr-4"><Label>DIR CV</Label></td>
                                <td>CV control over the direction of the arpeggiator.</td>
                            </tr>
                            <tr>
                                <td className="font-bold pr-4"><Label>RATE CV</Label></td>
                                <td>CV control over the rate of the arpeggiator.</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>



                <Section>
                    <SectionHeading title="⏰ Clocking" />
                    <p>"Clocking" is the process of using an external clock signal to synchronize the module with the rest of your system. <Highlight>It is necessary for the module to function properly.</Highlight></p>
                    <p>Presently, the Counterpoint can only be clocked externally via the <Label>CLOCK</Label> input jack.</p>
                    <p>Ideally you will want to use a 1/4 note (quarter note) pulse signal at the <Label>CLOCK</Label> input jack. The onboard microcontroller will divide this signal into a 24 PPQN (pulses per quarter note) grid in order to achieve various time related functions (sequencing, arpeggiation, etc).</p>
                    <Note>
                        <p>Note: The internal clock will never exceed 240 BPM nor go below 40 BPM (regardless of the clock signal present at the CLOCK input jack).</p>
                    </Note>
                </Section>




                <Section>
                    <hr></hr>
                </Section>

                <Section>
                    <SectionHeading title="🎛️ Channel Modes" />
                    <p className="text-xl">Each channel can be in one of three modes: <Label>MONOPHONIC</Label> mode, <Label>QUANTIZER</Label> mode, or <Label>ARPEGGIATOR</Label> mode.</p>

                    <SectionSubheading title="Monophonic Mode" />
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="basis-full md:basis-2/3">
                            <p>This is the default mode for each channel when the module is powered on.</p>
                            <p>In this mode, the module will output a precise voltage corrosponding to the last touched scale degree.</p>
                            <p>As long as a degree or octave pad is touched, that channels <Label>GATE</Label> output will be <b>HIGH</b>.</p>
                            <p>When a channel is in MONOPHONIC mode, both the <Label>[Q]</Label> and <Label>[A]</Label> symbols will be dimmed.</p>
                        </div>
                        <div className="basis-full md:basis-1/3">
                            <div className="flex flex-row justify-center h-48 m-4">
                                <img className="bg-panel p-4" src={require('../media/counterpoint/channel_mode_symbols.svg')} alt="monophonic mode symbols" />
                            </div>
                        </div>
                    </div>

                    <SectionSubheading title="Quantizer Mode" />
                    <p>In this mode, a channel will detect the voltage present on the <Label>Q CV</Label> input jack and remap that voltage to the nearest scale degree.</p>
                    <p>You can use the touch pads to activate/deactivate scale degrees and octaves, limiting the range of the <Label>1VO</Label> output.</p>
                    <p>To enter a channel into <Label>QUANTIZER</Label> mode, press the <Label>Q ON</Label> button while touching the <Label>SELECT PAD</Label> for that channel. The <Label>[Q]</Label> symbol for that channel will illuminate.</p>
                    <div className="flex flex-row justify-center m-4 gap-8">
                        <img className="w-1/3 bg-panel p-4" src={require('../media/counterpoint/bend_mode_toggle.svg')} alt="bend mode toggle" />
                        <img className="w-1/3 bg-panel p-4" src={require('../media/counterpoint/quant_toggle.svg')} alt="quantizer mode symbols" />
                    </div>
                    
                    <SectionSubheading title="Arpeggiator Mode" />
                    <p>In this mode, a channel will arpeggiate all the currently touched scale degrees based on the active rate and direction of the Arpeggiator.</p>
                    <p>A channels <Label>[ARP]</Label> symbol will illuminate when the channel is in <Label>ARPEGGIATOR</Label> mode.</p>
                    <div className="flex flex-row justify-center m-4">
                        <img className="w-1/3 bg-panel p-4" src={require('../media/counterpoint/arp_toggle.svg')} alt="arpeggiator mode symbols" />
                    </div>
                    <p>See the <Label>Arpeggiator</Label> section for more information.</p>
                    
                </Section>

                <Section>
                    <SectionHeading title="🎼 Scale Degree Switches" />
                    <div className="flex flex-col md:flex-row">
                        <div className="basis-full md:basis-3/4">
                            <p>Each channel has 8 <Label>scale degree switches</Label> which can be used to construct a <Highlight>common scale between all 4 channels</Highlight>.</p>
                            
                            <p>Each position of a toggle switch represents a single semitone. If you change the position of a switch upwards, all 4 channels horizontally will increase their pitch by one semitone. If you go downwards, then it will decrease their pitch by one semitone.</p>
                            
                            <p>For example, when all 8 switches are in their middle position, all 8 scale degrees of each channel will be seperated by a whole tone (two semi-tones). In this state, you get what is called a "whole tone scale".</p>
                            
                            <p>You can adjust the position of the switches to create major scales, minor scales, and everything in between.</p>
                            
                            <p>
                                If musical theory isn't your thing, use the following switch configurations to get a major or a minor scale <span className="text-xs">(and everything will sound nice 🌈)</span>:
                            </p>
                            
                            <h3 className="text-xl mb-2"><b>Major Scale</b></h3>
                            <table className="w-full mb-8 border-collapse text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black pb-2">
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
                            <p>Each channel can apply one of <Label>PORTAMENTO</Label> or <Label>PITCH BEND</Label> to the <Label>1VO</Label> output using the vertical <Label>sliders</Label> and the <Label>B CV</Label> input.</p>

                            <table className="w-full mb-8 border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-black">
                                        <th className="text-left w-32">Mode</th>
                                        <th className="text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="font-bold pr-4"><Label>PORTAMENTO</Label></td>
                                        <td>Smoothly move between scale degrees</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold pr-4"><Label>PITCH BEND</Label></td>
                                        <td>Converts the control voltage present on the <Label>B CV</Label> input to an unquantized value between 1 and 12 semitones (in both directions)</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p>You can toggle the <Label>BEND MODE</Label> of a channel by pressing the <Label>B MODE</Label> button while touching the <Label>SELECT PAD</Label> for that channel.</p>
                            <div className="flex flex-row justify-center m-4">
                                <img className="w-1/3 bg-panel p-2" src={require('../media/counterpoint/bend_mode_toggle.svg')} alt="bend mode toggle" />
                            </div>
                            
                            <p>Both the <Label>SLIDER</Label> and the <Label>B CV</Label> input operate differently depending on which <Label>BEND MODE</Label> the channel is in.</p>

                            <p>In <Label>PORTAMENTO</Label> mode, the <Label>SLIDER</Label> sets the amount of time it takes for a channel to move between scale degrees, and CV at the <Label>B CV</Label> input will add or subtract from that time.</p>
                            <p>In <Label>PITCH BEND</Label> mode, the <Label>SLIDER</Label> acts as an attenuator for the control voltage present on the <Label>B CV</Label> input.</p>

                            <Note>
                                <p>Note: the CV input range for the <Label>B CV</Label> input is <b>-10V to 10V</b>.</p>
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
                            <p>The <Label>ARPEGGIATOR</Label> is a tool that allows you to play back all of the currently touched scale degrees as an arpeggio at varrying rates.</p>
                            
                            <p>To enable the arpeggiator, touch one of the four <Label>ARP RATE</Label> pads. As long as one of the <Label>ARP RATE</Label> pads is touched, any channel that was previously in <Label>MONOPHONIC</Label> mode will enter in to <Label>ARPEGGIATOR</Label> mode.</p>

                            <p>In this state, interacting with the <Label>TOUCH PADS</Label> of a channel will immediately play back the selected scaled degrees as an arpeggio. The arpeggio will play back at the rate set by the <Label>ARP RATE</Label> pad that is currently being touched, and the arpeggio will progress in the direction set by the <Label>ARP DIR</Label> button.</p>
                            
                            <p>As soon as you release the <Label>ARP RATE</Label> pad, all channels will revert back to <Label>MONOPHONIC</Label> mode.</p>
                            
                            <p>If you wish to have a channel remain in <Label>ARPEGGIATOR</Label> mode even after the <Label>ARP RATE</Label> pad is released, press the <Label>ARP LOCK</Label> button while touching the <Label>SELECT PAD</Label> for that channel <Micro>(perform the same gesture to revert a channel back to its previous mode)</Micro>.</p>
                            <p>You can change the rate and direction of a specific channel while it is in <Label>ARPEGGIATOR</Label> mode by using the channel's <Label>SELECT PAD</Label> and the <Label>ARP RATE / ARP DIR</Label> pads.</p>
                            
                            <p>Additionally, pressing the <Label>ARP LOCK</Label> button <b>without</b> a <Label>SELECT PAD</Label> being touched will keep the arpeggiator engaged for all channels regardless of whether the <Label>ARP RATE</Label> pad is being touched.</p>
                        </div>
                    </div>
                    <Note>
                        <p>Note: Enabling / disabling the arpeggiator will only work if a channel is in <Label>MONOPHONIC</Label> mode. If it is in <Label>QUANTIZER</Label> mode, the arpeggiator will not be enabled / disabled.</p>
                    </Note>

                    <SectionSubheading title="Arp Rate" />
                    <p>The arp rate can be set to quarter notes (1/4), eighth notes (1/8), sixteenth notes (1/16), or thirty second notes (1/32).</p>
                    <p>Additionally, if you hold the <Label>TRIPLET</Label> pad in conjunction with an <Label>ARP RATE</Label> pad, the arp rate will be set to a triplet of the selected note value.</p>
                    <p>To set the arp rate, touch one of the four <Label>ARP RATE</Label> pads. The arp rate will change based on the <b>highest arp rate</b> that is touched.</p>

                    <p>The arp rate can also be CV controlled via the <Label>RATE CV</Label> input (0V to 10V).</p>

                    <SectionSubheading title="Arp Direction" />
                    <p>The arp direction can be set to <Label>UP</Label>, <Label>DOWN</Label>, <Label>UP/DOWN</Label>, or <Label>ORDER</Label>.</p>
                    <p>To set the arp direction, press the <Label>ARP DIR</Label> button and use the <Label>ARP RATE</Label> pads to select the direction.</p>
                    <p>The arp direction can also be CV controlled via the <Label>DIR CV</Label> input (0V to 10V).</p>

                </Section>

                <Section>
                    <SectionHeading title="🎹 Sequencing" />

                    <div className="flex flex-row m-6 justify-center">
                        <img className="bg-panel p-4 w-2/3" src={require('../media/counterpoint/panel_seq_actions.svg')} alt="sequencer actions" />
                    </div>

                    <p className="pt-4">If you have not already noticed, there is a really large <Label>RECORD</Label> button on the module. This button is used to record interactions with a channels touch pads (and play them back as a sequence).</p>
                    

                    <SectionSubheading title="Recording a sequence" />
                    <p>After pressing the <Label>RECORD</Label> button it will begin to illuminate red. This indicates <b>all channels</b> are primed for sequencing.</p>

                    <p>Once a channel is primed for sequencing, it will playback any touch events that occur on that channels touch pads. This includes <b>both</b> the <Label>OCTAVE</Label> and <Label>DEGREE</Label> pads.</p>

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
                            <p>A sequence's length is determined by both the <Label>BARS</Label> and the <Label>METER</Label> settings.</p>
                            <p>If <Label>BARS</Label> is set to <Label>[A]</Label>, the sequence length will continue to increment (by bars, not steps) as long as <Label>RECORD</Label> is enabled.</p>
                            <p>If <Label>BARS</Label> is set to one of <Label>[2]</Label>, <Label>[4]</Label>, or <Label>[8]</Label>, then the sequence length will be preset to that number of bars.</p>
                            <p>Additionally, you can append one bar to a channels sequence by holding down the corrosponing <Label>SELECT PAD</Label> and pressing the <Label>RECORD</Label> button.</p>
                        </div>
                    </div>

                    <Note>
                        <p>How <Label>AUTO</Label> sequence length works: As long as <Label>RECORD</Label> is enabled and bars is set to <Label>AUTO</Label>, the length of a sequence will automatically increase in increments of one bar as time passes. Once you feel the sequence is long enough, you can press the <Label>RECORD</Label> button again to disable recording.</p>
                    </Note>                    
                    
                    <SectionSubheading title="Sequence meter" />
                    <div className="flex flex-row items-center">
                        <div className="basis-full order-first md:order-last md:basis-1/3">
                            <div className="flex flex-row justify-center m-4">
                                <img className="bg-panel p-4" src={require('../media/counterpoint/seq_meter.svg')} alt="sequence meter" />
                            </div>
                        </div>
                        <div className="basis-full md:basis-2/3">
                            <p>A sequence's 'meter' is the number of beats in a bar. It can be set to <Label>[3/4]</Label>, <Label>[4/4]</Label>, <Label>[5/4]</Label>, or <Label>[7/4]</Label>.</p>
                            <p>To set the meter of a sequence, press the button between the <Label>BARS</Label> and <Label>METER</Label> display while holding down the <Label>ALT</Label> button.</p>
                            <p>Any new sequences will automatically be set to the active meter. Any existing sequences will not change.</p>
                            <p>To see the meter of an existing sequence, hold the <Label>SELECT PAD</Label> for that channel. The associated meter will begin pulsing.</p>
                        </div>
                    </div>
                    
                    <SectionSubheading title="Sequencing in Monophonic Mode" />
                    <p>When sequencing a channel that is in <Label>MONOPHONIC</Label> mode, all touch events to the <Label>OCTAVE</Label> and <Label>DEGREE</Label> touch pads will be recorded and played back as a sequence.</p>
                    <p>As long as <Label>RECORD</Label> is enabled, you can continue adding new events to the sequence.</p>
                    <p>If an new event occurs at the same time as a previous event, the previous event will be overwritten.</p>
                    <p>Additionally, all events which occur before a new event is "released" will be deleted / overwritten by the new event.</p>
                    <Note>
                        <p><b>Sequence Override:</b> If a sequence is playing back and <Label>RECORD</Label> <b>is not</b> enabled, interacting with the touch pads will override the sequence and output + hold the last touched scale degree. Releasing your finger will re-activate playback of the sequence.</p>
                    </Note>

                    <SectionSubheading title="Sequencing in Quantizer Mode" />
                    <p>When sequencing a channel that is in <Label>QUANTIZER</Label> mode, touching a degree / octave pad <b>will add a "snapshot"</b> of the current active scale degrees (minus the one you just touched) to the sequence.</p>

                    <SectionSubheading title="Sequencing with the arpeggiator" />
                    <p>You can use the arpeggiator to add events to a sequence, but only when that channel is in <Label>MONOPHONIC</Label> mode.</p>
                    <p>The <Label>GATE</Label> associated with events created with the arpeggiator are treated as "trigger" events.</p>
                    
                    <SectionSubheading title="Clear a sequence" />
                    <p>Pressing the <Label>CLEAR</Label> button will "clear" / delete all sequences.</p>
                    <p>If you want to clear a sequence for a single channel, press the <Label>CLEAR</Label> button while touching that channel's <Label>SELECT PAD</Label>.</p>

                    <SectionSubheading title="Reset a sequence" />
                    <p>Pressing the <Label>RESET</Label> button will reset the sequence, but not immediately. It will wait until the next quarter note occurs before resetting.</p>

                    <SectionSubheading title="Quantizing a sequence" />
                    <p>Pressing <Label>ALT</Label> + <Label>RECORD</Label> will "snap" all touch events in all active sequences to a grid of 32nd notes.</p>
                    <p>If you wish quantization to occur automatically, enter <Label>SETTINGS</Label> and make sure the <Label>AQ</Label> row is illuminated.</p>
                    <p>If you want to quantize only a single sequence, press the <Label>ALT</Label> + <Label>RECORD</Label> button while touching the <Label>SELECT PAD</Label> for that channel.</p>
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
                                    <Label>SELECT PAD</Label> + <Label>RECORD</Label>
                                </td>
                                <td>
                                    Adds one bar to the actively running sequence, or creates a new sequence with a length of one bar.
                                </td>
                            </tr>
                            <tr className="border-b border-dotted border-black pt-4">
                                <td>
                                    <Label>TRIPLET</Label> + <Label>OCTAVE PAD</Label>
                                </td>
                                <td>
                                    Applies an octave offset to the active sequence of the corrosponding channel. (top octave pad is +1 octave, bottom is -1 octave)
                                </td>
                            </tr>
                            <tr className="border-b border-dotted border-black pt-4">
                                <td>
                                    <Label>TRIPLET</Label> + <Label>ARP RATE PAD</Label>
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


                <Section>
                    <SectionHeading title="💻 Firmware updates" />
                    <p>From time to time, new firmware updates will be available for Counterpoint. These updates will add new features and fix bugs.</p>
                    <p>You can update the firmware on your Counterpoint module right here in the manual by following the steps below.</p>
                    
                    <SectionSubheading title="Step 1: Requirements" />
                    <p>To flash the firmware, you will need the following:</p>
                    <ul className="list-disc list-inside">
                        <li>A computer with a <b>USB-C</b> port</li>
                        <li>A <b>USB-C</b> cable</li>
                        <li>The latest firmware file</li>
                        <li>An installation of Google Chrome version 61 or higher</li>
                    </ul>
                    <Note>
                        <p>Note: You will NOT need to power the module from your eurorack system for this process.</p>
                    </Note>
                    
                    
                    <SectionSubheading title="Step 2: Download the latest firmware" />
                    <p>The latest firmware can be found at <a className="text-azure hover:text-azure/80 underline" href="https://github.com/scottc11/ok-counterpoint" target="_blank" rel="noopener noreferrer">https://github.com/scottc11/ok-counterpoint</a>.</p>
                    <p>The available firmware will be labeled with a date and have a filename similar to <Code>counterpoint-20250330.bin</Code>.</p>
                    <p>Click on the file you wish to download. On the far right, there should be a <span className="inline-block"><AiOutlineDownload /></span> icon. Pressing that icon will <b>download the file to your local computer</b>.</p>
                    
                    
                    <SectionSubheading title="Step 3: USB-C connection" />
                    <p>Remove the module from your eurorack system and disconnect any cables that were attached to it (ie. disconnect the power cable!).</p>
                    <p>Connect the module to your computer using a <b>USB-C</b> cable.</p>
                    <p>Now, on the underside of the module, there are two <b>tiny black buttons</b>. One is labelled <b>BOOT</b> and the other is labelled <b>RESET</b>.</p>
                    <p>While the <b>BOOT</b> button is being held down, <span className="inline-block"><TbCircuitPushbutton /></span> press and release the <b>RESET</b> button.</p>
                    
                    <SectionSubheading title="Step 4: Flash the firmware" />
                    <FirmwareUpdater />

                    <SectionSubheading title="Step 5: Reconnect the module to your eurorack system" />
                    <p>Once the firmware has been flashed, you can disconnect the USB cable and reconnect it to your eurorack system.</p>
                    <p>Once powered on, you should now see the updated firmware on the module.</p>

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
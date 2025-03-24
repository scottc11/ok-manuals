import React from 'react';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import ContentsContextProvider from '../context';
import Section from '../components/Section/Section';
import Note from '../components/Note/Note';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import SectionSubheading from '../components/SectionSubHeading/SectionSubHeading';

// https://teenage.engineering/guides/cm-15

/**
 * 
 * Inputs / Outputs
 *   - GATE output
 *   - 1VO output
 *   - Bend CV Input
 *   - Quantizer CV Input
 *   - Clock Input
 *   - Reset Input
 *   - Arpeggiator CV Rate Input
 *   - Arpeggiator CV Direction Input
 * 
 * Channel Modes
 *   - Monophonic Mode
 *   - Quantizer Mode
 *   - Arpeggiator Mode
 * 
 * scale degree switches
 * 
 * Sequencing
 *   - RECORD button
 *   - Sequence length
 *   - meter
 *   - Sequencing in Monophonic Mode
 *   - Sequencing in Quantizer Mode
 *   - Sequencing in Arpeggiator Mode
 *   - Clear sequence
 *   - Reset sequence
 *   - Quantize sequence
 * 
 * Channel Sliders
 *   - Portamento
 *     - CV control
 *   - Pitch Bend
 *     - CV control
 * 
 * Arpeggiator
 *   - setting arp rate
 *   - setting arp direction
 *   - Arp Lock
 *     - channel arp lock
 *   - CV control
 *     - CV Rate
 *     - CV Direction
 * 
 * LINK mode
 *   - Linking channels
 */

const SectionDivider = () => {
    return (
        <div className="my-4 border-white"></div>
    )
}


const Counterpoint: React.FC = () => {    
    return (
        <div className="bg-offwhite text-black font-body">
            <ContentsContextProvider>

                <Section>
                    <h1 className="text-4xl md:text-6xl pt-12 pb-6 font-bold font-bungee">Counterpoint</h1>
                    <h2 className="text-2xl">Eurorack performance sequencer.</h2>
                </Section>

                <Section>
                    <h2 className="text-4xl py-4">index</h2>
                    <TableOfContents />
                </Section>

                <Section>
                    <SectionHeading title="inputs / outputs" />
                    <div className="flex flex-row m-6 justify-center">
                        <img className="bg-panel p-4 w-3/4" src={require('../media/counterpoint/panel_jacks.svg')} alt="sequence length and meter" />
                    </div>

                    <p>The input / output jacks are split into two sections. On the right side is a grid of jacks corresponding to each channel, and on the left side is a "global" control section.</p>

                    <SectionSubheading title="Channel IO" />

                    <p>The input / output jacks are laid out as a grid. Each column in the grid contains the input / output jacks for a channel.</p>
                    
                    <p>The rows are labeled with the name of the input / output jack:</p>

                    <p><b>GATE</b>: 5V gate signal</p>
                    <p><b>1VO</b>: 1 volt per octave output (-1V to 9V range)</p>
                    <p><b>B CV</b>: CV control over channel slew OR "pitch bend" of 1VO output</p>
                    <p><b>Q CV</b>: When a channel is in Quantizer mode, the voltage present on this input will be quantized to the nearest scale degree.</p>
                    
                    <SectionSubheading title="Global IO" />
                    <p>Additionally, there is an isolated column for "global" controls:</p>
                    
                    <p><b>CLOCK</b>: A clock signal must be present here in order for time related functions to work. Ideally, use a 1/4 note (quarter note) clock signal here, as the firmware will divide this signal to a 24 PPQN (pulses per quarter note) grid.</p>
                    <p><b>RESET</b>: Reset any active sequences to beat one. (it will wait till the next quarter note occurs before resetting)</p>
                    <p><b>DIR CV</b>: CV control over the direction of the arpeggiator.</p>
                    <p><b>RATE CV</b> CV control over the rate of the arpeggiator.</p>
                </Section>

                <Section>
                    <hr></hr>
                </Section>

                <Section>
                    <SectionHeading title="Channel Modes" />
                    
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
                    <p>To enter a channel into QUANTIZER mode, press the <b>Q ON</b> button while touching the SELECT PAD for that channel. The [Q] symbol for that channel will illuminate.</p>
                    <div className="flex flex-row justify-center m-4">
                        <img className="w-1/3 bg-panel p-4" src={require('../media/counterpoint/quant_toggle.svg')} alt="quantizer mode symbols" />
                    </div>

                    <p>In this mode, a channel will detect the voltage present on the <b>Q CV</b> input jack and remap that voltage to the nearest scale degree.</p>
                    <p>You can use the touch pads to activate/deactivate scale degrees and octaves, limiting the range of the 1VO output.</p>
                    
                    <SectionSubheading title="Arpeggiator Mode" />
                    <p>In this mode, a channel will arpeggiate all the currently touched scale degrees based on the active rate and direction of the Arpeggiator.</p>
                    <p>A channels <b>[ARP]</b> symbol will illuminate when the channel is in ARPEGGIATOR mode.</p>
                    <div className="flex flex-row justify-center m-4">
                        <img className="w-1/3 bg-panel p-4" src={require('../media/counterpoint/arp_toggle.svg')} alt="arpeggiator mode symbols" />
                    </div>
                    <p>See the <b>Arpeggiator</b> section for more information.</p>
                    
                </Section>

                <Section>
                    <SectionHeading title="Scale Degree Switches" />
                    <div className="flex flex-col md:flex-row">
                        <div className="basis-full md:basis-3/4">
                            <p>Each channel has 8 scale degree switches which can be used to construct a common scale between all 4 channels.</p>
                            <p>
                                When all 8 switches are in their middle position, they are each seperated by a whole tone (two semi-tones). In this state, you get what is called a "whole tone scale".
                            </p>
                            <p>
                                Each position of a toggle switch represents a single semitone. If you change the position of the switch upwards, all 4 channels horizontally will increase their pitch by one semitone. If you go downwards, then it will decrease their pitch by one semitone.
                            </p>
                            <p>
                                If musical theory isn't your thing, the following switch configurations will give you a major or a minor scale:
                            </p>
                            <p><b>Major Scale</b></p>
                            <p>Switch 8 :: MIDDLE :: (major 2nd)</p>
                            <p>Switch 7 :: DOWN or MIDDLE :: (major 7th or Tonic octave)</p>
                            <p>Switch 6 :: DOWN :: (major 6th)</p>
                            <p>Switch 5 :: DOWN :: (perfect 5th)</p>
                            <p>Switch 4 :: DOWN :: (perfect 4th)</p>
                            <p>Switch 3 :: MIDDLE :: (Minor 3rd)</p>
                            <p>Switch 2 :: MIDDLE :: (Major 2nd)</p>
                            <p>Switch 1 :: MIDDLE :: (Tonic)</p>
                            <p><b>Minor Scale</b></p>
                            <p>Switch 8 :: UP or MIDDLE :: (either a Major 2nd or a minor 3rd)</p>
                            <p>Switch 7 :: MIDDLE :: (Tonic octave)</p>
                            <p>Switch 6 :: MIDDLE :: (minor 7)</p>
                            <p>Switch 5 :: DOWN :: (perfect 5th)</p>
                            <p>Switch 4 :: DOWN :: (perfect 4th)</p>
                            <p>Switch 3 :: DOWN :: (Minor 3rd)</p>
                            <p>Switch 2 :: MIDDLE :: (Major 2nd)</p>
                            <p>Switch 1 :: MIDDLE :: (Tonic)</p>
                        </div>
                        <div className="basis-full md:basis-1/4">
                            <div className="flex flex-row justify-center h-96 m-4">
                                <img className="bg-panel p-4" src={require('../media/counterpoint/scale_degree_switches.svg')} alt="scale degree switches" />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section>
                    <SectionHeading title="Arpeggiator" />

                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="basis-full order-first md:order-last md:basis-1/4">
                            <div className="flex flex-row bg-panel py-4 px-8 m-4">
                                <img src={require('../media/counterpoint/panel_arp.svg')} alt="Input / Output" />
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
                    <p>The arp rate can be set to 1/32, 1/16, 1/8, or 1/4 notes.</p>
                    <p>To set the arp rate, touch one of the four ARP RATE pads. The arp rate will change based on the pad that is touched.</p>
                    <p>The arp rate can also be CV controlled via the RATE CV input.</p>

                    <SectionSubheading title="Arp Direction" />
                    <p>The arp direction can be set to UP, DOWN, UP/DOWN, or ORDER.</p>
                    <p>To set the arp direction, press the ARP DIR button and use the ARP RATE pads to select the direction.</p>
                    <p>The arp direction can also be CV controlled via the DIR CV input.</p>

                </Section>

                <div className="container">
                    <SectionHeading title="Sequencing" />

                    <div className="flex flex-row m-6 justify-center">
                        <img className="bg-panel p-4 w-3/4" src={require('../media/counterpoint/panel_seq_actions.svg')} alt="sequencer actions" />
                    </div>

                    <p className="pt-4">If you have not already noticed, there is a really large "RECORD" button on the module. This button is used to record interactions with a channels touch pads (and play them back as a sequence 😉).</p>
                    
                    <p>Pressing the RECORD button will illuminate the RECORD button red. When the RECORD button is red, all channels become primed for sequencing.</p>

                    <p>Once a channel is primed for sequencing, it will playback any touch events that occur on that channels touch pads. This includes the octave pads.</p>

                    <p>As a sequence plays back, new events will overdub / overwrite previously existing events (should they overlap).</p>

                    <p>Each channel can be sequenced independently. The sequence <b>length</b> and <b>meter</b> can be set for each channel.</p>
                    
                    <Note>
                        <p>Note: Once a sequence is created for a channel, the meter of that sequence will be locked and no longer follows the active meter displayed on the panel.</p>
                        <p>For example, one channel can have a sequence playing back in a meter of 3/4, and another channel can have a sequence playing back in a meter of 4/4.</p>
                    </Note>
                    
                    <SectionDivider />
                    
                    <SectionSubheading title="Sequence length and meter" />

                    <div className="flex flex-row bg-panel py-4 px-8 m-4">
                        <img src={require('../media/counterpoint/sequence_length_meter.svg')} alt="sequence length and meter" />
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
                    <p>Pressing ALT + RECORD will "snap" all touch events <b>in all</b> active sequences to a grid of 32nd notes.</p>
                    <p>If you wish quantization to occur automatically, enter SETTINGS and make sure the AQ row is illuminated.</p>
                    <p>If you want to quantize only a single sequence, press the <b>ALT</b> + <b>RECORD</b> button while touching the <b>SELECT PAD</b> for that channel.</p>
                </div>
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
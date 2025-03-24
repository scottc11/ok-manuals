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
        <div className="bg-offwhite text-black font-mono">
            <ContentsContextProvider>

                <Section>
                    <h1 className="text-6xl pt-12 pb-6 font-bold font-bungee">Counterpoint</h1>
                    <h2 className="text-2xl">Eurorack performance sequencer.</h2>
                </Section>

                <Section>
                    <h2 className="text-4xl py-4">index</h2>
                    <TableOfContents />
                </Section>

                <Section>
                    <SectionHeading title="inputs / outputs" />
                    <p><b>gate output</b>: 5V gate signal</p>
                    <p><b>1vo output</b>: 1 volt per octave output (-1V to 9V range)</p>
                    <p><b>bend cv input:</b> CV control over channel slew OR "pitch bend" of 1VO output</p>
                    <p><b>quantizer cv input:</b> When a channel is in Quantizer mode, the voltage present on this input be quantized to the nearest scale degree.</p>
                    <p><b>clock input:</b> A clock signal must be present here in order for time related functions to work. Ideally input a 1/4 note clock signal (firmware multiplies this signal to a 24 PPQN grid).</p>
                    <p><b>Reset Input:</b> Reset any active sequences to beat one. (it will wait till the next quarter note occurs before resetting)</p>
                    <p><b>Arpeggiator CV Rate Input:</b> CV control over the rate of the arpeggiator.</p>
                    <p><b>Arpeggiator CV Direction Input:</b> CV control over the direction of the arpeggiator.</p>
                </Section>

                <Section>
                    <hr></hr>
                </Section>

                <Section>
                    <SectionHeading title="Channel Modes" />
                    <SectionSubheading title="Monophonic Mode" />
                    <p>This is the default mode for each channel when the module is powered on. In this mode, the module will output a voltage corrosponding to the last touched scale degree.</p>
                    
                    <SectionSubheading title="Quantizer Mode" />
                    <p>To enter a channel into Quantizer mode, press the Q ON button while touching the SELECT PAD for that channel.</p>
                    <p>In this mode, a channel detect the the voltage present on the Quantizer CV input jack and remap that voltage to the nearest scale degree.</p>
                    <p>You can use the touch pads to activate/deactivate scale degrees and octaves, limiting the range of the 1VO output.</p>
                    
                    <SectionSubheading title="Arpeggiator Mode" />
                    <p>In this mode, a channel will arpeggiate all the currently touched scale degrees based on the active rate and direction of the Arpeggiator.</p>
                    <p>See the <b>Arpeggiator</b> section for more information.</p>
                    
                </Section>

                <Section>
                    <hr></hr>
                </Section>

                <Section>
                    <SectionHeading title="Scale Degree Switches" />
                    <p>Each channel has 8 scale degree switches, which can be used to construct a common scale between all 4 channels.</p>
                </Section>

                <Section>
                    <hr></hr>
                </Section>

                <Section>
                    <SectionHeading title="Arpeggiator" />
                    <p>The arpeggiator is a feature that allows you to play back all of the currently touched scale degrees as an arpeggio.</p>
                    <p>To enable the arpeggiator, touch one of the four ARP RATE pads. As long as one of the ARP RATE pads is touched, any channel that was previously in MONOPHONIC mode will enter in to ARPEGGIATOR mode.</p>
                    <p>As soon as you release the ARP RATE pad, all channels will revert back to MONOPHONIC mode.</p>
                    <p>If you wish to have a channel remain in ARPEGGIATOR mode even after the ARP RATE pad is released, press the ARP LOCK button while touching the SELECT PAD for that channel. Perform the same gesture to exit a channel from ARPEGGIATOR mode.</p>
                    <p>Additionally, pressing the ARP LOCK button without any SELECT PADs being touch will toggle the ARP LOCK for all channels.</p>
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

                    <p className="pt-4">If you have not already noticed, there is a really large "RECORD" button on the module. This button is used to record interactions with a channels touch pads (and play them back as a sequence 😉).</p>
                    
                    <p>Pressing the RECORD button will illuminate the RECORD button red. When the RECORD button is red, all channels become primed for sequencing.</p>

                    <p>Once a channel is primed for sequencing, it will playback any touch events that occur on that channels touch pads. This includes the octave pads.</p>

                    <p>As a sequence plays back, new events will overdub / overwrite previously existing events (should they overlap).</p>

                    <p>Each channel can be sequenced independently. The sequence <b>length</b> and <b>meter</b> can be set for each channel.</p>
                    
                    <Note>
                        <p>Note: Once a sequence is created for a channel, that sequence will have its meter locked, and no longer follows the active meter displayed on the panel.</p>
                        <p>For example, you can have sequences in 3/4 playing pack alongside sequences in 4/4.</p>
                    </Note>
                    
                    <SectionDivider />
                    
                    <SectionSubheading title="Sequence length" />
                    <p>A sequences LENGTH can be set in a number of ways:</p>
                    <ul className="list-disc list-inside">
                        <li>If BARS is set to AUTO, the sequence length will continue to increment (by bars, not steps) as long as record is enabled.</li>
                        <li>If BARS is set to one of 2, 4, or 8, then the sequence length will be preset to that number of bars.</li>
                        <li>Additionally, you can append one bar to a channels sequence by holding down the corrosponing SELECT PAD and pressing the RECORD button.</li>
                    </ul>

                    <h3>How AUTO sequence length works:</h3>
                    <p>As long as RECORD is enabled and bars is set to AUTO, the length of a sequence will automatically increase in increments of one bar as time passes. Once you feel the sequence is long enough, you can press the RECORD button again to disable recording.</p>
                    
                    <SectionSubheading title="Sequence meter" />
                    <p>A sequence's 'meter' is the number of beats in a bar. It can be set to 3/4, 4/4, 5/4, or 7/4.</p>
                    <p>Any new sequences will automatically be set to the active meter. Any existing sequences will not change.</p>
                    <p>To see the meter of an existing sequence, hold the SELECT PAD for that channel. The associated meter will begin pulsing.</p>
                    
                    <SectionSubheading title="Sequencing in Monophonic Mode" />
                    <p>When a channel is in Monophonic mode, it will playback the sequence of scale degrees touched on the channel.</p>

                    <SectionSubheading title="Sequencing in Quantizer Mode" />
                    <p>When a channel is in Quantizer mode, touching a pad will add a "snapshot" of the current active scale degrees (minus the one you just touched) to the sequence.</p>

                    <SectionSubheading title="Sequencing with the arpeggiator" />
                    <p>As long as record in enabled, you can use the arpeggiator to add events to a sequence.</p>
                    
                    <SectionSubheading title="Clear a sequence" />
                    <p>Pressing the CLEAR button will "clear" / delete all sequences.</p>
                    <p>If you want to clear a sequence for a single channel, press the CLEAR button while touching that channel's SELECT PAD.</p>

                    <SectionSubheading title="Reset a sequence" />
                    <p>Pressing the RESET button will reset the sequence, but not immediately. It will wait until the next quarter note occurs before resetting.</p>

                    <SectionSubheading title="Quantizing a sequence" />
                    <p>Pressing ALT + RECORD will "snap" all touch events <b>in all</b> active sequences to a grid of 32nd notes.</p>
                    <p>If you wish quantization to occur automatically, enter SETTINGS and make sure the AQ row is illuminated.</p>
                    <p>If you want to quantize only a single sequence, press the ALT + RECORD button while touching the SELECT PAD for that channel.</p>

                    <SectionSubheading title="Sequence override" />
                    <p>If a sequence is playing back and RECORD is not enabled, interacting with the touch pads will override the sequence and output + hold the last touched scale degree. Releasing your finger will re-activate playback of the sequence.</p>
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
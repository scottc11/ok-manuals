"use client";

import ContentsContextProvider, {
  TableOfContents,
  ManualLink,
} from "../../components/manual/ContentsContext";
import Section from "../../components/Section";
import Note from "../../components/manual/Note";
import SectionHeading from "../../components/manual/SectionHeading";
import SectionSubheading from "../../components/manual/SectionSubheading";
import ManualImage from "../../components/manual/ManualImage";
import FirmwareUpdater from "../../components/manual/FirmwareUpdater";
import DownloadList from "../../components/manual/DownloadList";
import LegendContainer from "../../components/manual/LegendContainer";
import Definition from "../../components/manual/Definition";
import { AiOutlineDownload } from "react-icons/ai";
import {
  DEGREE_LEGEND,
  DEGREE_FIRMWARE,
  VO_OUTPUT,
  GATE_OUTPUT,
  CV_INPUT,
  BENDER_OUTPUT,
  SELECT_PAD,
  FREEZE_BTN,
  RECORD_BTN,
  BENDER,
  DEGREE_SWITCH,
  CV_MODE_BTN,
  GLIDE_CONTROL,
  OCTAVE_TOUCH_PAD,
  DEGREE_TOUCH_PAD,
  CLOCK_INPUT,
  CLOCK_LED,
  BENDER_RANGE_BTN,
  BENDER_MODE_BTN,
  ALT_BTN,
  QUANTIZE_BTN,
  SEQ_DISPLAY,
  TEMPO_POT,
  MONOPHONIC_MODE,
  QUANTIZER_MODE,
  SEQUENCER_MODE,
  PITCH_BEND_MODE,
  RATCHET_MODE,
  BENDER_CALIBRATION_MODE,
  QUANTIZE_GRID_UI,
  ACTIVE_DEGREES,
  TIME_SIGNATURE,
  TOUCH_EVENT,
  BEND_EVENT,
  CHANNEL,
  ALT_FIRMWARE,
} from "./data";

const DIMG = "/images/manuals/degree";
const CIMG = "/images/manuals/counterpoint";

export default function DegreeManualPage() {
  return (
    <div className="bg-offwhite text-black">
      <ContentsContextProvider>
        <Section>
          <h1 className="text-4xl md:text-6xl pt-12 pb-6 font-bold font-bungee">DEGREE</h1>
          <div className="flex justify-center py-4">
            <ManualImage source={`${DIMG}/DEGREE.png`} alt="DEGREE" />
          </div>
        </Section>

        <Section>
          <SectionHeading title="Index" />
          <TableOfContents />
        </Section>

        <Section>
          <SectionHeading title="Legend" />
          <LegendContainer items={DEGREE_LEGEND} />
        </Section>

        <Section>
          <SectionHeading title="Introduction" />
          <div>
            <p><Definition item={BENDER} /> is a performance oriented VCO controller / sequencer designed around custom manufactured illuminated capacitive touch pads. The modules main purpose is to control the pitch of 4 independent VCOs by interacting with the touch pads. Additionally, the module can auto-calibrate your VCOs 1v/o tracking, quantize incoming CV, output gate/triggers, apply analog slew/portamento, and has 4 custom <Definition item={BENDER} /> components for pitch bend and ratcheting effects.</p>
            <p>The module contains 4 identical <Definition item={CHANNEL} plural />, with each channel consisting of the following hardware:</p>
            <ul className="list-disc list-outside ml-5">
              <li><Definition item={DEGREE_TOUCH_PAD} plural />: {DEGREE_TOUCH_PAD.description}</li>
              <li><Definition item={OCTAVE_TOUCH_PAD} plural />: {OCTAVE_TOUCH_PAD.description}</li>
              <li><Definition item={GLIDE_CONTROL} />: {GLIDE_CONTROL.description}</li>
              <li><Definition item={VO_OUTPUT} />: {VO_OUTPUT.description}</li>
              <li><Definition item={GATE_OUTPUT} />: {GATE_OUTPUT.description}</li>
              <li><Definition item={CV_INPUT} />: {CV_INPUT.description}</li>
              <li><Definition item={BENDER} />: {BENDER.description}</li>
              <li><Definition item={SEQ_DISPLAY} />: {SEQ_DISPLAY.description}</li>
            </ul>
            <p>The module has a column of 8 3-stage toggle switches for setting the &quot;scale&quot;.</p>
            <p>The module is internally clocked with a resolution of 96 pulses per quarter note (PPQN), allowing you to record sequences of <Definition item={TOUCH_EVENT} plural /> and <Definition item={BEND_EVENT} plural /> and play them back in real-time.</p>
          </div>
        </Section>

        <Section>
          <SectionHeading title="Channel Modes" />
          <p>At any given time each channel operates in one of two modes. <Definition item={MONOPHONIC_MODE} /> or <Definition item={QUANTIZER_MODE} />.</p>
          <p>You can toggle between a channels modes by holding your finger on a <Definition item={SELECT_PAD} /> and pressing the <Definition item={CV_MODE_BTN} />.</p>
          <SectionSubheading title="Monophonic Mode" />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="basis-full md:basis-1/2">
              <p>This is the most basic of modes.</p>
              <p>For each channel, only one touch pad will be illuminated at a time.</p>
              <p>Touching any of the touch pads pads immediately outputs the respective scale degrees voltage to that channel&apos;s <Definition item={VO_OUTPUT} />.</p>
              <p>Additionally, when a touch pad is touched the corresponding channels GATE output is set to HIGH (+5V), and on release set back to LOW (0V).</p>
            </div>
            <div className="flex justify-center md:w-1/3 sm:w-full mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${DIMG}/monophonic-demo.gif`} alt="Monophonic mode demo" />
            </div>
          </div>
        </Section>

        <Section>
          <SectionSubheading title="Quantizer Mode" />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="basis-full md:basis-1/2">
              <p>In quantizer mode, all 8 degrees become available options for incoming CV signals to get latched to. If a touch pad is illuminated, incoming CV can be latched to it.</p>
              <p>When a CV voltage latches to an active degree, that touch pad LED will dim; the <Definition item={VO_OUTPUT} /> gets updated; and a trigger signal will appear at the <Definition item={GATE_OUTPUT} />.</p>
            </div>
            <div className="flex justify-center md:w-1/3 sm:w-full mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${DIMG}/quantizer-demo.gif`} alt="Quantizer mode demo" />
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading title="Sequencing" />
          <div>
            <p>Both <Definition item={MONOPHONIC_MODE} /> and <Definition item={QUANTIZER_MODE} /> have the ability to enter a third mode: <Definition item={SEQUENCER_MODE} />. When in sequencer mode, the module will record touch and bend events, map them to a 32 step (96 PPQN) grid, and play them back in real-time.</p>
            <p>To enable recording, press the <Definition item={RECORD_BTN} />. The button will illuminate RED to signify recording is now active / enabled.</p>
            <p>When RECORD is enabled, each channel will constantly listen for new <Definition item={TOUCH_EVENT} plural /> and/or <Definition item={BEND_EVENT} plural /> and add them to the actively running sequence, while simultaneously playing back any pre-existing touch or bend events.</p>
            <p>As a sequence plays back, new events will overdub / overwrite previously existing events (should they overlap).</p>
            <p>To disable sequence recording, press the <Definition item={RECORD_BTN} /> once more. If any <Definition item={TOUCH_EVENT} plural /> or <Definition item={BEND_EVENT} plural /> occurred on any of the channels while RECORD was enabled, then those channels will remain in <Definition item={SEQUENCER_MODE} /> and continue to playback the recorded sequence. If during this process a channel didn&apos;t receive any new events, this channel will be reverted to its previous mode (prior to enabling record).</p>
            <Note>
              <p><Definition item={ALT_FIRMWARE} />: In the alternate firmware, sequence recording works a little differently.</p>
              <p>Pressing the <Definition item={RECORD_BTN} /> will &quot;arm&quot; sequence recording (LED will Flash / blink). Recording only gets enabled (or disabled) once beat 1 of the bar rolls over.</p>
              <p>Note: Although recording theoretically doesn&apos;t begin until beat 1 occurs, there is a short grace period no longer then a 16th note prior to beat 1 which will listen for touch events and include them in the recorded sequence (they get quantized to beat 1 of the bar).</p>
            </Note>
          </div>
          <div>
            <SectionSubheading title={`Sequencing in ${MONOPHONIC_MODE.label}`} />
          </div>
          <div>
            <p>To add an event, just touch one of the channels touch pads while record is enabled. On touch, the sequencer sets the GATE OUT HIGH, and on release sets the GATE OUT LOW. If a new event overlaps with any pre-existing events, the new event will take priority and any pre-existing events will be permanently over-written.</p>
            <h4>Sequence override:</h4>
            <p>During playback of a sequence, should record be <b>disabled</b>, interacting with the touch pads will <b>override</b> the playback of a sequence.</p>
            <p>On touch: stops playback of sequence, sets the <Definition item={GATE_OUTPUT} /> HIGH, and outputs the 1VO value associated with that touch pad.</p>
            <p>On release: sets <Definition item={GATE_OUTPUT} /> LOW, and resumes playback of sequence</p>
            <Note><p>When freezing a sequence, the sequence will continue to progress through its steps in the background. This way, the sequence will &quot;pick up where it left off&quot;, so to speak.</p></Note>
          </div>
          <div>
            <SectionSubheading title={`Sequencing in ${QUANTIZER_MODE.label}`} />
          </div>
          <div>
            <p>In this mode, a sequence contains a series of <Definition item={ACTIVE_DEGREES} /> <span>&quot;snapshots&quot;</span>.</p>
            <p>Touching a pad will either add or remove that degree/octave from an <Definition item={ACTIVE_DEGREES} /> list, then insert a &quot;snapshot&quot; of this list and insert it as a new event in the sequence. As the sequence progresses, it will update the <Definition item={ACTIVE_DEGREES} /> list based on each events &quot;snapshot&quot;.</p>
            <Note><p><span className="accent--blue">Gesture: </span>If you hold your finger on a channels <Definition item={SELECT_PAD} /> while a sequence is playing back in <Definition item={QUANTIZER_MODE} />, interacting with the touch pads will override the incoming signal at the <Definition item={CV_INPUT} /> and output the 1VO value associated with that touch pad.</p></Note>
          </div>
          <div>
            <SectionSubheading title="Sequence Length" />
          </div>
          <div>
            <p>The length of a sequence can range from 2 steps to 32 steps. Each LED in the sequence display accounts for 2 steps.</p>
            <p>To adjust the length (number of steps) of a sequence, press the LENGTH button. The Sequencer display will illuminate the length of each channel&apos;s sequence. You can now use the BENDERs to increase or decrease the length of a sequence (by pushing / pulling the BENDER up or down). Presently, you can only have sequence lengths of even division. (ie. 2 steps, 4, steps, 6 steps, 8 steps, etc.)</p>
            <p>NOTE: The Sequencer Display uses 16 LEDs to represent the 32 steps of a sequence.</p>
            <Note><p><Definition item={ALT_FIRMWARE} />: The sequence length is measured in bars instead of steps. For example, if the <Definition item={TIME_SIGNATURE} /> is set to <b>4/4</b>, the sequence length would either be 4 steps, 8 steps, 12 steps... with a max of 32 steps.</p></Note>
          </div>
          <div>
            <SectionSubheading title="Quantizing a Recorded Sequence" />
            <p>Using the <Definition item={QUANTIZE_BTN} />, you can quantize a sequences touch events to a grid of quarter notes, 8th notes, 16th notes, 32nd notes, and 64th notes.</p>
            <p>You can set a channels quantization amount using the <Definition item={QUANTIZE_GRID_UI} /> UI. To enter this UI, hold down the <Definition item={ALT_BTN} /> + <Definition item={BENDER_RANGE_BTN} />.</p>
            <p>After performing this gesture, the LEDs of each channels degree touch pads will start flashing at varying rates. The rates at which each LED is flashing corresponds to the level of quantization.</p>
            <p>For example, the bottom most LED will be flashing at the same rate as the <Definition item={CLOCK_LED} />. Selecting this value will set the quantization amount to &quot;quarter notes&quot;.</p>
            <p>Once the <Definition item={QUANTIZE_BTN} /> is pressed, the firmware will iterate through each active sequence of touch events (for every channel) and snap those events to whichever <Definition item={QUANTIZE_GRID_UI} /> presently selected.</p>
            <Note><p>If you only want to quantize a particular channel, hold your finger on one of the <Definition item={SELECT_PAD} plural /> before pressing the <Definition item={QUANTIZE_BTN} />. This will only quantize that channel.</p></Note>
          </div>
        </Section>

        <Section>
          <SectionHeading title="Clocking ⏰" />
          <div>
            <p>The internal clock ranges from 20 BPM up to 240 BPM, and is set using the <Definition item={TEMPO_POT} />.</p>
            <p>If you want to use an external clock source for the DEGREE, plug the external clock signal into the <Definition item={CLOCK_INPUT} /> jack and turn the <Definition item={TEMPO_POT} /> all the way to the left.</p>
            <Note><p>NOTE: The clock resolution works best when sending the DEGREE 1PPQN (quarter note pulses).</p></Note>
          </div>
        </Section>

        <Section>
          <SectionHeading title="Scale Selection" />
          <div>
            <SectionSubheading title="Logic and Theory" />
            <p>The DEGREE is very muched centered around the <ManualLink href="https://en.wikipedia.org/wiki/Chromatic_scale" external>12 notes of western music</ManualLink>.</p>
            <p>In western music, a scale usually consists of a total of 7 notes, but if you were to include the upper octave you would get 8 notes (ex. <b>C</b>, D, E, F, G, A, B, <b>C</b>).</p>
            <p>The DEGREE offers the option to build such a scale using the 8 <Definition item={DEGREE_SWITCH} plural e />.</p>
          </div>
          <div>
            <SectionSubheading title="Building a scale" />
            <div className="flex flex-col md:flex-row">
              <div className="basis-full md:basis-3/4">
                <p>The <span className="text-azure font-unica p-1 rounded-sm">DEGREE</span> contains a series of 8 <span className="text-azure font-unica p-1 rounded-sm">scale degree</span> switches which can be used to construct a <span className="accent--blue">common scale between all 4 channels</span>.</p>
                <p>Each position of a toggle switch represents a single semitone. If you change the position of a switch upwards, all 4 channels across the horizontal axis will increase their pitch by one semitone. If you go downwards, then it will decrease their pitch by one semitone.</p>
                <p>For example, if all 8 switches are in their middle position, the scale degrees of each channel will be seperated by a whole tone (two semi-tones). In this state, you get what is called a &quot;whole tone scale&quot;.</p>
                <p>You can adjust the position of the switches to create major scales, minor scales, and everything in between.</p>
                <p>If musical theory isn&apos;t your thing, use the following switch configurations to get a major or a minor scale <span className="text-xs">(and everything will sound nice 🌈)</span>:</p>

                <h3 className="text-xl mb-2"><b>Major Scale</b></h3>
                <table className="w-full mb-8 border-collapse text-sm">
                  <thead><tr className="border-b-2 border-black pb-2"><th className="text-left">Switch</th><th className="text-left">Position</th><th className="text-left">Scale degree</th></tr></thead>
                  <tbody>
                    <tr><td>8 (top)</td><td>CENTER</td><td>Major 2nd</td></tr>
                    <tr><td>7</td><td>DOWN or CENTER</td><td>Major 7th or Tonic octave</td></tr>
                    <tr><td>6</td><td>DOWN</td><td>Major 6th</td></tr>
                    <tr><td>5</td><td>DOWN</td><td>Perfect 5th</td></tr>
                    <tr><td>4</td><td>DOWN</td><td>Perfect 4th</td></tr>
                    <tr><td>3</td><td>CENTER</td><td>Minor 3rd</td></tr>
                    <tr><td>2</td><td>CENTER</td><td>Major 2nd</td></tr>
                    <tr><td>1 (bottom)</td><td>CENTER</td><td>Tonic</td></tr>
                  </tbody>
                </table>
                <h3 className="text-xl mb-2"><b>Minor Scale</b></h3>
                <table className="w-full mb-8 border-collapse text-sm">
                  <thead><tr className="border-b-2 border-black"><th className="text-left">Switch</th><th className="text-left">Position</th><th className="text-left">Scale degree</th></tr></thead>
                  <tbody>
                    <tr><td>8 (top)</td><td>UP or CENTER</td><td>Either a Major 2nd or a minor 3rd</td></tr>
                    <tr><td>7</td><td>CENTER</td><td>Tonic octave</td></tr>
                    <tr><td>6</td><td>CENTER</td><td>Minor 7th</td></tr>
                    <tr><td>5</td><td>DOWN</td><td>Perfect 5th</td></tr>
                    <tr><td>4</td><td>DOWN</td><td>Perfect 4th</td></tr>
                    <tr><td>3</td><td>DOWN</td><td>Minor 3rd</td></tr>
                    <tr><td>2</td><td>CENTER</td><td>Major 2nd</td></tr>
                    <tr><td>1 (bottom)</td><td>CENTER</td><td>Tonic</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="order-first sm:order-last basis-full md:basis-1/4 sm:hidden">
                <div className="flex flex-row justify-center h-96 m-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="bg-panel p-4" src={`${CIMG}/scale_degree_switches.svg`} alt="scale degree switches" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading title="The Benders 👌" />
          <p>Each of the four channels hosts a dedicated <Definition item={BENDER} /> component to act as a conduit between your finger and your modular system.</p>
          <p>It can be used in a variety of ways to modify the various outputs of the DEGREE, as well as provide a modulation source for other modules via its dedicated <Definition item={BENDER_OUTPUT} /> (+-8V).</p>
          <p>As mentioned, there is a variety of modes a <Definition item={BENDER} /> can be in at any one time. It can either be in <Definition item={PITCH_BEND_MODE} />, <Definition item={RATCHET_MODE} />, <Definition item={PITCH_BEND_MODE} /> + <Definition item={RATCHET_MODE} />, or simply just &quot;off&quot;.</p>
          <Note><p>NOTE: regardless of which mode a <Definition item={BENDER} /> is in, it will ALWAYS output the raw CV value. You cannot disable this. (and why would you?!)</p></Note>

          <SectionHeading title="Bender Modes" />
          <SectionSubheading title="Pitch Bend Mode" />
          <p>When the 🔃 symbol is illuminated, the <Definition item={BENDER} /> is in &quot;Pitch Bend&quot; mode. In this mode, the <Definition item={BENDER} /> will apply a pitch bend effect to the <Definition item={VO_OUTPUT} /> of that channel.</p>
          <p>Pitch Bend Range: When holding down the <Definition item={BENDER_RANGE_BTN} />, you can set the range in which the <Definition item={BENDER} /> effects the <Definition item={VO_OUTPUT} /> (in semi-tones). There are 8 possible semi-tone ranges: 1, 2, 3, 4, 5, 7, 10, and 12 semi-tones.</p>

          <SectionSubheading title="Ratchet Mode" />
          <p>When the ⏸ symbol is illuminated, the <Definition item={BENDER} /> is in &quot;Ratchet&quot; mode, and will directly effect the <Definition item={GATE_OUTPUT} /> of the corresponding channel.</p>
          <p>When pressing the <Definition item={BENDER} /> &quot;upwards&quot; (ie. towards the top of the module), then the <Definition item={GATE_OUTPUT} /> will begin creating trigger events at an increasing rate (quarter notes ^ 8th notes ^^ 16th notes ^^^ 32nd notes), etc.</p>
          <p>When pulling the <Definition item={BENDER} /> &quot;downwards&quot; (ie. towards the bottom of the module), then the <Definition item={GATE_OUTPUT} /> will create trigger events that are triplets (at an increasing rate).</p>

          <SectionSubheading title="Pitch Bend + Ratchet Mode" />
          <p>In this mode, both the 🔃 and the ⏸ symbols will be illuminated, and thus execute the corresponding modes simultaneously.</p>

          <SectionSubheading title="OFF Mode" />
          <p>In the case when you don&apos;t want the benders effecting the <Definition item={GATE_OUTPUT} /> or the <Definition item={VO_OUTPUT} />, but still wish to use the raw <Definition item={BENDER_OUTPUT} /> for modulating other modules in your system, use this mode.</p>

          <SectionHeading title="Bender Sequencing" />
          <p>To record the movements of the <Definition item={BENDER} plural /> into a channels sequence, enable RECORD and start bending. The sequencer will record the raw CV values of the bender into the sequence, giving you the option to apply Pitch Bend or Ratchet effects after the fact, should you wish too.</p>

          <SectionHeading title="Bender Calibration" />
          <p>The <Definition item={BENDER} /> components are very sensitive analog components. Each Bender component in your DEGREE is unique, and will react differently from its neighbor. Because of this, they must be calibrated by the on-board microcontroller to obtain the most stable and consistent operation.</p>
          <p>To enter <Definition item={BENDER_CALIBRATION_MODE} />, hold down <Definition item={ALT_BTN} /> and then press the <Definition item={BENDER_MODE_BTN} />. Once calibration has been initialized, the sequencer display will illuminate the top most and bottom most LEDs. When you see this, start push/pulling the <Definition item={BENDER} plural /> to their maximum bend ranges (as limited by the panel). When you have done this for all the benders, hold down <Definition item={ALT_BTN} /> and then press the <Definition item={BENDER_MODE_BTN} /> to exit the calibration process. The new calibration data will now be saved in the flash memory of the device and preserved between power cylces.</p>
          <Note><p>NOTE: You should only need to do this once, but it would be worth while to re-calibrate your benders whenever you relocate your modular system - as the temperature of the air does effects the sensitivity of the analog sensors attached to the bender components.</p></Note>
          <p><b>Bender Replacement:</b> Should any of your Bender components become faulty, please contact me and I will provide a replacement. You only need a screw driver to replace a Bender component yourself 🙂.</p>
        </Section>

        <Section>
          <SectionHeading title="VCO Calibration" />
          <p>Analog VCOs are notoriously difficult to calibrate. They are very sensitive to temperature, humidity, and other environmental factors which ultimately causes imperfect pitch tracking (requiring frequent recalibration).</p>
          <p>The DEGREE has the ability to auto-calibrate the 1-volt-per-octave response of analog VCOs. By doing this, all four VCOs which the DEGREE controls will be in perfect harmony with each other, allowing for very large and lush chords across 5 octaves.</p>
          <p>It does this by patching a simple feedback loop between the target VCO and the DEGREE&apos;s CLOCK input. The frequency of the VCO is detected at a variety of voltages provided by the DEGREE&apos;s 1VO output, and the DEGREE then uses this data to calculate the frequency of the VCO at any given voltage using <ManualLink href="https://en.wikipedia.org/wiki/Interpolation" external>exponential interpolation</ManualLink>.</p>
          <Note><p>NOTE: To reset the calibration data for a channel to default, see the <ManualLink anchor href="#anchor-Settings and Gestures">Settings and Gestures</ManualLink> section.</p></Note>
          <SectionSubheading title="Calibration Steps" />
          <p>To calibrate a VCO, follow these steps (<b><u>read each step carefully!</u></b>):</p>
          <ol className="list-outside list-decimal marker:font-bold space-y-3 pl-5 sm:pl-6">
            <li className="p-1">Ensure your system has been powered on for at least 10 minutes to allow your VCO to &quot;warm up&quot;.</li>
            <li className="p-1">Turn the <Definition item={TEMPO_POT} /> to the center position.</li>
            <li className="p-1">Patch the 1VO output of the target channel to the 1VO input of the target VCO</li>
            <li className="p-1">Patch the output of the VCO into the <Definition item={CLOCK_INPUT} /> of the DEGREE (SAW, TRI, or SQUARE waves work best)</li>
            <li className="p-1">Set the frequency of the VCO to a low value. The VCO should be oscillating at a frequency between 16.35Hz and 65.41Hz.</li>
            <li className="p-1">Select the channel you wish to calibrate by holding down the <Definition item={SELECT_PAD} />, then press <Definition item={ALT_BTN} /> + <Definition item={CV_MODE_BTN} /> to initialize calibration. Once calibration has been initialized, the target channels sequence display will illuminate indicating that the VCO is being calibrated.</li>
            <li className="p-1">The calibration routine will run for a few seconds, afterwhich the calibration data will be saved to flash memory and preserved between power cycles.</li>
            <li className="p-1">The display will flash a few times indicating that the calibration is complete.</li>
          </ol>
          <Note>
            <p>NOTE: When calibrating multiple VCOs, it is <b>VERY important</b> to first ensure that <b>all VCOs are set to the same frequency</b>. The chosen frequency should be between 16.35Hz and 65.41Hz. If you do not set each VCO to the same frequency prior to calibration, the &quot;initial pitch&quot; of each VCO after calibration will very likely be different.</p>
            <p>For example, if one VCO is set to 32.70hz (C1), and another is set to 34.65hz (C#1), then the initial pitch of the first VCO after calibration will be a semi-tone higher than the second VCO.</p>
            <p><b>TIP:</b> You don&apos;t need a tuner to set the frequency of your VCOs prior to calibration. You can just use your ear to ensure they are all set &quot;nearly&quot; to the same frequency. The calibration routine will take care of the rest.</p>
          </Note>
          <Note><p>NOTE: You should only need to do this once, but it would be worth while to re-calibrate your VCOs whenever you relocate your modular system.</p></Note>
          <Note><p>NOTE: You can only calibrate one VCO at a time!</p></Note>
        </Section>

        <Section>
          <SectionHeading title="Settings and Gestures" />
          <p>For each channel, the following settings are stored between power cycles of the module:</p>
          <ul className="list-disc list-outside ml-5">
            <li>1 V/O calibration data</li>
            <li>Bender calibration data</li>
            <li>Channel mode</li>
            <li>Bender mode</li>
            <li>Pitch Bend range</li>
            <li>quantize grid</li>
            <li>The recorded sequence (should one exist)</li>
          </ul>
          <p>If you ever want to save or reset the current configuration of the module, use the following gestures 👇.</p>
          <SectionSubheading title="Config. Reset" />
          <p>Holding <Definition item={ALT_BTN} /> + the <Definition item={FREEZE_BTN} /> will reset all of the the saved configuration data on the module. This includes the 1v/o calibration, the bender calibration, and the various channel settings to their default values.</p>
          <SectionSubheading title="VCO Calibration Reset" />
          <p>While holding one or more <Definition item={SELECT_PAD} plural />, pressing <Definition item={ALT_BTN} /> + the <Definition item={FREEZE_BTN} /> will reset the 1v/o calibration data for all selected channels to their default values.</p>
          <SectionSubheading title="Config. Save" />
          <p>Holding <Definition item={ALT_BTN} /> + the <Definition item={RECORD_BTN} /> will save the current settings of each channel so you don&apos;t need to reconfigure things after a power cycle.</p>
        </Section>

        <Section>
          <SectionHeading title="Firmware Updates" />
          <p>This web application is designed to update the firmware of OK200 Eurorack modules.</p>
          <p>Just follow the steps below, and everything will be ok 🙂.</p>
          <SectionSubheading title="STEP 1: Are you using Google Chrome v61 or greater? 👀" />
          <p>In order for this to work, you are going to need to <a className="text-azure hover:text-azure/80 underline" target="_blank" rel="noopener noreferrer" href="https://www.google.com/intl/en_ca/chrome/">Install Google Chrome</a>. It is the only way 🙏.</p>
          <SectionSubheading>STEP 2: Download firmware file <span className="inline-block"><AiOutlineDownload /></span></SectionSubheading>
          <p>Download one of the following firmware files:</p>
          <DownloadList items={DEGREE_FIRMWARE} />
          <Note><p>NOTE: The &quot;ALT&quot; firmware contains sequencing functionality that is different from the original firmware. The manual has been updated to reflect this (see <ManualLink anchor href="#anchor-Sequencing">Sequencing</ManualLink> section).</p></Note>
          <SectionSubheading title="STEP 3: Connect module to your computer / Google Chrome and prepare for upload" />
          <p>You now need to physically connect the module to your computer / laptop / tablet. Follow these steps:</p>
          <ol className="list-outside list-decimal marker:font-bold space-y-3 pl-5 sm:pl-6">
            <li className="p-1">Power <b>OFF</b> your system.</li>
            <li className="p-1">Bring your laptop over to your system (or bring your system close to your laptop)</li>
            <li className="p-1">Remove your module from the case, <b>but keep the power cable connected</b>.</li>
            <li className="p-1">Using a standard USB cable, connect one end of the cable to the associated USB connector on underside of the module</li>
            <li className="p-1">Connect the other end of the USB cable to your computer</li>
            <li className="p-1">Power on your Eurorack case / power supply. The module needs to be powered for the firmware upload to work. Once powered, it should be operating as usual.</li>
            <li className="p-1">Now, on the underside of the module, there is a <b>tiny black button</b> and a <b>tiny white button</b> (near where the Benders are mounted)</li>
            <ul className="list-disc list-outside ml-5">
              <li>Press and hold down the <b>BLACK</b> button</li>
              <li>While the <b>BLACK</b> button is being held down, press the <b>WHITE</b> button</li>
            </ul>
            <li className="p-1">The module should now be &quot;frozen&quot; (ie. clock LED no longer flashing, touch pads unresponsive). This is GOOD! The module is now in &quot;BOOTLOADER&quot; mode.</li>
          </ol>
          <SectionSubheading title="STEP 4: Upload firmware to the module" />
          <FirmwareUpdater />
          <SectionSubheading title="STEP 6:" />
          <h3 className="text-2xl py-4">Finishing up</h3>
          <ol className="list-outside list-decimal marker:font-bold space-y-3 pl-5 sm:pl-6">
            <li className="p-1">Once the upload process is complete, the module should automatically reset itself and start running the newly uploaded firmware</li>
            <li className="p-1">Power off your Eurorack system / disconnect the power supply</li>
            <li className="p-1">Gently remove the USB cable from the modules USB connector</li>
            <li className="p-1">You can now mount the module back into your case and turn on the power.</li>
            <li className="p-1">After the module powers up, you are going to want to <b>calibrate the BENDER components</b> (ALT + MODE)</li>
            <li className="p-1">You are done!</li>
          </ol>
        </Section>
      </ContentsContextProvider>
    </div>
  );
}

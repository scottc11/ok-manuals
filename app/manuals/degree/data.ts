import type { LegendItem, LegendDefinition } from "../../components/manual/Definition";

export const VO_OUTPUT: LegendItem = { label: "1V/O Output", description: "Outputs 1 volt per octave", type: "output", voltageRange: "0V - +6V", imageRef: 1 };
export const GATE_OUTPUT: LegendItem = { label: "GATE Output", description: "Outputs +5V gate / trigger signals", type: "output", voltageRange: "0V - +5V", imageRef: 2 };
export const CV_INPUT: LegendItem = { label: "CV Input", description: "Quantize external CV into 1v/o signals | VCO Frequency detection for auto-calibration", type: "input", voltageRange: "0V - +10V", imageRef: 3 };
export const BENDER_OUTPUT: LegendItem = { label: "Bender CV Output", description: "Outputs a control voltage relative to the position of a Bender component", type: "output", voltageRange: "+-8V", imageRef: 4 };
export const SELECT_PAD: LegendItem = { label: "Channel Select Pad", description: "Selects a channel You can select multiple channels at once.", type: "touch", voltageRange: "+-8V", imageRef: 5 };
export const FREEZE_BTN: LegendItem = { label: "Freeze Button", description: "Freezes all playback.", type: "button", imageRef: 6 };
export const RESET_BTN: LegendItem = { label: "Reset Button", description: "Resets all sequences.", type: "button", imageRef: 7 };
export const LENGTH_BTN: LegendItem = { label: "Length Button", description: "Adjusts the length of a sequence.", type: "button", imageRef: 8 };
export const RECORD_BTN: LegendItem = { label: "RECORD Button", description: "Enables recording for all touch and bend events (for all 4 channels).", type: "button", imageRef: 9 };
export const DEGREE_SWITCH: LegendItem = { label: "Scale Selection Switch", description: "A 3-stage toggle switch used scale selection.", type: "toggle-switch", imageRef: 10 };
export const CV_MODE_BTN: LegendItem = { label: "CV Mode Button", description: "Toggles between MONOPHONIC MODE and QUANTIZER MODE", type: "button", imageRef: 11 };
export const GLIDE_CONTROL: LegendItem = { label: "Glide Control", description: "Controls how much slew/portamento/glide is applied to the 1v/o OUTPUT (when transitioning between scale degrees).", type: "slide-potentiometer", imageRef: 12 };
export const OCTAVE_TOUCH_PAD: LegendItem = { label: "Octave Touch Pad", description: "Capacitive touch pad for setting the active octave for a channel.", type: "touch", imageRef: 13 };
export const DEGREE_TOUCH_PAD: LegendItem = { label: "Degree Touch Pad", description: "Capacitive touch pad for setting the active degree for a channel.", type: "touch", imageRef: 14 };
export const CLOCK_INPUT: LegendItem = { label: "Clock Input", description: "External clock source input.", type: "input", voltageRange: "0V - +5V", imageRef: 15 };
export const CLOCK_OUTPUT: LegendItem = { label: "Clock Output", description: "Internal clock source output.", type: "output", voltageRange: "0V - +5V", imageRef: 16 };
export const CLOCK_LED: LegendItem = { label: "Tempo LED", description: "Indicates the tempo (in quarter notes) of the internal (or external) clock", type: "led", imageRef: 28 };
export const GLOBAL_GATE_OUTPUT: LegendItem = { label: "Global Gate Output", description: "Sums all Gate events into one output", type: "output", voltageRange: "0V - +5V", imageRef: 17 };
export const GLOBAL_BENDER_OUTPUT: LegendItem = { label: "Global Bender Output", description: "Sums all Bender CV into one output", type: "output", voltageRange: "+-8V", imageRef: 18 };
export const BENDER: LegendItem = { label: "Bender", description: "bi-directional actuator that bends up / down using the force of your finger.", type: "bender", imageRef: 19 };
export const BENDER_RANGE_BTN: LegendItem = { label: "RANGE Button", description: "Sets the Pitch Bend range applied to the 1V/O Output when using the Bender components.", type: "button", imageRef: 21 };
export const BENDER_MODE_BTN: LegendItem = { label: "Bender Mode", description: "Sets the Bender mode for the selected channel (via Channel Select Pad).", type: "button", imageRef: 20 };
export const ALT_BTN: LegendItem = { label: "ALT Button", description: "Hold down to access alternate button functions (labeled in gold).", type: "button", imageRef: 22 };
export const QUANTIZE_BTN: LegendItem = { label: "Quantize Button", description: "Quantizes a sequences touch events to the selected quantization grid.", type: "button", imageRef: 21 };
export const SEQ_CLEAR_BEND_BTN: LegendItem = { label: "Clear Bend Sequence", description: "Clears all Bend Sequences.", type: "button", imageRef: 25 };
export const SEQ_CLEAR_TOUCH_BTN: LegendItem = { label: "Clear Touch Sequence", description: "Clears all Touch Sequences.", type: "button", imageRef: 24 };
export const TEMPO_POT: LegendItem = { label: "Clock Potentiometer", description: "Sets the internal BPM of the module.", type: "potentiometer", imageRef: 26 };
export const SEQ_DISPLAY: LegendItem = { label: "Sequencer Display", description: "Displays the sequence progress and the occasional nested setting.", type: "display", imageRef: 25 };

export const DEGREE_LEGEND: LegendItem[] = [
  VO_OUTPUT, GATE_OUTPUT, CV_INPUT, BENDER_OUTPUT, SELECT_PAD, FREEZE_BTN, RESET_BTN, LENGTH_BTN,
  RECORD_BTN, DEGREE_SWITCH, CV_MODE_BTN, GLIDE_CONTROL, OCTAVE_TOUCH_PAD, DEGREE_TOUCH_PAD,
  CLOCK_INPUT, CLOCK_OUTPUT, CLOCK_LED, GLOBAL_GATE_OUTPUT, GLOBAL_BENDER_OUTPUT, BENDER,
  BENDER_RANGE_BTN, BENDER_MODE_BTN, ALT_BTN, QUANTIZE_BTN, SEQ_CLEAR_BEND_BTN, SEQ_CLEAR_TOUCH_BTN,
  TEMPO_POT, SEQ_DISPLAY,
];

export const MONOPHONIC_MODE: LegendDefinition = { label: "Monophonic Mode", description: "No CV Input Quantization. Will sustains the output of the last touched pad of that channel." };
export const QUANTIZER_MODE: LegendDefinition = { label: "Quantizer Mode", description: "Output will quantize the incoming CV and map that value to one of the active degrees (of that channel)." };
export const SEQUENCER_MODE: LegendDefinition = { label: "Sequencer Mode", description: "nope." };
export const PITCH_BEND_MODE: LegendDefinition = { label: "Pitch Bend Mode" };
export const RATCHET_MODE: LegendDefinition = { label: "Ratchet Mode" };
export const BENDER_CALIBRATION_MODE: LegendDefinition = { label: "Bender Calibration Mode" };
export const QUANTIZE_GRID_UI: LegendDefinition = { label: "Quantization Grid", description: "UI for selecting the quantization level for each channel." };
export const ACTIVE_DEGREES: LegendDefinition = { label: "Active Degrees", description: "All the degrees you wish an external CV to latch to." };
export const TIME_SIGNATURE: LegendDefinition = { label: "Time Signature" };
export const TOUCH_EVENT: LegendDefinition = { label: "Touch Event" };
export const BEND_EVENT: LegendDefinition = { label: "Bend Event" };
export const CHANNEL: LegendDefinition = { label: "Channel", description: "One of four channels" };
export const ALT_FIRMWARE: LegendDefinition = { label: "ALT Firmware", description: "A departure from the original firmware shipped with the DEGREE, this firmware handles sequencing differently." };

export const DEGREE_FIRMWARE = [
  { label: "DEGREE Alt Firmware (Nov 2025)", file: "degree-alt-firmware-nov-2025.bin", sizeLabel: "61 KB" },
  { label: "DEGREE Firmware (Nov 2025)", file: "degree-firmware-nov-2025.bin", sizeLabel: "61 KB" },
  { label: "DEGREE Alt Firmware (Jun 2023)", file: "degree-firmware-jun-2023.bin", sizeLabel: "61 KB" },
  { label: "DEGREE Firmware (Jun 2023)", file: "degree-firmware-jun-2023.bin", sizeLabel: "61 KB" },
];

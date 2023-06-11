import { LegendItem, IO } from "../types"

const ALT_FIRMWARE: LegendItem = {
    description: "A departure from the original firmware shipped with the DEGREE, this firmware handles sequencing differently.",
    label: "ALT Firmware",
    type: "firmware"
}

const VO_OUTPUT: LegendItem = {
    description: "Outputs 1 volt per octave",
    voltageRange: "0V - +6V",
    type: "output",
    label: "1V/O Output",
    imageRef: 1
}

const GATE_OUTPUT: LegendItem = {
    description: "Outputs +5V gate / trigger signals",
    voltageRange: "0V - +5V",
    type: "output",
    label: "GATE Output",
    imageRef: 2
}

const CV_INPUT: LegendItem = {
    description: "Quantize external CV into 1v/o signals | VCO Frequency detection for auto-calibration",
    voltageRange: "0V - +10V",
    type: "input",
    label: "CV Input",
    imageRef: 3
}

const BENDER_OUTPUT: LegendItem = {
    description: "Outputs a control voltage relative to the position of a Bender component",
    voltageRange: "+-8V",
    type: "output",
    label: "Bender CV Output",
    imageRef: 4
}

const SELECT_PAD: LegendItem = {
    description: "Selects a channel You can select multiple channels at once.",
    voltageRange: "+-8V",
    type: "touch",
    label: "Bender CV Output",
    imageRef: 5
}

const FREEZE_BTN: LegendItem = {
    description: "Freezes all playback.",
    altDescription: "In the ALT firmware, this button will illuminate BLUE on the first beat of the bar",
    label: "Freeze Button",
    imageRef: 6,
    type: "button"
}

const RESET_BTN: LegendItem = {
    description: "Resets all sequences.",
    altDescription: "Tempo indicator (Quarter notes).",
    label: "Reset Button",
    imageRef: 7,
    type: "button"
}

const LENGTH_BTN: LegendItem = {
    description: "Adjusts the length of a sequence.",
    altDescription: "In the {0}, this button sets the time signature of a bar (ie. 3/4, 4/4, 5/4, 6/4, 7/4)",
    label: "Length Button",
    imageRef: 8,
    type: "button",
    ref: [ALT_FIRMWARE]
}

const RECORD_BTN: LegendItem = {
    description: "Enables recording for all touch and bend events (for all 4 channels).",
    altDescription: "In the {0}, this button will flash on and off until the current bar overflows (ie. waits for beat 1 of the bar). Only then will record be enabled.",
    label: "RECORD Button",
    imageRef: 9,
    type: "button",
    ref: [ALT_FIRMWARE]
}

const DEGREE_SWITCH: LegendItem = {
    description: "A 3-stage toggle switch used scale selection.",
    label: "Scale Selection Switch",
    imageRef: 10,
    type: "toggle-switch"
}

const CV_MODE_BTN: LegendItem = {
    description: "Toggles between MONOPHONIC MODE and QUANTIZER MODE",
    altDescription: "alternate function: VCO Calibration.",
    label: "CV Mode Button",
    imageRef: 11,
    type: "button"
}

const GLIDE_CONTROL: LegendItem = {
    description: "controls how much slew/portamento/glide is applied to the 1v/o OUTPUT (when transitioning between scale degrees).",
    label: "Glide Control",
    imageRef: 12,
    type: "slide-potentiometer"
}

const OCTAVE_TOUCH_PAD: LegendItem = {
    description: "Capacitive touch pad for setting the active octave for a channel.",
    label: "Octave Touch Pad",
    imageRef: 13,
    type: "touch"
}

const DEGREE_TOUCH_PAD: LegendItem = {
    description: "Capacitive touch pad for setting the active degree for a channel.",
    label: "Degree Touch Pad",
    imageRef: 14,
    type: "touch"
}

const CLOCK_INPUT: LegendItem = {
    description: "External clock source input.",
    altDescription: "Will divide an incoming trigger / gate signal down to 96 PPQN",
    label: "Clock Input",
    imageRef: 15,
    type: "input",
    voltageRange: "0V - +5V"
}

const CLOCK_OUTPUT: LegendItem = {
    description: "Internal clock source output.",
    altDescription: "Triggers every 1 PPQN",
    label: "Clock Output",
    imageRef: 16,
    type: "output",
    voltageRange: "0V - +5V"
}

const GLOBAL_GATE_OUTPUT: LegendItem = {
    description: "Sums all Gate events into one output",
    label: "Global Gate Output",
    imageRef: 17,
    type: "output",
    voltageRange: "0V - +5V"
}

const GLOBAL_BENDER_OUTPUT: LegendItem = {
    description: "Sums all Bender CV into one output",
    altDescription: "A single Bender will only acount for +-2V on this output, with the sum of all Bender CV being +-8V.",
    label: "Global Bender Output",
    imageRef: 18,
    type: "output",
    voltageRange: "+-8V"
}

export default [VO_OUTPUT, GATE_OUTPUT, CV_INPUT, BENDER_OUTPUT, SELECT_PAD, FREEZE_BTN, RESET_BTN, LENGTH_BTN, RECORD_BTN, DEGREE_SWITCH, CV_MODE_BTN, GLIDE_CONTROL, OCTAVE_TOUCH_PAD, DEGREE_TOUCH_PAD, CLOCK_INPUT, CLOCK_OUTPUT, GLOBAL_GATE_OUTPUT, GLOBAL_BENDER_OUTPUT];
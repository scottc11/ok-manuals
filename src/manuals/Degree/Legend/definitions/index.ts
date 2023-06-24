import { LegendDefinition } from "../../../../types";
import { ALT_FIRMWARE } from "./alt-firmware";
import { BEND_SEQUENCE } from "./bend-sequence";
import { BPM } from "./bpm";
import { CHANNEL } from "./channel";
import { TOUCH_SEQUENCE } from "./touch-sequence";

export { ALT_FIRMWARE, BEND_SEQUENCE, BPM, CHANNEL, TOUCH_SEQUENCE };

export const MONOPHONIC_MODE: LegendDefinition = {
    label: "Monophonic Mode",
    description: "No CV Input Quantization. Will sustains the output of the last touched pad of that channel."
}

export const QUANTIZER_MODE: LegendDefinition = {
    label: "Quantizer Mode",
    description: "Output will quantize the incoming CV and map that value to one of the active degrees (of that channel)."
}

export const SEQUENCER_MODE: LegendDefinition = {
    label: "Sequencer Mode",
    description: "nope."
}

export const QUANTIZE_GRID_UI: LegendDefinition = {
    label: "Quantization Grid",
    description: "UI for selecting the quantization level for each channel."
}

export const ACTIVE_DEGREES: LegendDefinition = {
    label: "Active Degrees",
    description: "All the degrees you wish an external CV to latch to."
}

export const TIME_SIGNATURE: LegendDefinition = {
    label: "Time Signature"
}

export const TOUCH_EVENT: LegendDefinition = {
    label: "Touch Event"
}

export const BEND_EVENT: LegendDefinition = {
    label: "Bend Event"
}

export const TOUCH_PAD: LegendDefinition = {
    label: "Touch Pad"
}
import { LegendItem } from "../../../types";
import { CLOCK_INPUT } from "./clock-input";
import { BPM } from "./definitions/bpm";

export const TEMPO_POT: LegendItem = {
    label: "Clock Potentiometer",
    description: `Sets the internal ${BPM.label} of the module.`,
    altDescription: `When fully counter-clockwise, module will be externally clocked via the ${CLOCK_INPUT.label} jack.`,
    imageRef: 26,
    type: "potentiometer"
}
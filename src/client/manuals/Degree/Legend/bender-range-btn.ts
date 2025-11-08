import { LegendItem } from "../../../types";
import { BENDER } from "./bender";
import { VO_OUTPUT } from "./vo-output";

export const BENDER_RANGE_BTN: LegendItem = {
    label: "RANGE Button",
    description: `Sets the Pitch Bend range applied to the ${VO_OUTPUT.label} when using the ${BENDER.label} components.`,
    altLabel: "Quantize Amount",
    altDescription: `Sets the quantization grid for recorded touch events.`,
    type: "button",
    imageRef: 21
}
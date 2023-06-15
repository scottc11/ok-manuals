import { LegendItem } from "../../../types";
import { BENDER } from "./bender";

export const BENDER_RANGE_BTN: LegendItem = {
    label: "Pitch Bend Range Button",
    description: `Sets the Pitch Bend range for the ${BENDER.label} components.`,
    altLabel: "Quantize Amount",
    altDescription: `Sets the quantization grid for recorded touch events.`,
    type: "button",
    imageRef: 21
}
import { LegendItem } from "../../../types";
import { SELECT_PAD } from "./select-pad";
import { BENDER_RANGE_BTN } from "./bender-range-btn";

export const QUANTIZE_BTN: LegendItem = {
    label: "Quantize Button",
    description: `Quantizes a sequences touch events to the selected quantization grid (via ${BENDER_RANGE_BTN.altLabel}).`,
    altLabel: "Quantize Amount",
    altDescription: `Sets the quantization grid for recorded touch events.`,
    type: "button",
    imageRef: 21
}
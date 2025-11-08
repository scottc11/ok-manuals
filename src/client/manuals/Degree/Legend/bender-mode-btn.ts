import { LegendItem } from "../../../types";
import { SELECT_PAD } from "./select-pad";
import { BENDER } from "./bender";

export const BENDER_MODE_BTN: LegendItem = {
    label: "Bender Mode",
    description: `Sets the ${BENDER.label} mode for a the selected channel (via ${SELECT_PAD.label}).`,
    altLabel: "CAL. BEND",
    altDescription: `Enters a calibration routine for calibrating the ${BENDER.label} components`,
    type: "button",
    imageRef: 20
}
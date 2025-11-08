import { LegendItem } from "../../../types";
import { SELECT_PAD } from "./select-pad";
import { CHANNEL } from "./definitions/channel";
import { BEND_SEQUENCE } from "./definitions/bend-sequence";

export const SEQ_CLEAR_BEND_BTN: LegendItem = {
    label: "Clear Bend Sequence",
    gestureLabel: "BEND",
    description: `Clears all ${BEND_SEQUENCE.label}s.`,
    altDescription: `Select a ${CHANNEL.label} with the ${SELECT_PAD.label} then press this button to only clear that channels ${BEND_SEQUENCE.label}.`,
    type: "button",
    imageRef: 25
}
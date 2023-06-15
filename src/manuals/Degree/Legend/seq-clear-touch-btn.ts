import { LegendItem } from "../../../types";
import { SELECT_PAD } from "./select-pad";
import { TOUCH_SEQUENCE } from "./definitions/touch-sequence";
import { CHANNEL } from "./definitions/channel";

export const SEQ_CLEAR_TOUCH_BTN: LegendItem = {
    label: "Clear Touch Sequence",
    gestureLabel: "SEQ.",
    description: `Clears all ${TOUCH_SEQUENCE.label}s.`,
    altDescription: `Select a ${CHANNEL.label} with the ${SELECT_PAD.label} then press this button to only clear that channels ${TOUCH_SEQUENCE.label}.`,
    type: "button",
    imageRef: 24
}
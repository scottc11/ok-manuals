import { LegendItem } from "../../../types";
import { ALT_FIRMWARE } from "./alt-firmware";

export const LENGTH_BTN: LegendItem = {
    description: "Adjusts the length of a sequence.",
    altDescription: `In the ${ALT_FIRMWARE.label}, this button sets the time signature of a bar (ie. 3/4, 4/4, 5/4, 6/4, 7/4)`,
    label: "Length Button",
    imageRef: 8,
    type: "button",
}
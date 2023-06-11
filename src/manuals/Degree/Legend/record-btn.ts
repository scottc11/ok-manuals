import { LegendItem } from "../../../types";
import { ALT_FIRMWARE } from "./alt-firmware";

export const RECORD_BTN: LegendItem = {
    description: "Enables recording for all touch and bend events (for all 4 channels).",
    altDescription: `In the ${ALT_FIRMWARE.label}, this button will flash on and off until the current bar overflows (ie. waits for beat 1 of the bar). Only then will record be enabled.`,
    label: "RECORD Button",
    imageRef: 9,
    type: "button",
}
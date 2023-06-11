import { LegendItem } from "../../../types"

export const GLOBAL_BENDER_OUTPUT: LegendItem = {
    description: "Sums all Bender CV into one output",
    altDescription: "A single Bender will only acount for +-2V on this output, with the sum of all Bender CV being +-8V.",
    label: "Global Bender Output",
    imageRef: 18,
    type: "output",
    voltageRange: "+-8V"
}
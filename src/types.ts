
export type IO = "input" | "output" | "touch" | "button" | "toggle-switch" | "firmware" | "slide-potentiometer";

export type LegendItem = {
    description: string;
    altDescription?: string;
    type: IO;
    label: string;
    voltageRange?: string;
    imageRef?: number;
    ref?: LegendItem[];
}
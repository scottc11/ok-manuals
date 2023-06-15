
export type IO = "input" | "output" | "touch" | "button" | "toggle-switch" | "slide-potentiometer" | "potentiometer" | "bender";

export type LegendItem = {
    label: string;
    gestureLabel?: string;
    description: string;
    altLabel?: string;
    altDescription?: string;
    type: IO;
    voltageRange?: string;
    imageRef?: number;
}


export type LegendDefinition = {
    label: string;
    description: string;
}
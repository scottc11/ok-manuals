
export type IO = "led" | "input" | "output" | "display" | "touch" | "button" | "toggle-switch" | "slide-potentiometer" | "potentiometer" | "bender";

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
    description?: string;
}

export enum Breakpoint {
    XSMALL = 'xs',
    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'lg',
    XLARGE = 'xl'
}


export type EurorackModule = {
    name: string;
    path: string;
    hp: number;
    image: string;
}
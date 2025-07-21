
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
    slug: string;
    paths: {
        detail: string;
        manual: string;
    };
    hp: number;
    image: string;
    images?: string[];
    video?: string;
    description?: string;
}

// E-commerce types
export interface StripeProduct {
    id: string;
    name: string;
    description?: string;
    images: string[];
    default_price: string;
    metadata: Record<string, string>;
    active: boolean;
}

export interface StripePrice {
    id: string;
    unit_amount: number;
    currency: string;
    product: string;
}

export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    currency: string;
    image?: string;
    stock?: number;
    metadata?: Record<string, string>;
}

export interface CartItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
}

export interface CartContextType {
    items: CartItem[];
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotal: () => number;
    getItemCount: () => number;
}

export interface CheckoutSession {
    id: string;
    url: string;
    payment_status: string;
}
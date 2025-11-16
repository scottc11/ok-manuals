import type { Entry } from 'contentful';
import { EntryFields } from 'contentful/dist/types/types/entry';
import type { EntrySkeletonType } from 'contentful/dist/types/types/query';


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

type VideoFields = {
    videoId: EntryFields.Text;
    title: EntryFields.Text;
};
type VideoSkeleton = EntrySkeletonType<VideoFields>;
export type VideoEntry = Entry<VideoSkeleton>;

export interface Product {
    slug: EntryFields.Text;
    name: EntryFields.Text;
    shortDescription?: EntryFields.Text;
    description?: EntryFields.Text;
    price?: EntryFields.Text;
    thumbnail?: EntryFields.AssetLink;
    images?: EntryFields.AssetLink[];
    discontinued?: EntryFields.Boolean;
    active?: EntryFields.Boolean;
    stripeId?: EntryFields.Text;
    subtitle?: EntryFields.Text;
    manualUrl?: EntryFields.Text;
    videos?: VideoEntry[];
    tags?: EntryFields.Text[];
    specifications?: EntryFields.Object;
}

export interface StripeProduct {
    id: string;
    name: string;
    description?: string;
    price: number;
    metadata: Record<string, string>;
    stock?: number;
    image?: string;
    currency?: string;
}

export interface CartItem {
    id: string;
    slug: string;
    name: string;
    quantity: number;
    thumbnailUrl?: string;
    stripeId?: string;
}

export interface CartContextType {
    items: CartItem[];
    addItem: (item: { slug: string; name: string; thumbnailUrl?: string; stripeId?: string }, quantity?: number) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getItemCount: () => number;
}

export interface CheckoutSession {
    id: string;
    url: string;
    payment_status: string;
}

export interface BlogPostFields {
    title?: EntryFields.Text;
    date?: EntryFields.Date;
    content?: EntryFields.RichText;
    image?: EntryFields.AssetLink;
};
export interface BlogPost {
    fields: BlogPostFields;
    sys?: { id?: string };
}
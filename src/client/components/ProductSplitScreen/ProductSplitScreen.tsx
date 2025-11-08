import React from 'react';
import Button from '../Button/Button';

interface ProductSplitScreenProps {
    bannerImage: string;
    price: string;
    bodyText: string;
    ctaText: string;
    ctaAction: () => void;
    rightImage: string;
    reversed?: boolean; // Option to swap sides
    className?: string;
    ctaVariant?: 'light' | 'dark' | 'auto';
}

const ProductSplitScreen = ({
    bannerImage,
    price,
    bodyText,
    ctaText,
    ctaAction,
    rightImage,
    reversed = false,
    className = '',
    ctaVariant = 'dark'
}: ProductSplitScreenProps) => {
    const bannerSection = (
        <div className="w-full rounded-lg overflow-hidden order-1">
            <img src={bannerImage} alt="Product Banner" className="w-full h-auto block" />
        </div>
    );
    
    const imageSection = (
        <div className="flex w-full items-center justify-center order-2 md:w-[55%] md:items-center md:justify-center">
            <div className="w-full max-w-full text-center">
                <img 
                    src={rightImage} 
                    alt="Product" 
                    className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                />
            </div>
        </div>
    );
    
    const contentSection = (
        <div className="flex flex-col gap-4 py-4 w-full order-3">
            <div className="text-3xl font-numbers border-b-2 border-gray-400 pb-2">{price}</div>
            <div className="text-lg leading-relaxed text-gray-300">{bodyText}</div>
            <div className="mt-4">
                <Button 
                    onClick={ctaAction}
                    variant={ctaVariant}
                    className="text-lg px-8 py-3"
                >
                    {ctaText}
                </Button>
            </div>
        </div>
    );
    
    return (
        <div className={`flex gap-6 min-h-[60vh] flex-col md:flex-row ${className}`}>
            {/* Mobile: Banner -> Image -> Content */}
            <div className="md:hidden flex flex-col gap-6">
                {bannerSection}
                {imageSection}
                {contentSection}
            </div>
            
            {/* Desktop: Grouped layout with reverse option */}
            <div className={`hidden md:flex gap-6 w-full ${reversed ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="flex flex-col gap-6 w-[45%]">
                    {bannerSection}
                    {contentSection}
                </div>
                {imageSection}
            </div>
        </div>
    );
};

export default ProductSplitScreen; 
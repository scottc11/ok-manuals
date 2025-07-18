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
    const contentSection = (
        <div className="flex flex-col gap-6 w-full md:w-[45%]">
            <div className="w-full rounded-lg overflow-hidden">
                <img src={bannerImage} alt="Product Banner" className="w-full h-auto block" />
            </div>
            <div className="flex flex-col gap-4 py-4">
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
        </div>
    );
    
    const imageSection = (
        <div className="flex w-full md:w-[55%] items-center justify-center">
            <div className="w-full max-w-full text-center">
                <img 
                    src={rightImage} 
                    alt="Product" 
                    className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                />
            </div>
        </div>
    );
    
    return (
        <div className={`flex gap-8 min-h-[60vh] md:flex-row flex-col ${className}`}>
            {reversed ? (
                <>
                    {imageSection}
                    {contentSection}
                </>
            ) : (
                <>
                    {contentSection}
                    {imageSection}
                </>
            )}
        </div>
    );
};

export default ProductSplitScreen; 
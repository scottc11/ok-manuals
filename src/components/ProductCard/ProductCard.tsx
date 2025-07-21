import React from 'react';
import Button from '../Button/Button';

interface ProductCardProps {
  title?: string;
  price: string;
  bodyText: string;
  ctaAction: () => void;
  image: string;
}

const ProductCard = ({
  title,
  price,
  bodyText,
  ctaAction,
  image
}: ProductCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img 
          src={image} 
          alt={title || "Product"} 
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col gap-4 py-4 w-full md:w-1/2">
        <h3 className="text-3xl font-bold text-white font-unica">{title}</h3>
        <div className="text-3xl font-numbers border-b-2 border-gray-400 pb-2">{price}</div>
        <div className="text-lg leading-relaxed text-gray-300">{bodyText}</div>
        <div className="mt-4">
          <Button 
            onClick={ctaAction}
            variant="dark"
            className="text-lg px-8 py-3"
          >
            Details →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
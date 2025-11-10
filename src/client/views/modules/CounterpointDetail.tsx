import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import YouTubeVideo from '../../components/YouTubeVideo';
import Button from '../../components/Button/Button';
import { Counterpoint } from '../../content/modules';
import { Product } from '../../types';
import { useProductDetail } from '../../hooks/useProductDetail';

const CounterpointDetail: React.FC = () => {

  const { product, loading, error } = useProductDetail('counterpoint');

  const getImages = (product: Product) => {
    return (Array.isArray(product.images) ? (product.images as unknown as any[]).map((img: any) => img?.fields?.file?.url || img?.url).filter(Boolean) : []);
  };
  
  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center py-16">
          <span className="text-gray-500">Loading…</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center py-16">
          <span className="text-red-500">Error: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
        <ProductDetail product={product as unknown as Product} />
        <div className="flex flex-col gap-4">
            <NavLink to={Counterpoint.paths.manual} className="block">
                <Button className="w-full" variant="dark">
                    Manual →
                </Button>
            </NavLink>
        </div>
    </div>
  );
};

export default CounterpointDetail;
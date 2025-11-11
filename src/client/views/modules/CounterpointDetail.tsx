import React from 'react';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { Counterpoint } from '../../content/modules';
import { Product } from '../../types';
import { useProductDetail } from '../../hooks/useProductDetail';
import ManualLink from '../../components/ManualLink/ManualLink';
import YouTubeVideo from '../../components/YouTubeVideo';

const CounterpointDetail: React.FC = () => {

  const { product, loading, error } = useProductDetail('counterpoint');

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
        
        { product?.manualUrl && <ManualLink path={product.manualUrl as unknown as string} /> }
        
        { product?.videos && (
          <div className="flex flex-col gap-8">
            {(product.videos as Array<{ fields: {videoId: string; title: string } }>).map((video) => (
              <YouTubeVideo
                key={video.fields.videoId}
                videoId={video.fields.videoId}
                title={video.fields.title}
              />
            ))}
          </div>
        )}
    </div>
  );
};

export default CounterpointDetail;
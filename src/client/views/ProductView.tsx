import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import ManualLink from '../components/ManualLink/ManualLink';
import YouTubeVideo from '../components/YouTubeVideo';
import { useProductDetail } from '../hooks/useProductDetail';
import { Product } from '../types';

interface RouteParams {
  slug: string;
}

const ProductView: React.FC = () => {
  const { slug } = useParams<RouteParams>();
  const { product, loading, error } = useProductDetail(slug);

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

      {product?.manualUrl && <ManualLink path={product.manualUrl as unknown as string} />}

      {product?.videos && (
        <div className="flex flex-col gap-8">
          {(product.videos as Array<{ fields: { videoId: string; title: string } }>).map((video) => (
            <YouTubeVideo key={video.fields.videoId} videoId={video.fields.videoId} title={video.fields.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductView;
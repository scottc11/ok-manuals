import React from 'react';
import { useParams } from 'react-router-dom';
import CounterpointDetail from '../../views/modules/CounterpointDetail';
import DegreeDetail from '../../views/modules/DegreeDetail';
import NotFound from '../../views/PageNotFound404';

interface ProductRouterParams {
  slug: string;
}

const ProductRouter: React.FC = () => {
  const { slug } = useParams<ProductRouterParams>();

  const productComponents: Record<string, React.ComponentType> = {
    'counterpoint': CounterpointDetail,
    'degree': DegreeDetail,
    // Add more products here as they're created
  };

  const ProductComponent = productComponents[slug || ''];

  if (!ProductComponent) {
    return <NotFound />;
  }

  return <ProductComponent />;
};

export default ProductRouter; 
import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import YouTubeVideo from '../../components/YouTubeVideo';
import Button from '../../components/Button/Button';
import { Counterpoint } from '../../content/modules';

const CounterpointDetail: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
        <ProductDetail />
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
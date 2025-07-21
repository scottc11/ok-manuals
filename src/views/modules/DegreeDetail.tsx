import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import YouTubeVideo from '../../components/YouTubeVideo';
import Button from '../../components/Button/Button';
import { Degree } from '../../content/modules';

const DegreeDetail: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <ProductDetail />
            <div className="flex flex-col gap-4">
                <NavLink to={Degree.paths.manual} className="block">
                    <Button className="w-full" variant="dark">
                        Manual →
                    </Button>
                </NavLink>
                <YouTubeVideo videoId={Degree.video} />
            </div>
        </div>
    );
};

export default DegreeDetail;
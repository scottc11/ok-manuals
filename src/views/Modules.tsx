import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard/ProductCard';

const Modules: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // const counterpoint = products.find((product) => product.metadata?.slug === 'counterpoint');
    // const degree = products.find((product) => product.metadata?.slug === 'degree');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.API_DOMAIN}/api/products`);
                const data = await response.json();

                if (data.success) {
                    setProducts(data.products);
                } else {
                    setError(data.error || 'Failed to fetch products');
                }
            } catch (err) {
                setError('Network error occurred while fetching products');
                console.error('Error fetching products:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-96">
                <div className="text-white text-lg">Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-96">
                <div className="text-red-400 text-lg">Error: {error}</div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-96">
                <div className="text-white text-lg">No products available</div>
            </div>
        );
    }

    return (
        <div className="">
            <div className="container mx-auto py-16">
                <div className="flex flex-col gap-12">
                    <ProductCard
                        title="Counterpoint"
                        price="$899"
                        bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                        ctaAction={() => window.location.assign('#/modules/counterpoint')}
                        image={require('../media/counterpoint/panel.svg')}
                    />

                    <ProductCard
                        title="DEGREE"
                        price="$1,299"
                        bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                        ctaAction={() => window.location.assign('#/modules/degree')}
                        image={require('../media/DEGREE/DEGREE.png')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modules; 
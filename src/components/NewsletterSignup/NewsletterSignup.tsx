import React, { useState } from 'react';
import Button from '../Button/Button';

interface NewsletterSignupProps {
    className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className = '' }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // TODO: Implement newsletter signup logic
        console.log('Newsletter signup:', { name, email });
        // Reset form
        setName('');
        setEmail('');
    };

    return (
        <div className={`p-8 ${className}`}>
            <h3 className="text-4xl font-bold text-gray-800 mb-2 text-center">Mailing List</h3>
            <p className="text-gray-600 mb-6 text-center">Subscribe to my mailing list for the latest updates and announcements</p>
            
            <form className="w-full md:w-1/2 mx-auto space-y-4">
                
                <div>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Name"
                    />
                </div>
                
                <div>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Email"
                    />
                </div>
                
                <Button
                    onClick={() => handleSubmit()}
                    variant="light"
                    className="w-full"
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default NewsletterSignup; 
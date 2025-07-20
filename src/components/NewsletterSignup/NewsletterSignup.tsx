import React, { useState } from 'react';
import Button from '../Button/Button';

interface NewsletterSignupProps {
    className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className = '' }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await fetch(`${process.env.API_DOMAIN}/api/newsletter-signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Thank you for subscribing! You\'ve been added to our mailing list.');
                setName('');
                setEmail('');
            } else {
                setMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`p-8 ${className}`}>
            <h3 className="text-4xl font-bold text-gray-800 mb-2 text-center">Mailing List</h3>
            <p className="text-gray-600 mb-6 text-center">Subscribe to my mailing list for the latest updates and announcements</p>
            
            <form onSubmit={handleSubmit} className="text-black w-full md:w-1/2 mx-auto space-y-4">
                
                <div>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
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
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                        placeholder="Email"
                    />
                </div>
                
                <Button
                    type="submit"
                    variant="light"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </Button>

                {message && (
                    <div className={`text-center mt-4 p-3 rounded-md ${
                        message.includes('Thank you') 
                            ? 'bg-green-100 text-green-700 border border-green-300'
                            : 'bg-red-100 text-red-700 border border-red-300'
                    }`}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default NewsletterSignup; 
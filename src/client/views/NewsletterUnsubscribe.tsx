import React, { useState } from 'react';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

const NewsletterUnsubscribe: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email.trim()) {
            setStatus('error');
            setMessage('Please enter your email address');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch(`${process.env.API_DOMAIN}/api/newsletter-unsubscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: email.trim(),
                    website: '' // Honeypot field
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage(data.message || 'Successfully unsubscribed from newsletter');
                setEmail(''); // Clear the form
            } else {
                setStatus('error');
                setMessage(data.message || data.error || 'Failed to unsubscribe');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Network error. Please try again.');
            console.error('Unsubscribe error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-black py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Unsubscribe from Newsletter
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">Enter your email address to unsubscribe.</p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {status === 'success' ? (
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">
                                Unsubscribed Successfully
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {message}
                            </p>
                            <div className="mt-6">
                                <Link to="/" className="text-lavender hover:text-bold">
                                    Return to Home
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                            </div>

                            {/* Honeypot field - hidden from users */}
                            <input
                                type="text"
                                name="website"
                                style={{ display: 'none', visibility: 'hidden' }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            {message && (
                                <div className={`p-4 rounded-md ${
                                    status === 'error' 
                                        ? 'bg-red-50 border border-red-200' 
                                        : 'bg-blue-50 border border-blue-200'
                                }`}>
                                    <p className={`text-sm ${
                                        status === 'error' ? 'text-red-800' : 'text-blue-800'
                                    }`}>
                                        {message}
                                    </p>
                                </div>
                            )}

                            <div>
                                <Button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <div className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Unsubscribing...
                                        </div>
                                    ) : (
                                        'Unsubscribe'
                                    )}
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {/* Privacy Notice */}
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center text-xs text-gray-500">
                    <p>
                        We respect your privacy. Your information will be kept secure and 
                        you can resubscribe at any time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsletterUnsubscribe; 
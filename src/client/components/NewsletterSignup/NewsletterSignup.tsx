import React from 'react';

interface NewsletterSignupProps {
    className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className = '' }) => {
    return (
        <div className={`p-8 ${className}`}>
            <h3 className="text-4xl font-bold text-gray-800 mb-2 text-center">Mailing List</h3>
            <p className="text-onyx mb-4 text-center">
                Sign up for my mailing list below to receive updates on new designs and manufacturing timelines.
            </p>
            <form
                action="https://ok200.us18.list-manage.com/subscribe/post?u=935f87428090dde65ff7e73dd&amp;id=da174f293d&amp;f_id=0095ace6f0"
                method="post"
                target="_blank"
                noValidate
                className="w-full max-w-md mx-auto p-4 sm:p-6"
            >
                <div className="mb-4">
                    <div className="flex items-center gap-3 flex-col xs:flex-row">
                        <div className="relative flex-1">
                            <input
                                type="email"
                                name="EMAIL"
                                id="mce-EMAIL"
                                required
                                placeholder="Email Address"
                                className="peer block w-full rounded-sm bg-transparent border border-onyx text-onyx placeholder-onyx/70 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-onyx"
                            />
                        </div>
                        <button
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="inline-flex h-11 min-w-[44px] items-center justify-center rounded-md bg-onyx px-5 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-onyx focus:ring-offset-2"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input
                        type="text"
                        name="b_935f87428090dde65ff7e73dd_da174f293d"
                        tabIndex={-1}
                        defaultValue=""
                    />
                </div>
            </form>
        </div>
    );
};

export default NewsletterSignup; 
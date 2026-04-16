interface NewsletterSignupProps {
  className?: string;
}

export default function NewsletterSignup({
  className = "",
}: NewsletterSignupProps) {
  return (
    <div className={`p-8 ${className}`}>
      <h3 className="text-4xl font-bold text-white mb-2 text-center">
        Mailing List
      </h3>
      <p className="text-gray-400 mb-4 text-center">
        Sign up for my mailing list below to receive updates on new designs and
        manufacturing timelines.
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
                className="peer block w-full rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition"
              />
            </div>
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="inline-flex h-12 min-w-[44px] items-center justify-center rounded-lg bg-lime px-5 text-onyx font-medium hover:bg-lime/80 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 focus:ring-offset-onyx transition"
            >
              Subscribe
            </button>
          </div>
        </div>
        {/* Honeypot */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
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
}

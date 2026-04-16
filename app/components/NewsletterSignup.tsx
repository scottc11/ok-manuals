interface NewsletterSignupProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function NewsletterSignup({
  className = "",
  variant = "dark",
}: NewsletterSignupProps) {
  const isDark = variant === "dark";

  return (
    <div className={`p-8 ${className}`}>
      <h3 className={`text-4xl font-bold mb-2 text-center ${isDark ? "text-white" : "text-onyx"}`}>
        Mailing List
      </h3>
      <p className={`mb-4 text-center ${isDark ? "text-gray-400" : "text-onyx/70"}`}>
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
                className={`peer block w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent transition ${
                  isDark
                    ? "bg-neutral-800 border border-neutral-700 text-white placeholder-gray-500 focus:ring-lime"
                    : "bg-white/60 border border-onyx/20 text-onyx placeholder-onyx/50 focus:ring-onyx"
                }`}
              />
            </div>
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className={`inline-flex h-12 min-w-[44px] items-center justify-center rounded-lg px-5 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${
                isDark
                  ? "bg-lime text-onyx hover:bg-lime/80 focus:ring-lime focus:ring-offset-onyx"
                  : "bg-onyx text-white hover:bg-onyx/80 focus:ring-onyx focus:ring-offset-lime"
              }`}
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

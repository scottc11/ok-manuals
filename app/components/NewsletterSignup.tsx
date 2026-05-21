"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface NewsletterSignupProps {
  className?: string;
  variant?: "dark" | "light";
}

const MAILCHIMP_URL =
  "https://ok200.us18.list-manage.com/subscribe/post?u=935f87428090dde65ff7e73dd&id=da174f293d&f_id=0095ace6f0";
const MIN_FILL_TIME_MS = 3000;

export default function NewsletterSignup({
  className = "",
  variant = "dark",
}: NewsletterSignupProps) {
  const isDark = variant === "dark";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const mountedAt = useRef(0);
  const jsToken = useRef("");

  useEffect(() => {
    mountedAt.current = Date.now();
    jsToken.current = Math.random().toString(36).slice(2) + Date.now().toString(36);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

      const honeypot = formData.get("website") as string;
      if (honeypot && honeypot.trim() !== "") return;

      if (!jsToken.current) return;

      const elapsed = Date.now() - mountedAt.current;
      if (elapsed < MIN_FILL_TIME_MS) {
        setStatus("error");
        setMessage("Please take a moment before submitting.");
        return;
      }

      const email = (formData.get("EMAIL") as string)?.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setStatus("error");
        setMessage("Please enter a valid email address.");
        return;
      }

      setStatus("submitting");

      try {
        const mailchimpData = new URLSearchParams();
        mailchimpData.append("EMAIL", email);
        mailchimpData.append(
          "b_935f87428090dde65ff7e73dd_da174f293d",
          "",
        );

        const res = await fetch(MAILCHIMP_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: mailchimpData.toString(),
        });

        setStatus("success");
        setMessage("Thanks for subscribing!");
        form.reset();
      } catch {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    },
    [],
  );

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
        onSubmit={handleSubmit}
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
              disabled={status === "submitting"}
              className={`inline-flex h-12 min-w-[44px] items-center justify-center rounded-lg px-5 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition disabled:opacity-50 ${
                isDark
                  ? "bg-lime text-onyx hover:bg-lime/80 focus:ring-lime focus:ring-offset-onyx"
                  : "bg-onyx text-white hover:bg-onyx/80 focus:ring-onyx focus:ring-offset-lime"
              }`}
            >
              {status === "submitting" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>

        {/* Honeypot — attractive field name that bots will auto-fill */}
        <div aria-hidden="true" className="absolute overflow-hidden" style={{ height: 0, width: 0, opacity: 0 }}>
          <label htmlFor="website">Website</label>
          <input
            type="url"
            name="website"
            id="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        {status !== "idle" && status !== "submitting" && (
          <p
            className={`mt-3 text-sm text-center ${
              status === "success"
                ? isDark ? "text-lime" : "text-green-600"
                : isDark ? "text-red-400" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

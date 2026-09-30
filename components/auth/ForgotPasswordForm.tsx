"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthHeading, Field, submitButton } from "./fields";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ForgotPasswordForm() {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [resent, setResent] = useState(false);

  const backLink = (
    <p className="mt-10 text-center text-sm text-[#5C5C5C] lg:mt-auto lg:pt-14">
      Remember your password?{" "}
      <Link href="/sign-in" className="text-secondary hover:underline">
        Back to Sign In
      </Link>
    </p>
  );

  if (sentTo) {
    return (
      <div className="flex h-full flex-col">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary text-[#141414]">
          <MailIcon />
        </span>
        <div className="mt-6">
          <AuthHeading eyebrow="Reset Password" title="Check Your Email" />
        </div>
        <p role="status" className="mt-4 text-sm leading-relaxed text-[#5C5C5C] sm:text-base">
          If an account exists for <span className="font-bold text-[#141414]">{sentTo}</span>, we&apos;ve sent a link to
          reset your password. It may take a few minutes to arrive, so check your spam folder too.
        </p>
        <p className="mt-2 text-xs text-[#9A9A9A]">(Demo only — no email service is connected yet.)</p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setResent(true)}
            disabled={resent}
            className="text-label-s text-secondary hover:underline disabled:text-[#9A9A9A] disabled:no-underline"
          >
            {resent ? "Link sent again" : "Resend link"}
          </button>
          <button
            type="button"
            onClick={() => {
              setSentTo(null);
              setResent(false);
            }}
            className={submitButton}
          >
            Use a different email
          </button>
        </div>

        {backLink}
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <AuthHeading eyebrow="Reset Password" title="Forgot Password?" />
      <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] sm:text-base">
        Enter the email you signed up with and we&apos;ll send you a link to reset your password.
      </p>

      <form
        className="mt-8 space-y-5 lg:mt-10"
        onSubmit={(e) => {
          e.preventDefault();
          const email = new FormData(e.currentTarget).get("email");
          setSentTo(String(email));
        }}
      >
        <Field id="email" label="Email" type="email" name="email" autoComplete="email" placeholder="designer@example.com" required />
        <div className="flex justify-end pt-1">
          <button type="submit" className={submitButton}>
            Send Reset Link
          </button>
        </div>
      </form>

      {backLink}
    </div>
  );
}

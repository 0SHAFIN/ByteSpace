"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthHeading, Field, submitButton } from "./fields";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
      <path
        fill="#141414"
        d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
      <path
        fill="#141414"
        d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.67 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.8 12 2.8 6.92 2.8 2.8 6.92 2.8 12s4.12 9.2 9.2 9.2c5.31 0 8.83-3.73 8.83-8.99 0-.6-.07-1.06-.15-1.51Z"
      />
    </svg>
  );
}

export default function SignInForm() {
  const [done, setDone] = useState(false);

  return (
    <div className="flex h-full flex-col">
      <AuthHeading eyebrow="Sign In" title="Welcome Back" />

      <form
        className="mt-8 space-y-5 lg:mt-10"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <Field id="email" label="Email" type="email" name="email" autoComplete="email" placeholder="designer@example.com" required />
        <Field
          id="password"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="••••••••"
          required
          minLength={8}
        />
        <div className="flex items-center justify-between gap-4 pt-1">
          <Link href="/forgot-password" className="text-label-s text-secondary hover:underline">
            Forgot password?
          </Link>
          <button type="submit" className={submitButton}>
            Sign In
          </button>
        </div>
        {done && (
          <p role="status" className="rounded-lg bg-primary/30 px-4 py-3 text-label-s">
            Signed in! (Demo only — no account system is connected yet.)
          </p>
        )}
      </form>

      <div className="my-8 flex items-center gap-4 text-sm text-[#9A9A9A] lg:my-10">
        <span className="h-px flex-1 bg-[#E1E1E1]" />
        or
        <span className="h-px flex-1 bg-[#E1E1E1]" />
      </div>

      <div className="flex justify-center gap-4">
        {[
          { label: "Continue with Facebook", icon: <FacebookIcon /> },
          { label: "Continue with Google", icon: <GoogleIcon /> },
        ].map((provider) => (
          <button
            key={provider.label}
            type="button"
            aria-label={provider.label}
            className="flex size-14 items-center justify-center rounded-xl border border-[#E1E1E1] transition hover:border-secondary hover:bg-[#F7F8FF]"
          >
            {provider.icon}
          </button>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-[#5C5C5C] lg:mt-14">
        New user?{" "}
        <Link href="/join" className="text-secondary hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}

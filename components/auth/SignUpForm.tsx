"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthHeading, Field, submitButton } from "./fields";

export default function SignUpForm() {
  const [done, setDone] = useState(false);

  return (
    <div className="flex h-full flex-col">
      <AuthHeading eyebrow="Create an Account" title="Welcome to ByteSpace" />

      <form
        className="mt-8 space-y-5 lg:mt-10"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <Field id="name" label="Full Name" name="name" autoComplete="name" placeholder="Jamie Davis" required />
        <Field id="email" label="Email" type="email" name="email" autoComplete="email" placeholder="designer@example.com" required />
        <Field
          id="password"
          label="Password"
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="••••••••"
          required
          minLength={8}
          aria-describedby="password-hint"
        />
        <p id="password-hint" className="-mt-3 text-xs text-[#9A9A9A]">
          At least 8 characters.
        </p>
        <div className="flex justify-end pt-1">
          <button type="submit" className={submitButton}>
            Continue
          </button>
        </div>
        {done && (
          <p role="status" className="rounded-lg bg-primary/30 px-4 py-3 text-label-s">
            Account created! (Demo only — no account system is connected yet.)
          </p>
        )}
      </form>

      <p className="mt-10 text-center text-sm text-[#5C5C5C] lg:mt-auto lg:pt-14">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-secondary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}

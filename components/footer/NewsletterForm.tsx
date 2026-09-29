"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <p role="status" className="mt-6 rounded-full bg-primary/30 px-5 py-3 text-label-s text-[#141414] lg:mt-8">
        Thanks for subscribing! We&apos;ll keep you posted.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubscribed(true);
      }}
      className="mt-6 flex w-full max-w-[460px] gap-2 sm:gap-3 lg:mt-8 xl:max-w-[520px]"
    >
      <label className="flex h-11 min-w-0 flex-1 items-center rounded-full border border-[#D9D9D9] bg-white px-4 text-sm focus-within:border-secondary sm:h-12 sm:px-5 sm:text-base xl:h-14 xl:text-lg">
        <span className="sr-only">Email address</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className="w-full min-w-0 bg-transparent text-[#141414] outline-none placeholder:text-[#5C5C5C]"
        />
      </label>
      <button
        type="submit"
        className="h-11 shrink-0 rounded-full bg-primary px-5 text-sm font-bold text-[#141414] transition hover:brightness-95 sm:h-12 sm:px-7 sm:text-base xl:h-14 xl:px-9 xl:text-lg"
      >
        Subscribe
      </button>
    </form>
  );
}

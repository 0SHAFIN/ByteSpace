import type { InputHTMLAttributes } from "react";

export function AuthHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="text-label-s text-secondary lg:text-label-m">{eyebrow}</p>
      <h2 className="mt-2 font-poppins text-[32px] font-semibold leading-tight sm:text-4xl xl:text-5xl">{title}</h2>
    </>
  );
}

type FieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string };

export function Field({ label, id, ...input }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-label-s text-[#141414]">
        {label}
      </label>
      <input
        id={id}
        {...input}
        className="mt-2 h-11 w-full rounded-lg border border-[#E1E1E1] bg-white px-4 text-sm text-[#141414] outline-none transition placeholder:text-[#9A9A9A] focus:border-secondary focus:ring-2 focus:ring-secondary/15 sm:h-12 sm:text-base"
      />
    </div>
  );
}

export const submitButton =
  "h-11 rounded-full bg-primary px-7 text-sm font-bold text-[#141414] transition hover:brightness-95 disabled:opacity-60 sm:h-12 sm:px-8 sm:text-base";

"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronIcon } from "@/components/ui/icons";

const OPTIONS = [
  { value: "courses", label: "Courses" },
  { value: "creators", label: "Creators" },
];

/**
 * Lime "Courses ▾" picker in the search bar. Submits its value with the form via a hidden
 * input and re-runs the search when changed while a query is typed.
 */
export default function SearchTypeSelect({ defaultValue = "courses" }: { defaultValue?: string }) {
  const [value, setValue] = useState(OPTIONS.some((o) => o.value === defaultValue) ? defaultValue : "courses");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!open) return;
    optionRefs.current[OPTIONS.findIndex((o) => o.value === value)]?.focus();
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open, value]);

  const choose = (next: string) => {
    setValue(next);
    setOpen(false);
    const input = inputRef.current;
    if (!input?.form) return;
    input.value = next;
    const form = input.form;
    const q = new FormData(form).get("q");
    if (typeof q === "string" && q.trim()) form.requestSubmit();
  };

  const label = OPTIONS.find((o) => o.value === value)?.label;

  return (
    <div
      ref={rootRef}
      className="relative shrink-0"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.preventDefault();
          setOpen(false);
          rootRef.current?.querySelector<HTMLButtonElement>("[aria-haspopup]")?.focus();
        }
        if (open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
          e.preventDefault();
          const i = optionRefs.current.findIndex((el) => el === document.activeElement);
          const next = (i + (e.key === "ArrowDown" ? 1 : -1) + OPTIONS.length) % OPTIONS.length;
          optionRefs.current[next]?.focus();
        }
      }}
    >
      <input ref={inputRef} type="hidden" name="type" value={value} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Search in: ${label}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && !open) {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="flex h-11 items-center gap-2 rounded-full bg-primary pl-5 pr-4 text-sm font-bold text-[#141414] outline-none transition hover:brightness-95 focus-visible:ring-2 focus-visible:ring-white sm:h-12 sm:pl-6 sm:pr-5 sm:text-base lg:text-lg xl:h-14 xl:pl-7 xl:text-xl"
      >
        {label}
        <ChevronIcon className={`size-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Search in"
          className="absolute right-0 top-full z-40 mt-2 min-w-full rounded-2xl border border-[#E9E9E9] bg-white p-1.5 text-left shadow-[0_16px_40px_rgba(0,20,90,0.18)]"
        >
          {OPTIONS.map((option, i) => {
            const selected = option.value === value;
            return (
              <li key={option.value}>
                <button
                  ref={(el) => {
                    optionRefs.current[i] = el;
                  }}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => choose(option.value)}
                  className={`flex w-full items-center justify-between gap-4 whitespace-nowrap rounded-xl px-3 py-2 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-secondary sm:text-base ${
                    selected ? "bg-primary/30 font-medium text-[#141414]" : "text-[#3A3A3A] hover:bg-[#F3F3F3]"
                  }`}
                >
                  {option.label}
                  {selected && <span className="size-1.5 rounded-full bg-secondary" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

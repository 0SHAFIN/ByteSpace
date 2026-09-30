"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronIcon } from "@/components/ui/icons";

export type DropdownOption = { label: string; href: string; selected: boolean };

type DropdownProps = {
  label: string;
  icon: ReactNode;
  options: DropdownOption[];
  align?: "left" | "right";
  /** Highlights the trigger when a non-default option is active. */
  active?: boolean;
  /** Show only the icon on phones (label stays available to screen readers). */
  iconOnlyOnMobile?: boolean;
};

/** Pill button that opens a list of filter links. Closes on selection, outside click or Escape. */
export default function Dropdown({ label, icon, options, align = "left", active = false, iconOnlyOnMobile = false }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`flex h-9 items-center gap-1 rounded-full border px-2.5 text-xs font-medium transition sm:h-10 sm:gap-2 sm:px-4 sm:text-label-s ${
          active ? "border-primary bg-primary text-[#141414]" : "border-[#E1E1E1] bg-white text-[#141414] hover:border-[#BDBDBD]"
        }`}
      >
        {icon}
        <span className={iconOnlyOnMobile ? "max-sm:sr-only" : undefined}>{label}</span>
        <ChevronIcon className={`size-3.5 transition max-sm:hidden ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          className={`absolute top-full z-40 mt-2 max-h-80 min-w-48 overflow-auto rounded-2xl border border-[#E9E9E9] bg-white p-1.5 shadow-[0_16px_40px_rgba(0,20,90,0.12)] ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {options.map((option) => (
            <li key={option.label}>
              <Link
                href={option.href}
                scroll={false}
                onClick={() => setOpen(false)}
                aria-current={option.selected ? "true" : undefined}
                className={`flex items-center justify-between gap-4 rounded-xl px-3 py-2 text-sm transition ${
                  option.selected ? "bg-primary/30 font-medium text-[#141414]" : "text-[#3A3A3A] hover:bg-[#F3F3F3]"
                }`}
              >
                {option.label}
                {option.selected && <span className="size-1.5 rounded-full bg-secondary" />}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

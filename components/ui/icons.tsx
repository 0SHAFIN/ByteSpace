export function SearchIcon({ className = "size-4 shrink-0 text-[#6B6B6B] sm:size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronIcon({ className = "size-4", direction = "down" }: { className?: string; direction?: "down" | "left" | "right" }) {
  const d = { down: "m6 9 6 6 6-6", left: "m15 6-6 6 6 6", right: "m9 6 6 6-6 6" }[direction];
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

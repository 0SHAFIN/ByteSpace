const ICONS = [
  // stacked waves
  <svg key="waves" viewBox="0 0 32 32" className="size-full" aria-hidden>
    <circle cx="16" cy="16" r="15" fill="currentColor" />
    <path d="M3 13c5-3 9 3 13 0s9-3 13 0M2.5 18c5-3 9 3 13.5 0s9-3 13.5 0M5 23c4-2.5 7 2.5 11 0s7-2.5 11 0" stroke="#F4F4F4" strokeWidth="1.8" fill="none" />
  </svg>,
  // sunburst
  <svg key="burst" viewBox="0 0 32 32" className="size-full" aria-hidden>
    {Array.from({ length: 12 }, (_, i) => (
      <rect key={i} x="15" y="2" width="2.4" height="9" rx="1.2" fill="currentColor" transform={`rotate(${i * 30} 16 16)`} />
    ))}
  </svg>,
  // bolt
  <svg key="bolt" viewBox="0 0 32 32" className="size-full" aria-hidden>
    <circle cx="16" cy="16" r="15" fill="currentColor" />
    <path d="M18 5 9 18h6l-2 9 9-13h-6l2-9Z" fill="#F4F4F4" />
  </svg>,
  // clover
  <svg key="clover" viewBox="0 0 32 32" className="size-full" aria-hidden>
    <circle cx="16" cy="16" r="15" fill="currentColor" />
    <g fill="#F4F4F4">
      <circle cx="16" cy="9.5" r="4" /><circle cx="16" cy="22.5" r="4" />
      <circle cx="9.5" cy="16" r="4" /><circle cx="22.5" cy="16" r="4" />
    </g>
  </svg>,
  // rings
  <svg key="rings" viewBox="0 0 32 32" className="size-full" aria-hidden>
    <circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="19" cy="14" r="5.5" fill="currentColor" />
  </svg>,
];

export default function LogoStrip() {
  return (
    <section aria-label="Trusted by" className="bg-[#F4F4F4] [container-type:inline-size]">
      <ul
        className="mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-6 px-4 py-10 text-[#8A8A8A] lg:justify-between"
        style={{ maxWidth: "calc(667 * 100cqw / 847 + 32px)", paddingBlock: "clamp(32px, 100cqw * 38 / 847, 84px)" }}
      >
        {ICONS.map((icon, i) => (
          <li
            key={i}
            className="flex items-center gap-[0.35em] font-poppins font-semibold tracking-tight"
            style={{ fontSize: "clamp(18px, 100cqw * 14 / 847, 30px)" }}
          >
            <span className="size-[1.55em] shrink-0">{icon}</span>
            Logoipsum
          </li>
        ))}
      </ul>
    </section>
  );
}

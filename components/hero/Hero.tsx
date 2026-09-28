import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

/* ---------- design-unit helpers (see .hero-scale in globals.css) ---------- */

/** Size in hero design units. */
const u = (n: number) => `calc(${n} * var(--u))`;
/** Size in hero units, clamped to a readable pixel range. */
const uc = (min: number, n: number, max: number) =>
  `clamp(${min}px, ${n} * var(--u), ${max}px)`;
/** Size in stage units. */
const su = (n: number) => `calc(${n} * var(--su))`;
/** Stage size that never drops below a readable pixel size. */
const sumin = (min: number, n: number) => `max(${min}px, ${n} * var(--su))`;
/** Horizontal position inside the stage, measured from the design's center line. */
const sx = (x: number) => `calc(50% + ${x - 423.5} * var(--su))`;

/* ------------------------------- 3D shapes -------------------------------- */

type ShapeProps = {
  src: string;
  tint: "lime" | "white";
  /** Box position and size in design units. */
  x: number;
  y: number;
  size: number;
  rotate?: number;
  className?: string;
};

function Shape({ src, tint, x, y, size, rotate = 0, className = "" }: ShapeProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={2500}
      height={2500}
      sizes="(max-width: 640px) 160px, 28vw"
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        left: u(x),
        top: u(y),
        width: u(size),
        height: u(size),
        transform: `rotate(${rotate}deg)`,
        filter: `url(#tint-${tint}) drop-shadow(0 ${u(10)} ${u(14)} rgba(0, 20, 90, 0.25))`,
      }}
    />
  );
}

/** Maps the grey clay renders onto the brand lime / soft white. */
function TintFilters() {
  // out = a·(R+G+B)/3 + b  per channel, tuned so highlight≈0.86 and shadow≈0.35
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <filter id="tint-lime" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.183 0.183 0.183 0 0.358
                    0.170 0.170 0.170 0 0.541
                    0.072 0.072 0.072 0 -0.056
                    0     0     0     1 0"
          />
        </filter>
        <filter id="tint-white" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.177 0.177 0.177 0 0.534
                    0.177 0.177 0.177 0 0.540
                    0.180 0.180 0.180 0 0.555
                    0     0     0     1 0"
          />
        </filter>
      </defs>
    </svg>
  );
}

/** The white donut — there's no render for it, so it's drawn in CSS. */
function Torus() {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className="pointer-events-none absolute overflow-visible max-sm:hidden"
      style={{
        left: u(38),
        top: u(436),
        width: u(140),
        height: u(155),
        transform: "rotate(-24deg)",
        filter: `drop-shadow(0 ${u(10)} ${u(14)} rgba(0, 20, 90, 0.25))`,
      }}
    >
      <defs>
        {/* radial shading across the tube: dark inner lip → bright crest → soft outer edge */}
        <radialGradient id="torus-tube" cx="50" cy="50" r="48" gradientUnits="userSpaceOnUse">
          <stop offset="0.38" stopColor="#aeb3c4" />
          <stop offset="0.5" stopColor="#e4e7ef" />
          <stop offset="0.7" stopColor="#ffffff" />
          <stop offset="0.9" stopColor="#e6e8f0" />
          <stop offset="1" stopColor="#c3c8d6" />
        </radialGradient>
        <radialGradient id="torus-light" cx="30" cy="22" r="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#8a90a8" stopOpacity="0.35" />
        </radialGradient>
      </defs>
      <g transform="translate(50 50) scale(0.86 1) translate(-50 -50)">
        <path
          fillRule="evenodd"
          d="M50 2a48 48 0 1 1 0 96a48 48 0 1 1 0-96Zm0 30a18 18 0 1 0 0 36a18 18 0 1 0 0-36Z"
          fill="url(#torus-tube)"
        />
        <path
          fillRule="evenodd"
          d="M50 2a48 48 0 1 1 0 96a48 48 0 1 1 0-96Zm0 30a18 18 0 1 0 0 36a18 18 0 1 0 0-36Z"
          fill="url(#torus-light)"
          style={{ mixBlendMode: "soft-light" }}
        />
      </g>
    </svg>
  );
}

/* --------------------------------- icons ---------------------------------- */

function BagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 7.5h14l-1 13H6l-1-13Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 10V6a3 3 0 0 1 6 0v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* --------------------------------- cards ---------------------------------- */

const cardBase =
  "absolute z-20 whitespace-nowrap bg-white text-[#141414] shadow-[0_10px_30px_rgba(0,20,90,0.18)]";

// Unsplash portraits (Unsplash License), face-cropped and self-hosted in /public/avatars
const AVATARS = Array.from({ length: 7 }, (_, i) => `/avatars/avatar-${i + 1}.jpg`);

function CourseCard() {
  return (
    <div
      className={`${cardBase} max-sm:hidden`}
      style={{
        left: `max(12px, ${sx(238)})`,
        top: su(67),
        borderRadius: sumin(6, 5),
        padding: `${sumin(7, 7)} ${sumin(10, 9)}`,
      }}
    >
      <p className="text-label-m">
        UI/UX Design
      </p>
      <p
        className="mt-1 flex items-center gap-[0.5em] text-label-xs text-[#8B8B8B]"
      >
        <span>200 Courses</span>
        <span className="size-[0.35em] rounded-full bg-[#8B8B8B]" />
        <span>1000+ Students</span>
      </p>
    </div>
  );
}

function ProgressCard() {
  return (
    <div
      className={cardBase}
      style={{
        left: `min(${sx(496)}, 100% - 12px - ${sumin(150, 136)})`,
        top: su(74),
        width: sumin(150, 136),
        borderRadius: sumin(6, 5),
        padding: `${sumin(8, 10)} ${sumin(10, 10)}`,
      }}
    >
      <p className="text-label-s">
        Learning Progress
      </p>
      <p
        className="font-medium leading-none tracking-tight"
        style={{ fontSize: sumin(22, 26), marginTop: sumin(6, 9) }}
      >
        55%
      </p>
      <div
        className="w-full overflow-hidden rounded-full bg-[#EDEDED]"
        style={{ height: sumin(4, 4.5), marginTop: sumin(7, 10) }}
        role="progressbar"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Learning progress"
      >
        <div className="h-full w-[55%] rounded-full bg-primary" />
      </div>
    </div>
  );
}

function StudentsCard() {
  return (
    <div
      className={cardBase}
      style={{
        left: `max(12px, ${sx(194)})`,
        top: su(183),
        borderRadius: sumin(12, 9),
        padding: `${sumin(12, 10)} ${sumin(12, 10)}`,
      }}
    >
      <p className="text-label-m">Happy Students</p>
      <p className="mt-1 flex items-center gap-[0.25em] text-label-s">
        4.5 <span className="text-[#8B8B8B]">(240)</span>
        <svg viewBox="0 0 24 24" className="size-[1.2em]" aria-label="stars">
          <path
            d="M12 2.5c.4 0 .7.2.9.6l2.3 4.8 5.2.7c.8.1 1.2 1.1.6 1.7l-3.8 3.7.9 5.2c.1.8-.7 1.4-1.4 1L12 17.8l-4.7 2.4c-.7.4-1.5-.2-1.4-1l.9-5.2-3.8-3.7c-.6-.6-.2-1.6.6-1.7l5.2-.7 2.3-4.8c.2-.4.5-.6.9-.6Z"
            fill="#D4FB20"
          />
        </svg>
      </p>
      <div
        className="flex items-center"
        style={{ fontSize: sumin(13, 10.5), marginTop: sumin(8, 8) }}
      >
        {AVATARS.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={56}
            height={56}
            className="shrink-0 rounded-full border-white bg-[#E6E6E6] object-cover"
            style={{
              width: "2.35em",
              height: "2.35em",
              borderWidth: "0.12em",
              marginLeft: i === 0 ? 0 : "-0.6em",
            }}
          />
        ))}
        <span
          className="inline-flex shrink-0 items-center justify-center rounded-full border-white bg-primary"
          style={{ width: "2.55em", height: "2.55em", borderWidth: "0.12em", marginLeft: "-0.6em" }}
        >
          <span className="text-label-s font-bold tracking-tight">2K+</span>
        </span>
      </div>
    </div>
  );
}

/* ---------------------------------- hero ---------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Hero() {
  const gridSize = u(44.5);
  const grid: CSSProperties = {
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)",
    backgroundSize: `${gridSize} ${gridSize}`,
    backgroundPosition: `${u(22)} ${u(-8)}`,
  };

  return (
    <section className="relative overflow-hidden bg-secondary text-white [container-type:inline-size]">
      <TintFilters />
      <div className="hero-scale relative">
        {/* grid */}
        <div aria-hidden className="absolute inset-0" style={grid} />

        {/* nav */}
        <header
          className="relative z-30 grid grid-cols-[1fr_auto_1fr] items-center"
          style={{ paddingInline: `max(16px, ${u(72)})`, paddingTop: uc(18, 20, 44) }}
        >
          <Link
            href="/"
            className="flex items-center gap-[0.4em] justify-self-start font-logo font-bold leading-none tracking-[-0.01em] [font-stretch:125%]"
            style={{ fontSize: uc(17, 13.5, 28) }}
          >
            <Image src="/logo/byteSpace.svg" alt="" width={29} height={32} priority className="h-[1.3em] w-auto" />
            ByteSpace
          </Link>

          <nav aria-label="Primary" className="hidden items-center text-label-m md:flex" style={{ gap: uc(20, 16, 34) }}>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                aria-current={l.active ? "page" : undefined}
                className={l.active ? "text-white" : "text-white/80 transition hover:text-white"}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="col-start-3 flex items-center justify-self-end text-label-m" style={{ gap: uc(16, 16, 34) }}>
            <Link href="/sign-in" className="hidden text-white/90 transition hover:text-white sm:inline">
              Sign In
            </Link>
            <Link href="/join" className="text-white/90 transition hover:text-white">
              Join Us
            </Link>
            <Link href="/cart" aria-label="Cart" className="text-white/90 transition hover:text-white">
              <BagIcon className="size-[1.35em]" />
            </Link>
          </div>
        </header>

        {/* copy + search */}
        <div className="relative z-30 mx-auto px-4 text-center" style={{ paddingTop: uc(36, 58, 116) }}>
          <h1
            className="mx-auto font-poppins font-semibold tracking-[-0.01em]"
            style={{ fontSize: uc(34, 42, 90), lineHeight: 1.22, maxWidth: u(560), minWidth: "min(100%, 340px)" }}
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p
            className="mx-auto text-white/90"
            style={{ fontSize: uc(14, 10, 21), marginTop: uc(16, 19, 40), maxWidth: "46em" }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form
            action="/courses"
            role="search"
            className="mx-auto flex items-stretch justify-center"
            style={{ marginTop: uc(24, 36, 76), gap: uc(8, 10, 20) }}
          >
            <label
              className="flex min-w-0 flex-1 items-center rounded-full bg-white text-label-m text-[#8E8E8E] focus-within:ring-2 focus-within:ring-primary"
              style={{
                maxWidth: u(270),
                minWidth: "min(calc(100% - 100px), 260px)",
                height: uc(44, 29, 62),
                paddingInline: uc(14, 12, 26),
                gap: uc(8, 6, 14),
              }}
            >
              <SearchIcon className="size-[1.2em] shrink-0 text-[#6B6B6B]" />
              <span className="sr-only">Search courses</span>
              <input
                type="search"
                name="q"
                placeholder="Course, topic, creator"
                className="w-full min-w-0 bg-transparent text-[#141414] outline-none placeholder:text-[#8E8E8E]"
              />
            </label>
            <button
              type="submit"
              className="shrink-0 rounded-full bg-primary text-label-m text-[#141414] transition hover:brightness-95"
              style={{ height: uc(44, 29, 62), paddingInline: uc(18, 16, 34) }}
            >
              Search
            </button>
          </form>
        </div>

        {/* illustration stage */}
        <div className="relative z-10" style={{ height: su(293), marginTop: uc(16, 8, 16) }}>
          {/* lime half-circle */}
          <div
            aria-hidden
            className="absolute aspect-square rounded-full bg-primary"
            style={{ left: sx(95), top: su(35), width: su(657) }}
          />
          <Image
            src="/hero_asset/hero_asset6.png"
            alt="Smiling student with headphones holding a laptop"
            width={516}
            height={483}
            priority
            sizes="(max-width: 640px) 75vw, 37vw"
            className="absolute bottom-0 h-auto"
            style={{ left: sx(300), width: su(312) }}
          />
          <CourseCard />
          <ProgressCard />
          <StudentsCard />
        </div>

        {/* floating 3D shapes (design-space coordinates) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
          <Shape src="/hero_asset/hero_asset3.png" tint="lime" x={-78} y={98} size={215} rotate={-24} />
          <Shape src="/hero_asset/hero_asset3.png" tint="white" x={108} y={272} size={112} rotate={-18} className="max-sm:hidden" />
          <Torus />
          <Shape src="/hero_asset/hero_asset2.png" tint="lime" x={712} y={118} size={240} rotate={4} />
          <Shape src="/hero_asset/hero_asset1.png" tint="white" x={648} y={266} size={112} rotate={-6} className="max-sm:hidden" />
          <Shape src="/hero_asset/hero_asset5.png" tint="white" x={648} y={402} size={200} rotate={-4} className="max-sm:hidden" />
        </div>
      </div>
    </section>
  );
}

/** Faint white grid used on the blue sections (hero, creator CTA). */
export function GridLines() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.13)_1px,transparent_1px)] bg-size-[48px_48px] lg:bg-size-[76px_76px]"
    />
  );
}

/** Base classes for the floating 3D shape images. */
export const shapeClass =
  "pointer-events-none absolute h-auto select-none drop-shadow-[0_16px_24px_rgba(0,20,90,0.25)]";

/** Soft lime / blue glow blob for the light sections. Place it with `className` inside a relative parent. */
export function Glow({ tone, className }: { tone: "lime" | "blue"; className: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[120px] ${
        tone === "lime" ? "bg-primary/30" : "bg-secondary/15"
      } ${className}`}
    />
  );
}

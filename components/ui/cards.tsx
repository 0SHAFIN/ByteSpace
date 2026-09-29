import Image from "next/image";

/** White floating card used over illustrations (hero, features). Position it with `className`. */
const floatingCardBase = "absolute z-20 whitespace-nowrap rounded-xl bg-white text-[#141414]";
export const floatingCard = `${floatingCardBase} shadow-[0_10px_30px_rgba(0,20,90,0.18)]`;

// Unsplash portraits (Unsplash License), face-cropped and self-hosted
export const AVATARS = [
  "/avatars/avatar-1.jpg",
  "/avatars/avatar-2.jpg",
  "/avatars/avatar-3.jpg",
  "/avatars/avatar-4.jpg",
  "/avatars/avatar-5.jpg",
  "/avatars/avatar-6.jpg",
  "/avatars/avatar-7.jpg",
];

export function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-label="stars">
      <path
        d="M12 2.5c.4 0 .7.2.9.6l2.3 4.8 5.2.7c.8.1 1.2 1.1.6 1.7l-3.8 3.7.9 5.2c.1.8-.7 1.4-1.4 1L12 17.8l-4.7 2.4c-.7.4-1.5-.2-1.4-1l.9-5.2-3.8-3.7c-.6-.6-.2-1.6.6-1.7l5.2-.7 2.3-4.8c.2-.4.5-.6.9-.6Z"
        fill="#D4FB20"
      />
    </svg>
  );
}

type CardProps = {
  className?: string;
  /** Smaller, shadowless variant used beside section illustrations (hero uses the large one). */
  compact?: boolean;
};

export function ProgressCard({ className = "", compact = false }: CardProps) {
  return (
    <div
      className={`${compact ? floatingCardBase : floatingCard} ${compact ? "w-32 p-2.5 lg:w-[232px] lg:p-4 xl:w-[260px] xl:p-5" : "w-40 p-3 lg:w-52 lg:p-4"} ${className}`}
    >
      <p className={compact ? "text-[11px] leading-tight lg:text-sm xl:text-base" : "text-base font-medium leading-tight lg:text-xl"}>
        Learning Progress
      </p>
      <p
        className={
          compact
            ? "mt-1.5 text-2xl font-semibold tracking-tight lg:mt-3 lg:text-[44px] lg:leading-none xl:text-5xl"
            : "mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:mt-3 lg:text-5xl"
        }
      >
        55%
      </p>
      <div
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`w-full overflow-hidden rounded-full bg-[#EDEDED] ${compact ? "mt-2 h-1.5 lg:mt-4 lg:h-2" : "mt-3 h-1.5 lg:mt-4"}`}
      >
        <div className="h-full w-[55%] rounded-full bg-primary" />
      </div>
    </div>
  );
}

export function StudentsCard({ className = "", compact = false }: CardProps) {
  const avatar = compact
    ? "-ml-1.5 size-6 lg:-ml-2.5 lg:size-10 xl:-ml-3 xl:size-11"
    : "-ml-2 size-7 sm:size-8 lg:-ml-4 lg:size-[54px]";
  const badge = compact
    ? "-ml-1.5 size-7 text-[9px] lg:-ml-2.5 lg:size-12 lg:text-sm xl:-ml-3 xl:size-[52px] xl:text-base"
    : "-ml-2 size-8 text-label-xs sm:size-9 lg:-ml-4 lg:size-[54px] lg:text-label-s";

  return (
    <div className={`${compact ? floatingCardBase : floatingCard} rounded-2xl ${compact ? "p-2.5 lg:p-4 xl:p-5" : "p-3 lg:p-4"} ${className}`}>
      <p className={compact ? "text-xs leading-tight lg:text-base xl:text-lg" : "text-base font-medium leading-tight lg:text-xl"}>
        Happy Students
      </p>
      <p className={`mt-1 flex items-center gap-1 font-medium ${compact ? "text-[10px] lg:text-xs xl:text-sm" : "text-xs lg:text-base"}`}>
        4.5 <span className="text-[#8B8B8B]">(240)</span>
        <StarIcon />
      </p>
      <div className={`flex items-center ${compact ? "mt-1.5 lg:mt-2.5" : "mt-2 lg:mt-3"}`}>
        {AVATARS.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={72}
            height={72}
            className={`${avatar} shrink-0 rounded-full object-cover first:ml-0`}
          />
        ))}
        <span
          className={`${badge} flex shrink-0 items-center justify-center rounded-full border-2 border-white bg-primary font-bold`}
        >
          2K+
        </span>
      </div>
    </div>
  );
}

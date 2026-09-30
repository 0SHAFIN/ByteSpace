import Image from "next/image";
import Link from "next/link";
import { GridLines, shapeClass } from "@/components/ui/decor";

const SHAPES = [
  { src: "/hero_asset/shape-spring-lime.png", w: 900, h: 900, className: "-left-[6%] -top-[14%] w-[34%] max-w-[420px] -rotate-[30deg] sm:w-[24%]" },
  { src: "/hero_asset/shape-spring-white.png", w: 900, h: 900, className: "left-[13%] top-[6%] hidden w-[11%] rotate-[10deg] lg:block" },
  { src: "/hero_asset/shape-pyramid-white.png", w: 900, h: 900, className: "-left-[3%] top-[40%] hidden w-[14%] rotate-[20deg] lg:block" },
  { src: "/hero_asset/shape-torus-lime.png", w: 496, h: 576, className: "-bottom-[18%] left-[6%] hidden w-[14%] -rotate-[30deg] sm:block" },
  { src: "/hero_asset/shape-pyramid-lime.png", w: 900, h: 900, className: "right-[12%] top-[2%] hidden w-[14%] -rotate-[10deg] sm:block" },
  { src: "/hero_asset/shape-cylinder-white.png", w: 900, h: 900, className: "-right-[14%] -top-[2%] w-[30%] max-w-[420px] rotate-[6deg] sm:-right-[6%] sm:top-[8%] sm:w-[24%]" },
  { src: "/hero_asset/shape-cylinder-lime.png", w: 900, h: 900, className: "-bottom-[16%] right-[10%] hidden w-[14%] rotate-[40deg] lg:block" },
];

export default function CreatorCta() {
  return (
    <section aria-labelledby="creator-cta-heading" className="relative overflow-hidden bg-secondary text-white">
      <GridLines />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {SHAPES.map((shape) => (
          <Image
            key={shape.src + shape.className}
            src={shape.src}
            alt=""
            width={shape.w}
            height={shape.h}
            sizes="25vw"
            className={`${shapeClass} ${shape.className}`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[900px] px-5 py-24 xl:max-w-[1040px] text-center sm:py-28 lg:py-36">
        <h2
          id="creator-cta-heading"
          className="mx-auto max-w-[720px] font-poppins text-[28px] font-semibold leading-tight sm:text-4xl lg:text-5xl xl:max-w-[820px] xl:text-[56px]"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-4 max-w-[820px] text-sm text-white/85 sm:mt-6 sm:text-base lg:text-lg xl:max-w-[940px] xl:text-xl">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href="/join"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-bold text-[#141414] transition hover:brightness-95 sm:mt-10 sm:h-12 sm:px-8 sm:text-base lg:text-lg xl:h-14 xl:px-10 xl:text-xl"
        >
          Become a Creator
        </Link>
      </div>
    </section>
  );
}

import Image from "next/image";
import { floatingCard, ProgressCard, StudentsCard } from "@/components/ui/cards";
import { GridLines, shapeClass } from "@/components/ui/decor";
import { SearchIcon } from "@/components/ui/icons";
import Navbar from "@/components/ui/Navbar";

function SearchBar() {
  return (
    <form action="/courses" role="search" className="mx-auto mt-7 flex w-full max-w-[580px] gap-2 sm:mt-8 sm:gap-3 lg:mt-14 xl:max-w-[660px]">
      <label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 text-sm font-bold sm:h-12 sm:gap-3 sm:px-5 sm:text-base lg:text-lg xl:h-14 xl:px-6 xl:text-xl focus-within:ring-2 focus-within:ring-primary">
        <SearchIcon />
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
        className="h-11 shrink-0 rounded-full bg-primary px-5 text-sm font-bold sm:h-12 sm:px-7 sm:text-base lg:text-lg xl:h-14 xl:px-9 xl:text-xl text-[#141414] transition hover:brightness-95"
      >
        Search
      </button>
    </form>
  );
}

function CourseCard() {
  return (
    <div className={`${floatingCard} right-[57.5%] top-[23%] hidden px-4 py-3 sm:block`}>
      <p className="text-base font-medium leading-tight lg:text-xl">UI/UX Design</p>
      <p className="mt-1.5 flex items-center gap-2 text-xs font-medium text-[#8B8B8B] lg:text-base">
        200 Courses
        <span className="size-1 rounded-full bg-[#8B8B8B]" />
        1000+ Students
      </p>
    </div>
  );
}

/** The illustration: lime half-circle, student and floating cards. */
function Stage() {
  return (
    <div className="relative left-1/2 z-10 mt-4 aspect-[847/293] w-[max(100%,820px)] max-w-[1600px] sm:w-[max(100%,1000px)] lg:w-full -translate-x-1/2">
      <div aria-hidden className="absolute left-[11.2%] top-[12%] aspect-square w-[77.6%] rounded-full bg-primary" />
      <Image
        src="/hero_asset/hero_asset6.png"
        alt="Smiling student with headphones holding a laptop"
        width={516}
        height={483}
        priority
        sizes="(max-width: 640px) 240px, 37vw"
        className="absolute bottom-0 left-1/2 h-auto w-[36.8%] -translate-x-1/2"
      />
      <CourseCard />
      <ProgressCard className="right-[25.4%] top-[25%] max-sm:right-[calc(50%-183px)] max-sm:top-[45%]" />
      <StudentsCard className="left-[22.9%] top-[62%] max-sm:left-[calc(50%-183px)]" />
    </div>
  );
}

/** Floating 3D shapes, laid out on the design's 847×603 artboard. */
function Shapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-20 aspect-[847/603]">
      <Image
        src="/hero_asset/shape-spring-lime.png"
        alt=""
        width={900}
        height={900}
        sizes="25vw"
        className={`${shapeClass} -left-[9.2%] top-[16.3%] w-[25.4%] -rotate-[24deg]`}
      />
      <Image
        src="/hero_asset/shape-spring-white.png"
        alt=""
        width={900}
        height={900}
        sizes="13vw"
        className={`${shapeClass} left-[12.8%] top-[45.1%] hidden w-[13.2%] -rotate-[18deg] lg:block`}
      />
      <Image
        src="/hero_asset/shape-torus-white.png"
        alt=""
        width={496}
        height={576}
        sizes="17vw"
        className={`${shapeClass} left-[4.5%] top-[72.3%] hidden w-[16.5%] -rotate-[24deg] lg:block`}
      />
      <Image
        src="/hero_asset/shape-cylinder-lime.png"
        alt=""
        width={900}
        height={900}
        sizes="28vw"
        className={`${shapeClass} left-[84.1%] top-[19.6%] w-[28.3%] rotate-[4deg]`}
      />
      <Image
        src="/hero_asset/shape-pyramid-white.png"
        alt=""
        width={900}
        height={900}
        sizes="13vw"
        className={`${shapeClass} left-[76.5%] top-[44.1%] hidden w-[13.2%] -rotate-[6deg] lg:block`}
      />
      <Image
        src="/hero_asset/shape-coil-white.png"
        alt=""
        width={900}
        height={900}
        sizes="24vw"
        className={`${shapeClass} left-[76.5%] top-[66.7%] hidden w-[23.6%] -rotate-[4deg] sm:block`}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <GridLines />

      <Navbar active="/" />

      <div className="relative z-30 mx-auto max-w-[1320px] px-5 pt-10 text-center sm:pt-12 lg:pt-24">
        <h1 className="mx-auto max-w-[960px] font-poppins text-[32px] font-semibold leading-tight sm:text-5xl lg:text-7xl lg:leading-[1.2] xl:max-w-[1080px] xl:text-[80px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-[900px] text-sm text-white/90 sm:text-base lg:mt-8 lg:text-lg xl:max-w-[1000px] xl:text-xl">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <SearchBar />
      </div>

      <Stage />
      <Shapes />
    </section>
  );
}

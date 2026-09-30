import Image from "next/image";
import type { ReactNode } from "react";
import CourseCard from "@/components/courses/CourseCard";
import { COURSES } from "@/components/courses/data";
import { StudentsCard } from "@/components/ui/cards";
import { GridLines, shapeClass } from "@/components/ui/decor";
import Logo from "@/components/ui/Logo";

/** Decorative collage from the design: two course cards, lime shapes and a Happy Students card. */
function AuthVisual() {
  return (
    <div aria-hidden inert className="pointer-events-none relative mt-8 aspect-[5/4] w-full max-w-[680px] select-none xl:mt-10">
      <div className="absolute left-0 top-[12%] w-[46%] opacity-95">
        <CourseCard course={COURSES[1]} />
      </div>
      <div className="absolute left-[22%] top-0 z-10 w-[58%]">
        <CourseCard course={COURSES[2]} />
      </div>

      <Image
        src="/hero_asset/shape-torus-lime.png"
        alt=""
        width={496}
        height={576}
        sizes="120px"
        className={`${shapeClass} left-[4%] top-[2%] z-20 w-[18%] -rotate-[40deg]`}
      />
      <Image
        src="/hero_asset/shape-pyramid-lime.png"
        alt=""
        width={900}
        height={900}
        sizes="180px"
        className={`${shapeClass} -left-[2%] top-[62%] z-20 w-[30%] rotate-[20deg]`}
      />
      <Image
        src="/hero_asset/shape-spring-white.png"
        alt=""
        width={900}
        height={900}
        sizes="140px"
        className={`${shapeClass} left-[66%] top-[56%] z-20 w-[22%] rotate-[30deg]`}
      />

      <StudentsCard lime compact className="left-[40%] top-[76%] z-30" />
    </div>
  );
}

type AuthShellProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export default function AuthShell({ title, intro, children }: AuthShellProps) {
  return (
    <main className="relative flex-1 overflow-hidden bg-secondary text-white">
      <GridLines />

      <div className="relative mx-auto grid min-h-dvh max-w-[1320px] content-start items-center gap-6 lg:content-center px-4 py-6 sm:gap-8 sm:px-5 sm:py-8 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-12 lg:px-8 lg:py-10 xl:gap-16">
        <div className="flex flex-col">
          <Logo priority className="w-fit" />
          <h1 className="mt-5 font-poppins text-lg font-semibold sm:mt-8 sm:text-2xl lg:mt-10 xl:text-[28px]">{title}</h1>
          <p className="mt-2 max-w-[560px] text-sm text-white/85 sm:mt-3 sm:text-base xl:text-lg">{intro}</p>
          <div className="hidden lg:block">
            <AuthVisual />
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 text-[#141414] sm:p-10 xl:p-14">{children}</div>
      </div>
    </main>
  );
}

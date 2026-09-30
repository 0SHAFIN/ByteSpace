import Image from "next/image";
import Link from "next/link";
import type { Course } from "./data";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3 text-[#B5B5B5] sm:size-4" aria-hidden>
      <path
        d="M12 2.5c.4 0 .7.2.9.6l2.3 4.8 5.2.7c.8.1 1.2 1.1.6 1.7l-3.8 3.7.9 5.2c.1.8-.7 1.4-1.4 1L12 17.8l-4.7 2.4c-.7.4-1.5-.2-1.4-1l.9-5.2-3.8-3.7c-.6-.6-.2-1.6.6-1.7l5.2-.7 2.3-4.8c.2-.4.5-.6.9-.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3 text-[#5C5C5C] sm:size-4" aria-hidden>
      <rect x="2" y="9" width="2.5" height="5" rx="1" fill="currentColor" />
      <rect x="6.75" y="5.5" width="2.5" height="8.5" rx="1" fill="currentColor" />
      <rect x="11.5" y="2" width="2.5" height="12" rx="1" fill="currentColor" />
    </svg>
  );
}

export default function CourseCard({ course }: { course: Course }) {
  // Phones get a shorter duration ("2h 16m") so the pills fit on one line
  const stats = [
    { full: `${course.lessons} Lessons` },
    { full: course.duration, short: course.duration.replace(/ hours?/, "h").replace(/ mins?/, "m") },
    { full: `${course.comments} Comments`, desktopOnly: true },
  ];

  return (
    <article className="group relative flex min-w-0 flex-col rounded-2xl border border-[#E9E9E9] bg-white p-2 transition sm:rounded-3xl hover:shadow-[0_16px_40px_rgba(0,20,90,0.08)] sm:p-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 50vw, 430px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {/* keeps the stat pills readable on light photos */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/45 to-transparent" />
        <ul className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1 sm:inset-x-3 sm:bottom-3 sm:gap-1.5">
          {stats.map((stat) => (
            <li
              key={stat.full}
              className={`rounded-full bg-white/25 px-2 py-1 text-[10px] font-medium leading-tight text-white backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-label-xs xl:text-label-s ${
                stat.desktopOnly ? "max-sm:hidden" : ""
              }`}
            >
              {stat.short ? (
                <>
                  <span className="sm:hidden">{stat.short}</span>
                  <span className="max-sm:hidden">{stat.full}</span>
                </>
              ) : (
                stat.full
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-1 flex-col px-0.5 pt-3 sm:px-1 sm:pt-4">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <h3 className="line-clamp-2 min-w-0 font-poppins text-sm font-semibold leading-snug text-[#141414] sm:line-clamp-1 sm:text-lg lg:text-xl xl:text-2xl">
            <Link href={`/courses/${course.slug}`} className="after:absolute after:inset-0">
              {course.title}
            </Link>
          </h3>
          <p className="flex shrink-0 items-center gap-0.5 pt-0.5 text-xs text-[#8B8B8B] sm:gap-1 sm:text-base xl:text-lg">
            {course.rating}
            <StarIcon />
            <span className="sr-only">out of 5</span>
          </p>
        </div>
        <p className="mt-0.5 truncate text-xs text-[#8B8B8B] sm:text-sm xl:text-base">
          by <span className="text-secondary">{course.author}</span>
        </p>

        <div className="mt-3 flex items-center gap-1.5 sm:mt-4 sm:gap-3">
          <span className="flex items-center gap-1 rounded-full bg-[#F3F3F3] px-2 py-1 text-[11px] font-medium text-[#5C5C5C] sm:gap-1.5 sm:px-3 sm:py-2 sm:text-label-s xl:px-4 xl:text-label-m">
            <LevelIcon />
            {course.level}
          </span>
          <div className="flex items-center">
            {course.students.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={56}
                height={56}
                className={`-ml-1.5 size-6 rounded-full border-2 border-white object-cover first:ml-0 sm:-ml-2 sm:size-8 ${
                  i >= 2 ? "max-sm:hidden" : ""
                }`}
              />
            ))}
            <span className="-ml-1.5 flex size-6 items-center justify-center rounded-full border-2 border-white bg-primary text-[8px] font-bold text-[#141414] sm:-ml-2 sm:size-8 sm:text-[10px]">
              {course.studentCount}
            </span>
          </div>
        </div>

        <p className="mt-auto flex items-baseline gap-1 pt-3 sm:pt-5">
          <span className="font-poppins text-lg font-bold text-secondary sm:text-2xl xl:text-[28px]">${course.price}</span>
          <span className="text-xs text-[#8B8B8B] sm:text-sm xl:text-base">/lifetime</span>
        </p>
      </div>
    </article>
  );
}

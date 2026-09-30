"use client";

import Link from "next/link";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { container, sectionPadding, sectionText, sectionTitle } from "@/components/ui/styles";
import { CATEGORIES, COURSES, type Category } from "./data";

export default function CoursesSection() {
  const [active, setActive] = useState<Category>("Featured");
  const courses = active === "Featured" ? COURSES : COURSES.filter((c) => c.category === active);

  return (
    <section aria-labelledby="courses-heading" className={`bg-white ${sectionPadding}`}>
      <div className={container}>
        <div className="mx-auto max-w-[1000px] text-center">
          <h2
            id="courses-heading"
            className={sectionTitle}
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className={`mt-3 sm:mt-5 ${sectionText}`}>
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
            different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <ul aria-label="Course categories" className="mx-auto mt-7 flex max-w-[1240px] flex-wrap justify-center gap-2 sm:mt-10 sm:gap-2.5 lg:mt-12 lg:gap-3">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <button
                type="button"
                aria-pressed={active === category}
                onClick={() => setActive(category)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-label-s lg:px-5 xl:px-6 xl:py-3 xl:text-base ${
                  active === category
                    ? "bg-primary text-[#141414]"
                    : "bg-[#F3F3F3] text-[#5C5C5C] hover:bg-[#E9E9E9] hover:text-[#141414]"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
          <li className="flex items-center px-1 sm:px-2">
            <Link href="/courses" className="text-xs font-medium text-secondary hover:underline sm:text-label-s">
              + More
            </Link>
          </li>
        </ul>

        {courses.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6 xl:gap-8">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-label-m text-[#8B8B8B]">
            New {active} courses are coming soon.
          </p>
        )}
      </div>
    </section>
  );
}

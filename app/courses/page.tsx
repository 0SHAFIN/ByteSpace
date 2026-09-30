import type { Metadata } from "next";
import Link from "next/link";
import CourseCard from "@/components/courses/CourseCard";
import { CATEGORIES } from "@/components/courses/data";
import Footer from "@/components/footer/Footer";
import { LEVELS, RATINGS, SORTS, searchCourses, searchHref, type SearchParams } from "@/components/search/catalog";
import Dropdown from "@/components/search/Dropdown";
import Pagination from "@/components/search/Pagination";
import SearchTypeSelect from "@/components/search/SearchTypeSelect";
import { GridLines } from "@/components/ui/decor";
import { SearchIcon } from "@/components/ui/icons";
import Navbar from "@/components/ui/Navbar";
import { container } from "@/components/ui/styles";

export const metadata: Metadata = {
  title: "Find Your Next Course — ByteSpace",
  description: "Search and filter ByteSpace courses by topic, category, level and rating.",
};

const toolbarIcon = "size-4 shrink-0";

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={toolbarIcon} aria-hidden>
      <path d="M4 5h16l-6 7.5V19l-4 1.5v-8L4 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg viewBox="0 0 16 16" className={toolbarIcon} aria-hidden>
      <rect x="2" y="9" width="2.5" height="5" rx="1" fill="currentColor" />
      <rect x="6.75" y="5.5" width="2.5" height="8.5" rx="1" fill="currentColor" />
      <rect x="11.5" y="2" width="2.5" height="12" rx="1" fill="currentColor" />
    </svg>
  );
}

function CategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={toolbarIcon} aria-hidden>
      <path d="m12 3 4 7H8l4-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="7" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={toolbarIcon} aria-hidden>
      <path d="M4 7h16M7 12h10M10 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Keeps only the first value of each query param. */
function normalize(raw: Record<string, string | string[] | undefined>): SearchParams {
  const pick = (key: string) => {
    const v = raw[key];
    return (Array.isArray(v) ? v[0] : v) || undefined;
  };
  return {
    q: pick("q"),
    type: pick("type"),
    category: pick("category"),
    level: pick("level"),
    rating: pick("rating"),
    sort: pick("sort"),
    page: pick("page"),
  };
}

export default async function CoursesPage({ searchParams }: PageProps<"/courses">) {
  const params = normalize(await searchParams);
  const { total, page, pageCount, start, courses } = searchCourses(params);

  // Changing any filter resets to page 1
  const filterHref = (changes: Partial<SearchParams>) => searchHref(params, { ...changes, page: undefined });
  const activeCategory = params.category ?? "Featured";
  const hasFilters = Boolean(params.q || params.level || params.rating || (params.category && params.category !== "Featured"));
  const sortLabel = SORTS.find((s) => s.value === params.sort)?.label ?? SORTS[0].label;

  return (
    <>
      <header className="relative bg-secondary text-white">
        <GridLines />
        <Navbar active="/courses" />

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 pb-12 pt-10 text-center sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
          <h1 className="font-poppins text-[28px] font-semibold leading-tight sm:text-4xl lg:text-5xl xl:text-[56px]">
            Find Your Next Course
          </h1>

          <form
            action="/courses"
            role="search"
            className="mx-auto mt-6 flex w-full max-w-[580px] gap-2 sm:mt-8 sm:gap-3 lg:mt-10 xl:max-w-[660px]"
          >
            {params.category && <input type="hidden" name="category" value={params.category} />}
            {params.level && <input type="hidden" name="level" value={params.level} />}
            {params.rating && <input type="hidden" name="rating" value={params.rating} />}
            {params.sort && <input type="hidden" name="sort" value={params.sort} />}

            <label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 text-sm font-bold focus-within:ring-2 focus-within:ring-primary sm:h-12 sm:gap-3 sm:px-5 sm:text-base lg:text-lg xl:h-14 xl:px-6 xl:text-xl">
              <SearchIcon />
              <span className="sr-only">Search</span>
              <input
                type="search"
                name="q"
                defaultValue={params.q}
                placeholder="Search"
                className="w-full min-w-0 bg-transparent text-[#141414] outline-none placeholder:text-[#8E8E8E]"
              />
            </label>

            <SearchTypeSelect defaultValue={params.type} />
            <button type="submit" className="sr-only">
              Search
            </button>
          </form>
        </div>
      </header>

      <main className="flex-1 bg-white px-4 pb-16 pt-8 sm:px-5 sm:pb-24 sm:pt-12 lg:px-8">
        <div className={container}>
          {/* toolbar */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
            <Dropdown
              label="Filter"
              icon={<FilterIcon />}
              active={Boolean(params.rating)}
              options={[
                { label: "Any rating", href: filterHref({ rating: undefined }), selected: !params.rating },
                ...RATINGS.map((r) => ({
                  label: `${r} & up`,
                  href: filterHref({ rating: String(r) }),
                  selected: params.rating === String(r),
                })),
              ]}
            />
            <Dropdown
              label={params.level ?? "Level"}
              icon={<LevelIcon />}
              active={Boolean(params.level)}
              options={[
                { label: "All levels", href: filterHref({ level: undefined }), selected: !params.level },
                ...LEVELS.map((l) => ({ label: l, href: filterHref({ level: l }), selected: params.level === l })),
              ]}
            />
            <Dropdown
              label="Category"
              icon={<CategoryIcon />}
              active={activeCategory !== "Featured"}
              options={CATEGORIES.map((c) => ({
                label: c === "Featured" ? "All categories" : c,
                href: filterHref({ category: c === "Featured" ? undefined : c }),
                selected: activeCategory === c,
              }))}
            />
            <div className="ml-auto">
              <Dropdown
                label={sortLabel}
                icon={<SortIcon />}
                align="right"
                iconOnlyOnMobile
                options={SORTS.map((s) => ({
                  label: s.label,
                  href: searchHref(params, { sort: s.value === "relevant" ? undefined : s.value, page: undefined }),
                  selected: (params.sort ?? "relevant") === s.value,
                }))}
              />
            </div>
          </div>

          {/* category chips — scroll sideways when they don't fit */}
          <ul
            aria-label="Categories"
            className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:-mx-5 sm:mt-6 sm:gap-2.5 sm:px-5 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {CATEGORIES.map((category) => (
              <li key={category} className="shrink-0">
                <Link
                  href={filterHref({ category: category === "Featured" ? undefined : category })}
                  scroll={false}
                  aria-current={activeCategory === category ? "page" : undefined}
                  className={`block rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-label-s xl:px-5 xl:text-base ${
                    activeCategory === category
                      ? "bg-primary text-[#141414]"
                      : "bg-[#F3F3F3] text-[#5C5C5C] hover:bg-[#E9E9E9] hover:text-[#141414]"
                  }`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>

          {/* result summary */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-sm text-[#5C5C5C] sm:mt-8">
            <p aria-live="polite">
              {total === 0
                ? "No courses found"
                : `Showing ${start + 1}–${start + courses.length} of ${total} courses`}
              {params.q && (
                <>
                  {" "}
                  for <span className="font-bold text-[#141414]">&ldquo;{params.q}&rdquo;</span>
                </>
              )}
            </p>
            {hasFilters && (
              <Link href="/courses" className="text-secondary hover:underline">
                Clear all filters
              </Link>
            )}
          </div>

          {courses.length > 0 ? (
            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-8">
              {courses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-[#E1E1E1] px-6 py-16 text-center">
              <p className="font-poppins text-xl font-semibold text-[#141414]">No courses match your search</p>
              <p className="mt-2 text-sm text-[#8B8B8B]">Try a different keyword or remove some filters.</p>
              <Link
                href="/courses"
                className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-bold text-[#141414] transition hover:brightness-95"
              >
                Show all courses
              </Link>
            </div>
          )}

          <Pagination page={page} pageCount={pageCount} href={(p) => searchHref(params, { page: p > 1 ? String(p) : undefined })} />
        </div>
      </main>

      <Footer />
    </>
  );
}

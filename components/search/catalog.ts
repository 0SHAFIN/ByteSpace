import { COURSES, type Course } from "@/components/courses/data";

export const LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;
export const RATINGS = [4.5, 4, 3.5] as const;
export const SORTS = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
] as const;
export const PAGE_SIZE = 12;

/**
 * Placeholder catalogue until a real API exists: the six showcase courses
 * repeated with varied level, rating and price so filters and paging have data.
 */
export const CATALOG: Course[] = Array.from({ length: 60 }, (_, i) => {
  const base = COURSES[i % COURSES.length];
  return {
    ...base,
    slug: `${base.slug}-${i + 1}`,
    level: LEVELS[Math.floor(i / COURSES.length) % LEVELS.length],
    rating: [4.5, 4.8, 4.2, 3.9, 4.6][i % 5],
    price: [25, 19, 39, 49, 15, 29][Math.floor(i / 2) % 6],
  };
});

export type SearchParams = {
  q?: string;
  type?: string;
  category?: string;
  level?: string;
  rating?: string;
  sort?: string;
  page?: string;
};

export function searchCourses(params: SearchParams) {
  const q = params.q?.trim().toLowerCase() ?? "";
  const byCreator = params.type === "creators";
  const minRating = Number(params.rating) || 0;

  let results = CATALOG.filter((c) => {
    if (q && !(byCreator ? c.author : `${c.title} ${c.category}`).toLowerCase().includes(q)) return false;
    if (params.category && params.category !== "Featured" && c.category !== params.category) return false;
    if (params.level && c.level !== params.level) return false;
    return c.rating >= minRating;
  });

  if (params.sort === "rating") results = [...results].sort((a, b) => b.rating - a.rating);
  if (params.sort === "price-asc") results = [...results].sort((a, b) => a.price - b.price);
  if (params.sort === "price-desc") results = [...results].sort((a, b) => b.price - a.price);

  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number(params.page) || 1), pageCount);
  const start = (page - 1) * PAGE_SIZE;

  return { total: results.length, page, pageCount, start, courses: results.slice(start, start + PAGE_SIZE) };
}

/** Builds a /courses URL from the current params plus overrides; empty values are dropped. */
export function searchHref(current: SearchParams, changes: Partial<SearchParams>) {
  const merged = { ...current, ...changes };
  const qs = new URLSearchParams();
  for (const [key, value] of Object.entries(merged)) if (value) qs.set(key, value);
  const str = qs.toString();
  return str ? `/courses?${str}` : "/courses";
}

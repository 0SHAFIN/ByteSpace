import Link from "next/link";
import { ChevronIcon } from "@/components/ui/icons";

/** Page numbers to show: always first/last, current ±1, with gaps as null. */
function pageList(page: number, count: number): (number | null)[] {
  if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1);
  const pages = new Set([1, count, page - 1, page, page + 1].filter((p) => p >= 1 && p <= count));
  const sorted = [...pages].sort((a, b) => a - b);
  return sorted.flatMap((p, i) => (i > 0 && p - sorted[i - 1] > 1 ? [null, p] : [p]));
}

const arrow =
  "flex size-10 items-center justify-center rounded-full border border-[#E1E1E1] text-[#141414] transition sm:size-12";

export default function Pagination({ page, pageCount, href }: { page: number; pageCount: number; href: (page: number) => string }) {
  if (pageCount <= 1) return null;

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-3 sm:mt-16 sm:gap-5">
      {page > 1 ? (
        <Link href={href(page - 1)} aria-label="Previous page" className={`${arrow} hover:border-[#141414]`}>
          <ChevronIcon direction="left" className="size-5" />
        </Link>
      ) : (
        <span aria-hidden className={`${arrow} opacity-40`}>
          <ChevronIcon direction="left" className="size-5" />
        </span>
      )}

      <ol className="flex items-center gap-1 sm:gap-2">
        {pageList(page, pageCount).map((p, i) =>
          p === null ? (
            <li key={`gap-${i}`} aria-hidden className="w-6 text-center text-[#9A9A9A]">
              …
            </li>
          ) : (
            <li key={p}>
              <Link
                href={href(p)}
                aria-current={p === page ? "page" : undefined}
                className={`flex size-8 items-center justify-center rounded-full font-poppins text-sm font-semibold transition sm:size-10 sm:text-base ${
                  p === page ? "bg-primary text-[#141414]" : "text-[#141414] hover:bg-[#F3F3F3]"
                }`}
              >
                {p}
              </Link>
            </li>
          ),
        )}
      </ol>

      {page < pageCount ? (
        <Link href={href(page + 1)} aria-label="Next page" className={`${arrow} hover:border-[#141414]`}>
          <ChevronIcon direction="right" className="size-5" />
        </Link>
      ) : (
        <span aria-hidden className={`${arrow} opacity-40`}>
          <ChevronIcon direction="right" className="size-5" />
        </span>
      )}
    </nav>
  );
}

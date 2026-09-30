import Link from "next/link";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden>
      <path d="M5 7.5h14l-1 13H6l-1-13Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Top navigation for the blue page headers. `active` is the href of the current page. */
export default function Navbar({ active }: { active: string }) {
  return (
    <header className="relative z-30 mx-auto grid w-full max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center px-5 pt-6 lg:pt-8">
      <Logo priority className="justify-self-start" />

      <nav aria-label="Primary" className="hidden items-center gap-7 text-label-m md:flex">
        {NAV_LINKS.map((link) => {
          const isActive = link.href === active;
          return (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "text-white" : "text-white/80 transition hover:text-white"}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="col-start-3 flex items-center gap-5 justify-self-end text-label-m lg:gap-7">
        <Link href="/sign-in" className="hidden text-white/80 transition hover:text-white sm:inline">
          Sign In
        </Link>
        <Link href="/join" className="text-white/80 transition hover:text-white">
          Join Us
        </Link>
        <Link href="/cart" aria-label="Cart" className="text-white/80 transition hover:text-white">
          <BagIcon />
        </Link>
      </div>
    </header>
  );
}

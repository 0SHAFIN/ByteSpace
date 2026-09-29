import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { container } from "@/components/ui/styles";
import NewsletterForm from "./NewsletterForm";

const LINK_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/courses#categories" },
      { label: "Business", href: "/courses?category=Business" },
      { label: "IT", href: "/courses?category=IT%20%26%20Software" },
      { label: "Design", href: "/courses?category=Design" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/courses?category=Development" },
      { label: "Marketing", href: "/courses?category=Marketing" },
      { label: "Photography", href: "/courses?category=Photography" },
      { label: "Finance", href: "/courses?category=Finance" },
      { label: "Sport", href: "/courses?category=Sport" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Become a Creator", href: "/join" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

const link = "text-[#3A3A3A] transition hover:text-secondary";

export default function Footer() {
  return (
    <footer className="bg-white px-4 pt-14 sm:px-5 sm:pt-20 lg:px-8 lg:pt-24">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Logo className="w-fit text-[#141414]" />
            <p className="mt-5 text-sm text-[#3A3A3A] sm:text-base xl:text-lg">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm />
            <p className="mt-4 max-w-[440px] text-xs leading-relaxed text-[#5C5C5C] sm:text-sm">
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-secondary">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {LINK_COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="sr-only">{column.title}</h2>
                <ul className="space-y-3 text-sm lg:space-y-4 xl:text-base">
                  {column.links.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className={link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-[#E6E6E6] py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm lg:mt-20 lg:py-8">
          <p className="text-[#3A3A3A]">© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:gap-x-8">
            {LEGAL_LINKS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

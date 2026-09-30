import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { GridLines } from "@/components/ui/decor";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Page Not Found — ByteSpace",
};

export default function NotFound() {
  return (
    <>
    <main className="relative flex-1 overflow-hidden bg-secondary text-white">
      <GridLines />
      <Navbar active="" />

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-5 pb-20 pt-16 text-center sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
        {/* lime → transparent fade, as in the design */}
        <p
          aria-hidden
          className="select-none bg-linear-to-b from-primary from-30% to-primary/0 bg-clip-text font-sans text-[150px] font-bold leading-[0.8] tracking-[-0.04em] text-transparent sm:text-[240px] lg:text-[320px] xl:text-[380px]"
        >
          404
        </p>

        <h1 className="-mt-6 font-poppins text-[28px] font-semibold leading-tight sm:-mt-12 sm:text-5xl lg:-mt-16 lg:text-6xl xl:text-7xl">
          The page you are looking
          <br className="hidden sm:block" /> for doesn&rsquo;t exist
        </h1>
        <p className="mt-4 max-w-[600px] text-sm text-white/85 sm:mt-6 sm:text-base lg:text-lg">
          Try to use a correct URL or go back to the homepage to start again.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-bold text-[#141414] transition hover:brightness-95 sm:mt-10 sm:h-12 sm:px-8 sm:text-base lg:text-lg"
        >
          Back to Home
        </Link>
      </div>
    </main>
    <Footer />
    </>
  );
}

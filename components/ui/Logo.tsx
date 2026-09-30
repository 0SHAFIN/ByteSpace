import Image from "next/image";
import Link from "next/link";

/** ByteSpace mark + wordmark. Text colour is inherited, so it works on blue and white. */
export default function Logo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 font-logo text-xl font-bold tracking-tight font-stretch-expanded lg:text-2xl xl:text-[26px] ${className}`}
    >
      <Image src="/logo/byteSpace.svg" alt="" width={29} height={32} priority={priority} className="h-7 w-auto lg:h-8 xl:h-9" />
      ByteSpace
    </Link>
  );
}

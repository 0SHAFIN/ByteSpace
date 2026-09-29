import Image from "next/image";
import CourseCard from "@/components/courses/CourseCard";
import { COURSES } from "@/components/courses/data";
import { ProgressCard, StudentsCard } from "@/components/ui/cards";
import { Glow, shapeClass } from "@/components/ui/decor";
import { container, sectionPadding, sectionText, sectionTitleSm } from "@/components/ui/styles";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const CREATOR_PERKS = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

// Sits behind the creator model (no z-index), so her image overlaps it
const blueCard =
  "absolute whitespace-nowrap rounded-xl bg-secondary p-2 text-white sm:p-3 lg:p-4";

// Soft grey shadow behind the models (cards stay flat)
const personShadow = "drop-shadow-[18px_28px_40px_rgba(20,24,40,0.28)]";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0 lg:size-6 xl:size-7" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#003BE2" />
      <path d="m7.5 12.5 3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Positions measured from the design's 577×553 illustration. */
function GrowthVisual() {
  return (
    <div className="relative mx-auto aspect-[577/553] w-full max-w-[577px] xl:max-w-[640px]">
      <div className="absolute left-0 top-0 w-[64.5%]">
        <CourseCard course={COURSES[0]} />
      </div>
      <Image
        src="/hero_asset/hero_asset6.png"
        alt="Student with headphones holding a laptop"
        width={516}
        height={483}
        sizes="(max-width: 1024px) 95vw, 560px"
        className={`absolute bottom-0 left-[1.4%] z-10 h-auto w-[96.7%] ${personShadow}`}
      />
      <Image
        src="/hero_asset/shape-coil-lime.png"
        alt=""
        aria-hidden
        width={900}
        height={900}
        sizes="220px"
        className={`${shapeClass} left-[69.5%] top-[12.3%] z-30 w-[38%]`}
      />
      <ProgressCard compact className="right-0 top-[38.5%]" />
    </div>
  );
}

/** Positions measured from the design's 541×560 illustration. */
function CreatorVisual() {
  return (
    <div className="relative mx-auto aspect-[541/560] w-full max-w-[541px] xl:max-w-[600px]">
      <div className={`${blueCard} left-0 top-[1.6%] w-[46%] sm:w-[39%]`}>
        <p className="text-xs leading-tight lg:text-[15px] xl:text-base">Total Revenue</p>
        <p className="text-[9px] text-white/70 lg:text-[10px]">July 1-28</p>
        <p className="mt-1 font-poppins text-sm font-semibold sm:mt-1.5 sm:text-base lg:mt-2.5 lg:text-[22px] xl:text-2xl">$120.29</p>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white lg:mt-2.5 lg:h-2">
          <div className="h-full w-[55%] rounded-full bg-primary" />
        </div>
      </div>

      <div className={`${blueCard} left-0 top-[28.4%]`}>
        <p className="text-xs leading-tight lg:text-[15px] xl:text-base">Year to Date</p>
        <p className="text-[9px] text-white/70 lg:text-[10px]">2023</p>
        <p className="mt-1 font-poppins text-sm font-semibold sm:mt-1.5 sm:text-base lg:mt-2.5 lg:text-[22px] xl:text-2xl">$1,200.38</p>
        <span className="mt-2 inline-block rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-[#141414] lg:mt-3 lg:px-2.5 lg:py-1 lg:text-[10px]">
          +12$
        </span>
      </div>

      {/* model is cropped at the bottom edge, like the design */}
      <div className={`absolute bottom-0 left-[11.8%] top-0 z-10 w-[68.4%] overflow-hidden max-sm:left-[22%] ${personShadow}`}>
        <Image
          src="/hero_asset/creator-model.png"
          alt="Smiling creator with headphones holding a tablet"
          width={282}
          height={475}
          sizes="(max-width: 1024px) 70vw, 370px"
          className="h-auto w-full"
        />
      </div>

      <Image
        src="/hero_asset/shape-spring-lime.png"
        alt=""
        aria-hidden
        width={900}
        height={900}
        sizes="220px"
        className={`${shapeClass} left-[56%] top-[13.6%] z-[5] w-[41%]`}
      />

      <StudentsCard compact className="left-[52.3%] top-[67.5%] max-sm:left-auto max-sm:right-0" />
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section aria-label="Why ByteSpace" className={`relative overflow-hidden bg-[#FAFAFC] ${sectionPadding}`}>
      {/* soft brand-colour glow */}
      <Glow tone="lime" className="-top-40 left-[10%] size-[520px]" />
      <Glow tone="blue" className="right-[-10%] top-[30%] size-[520px]" />
      <Glow tone="lime" className="-bottom-40 -left-40 size-[480px]" />
      <Glow tone="blue" className="-bottom-20 right-[10%] size-[420px] opacity-70" />

      <div className={`relative ${container} space-y-20 lg:space-y-32`}>
        {/* Professional growth */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className={`${sectionTitleSm} max-w-[640px] xl:max-w-[720px]`}>Your Path to Professional Growth Starts Here!</h2>
            <p className={`mt-4 max-w-[520px] sm:mt-6 xl:max-w-[600px] ${sectionText}`}>
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="mt-8 flex gap-10 lg:mt-12 lg:gap-14">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-sm text-[#8B8B8B] lg:text-base xl:text-lg">{stat.label}</dt>
                  <dd className="font-poppins text-3xl font-medium text-secondary lg:text-4xl xl:text-5xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <GrowthVisual />
        </div>

        {/* Course creators */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <h2 className={`${sectionTitleSm} max-w-[520px] xl:max-w-[600px]`}>Create &amp; Manage Courses Easily.</h2>
            <p className={`mt-4 max-w-[560px] sm:mt-6 xl:max-w-[640px] ${sectionText}`}>
              <strong className="font-bold text-[#141414]">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-6 space-y-3 lg:mt-8 lg:space-y-4">
              {CREATOR_PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-label-s text-[#141414] lg:text-label-m xl:text-lg">
                  <CheckIcon />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-1">
            <CreatorVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

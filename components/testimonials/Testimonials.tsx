import Image from "next/image";
import { Glow } from "@/components/ui/decor";
import { container, sectionPadding, sectionText, sectionTitleSm } from "@/components/ui/styles";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/avatars/avatar-2.jpg",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/avatars/avatar-3.jpg",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/avatars/avatar-1.jpg",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className={`relative overflow-hidden bg-[#FAFAFC] ${sectionPadding}`}
    >
      <Glow tone="lime" className="-top-20 left-[40%] size-[520px]" />
      <Glow tone="lime" className="-right-40 top-[30%] size-[480px]" />
      <Glow tone="blue" className="-bottom-40 -left-40 size-[520px]" />

      <div className={`relative ${container}`}>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <h2 id="testimonials-heading" className={`${sectionTitleSm} max-w-[560px] xl:max-w-[640px]`}>
            Discover What Our Community Is Saying
          </h2>
          <p className={sectionText}>
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="mt-8 grid items-start gap-4 sm:mt-12 md:grid-cols-3 lg:mt-14 lg:gap-6 xl:gap-8">
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <figure className="rounded-2xl bg-white p-5 lg:rounded-3xl lg:p-6 xl:p-8">
                <Image
                  src={t.avatar}
                  alt=""
                  width={112}
                  height={112}
                  className="size-12 rounded-full object-cover lg:size-14 xl:size-16"
                />
                <figcaption className="mt-4 lg:mt-5">
                  <p className="font-poppins text-lg font-semibold text-[#141414] xl:text-xl">{t.name}</p>
                  <p className="text-sm text-secondary xl:text-base">{t.role}</p>
                </figcaption>
                <blockquote className="mt-4 text-sm leading-relaxed text-[#5C5C5C] sm:text-base lg:mt-5 xl:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

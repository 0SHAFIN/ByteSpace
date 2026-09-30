import Link from "next/link";
import { container, sectionPadding, sectionText, sectionTitleSm } from "@/components/ui/styles";

// Icons: Google Material Symbols (Outlined), Apache License 2.0
const PATHS: { label: string; icon: string }[] = [
  // design_services
  { label: "Design", icon: "m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z" },
  // developer_mode
  { label: "Development", icon: "M344-296 160-480l184-184 56 58-126 126 126 126-56 58Zm-144 16h80v40h400v-40h80v160q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-160Zm80-400h-80v-160q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v40Zm0 520v40h400v-40H280Zm0-640h400v-40H280v40Zm336 504-56-58 126-126-126-126 56-58 184 184-184 184ZM280-800v-40 40Zm0 640v40-40Z" },
  // computer
  { label: "IT & Software", icon: "M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" },
  // domain
  { label: "Business", icon: "M80-120v-720h400v160h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h320v-400H480v80h80v80h-80v80h80v80h-80v80Zm160-240v-80h80v80h-80Zm0 160v-80h80v80h-80Z" },
  // connect_without_contact
  { label: "Marketing", icon: "M640-80v-90q-56-18-94-64t-44-106h80q8 43 40.5 71.5T700-240h120q25 0 42.5 17.5T880-180v100H640Zm120-200q-33 0-56.5-23.5T680-360q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360q0 33-23.5 56.5T760-280ZM360-400q0-150 105-255t255-105v80q-117 0-198.5 81.5T440-400h-80Zm160 0q0-83 58.5-141.5T720-600v80q-50 0-85 35t-35 85h-80ZM80-520v-100q0-25 17.5-42.5T140-680h120q45 0 77.5-28.5T378-780h80q-6 60-44 106t-94 64v90H80Zm120-200q-33 0-56.5-23.5T120-800q0-33 23.5-56.5T200-880q33 0 56.5 23.5T280-800q0 33-23.5 56.5T200-720Z" },
  // photo_camera_front
  { label: "Photography", icon: "M320-280h320v-22q0-45-44-71.5T480-400q-72 0-116 26.5T320-302v22Zm160-160q33 0 56.5-23.5T560-520q0-33-23.5-56.5T480-600q-33 0-56.5 23.5T400-520q0 33 23.5 56.5T480-440ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" },
];

function PathIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 -960 960 960" fill="currentColor" className="size-6 lg:size-7 xl:size-8" aria-hidden>
      <path d={d} />
    </svg>
  );
}

export default function LearningPaths() {
  return (
    <section aria-labelledby="paths-heading" className={`bg-white ${sectionPadding} pt-0 sm:pt-0 lg:pt-4`}>
      <div className={container}>
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 id="paths-heading" className={sectionTitleSm}>
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className={`mt-3 sm:mt-5 ${sectionText}`}>
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
            various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>
        </div>

        <ul className="mx-auto mt-8 grid max-w-[1320px] grid-cols-3 gap-3 sm:mt-12 sm:gap-4 lg:mt-14 lg:grid-cols-6 lg:gap-6 xl:gap-8">
          {PATHS.map((path) => (
            <li key={path.label}>
              <Link
                href={`/courses?category=${encodeURIComponent(path.label)}`}
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-[#E9E9E9] bg-white p-2 text-center transition hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_40px_rgba(0,20,90,0.08)] lg:gap-4 lg:rounded-3xl"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-primary text-[#141414] transition group-hover:scale-110 lg:size-14 xl:size-16">
                  <PathIcon d={path.icon} />
                </span>
                <span className="text-xs font-medium text-[#141414] sm:text-label-s lg:text-label-m xl:text-lg">{path.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

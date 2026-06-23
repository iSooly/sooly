import type { Content } from "../content";
import StaticImage from "./StaticImage";

type Props = { t: Content; isRtl: boolean };

const eventImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

const imageClass: Record<number, string> = {
  1: "h-full w-full rounded-2xl border border-white/10 object-cover md:col-span-2 md:row-span-2",
  2: "h-full w-full rounded-2xl border border-white/10 object-cover",
  3: "h-full w-full rounded-2xl border border-white/10 object-cover",
  4: "h-full w-full rounded-2xl border border-white/10 object-cover md:row-span-2",
  5: "h-full w-full rounded-2xl border border-white/10 object-cover",
  6: "h-full w-full rounded-2xl border border-white/10 object-cover md:col-span-2",
  7: "h-full w-full rounded-2xl border border-white/10 object-cover",
  8: "h-full w-full rounded-2xl border border-white/10 object-cover",
  9: "h-full w-full rounded-2xl border border-white/10 object-cover md:col-span-2",
  10: "h-full w-full rounded-2xl border border-white/10 object-cover",
};

export default function CommunitySection({ t, isRtl }: Props) {
  return (
    <section
      className="bg-black px-4 py-24 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm text-zinc-500">{t.communityLabel}</p>
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t.communityHeading}</h2>
        <p className="mb-16 max-w-3xl text-lg leading-8 text-zinc-300">{t.communityText}</p>

        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[190px]">
          {eventImages.map((n) => (
            <StaticImage
              key={n}
              src={`/event${n}.jpg`}
              alt={isRtl ? `فعالية ${n}` : `Event ${n}`}
              width={800}
              height={600}
              className={imageClass[n]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

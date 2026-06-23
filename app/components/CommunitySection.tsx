import type { Content } from "../content";
import StaticImage from "./StaticImage";

type Props = { t: Content; isRtl: boolean };

const eventImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

const desktopClass: Record<number, string> = {
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
      className="bg-black px-4 py-16 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold text-red-500">{t.communityLabel}</p>
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{t.communityHeading}</h2>
        <p className="mb-10 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">{t.communityText}</p>

        {/* Mobile: horizontal snap carousel */}
        <div className="md:hidden -mx-4 px-4">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3">
            {eventImages.map((n) => (
              <div
                key={n}
                className="snap-start shrink-0 w-[78vw] aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
              >
                <StaticImage
                  src={`/event${n}.jpg`}
                  alt={isRtl ? `فعالية ${n}` : `Event ${n}`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-zinc-600">
            {isRtl ? "← اسحب للمزيد" : "Swipe for more →"}
          </p>
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden md:grid md:grid-cols-4 md:auto-rows-[190px] gap-4">
          {eventImages.map((n) => (
            <StaticImage
              key={n}
              src={`/event${n}.jpg`}
              alt={isRtl ? `فعالية ${n}` : `Event ${n}`}
              width={800}
              height={600}
              className={desktopClass[n]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Content } from "../content";
import ChapterLabel from "./ChapterLabel";

type Props = { t: Content; isRtl: boolean };

export default function AnimeStatsSection({ t, isRtl }: Props) {
  return (
    <section
      className="relative bg-black px-4 py-16 text-center sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Halftone dot texture */}
      <div className="halftone pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex justify-center">
          <ChapterLabel number="03" label={t.animeLabel} />
        </div>
        <h2 className="mb-14 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{t.animeHeading}</h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
          {t.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-4">
              <h3 className="text-6xl font-black text-red-500 sm:text-7xl">{stat.value}</h3>
              <p className="mt-3 text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl">{t.animeText}</p>
        </div>
      </div>
    </section>
  );
}

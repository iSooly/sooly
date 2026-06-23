import type { Content } from "../content";

type Props = { t: Content; isRtl: boolean };

export default function AnimeStatsSection({ t, isRtl }: Props) {
  return (
    <section
      className="bg-black px-4 py-16 text-center sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold text-red-500">{t.animeLabel}</p>
        <h2 className="mb-14 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{t.animeHeading}</h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
          {t.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-4">
              <h3 className="text-5xl font-bold text-red-500 sm:text-6xl">{stat.value}</h3>
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

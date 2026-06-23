import type { Content } from "../content";

type Props = { t: Content; isRtl: boolean };

export default function AnimeStatsSection({ t, isRtl }: Props) {
  return (
    <section
      className="bg-black px-4 py-20 text-center sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm text-zinc-500">{t.animeLabel}</p>
        <h2 className="mb-16 text-5xl font-bold text-white md:text-6xl">{t.animeHeading}</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {t.stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-6xl font-bold text-white">{stat.value}</h3>
              <p className="mt-3 text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <p className="text-xl leading-relaxed text-zinc-300">{t.animeText}</p>
        </div>
      </div>
    </section>
  );
}

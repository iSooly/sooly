import type { Content } from "../content";

type Props = { t: Content; isRtl: boolean };

export default function JourneySection({ t, isRtl }: Props) {
  return (
    <section
      className="relative z-10 bg-zinc-950 px-4 py-16 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-semibold text-red-500">{t.journeyLabel}</p>
        <h2 className="mb-10 text-4xl font-bold md:text-6xl">{t.journeyHeading}</h2>

        <div className="my-10 grid gap-4 sm:grid-cols-2">
          {t.journeyItems.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-red-600/30 hover:bg-white/8 hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {t.journeyParagraph}
        </p>
      </div>
    </section>
  );
}

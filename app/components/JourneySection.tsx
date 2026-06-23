import type { Content } from "../content";

type Props = { t: Content; isRtl: boolean };

export default function JourneySection({ t, isRtl }: Props) {
  return (
    <section
      className="relative z-10 bg-zinc-950 px-4 py-24 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm text-zinc-500">{t.journeyLabel}</p>
        <h2 className="mb-10 text-4xl font-bold md:text-6xl">{t.journeyHeading}</h2>

        <div className="my-14 grid gap-5 md:grid-cols-2">
          {t.journeyItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)]"
            >
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl text-xl leading-relaxed text-zinc-300">{t.journeyParagraph}</p>
      </div>
    </section>
  );
}

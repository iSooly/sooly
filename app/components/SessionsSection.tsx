import type { Content } from "../content";
import ChapterLabel from "./ChapterLabel";

type Props = { t: Content; isRtl: boolean };

export default function SessionsSection({ t, isRtl }: Props) {
  return (
    <section
      className="bg-zinc-950 px-4 py-16 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <ChapterLabel number="04" label={t.sessionsLabel} />
        <h2 className="mb-12 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{t.sessionsHeading}</h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          {t.sessions.map((sessionTitle, i) => (
            <div
              key={sessionTitle}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-red-600/40 hover:shadow-[0_20px_50px_rgba(220,38,38,0.08)]"
            >
              <p className="mb-3 text-2xl font-black text-red-600/40">0{i + 1}</p>
              <h3 className="text-lg font-bold text-white leading-snug">{sessionTitle}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Content } from "../content";

type Props = { t: Content; isRtl: boolean };

export default function SessionsSection({ t, isRtl }: Props) {
  return (
    <section
      className="bg-zinc-950 px-4 py-24 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm text-zinc-500">{t.sessionsLabel}</p>
        <h2 className="mb-16 text-5xl font-bold text-white md:text-6xl">{t.sessionsHeading}</h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {t.sessions.map((sessionTitle) => (
            <div
              key={sessionTitle}
              className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition-transform duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-2xl font-bold text-white">{sessionTitle}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

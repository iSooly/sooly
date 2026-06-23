import type { Content } from "../content";
import StaticImage from "./StaticImage";

type Props = { t: Content; isRtl: boolean };

export default function CharactersSection({ t, isRtl }: Props) {
  return (
    <section
      className="bg-zinc-950 px-4 py-16 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-4xl font-bold text-white md:text-5xl">{t.charactersHeading}</h2>

        <div className="grid gap-6">

          {/* Featured — Whitebeard */}
          <div className="grid overflow-hidden rounded-2xl border border-red-600/30 bg-zinc-900 shadow-2xl shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-red-600/60 hover:shadow-[0_24px_60px_rgba(220,38,38,0.15)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex min-h-[320px] items-center justify-center bg-white lg:min-h-[520px]">
              <StaticImage
                src="/whitebeard-feature.png"
                alt={t.featuredTitle}
                width={1355}
                height={1161}
                className="h-full max-h-[520px] w-full scale-110 object-contain"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-500">{t.featuredSubtitle}</p>
              <h3 className="mb-6 text-3xl font-bold text-white md:text-5xl">{t.featuredTitle}</h3>
              <p className="text-lg leading-relaxed text-zinc-200">{t.featuredText}</p>
            </div>
          </div>

          {/* Character cards — manga panel style */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.cards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border-t-4 border-t-red-600 border-x border-b border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-x-white/20 hover:border-b-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.40)]"
              >
                <div className="flex h-44 items-center justify-center overflow-hidden bg-white lg:h-48">
                  <StaticImage
                    src={card.image}
                    alt={card.alt}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-3 text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-sm leading-7 text-zinc-300">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

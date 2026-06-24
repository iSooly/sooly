"use client";

import { useState } from "react";
import type { Content } from "../content";
import StaticImage from "./StaticImage";
import ChapterLabel from "./ChapterLabel";
import CharacterModal from "./CharacterModal";

type Props = { t: Content; isRtl: boolean };

export default function CharactersSection({ t, isRtl }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      className="bg-zinc-950 px-4 py-16 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <ChapterLabel number="02" label={isRtl ? "الشخصيات" : "Characters"} />
        <h2 className="mb-10 text-4xl font-bold text-white md:text-5xl">{t.charactersHeading}</h2>

        <div className="grid gap-5">

          {/* ─── Whitebeard: full hero treatment ─── */}
          <div className="relative overflow-hidden rounded-2xl bg-zinc-900 shadow-[0_0_120px_rgba(220,38,38,0.18)]">
            <div className="absolute inset-0 rounded-2xl border-2 border-red-600/60 pointer-events-none z-10" />

            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="flex min-h-[360px] overflow-hidden bg-white lg:min-h-[640px]">
                <StaticImage
                  src="/whitebeard-feature.png"
                  alt={t.featuredTitle}
                  width={1355}
                  height={1161}
                  className="h-full w-full scale-[1.55] origin-top object-cover object-top"
                />
              </div>

              <div className="flex flex-col justify-center gap-5 p-8 lg:p-16">
                <div className="h-1 w-12 rounded-full bg-red-600" />
                <p className="text-sm font-bold text-red-500">{t.featuredSubtitle}</p>
                <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                  {t.featuredTitle}
                </h3>
                <p className="text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
                  {t.featuredText}
                </p>
              </div>
            </div>
          </div>

          {/* ─── Four character cards (mobile carousel / desktop grid) ─── */}
          <div
            className="
              -mx-4 flex snap-x snap-mandatory overflow-x-auto gap-4 px-4 pb-4 no-scrollbar
              sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:snap-none sm:px-0 sm:pb-0
              lg:grid-cols-4
            "
          >
            {t.cards.map((card, i) => (
              <button
                key={card.title}
                type="button"
                onClick={() => setSelected(i)}
                className="
                  snap-center shrink-0 w-[80vw] text-start
                  sm:w-auto
                  group flex flex-col overflow-hidden rounded-2xl border-t-4 border-t-red-600 border-x border-b border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.40)] hover:border-red-600/50
                "
              >
                <div className="flex h-52 items-center justify-center overflow-hidden bg-white sm:h-44 lg:h-48">
                  <StaticImage
                    src={card.image}
                    alt={card.alt}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: i === 2 ? "center 30%" : "center" }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="mb-2 text-base font-bold text-white sm:text-lg">{card.title}</h3>
                  <p className="text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-7 line-clamp-3">{card.description}</p>
                  <p className="mt-3 text-xs font-semibold text-red-600/60 transition group-hover:text-red-500">
                    {isRtl ? "← اقرأ الملف" : "Read file →"}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Swipe hint — mobile only */}
          <p className="text-center text-xs text-zinc-600 sm:hidden">
            {isRtl ? "← اسحب للمزيد" : "Swipe for more →"}
          </p>

        </div>
      </div>

      {/* Character modal */}
      {selected !== null && (
        <CharacterModal
          card={t.cards[selected]}
          index={selected}
          isRtl={isRtl}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

import type { Content } from "../content";
import StaticImage from "./StaticImage";
import ChapterLabel from "./ChapterLabel";

type Props = { t: Content; isRtl: boolean };

const eventImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

const imgBase = "h-full w-full rounded-2xl border border-white/10 object-cover";

export default function CommunitySection({ t, isRtl }: Props) {
  return (
    <section
      className="bg-black px-4 py-16 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <ChapterLabel number="05" label={t.communityLabel} />
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{t.communityHeading}</h2>
        <p className="mb-10 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">{t.communityText}</p>

        {/* ── Mobile: horizontal snap carousel ── */}
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

        {/* ── Desktop: clean 3-col bento ──
            Row 1 (260px): event1 (2-wide) | event2
            Row 2 (210px): event3 | event4 | event5
            Row 3 (260px): event6 | event7 (2-wide)
            Row 4 (210px): event8 | event9 | event10
        */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-4"
          style={{ gridTemplateRows: "260px 210px 260px 210px" }}
        >
          <StaticImage src="/event1.jpg"  alt={isRtl ? "فعالية 1"  : "Event 1"}  width={800} height={600} className={`${imgBase} col-span-2`} />
          <StaticImage src="/event2.jpg"  alt={isRtl ? "فعالية 2"  : "Event 2"}  width={800} height={600} className={imgBase} />

          <StaticImage src="/event3.jpg"  alt={isRtl ? "فعالية 3"  : "Event 3"}  width={800} height={600} className={imgBase} />
          <StaticImage src="/event4.jpg"  alt={isRtl ? "فعالية 4"  : "Event 4"}  width={800} height={600} className={imgBase} />
          <StaticImage src="/event5.jpg"  alt={isRtl ? "فعالية 5"  : "Event 5"}  width={800} height={600} className={imgBase} />

          <StaticImage src="/event6.jpg"  alt={isRtl ? "فعالية 6"  : "Event 6"}  width={800} height={600} className={imgBase} />
          <StaticImage src="/event7.jpg"  alt={isRtl ? "فعالية 7"  : "Event 7"}  width={800} height={600} className={`${imgBase} col-span-2`} />

          <StaticImage src="/event8.jpg"  alt={isRtl ? "فعالية 8"  : "Event 8"}  width={800} height={600} className={imgBase} />
          <StaticImage src="/event9.jpg"  alt={isRtl ? "فعالية 9"  : "Event 9"}  width={800} height={600} className={imgBase} />
          <StaticImage src="/event10.jpg" alt={isRtl ? "فعالية 10" : "Event 10"} width={800} height={600} className={imgBase} />
        </div>
      </div>
    </section>
  );
}

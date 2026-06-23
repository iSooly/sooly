import type { Content } from "../content";
import StaticImage from "./StaticImage";

type Props = { t: Content; isRtl: boolean };

const cardClass =
  "flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition-transform duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]";

const logoClass = "h-14 w-auto object-contain";

export default function PartnersSection({ t, isRtl }: Props) {
  return (
    <section
      className="bg-zinc-950 px-4 py-24 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm text-zinc-500">{t.partnersLabel}</p>
        <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">{t.partnersHeading}</h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          <div className={cardClass}>
            <StaticImage
              src="/logos/baseer/baseer.png"
              alt={isRtl ? "بصير" : "Baseer"}
              width={180}
              height={80}
              className={logoClass}
            />
          </div>
          <div className={cardClass}>
            <StaticImage
              src="/logos/literary-partner.png"
              alt={isRtl ? "الشريك الأدبي" : "Literary Partner"}
              width={180}
              height={80}
              className={logoClass}
            />
          </div>
          <div className={cardClass}>
            <StaticImage
              src="/logos/bonchai.png"
              alt="Bonchai"
              width={180}
              height={80}
              className={logoClass}
            />
          </div>
          <div className={cardClass}>
            <StaticImage
              src="/logos/bash/bash.png"
              alt="Bash"
              width={180}
              height={80}
              className={logoClass}
            />
          </div>
          <div className={cardClass}>
            <StaticImage
              src="/logos/culture-house.png"
              alt={isRtl ? "بيت الثقافة" : "Culture House"}
              width={180}
              height={80}
              className={logoClass}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

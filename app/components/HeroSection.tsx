import type { Content } from "../content";
import { assetPath } from "../lib/assets";
import StaticImage from "./StaticImage";
import SocialLinks from "./SocialLinks";

type Props = { t: Content };

export default function HeroSection({ t }: Props) {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url('${assetPath("/backgrounds/bg1.jpg")}')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_32%),linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.90)_78%,#000)]" />

      <div className="relative flex w-full max-w-5xl flex-col items-center">
        <StaticImage
          src="/profile/profile.png"
          alt="Sulaiman Alharbi"
          width={260}
          height={260}
          priority
          className="mb-8 h-40 w-40 rounded-full border border-white/30 object-cover shadow-2xl shadow-black/60 sm:h-52 sm:w-52 md:h-64 md:w-64"
        />

        <p className="mb-4 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs text-zinc-300 backdrop-blur-sm sm:text-sm">
          {t.heroBadge}
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-normal sm:text-5xl md:text-7xl">
          {t.heroName}
        </h1>

        <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-xl">
          {t.heroLine1}
        </p>

        <p className="mb-12 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {t.heroLine2}
        </p>

        <SocialLinks
          tiktokLabel={t.tiktokLabel}
          linkedinLabel={t.linkedinLabel}
          instagramLabel={t.instagramLabel}
          snapchatLabel={t.snapchatLabel}
          variant="hero"
          className="flex flex-wrap justify-center gap-3"
        />
      </div>
    </section>
  );
}

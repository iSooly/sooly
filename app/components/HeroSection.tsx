import type { Content } from "../content";
import { assetPath } from "../lib/assets";
import StaticImage from "./StaticImage";
import SocialLinks from "./SocialLinks";

type Props = { t: Content };

export default function HeroSection({ t }: Props) {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${assetPath("/backgrounds/bg1.jpg")}')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_50%),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.92)_80%,#000)]" />

      <div className="relative flex w-full max-w-5xl flex-col items-center">

        {/* Profile photo with red glow ring */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-red-600/20 blur-2xl scale-110" />
          <StaticImage
            src="/profile/profile.png"
            alt="Sulaiman Alharbi"
            width={260}
            height={260}
            priority
            className="relative h-40 w-40 rounded-full border-2 border-red-600/50 object-cover shadow-2xl shadow-black/80 sm:h-52 sm:w-52 md:h-64 md:w-64"
          />
        </div>

        {/* Red-tinted badge */}
        <p className="mb-5 rounded-full border border-red-600/30 bg-red-950/40 px-5 py-2 text-xs font-medium text-red-300 backdrop-blur-sm sm:text-sm">
          {t.heroBadge}
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-normal sm:text-6xl md:text-7xl">
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="h-8 w-px bg-gradient-to-b from-transparent to-red-500" />
      </div>
    </section>
  );
}

import type { Content } from "../content";
import { assetPath } from "../lib/assets";
import StaticImage from "./StaticImage";
import SocialLinks from "./SocialLinks";

type Props = { t: Content };

export default function HeroSection({ t }: Props) {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${assetPath("/backgrounds/bg1.jpg")}')` }}
      />
      {/* Radial red glow + dark fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_50%),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.92)_80%,#000)]" />
      {/* Manga speed lines overlay */}
      <div className="speed-lines absolute inset-0 opacity-60" />

      <div className="relative flex w-full max-w-5xl flex-col items-center">

        {/* Profile photo with red glow ring */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-red-600/25 blur-3xl scale-125" />
          <StaticImage
            src="/profile/profile.png"
            alt="Sulaiman Alharbi"
            width={260}
            height={260}
            priority
            className="relative h-36 w-36 rounded-full border-2 border-red-600/60 object-cover shadow-2xl shadow-black/80 sm:h-52 sm:w-52 md:h-64 md:w-64"
          />
        </div>

        {/* Badge */}
        <p className="mb-5 rounded-full border border-red-600/40 bg-red-950/50 px-5 py-2 text-xs font-semibold text-red-300 backdrop-blur-sm sm:text-sm">
          {t.heroBadge}
        </p>

        {/* Hero name — title-card treatment, bigger on mobile */}
        <h1 className="mb-6 text-5xl font-black tracking-tight drop-shadow-[0_2px_24px_rgba(255,255,255,0.08)] sm:text-6xl md:text-7xl lg:text-8xl">
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

"use client";

import { useState, useEffect } from "react";
import { content, type Lang } from "./content";
import { assetPath } from "./lib/assets";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import CharactersSection from "./components/CharactersSection";
import AnimeStatsSection from "./components/AnimeStatsSection";
import SessionsSection from "./components/SessionsSection";
import CommunitySection from "./components/CommunitySection";
import PartnersSection from "./components/PartnersSection";
import QandASection from "./components/QandASection";
import AskSection from "./components/AskSection";
import FinalSection from "./components/FinalSection";

export default function Home() {
  const [language, setLanguage] = useState<Lang>("ar");
  const isRtl = language === "ar";
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [language, isRtl]);

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      lang={language}
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url('${assetPath("/Background.png")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10">
        <div className="absolute right-4 top-4 z-20 flex overflow-hidden rounded-full border border-white/15 bg-black/40 shadow-black/20 backdrop-blur-sm sm:right-6 sm:top-6">
          <button
            type="button"
            onClick={() => setLanguage("ar")}
            className={`px-4 py-2 text-sm font-semibold transition ${language === "ar" ? "bg-white text-black" : "text-white hover:bg-white/10"}`}
          >
            AR
          </button>
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 text-sm font-semibold transition ${language === "en" ? "bg-white text-black" : "text-white hover:bg-white/10"}`}
          >
            EN
          </button>
          <a
            href="#ask"
            className="px-4 py-2 text-sm font-semibold transition text-white hover:bg-white/10"
          >
            {t.askNavLabel}
          </a>
        </div>

        <HeroSection t={t} />
        <JourneySection t={t} isRtl={isRtl} />
        <CharactersSection t={t} isRtl={isRtl} />
        <AnimeStatsSection t={t} isRtl={isRtl} />
        <SessionsSection t={t} isRtl={isRtl} />
        <CommunitySection t={t} isRtl={isRtl} />
        <PartnersSection t={t} isRtl={isRtl} />
        <QandASection t={t} isRtl={isRtl} />
        <AskSection t={t} isRtl={isRtl} />
        <FinalSection t={t} isRtl={isRtl} />
      </div>
    </main>
  );
}

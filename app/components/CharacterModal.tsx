"use client";

import { useEffect } from "react";
import type { Content } from "../content";
import StaticImage from "./StaticImage";

type Card = Content["cards"][number];

type Props = {
  card: Card;
  index: number;
  isRtl: boolean;
  onClose: () => void;
};

const objectPositions: Record<number, string> = {
  2: "center 30%",
};

export default function CharacterModal({ card, index, isRtl, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const fileNumber = String(index + 1).padStart(2, "0");
  const objectPos = objectPositions[index] ?? "center";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/88 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Speed lines */}
      <div className="speed-lines absolute inset-0 opacity-70" />
      {/* Red glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.09),transparent_60%)]" />

      <div
        className="manga-in relative z-10 w-full sm:max-w-3xl overflow-hidden rounded-t-3xl sm:rounded-3xl border border-red-600/40 bg-zinc-950 shadow-[0_0_100px_rgba(220,38,38,0.22)]"
        dir={isRtl ? "rtl" : "ltr"}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="font-black text-[10px] uppercase tracking-widest text-red-600/50">
              Character File
            </span>
            <span className="h-3 w-px bg-red-600/30" />
            <span className="font-black text-[10px] tabular-nums text-red-600/30">#{fileNumber}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/8 hover:text-white text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Image + text */}
        <div className="grid sm:grid-cols-[1fr_1fr]">
          {/* Image panel */}
          <div className="h-60 overflow-hidden bg-white sm:h-[460px]">
            <StaticImage
              src={card.image}
              alt={card.alt}
              width={800}
              height={800}
              className="h-full w-full object-cover"
              style={{ objectPosition: objectPos }}
            />
          </div>

          {/* Text panel */}
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-10">
            <div className="h-1 w-10 rounded-full bg-red-600" />
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              {card.title}
            </h2>
            <p className="text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

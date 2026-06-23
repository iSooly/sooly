import { BriefcaseBusiness, Share2, MessageCircle, Music2 } from "lucide-react";

type Props = {
  tiktokLabel: string;
  linkedinLabel: string;
  instagramLabel: string;
  snapchatLabel: string;
  variant: "hero" | "footer";
  className?: string;
};

export default function SocialLinks({
  tiktokLabel,
  linkedinLabel,
  instagramLabel,
  snapchatLabel,
  variant,
  className = "",
}: Props) {
  const linkClass =
    variant === "hero"
      ? "inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 transition hover:bg-white hover:text-black"
      : "inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-white transition hover:bg-white hover:text-black";

  return (
    <div className={className}>
      <a href="https://www.tiktok.com/@isooly" target="_blank" rel="noreferrer" className={linkClass}>
        <Music2 size={18} aria-hidden="true" />
        {tiktokLabel}
      </a>
      <a href="https://www.linkedin.com/in/sulimanalharbi" target="_blank" rel="noreferrer" className={linkClass}>
        <BriefcaseBusiness size={18} aria-hidden="true" />
        {linkedinLabel}
      </a>
      <a href="https://www.instagram.com/isoolyx" target="_blank" rel="noreferrer" className={linkClass}>
        <Share2 size={18} aria-hidden="true" />
        {instagramLabel}
      </a>
      <a href="https://www.snapchat.com/add/iisooly" target="_blank" rel="noreferrer" className={linkClass}>
        <MessageCircle size={18} aria-hidden="true" />
        {snapchatLabel}
      </a>
    </div>
  );
}

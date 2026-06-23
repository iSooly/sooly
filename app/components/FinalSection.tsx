import type { Content } from "../content";
import SocialLinks from "./SocialLinks";

type Props = { t: Content; isRtl: boolean };

export default function FinalSection({ t, isRtl }: Props) {
  return (
    <section
      className="bg-black px-4 py-24 text-center sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-4xl font-bold text-white">{t.finalHeading}</h2>
        <p className="mb-12 text-lg text-zinc-300">{t.finalText}</p>

        <SocialLinks
          tiktokLabel={t.tiktokLabel}
          linkedinLabel={t.linkedinLabel}
          instagramLabel={t.instagramLabel}
          snapchatLabel={t.snapchatLabel}
          variant="footer"
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        />
      </div>
    </section>
  );
}

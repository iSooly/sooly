"use client";

import Image from "next/image";
import { useState, type ComponentProps } from "react";
import { BriefcaseBusiness, Share2, MessageCircle, Music2 } from "lucide-react";

const content = {
  ar: {
    heroBadge: "الأنمي • الثقافة • بناء المجتمع",
    heroName: "سليمان الحربي",
    heroLine1: "كل قصة تبدأ بمشاهد واحد",
    tiktokLabel: "تيك توك",
    linkedinLabel: "لينكد إن",    instagramLabel: "إنستغرام",    snapchatLabel: "سناب شات",
    heroLine2: "لكن أجمل القصص هي التي تجمع الناس حولها",
    journeyLabel: "بداية الرحلة",
    journeyHeading: "رحلتي مع عالم الأنمي",
    journeyItems: [
      { title: "الرياض", description: "هنا بدأت رحلتي مع الأنمي والقصص التي صنعت شغفي." },
      { title: "بريدة", description: "محطة مهمة تضمنت جلسات وفعاليات ومعرض الأنمي." },
      { title: "الرس", description: "لقاءات ونقاشات جمعت المهتمين بعالم الأنمي." },
      { title: "حائل", description: "الوصول إلى جمهور جديد ومشاركة الشغف في مدينة جديدة." },
    ],
    journeyParagraph:
      "بدأت كمتابع للأنمي، ثم تحولت المشاهدة إلى نقاشات، وتحولت النقاشات إلى جلسات، وتحولت الجلسات إلى مجتمع يجمع المهتمين بالأنمي والثقافة البصرية ورواية القصص. لم يكن الهدف الحديث عن الأعمال فقط، بل فهم الأفكار والقيم والشخصيات والقصص التي تجعل هذه الأعمال قادرة على التأثير في الناس حول العالم.",
    charactersHeading: "الشخصيات التي شكّلتني",
    featuredSubtitle: "الأعظم",
    featuredTitle: "👑 اللحية البيضاء",
    featuredText:
      "أقوى رجل في العالم كان حلمه بسيطاً جداً: أن يملك عائلة. هذه الشخصية غيّرت نظرتي لمعنى المجتمع والانتماء، وأن أعظم الإنجازات ليست دائماً القوة أو الشهرة، بل الأشخاص الذين تقف معهم ويقفون معك.",
    cards: [
      {
        title: "⚔️ ريلي",
        description:
          "الحكمة الهادئة. الشخصية التي علمتني أن الخبرة لا تحتاج إلى ضجيج، وأن التأثير الحقيقي يأتي من المعرفة التي تنقلها للآخرين.",
        image: "/rayleigh.jpg",
        alt: "Rayleigh",
      },
      {
        title: "🩸 زاراكي",
        description:
          "القوة بلا ضجيج. لا يحتاج إلى قدرة معقدة ليترك أثره، وأكثر ما يلهمني فيه أنه يضع حدوداً على نفسه حتى يختبر قوته بصدق.",
        image: "/zaraki.jpg",
        alt: "Zaraki Kenpachi",
      },
      {
        title: "🔥 غاي",
        description:
          "قوة صنعتها المحاولة. غاي يذكرني أن من يستهينون ببدايتك لا يرون سنوات التدريب، وأن الانضباط قد يصل بصاحبه إلى لحظة يعترف بها الأقوى.",
        image: "/might-guy.jpg",
        alt: "Might Guy",
      },
      {
        title: "☀️ إيسكانور",
        description:
          "الثقة بالنفس لا تعني الغرور، بل معرفة قيمتك الحقيقية وعدم التقليل من نفسك.",
        image: "/escanor.jpg",
        alt: "Escanor",
      },
    ],
    animeLabel: "الأنمي خارج الشاشة",
    animeHeading: "عندما تحولت المشاهدة إلى مجتمع",
    stats: [
      { value: "250+", label: "مشارك" },
      { value: "5", label: "جلسات منفذة" },
      { value: "2", label: "جلسات قادمة" },
      { value: "4", label: "مدن" },
    ],
    animeText:
      "بدأت الرحلة من حب شخصي للأنمي، ثم تحولت إلى جلسات ونقاشات و لقاءات جمعت المهتمين بعالم الأنمي والثقافة البصرية ورواية القصص. ومع كل فعالية جديدة أكتشف أن أجمل جزء ليس ما أقوله، بل ما يحدث بعد انتهاء الجلسة عندما تبدأ الحوارات وتتشكل العلاقات بين الحضور.",
    sessionsLabel: "أبرز الجلسات",
    sessionsHeading: "محطات من الرحلة",
    sessions: [
      "رحلة المانجا من الورق إلى الشاشة",
      "كيف يرى كل منا المشهد؟",
      "الأنمي بين الثقافة والفن",
      "كيف غيّر الأنمي العالم؟",
      "معرض الأنمي",
    ],
    communityLabel: "لحظات من المجتمع",
    communityHeading: "من الفكرة إلى المجتمع",
    communityText:
      "بعض اللحظات التي تحولت فيها مشاهدة الأنمي من اهتمام شخصي إلى جلسات وفعاليات وحوارات جمعت المهتمين بالقصص والثقافة البصرية.",
    partnersLabel: "شركاء الرحلة",
    partnersHeading: "جهات آمنت بالفكرة",
    askLabel: "اسأل بحرية",
    askHeading: "لديك سؤال؟",
    askText: "اسأل بدون تردد وبدون الحاجة للتعريف عن نفسك. أنا هنا للإجابة على أسئلتك والاستماع إلى أفكارك.",
    askPlaceholder: "اكتب سؤالك هنا...",
    askButton: "أرسل السؤال",
    askNavLabel: "اسأل",
    finalHeading: "والرحلة مستمرة",
    finalText: "شكراً لكونكم جزءاً من هذه الرحلة. تابعوني لتكونوا مع كل جديد.",
  },
  en: {
    heroBadge: "Anime • Culture • Community",
    heroName: "Sulaiman Alharbi",
    heroLine1: "Every story starts with one viewer",
    heroLine2: "But the best stories are the ones that bring people together",
    tiktokLabel: "TikTok",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    snapchatLabel: "Snapchat",
    journeyLabel: "Journey",
    journeyHeading: "My journey into the world of anime",
    journeyItems: [
      { title: "Riyadh", description: "This is where my anime journey began and my passion grew." },
      { title: "Buraidah", description: "An important stop that included sessions, events, and an anime showcase." },
      { title: "Ar Rass", description: "Talks and meetups gathered people interested in anime culture." },
      { title: "Hail", description: "Reaching a new audience and sharing the passion in a new city." },
    ],
    journeyParagraph:
      "I started as an anime fan, then watching turned into conversations, and conversations turned into sessions, and sessions turned into a community that brings together anime lovers, visual culture, and storytelling. It wasn’t just about talking about shows, it was about understanding the ideas, values, characters, and stories that make them capable of moving people around the world.",
    charactersHeading: "Characters That Shaped Me",
    featuredSubtitle: "The Greatest",
    featuredTitle: "👑 Whitebeard",
    featuredText:
      "The strongest man in the world had a very simple dream: to have a family. This character changed the way I see society and belonging, and taught me that the greatest achievements are not always strength or fame, but the people who stand by you and who you stand by.",
    cards: [
      {
        title: "⚔️ Rayleigh",
        description:
          "Quiet wisdom. The character that taught me that experience doesn’t need noise, and that real impact comes from the knowledge you pass on to others.",
        image: "/rayleigh.jpg",
        alt: "Rayleigh",
      },
      {
        title: "🩸 Zaraki",
        description:
          "Power without the show. He doesn’t need a complicated ability to leave a mark, and what inspires me most is how he sets limits for himself to truly test his strength.",
        image: "/zaraki.jpg",
        alt: "Zaraki Kenpachi",
      },
      {
        title: "🔥 Might Guy",
        description:
          "Strength built by effort. Guy reminds me that those who underestimate your beginning do not see the years of training, and discipline can take you to a moment even the strongest respect.",
        image: "/might-guy.jpg",
        alt: "Might Guy",
      },
      {
        title: "☀️ Escanor",
        description:
          "Self-confidence is not arrogance, it is knowing your true value and not selling yourself short.",
        image: "/escanor.jpg",
        alt: "Escanor",
      },
    ],
    animeLabel: "Anime Outside the Screen",
    animeHeading: "When watching became a community",
    stats: [
      { value: "250+", label: "participants" },
      { value: "5", label: "sessions held" },
      { value: "2", label: "upcoming sessions" },
      { value: "4", label: "cities" },
    ],
    animeText:
      "The journey started from a personal love of anime, then turned into sessions and discussions that brought together people interested in stories, visual culture, and community. With every new event, I discovered that the best part is not what I say, but what happens after the session when conversations begin and relationships form.",
    sessionsLabel: "Featured Sessions",
    sessionsHeading: "Milestones from the journey",
    sessions: [
      "The manga journey from paper to screen",
      "How each of us sees the scene",
      "Anime between culture and art",
      "How anime changed the world",
      "The anime exhibition",
    ],
    communityLabel: "Moments from the community",
    communityHeading: "From idea to community",
    communityText:
      "Some moments when watching anime turned from a personal interest into sessions, events, and conversations that brought together people passionate about stories and visual culture.",
    partnersLabel: "Journey Partners",
    partnersHeading: "Organizations that believed in the idea",
    askLabel: "Ask freely",
    askHeading: "Have a question?",
    askText: "Ask without hesitation and without needing to identify yourself. I'm here to answer your questions and listen to your thoughts.",
    askPlaceholder: "Type your question here...",
    askButton: "Send Question",
    askNavLabel: "Ask",
    finalHeading: "The journey continues",
    finalText: "Thank you for being part of this journey. Follow me to stay updated.",
  },
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPath = (src: string) => `${basePath}${src}`;
const imageLoader = ({ src }: { src: string }) => `${basePath}${src}`;

function StaticImage(props: ComponentProps<typeof Image>) {
  return <Image unoptimized loader={imageLoader} {...props} />;
}

export default function Home() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const isRtl = language === "ar";
  const t = content[language];

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      lang={language}
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url('${assetPath('/Background.png')}')`,
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

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-24">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('${assetPath('/backgrounds/bg1.jpg')}')`,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_32%),linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.90)_78%,#000)]" />

        <div className="relative flex w-full max-w-5xl flex-col items-center">

          <StaticImage
            src={`${basePath}/profile/profile.png`}
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

          <div className="flex flex-wrap justify-center gap-3">

            <a
              href="https://www.tiktok.com/@isooly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 transition hover:bg-white hover:text-black"
            >
              <Music2 size={18} aria-hidden="true" />
              {t.tiktokLabel}
            </a>

            <a
              href="https://www.linkedin.com/in/sulimanalharbi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 transition hover:bg-white hover:text-black"
            >
              <BriefcaseBusiness size={18} aria-hidden="true" />
              {t.linkedinLabel}
            </a>

            <a
              href="https://www.instagram.com/isoolyx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 transition hover:bg-white hover:text-black"
            >
              <Share2 size={18} aria-hidden="true" />
              {t.instagramLabel}
            </a>

            <a
              href="https://www.snapchat.com/add/iisooly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 transition hover:bg-white hover:text-black"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {t.snapchatLabel}
            </a>

          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section
        className="relative z-10 bg-zinc-950 px-4 py-24 text-start sm:px-6 sm:py-28"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-5xl">

          <p className="mb-4 text-sm text-zinc-500">
            {t.journeyLabel}
          </p>

          <h2 className="mb-10 text-4xl font-bold md:text-6xl">
            {t.journeyHeading}
          </h2>

          <div className="my-14 grid gap-5 md:grid-cols-2">
            {t.journeyItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="max-w-3xl text-xl leading-relaxed text-zinc-300">
            {t.journeyParagraph}
          </p>

        </div>
      </section>

      {/* Characters Section */}
      <section
        className="bg-zinc-950 px-4 py-24 text-start sm:px-6 sm:py-28"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="mb-10 text-4xl font-bold text-white md:text-5xl">
            {t.charactersHeading}
          </h2>

          <div className="grid gap-6">

            <div className="grid overflow-hidden rounded-2xl border border-white/25 bg-zinc-900 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-white lg:grid-cols-[1.05fr_0.95fr]">

              <div className="flex min-h-[420px] items-center justify-center bg-white lg:min-h-[560px]">
                <StaticImage
                  src={`${basePath}/whitebeard-feature.png`}
                  alt={t.featuredTitle}
                  width={1355}
                  height={1161}
                  className="h-full max-h-[560px] w-full scale-110 object-contain"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-12">

                <p className="mb-4 text-sm text-zinc-500">{t.featuredSubtitle}</p>
                <h3 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t.featuredTitle}</h3>
                <p className="text-xl leading-relaxed text-zinc-200">
                  {t.featuredText}
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.cards.map((card) => (
                <div key={card.title} className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.30)]">
                  <div className="flex h-44 items-center justify-center overflow-hidden bg-white lg:h-48">
                    <StaticImage
                      src={card.image}
                      alt={card.alt}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-4 text-2xl font-bold text-white">{card.title}</h3>
                    <p className="text-base leading-8 text-zinc-200">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anime Outside the Screen Section */}
      <section
        className="bg-black px-4 py-20 text-center sm:px-6 sm:py-28"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm text-zinc-500">{t.animeLabel}</p>
          <h2 className="mb-16 text-5xl font-bold text-white md:text-6xl">{t.animeHeading}</h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-6xl font-bold text-white">{stat.value}</h3>
                <p className="mt-3 text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <p className="text-xl leading-relaxed text-zinc-300">{t.animeText}</p>
          </div>
        </div>
      </section>

      {/* Featured Sessions Section */}
      <section
        className="bg-zinc-950 px-4 py-24 text-start sm:px-6 sm:py-28"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm text-zinc-500">{t.sessionsLabel}</p>
          <h2 className="mb-16 text-5xl font-bold text-white md:text-6xl">{t.sessionsHeading}</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {t.sessions.map((sessionTitle) => (
              <div key={sessionTitle} className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition-transform duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <h3 className="text-2xl font-bold text-white">{sessionTitle}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments From the Community Section */}
      <section
        className="bg-black px-4 py-24 text-start sm:px-6 sm:py-28"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm text-zinc-500">{t.communityLabel}</p>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t.communityHeading}</h2>
          <p className="mb-16 max-w-3xl text-lg leading-8 text-zinc-300">{t.communityText}</p>

          <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[190px]">
            <StaticImage
              src={`${basePath}/event1.jpg`}
              alt={language === "en" ? "Event 1" : "Event 1"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover md:col-span-2 md:row-span-2"
            />
            <StaticImage
              src={`${basePath}/event2.jpg`}
              alt={language === "en" ? "Event 2" : "Event 2"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover"
            />
            <StaticImage
              src={`${basePath}/event3.jpg`}
              alt={language === "en" ? "Event 3" : "Event 3"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover"
            />
            <StaticImage
              src={`${basePath}/event4.jpg`}
              alt={language === "en" ? "Event 4" : "Event 4"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover md:row-span-2"
            />
            <StaticImage
              src={`${basePath}/event5.jpg`}
              alt={language === "en" ? "Event 5" : "Event 5"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover"
            />
            <StaticImage
              src={`${basePath}/event6.jpg`}
              alt={language === "en" ? "Event 6" : "Event 6"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover md:col-span-2"
            />
            <StaticImage
              src={`${basePath}/event7.jpg`}
              alt={language === "en" ? "Event 7" : "Event 7"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover"
            />
            <StaticImage
              src={`${basePath}/event8.jpg`}
              alt={language === "en" ? "Event 8" : "Event 8"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover"
            />
            <StaticImage
              src={`${basePath}/event9.jpg`}
              alt={language === "en" ? "Event 9" : "Event 9"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover md:col-span-2"
            />
            <StaticImage
              src={`${basePath}/event10.jpg`}
              alt={language === "en" ? "Event 10" : "Event 10"}
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        className="bg-zinc-950 px-4 py-24 text-start sm:px-6 sm:py-28"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm text-zinc-500">{t.partnersLabel}</p>
          <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">{t.partnersHeading}</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition-transform duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <StaticImage
                src={`${basePath}/logos/baseer/baseer.png`}
                alt={language === "en" ? "Baseer" : "بصير"}
                width={180}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-white">
              <StaticImage
                src={`${basePath}/logos/literary-partner.png`}
                alt={language === "en" ? "Literary Partner" : "الشريك الأدبي"}
                width={180}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-white">
              <StaticImage
                src={`${basePath}/logos/bonchai.png`}
                alt="Bonchai"
                width={180}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-white">
              <StaticImage
                src={`${basePath}/logos/bash/bash.png`}
                alt="Bash"
                width={180}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-white">
              <StaticImage
                src={`${basePath}/logos/culture-house.png`}
                alt={language === "en" ? "Culture House" : "بيت الثقافة"}
                width={180}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ask Me Section */}
      <section
        id="ask"
        className="bg-zinc-950 px-4 py-24 text-start sm:px-6 sm:py-28"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm text-zinc-500">{t.askLabel}</p>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t.askHeading}</h2>
          <p className="mb-12 max-w-2xl text-lg leading-8 text-zinc-300">{t.askText}</p>

          <form
            action="https://formspree.io/f/mqazvqkr"
            method="POST"
            className="space-y-6"
          >
            <div>
              <textarea
                name="message"
                placeholder={t.askPlaceholder}
                required
                className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4 text-white placeholder-zinc-500 transition focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                rows={6}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              {t.askButton}
            </button>
          </form>
        </div>
      </section>

      {/* Final Section */}
      <section
        className="bg-black px-4 py-24 text-center sm:px-6 sm:py-28"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-4xl">

          <h2 className="mb-8 text-4xl font-bold text-white">{t.finalHeading}</h2>
          <p className="mb-12 text-lg text-zinc-300">{t.finalText}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/sulimanalharbi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-white transition hover:bg-white hover:text-black"
            >
              <BriefcaseBusiness size={18} aria-hidden="true" />
              {t.linkedinLabel}
            </a>
            <a
              href="https://www.instagram.com/isoolyx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-white transition hover:bg-white hover:text-black"
            >
              <Share2 size={18} aria-hidden="true" />
              {t.instagramLabel}
            </a>
            <a
              href="https://www.snapchat.com/add/iisooly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-white transition hover:bg-white hover:text-black"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {t.snapchatLabel}
            </a>
            <a
              href="https://www.tiktok.com/@isooly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-white transition hover:bg-white hover:text-black"
            >
              <Music2 size={18} aria-hidden="true" />
              {t.tiktokLabel}
            </a>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}

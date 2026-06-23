export type Lang = "ar" | "en";

export type Content = {
  heroBadge: string;
  heroName: string;
  heroLine1: string;
  heroLine2: string;
  tiktokLabel: string;
  linkedinLabel: string;
  instagramLabel: string;
  snapchatLabel: string;
  journeyLabel: string;
  journeyHeading: string;
  journeyItems: { title: string; description: string }[];
  journeyParagraph: string;
  charactersHeading: string;
  featuredSubtitle: string;
  featuredTitle: string;
  featuredText: string;
  cards: { title: string; description: string; image: string; alt: string }[];
  animeLabel: string;
  animeHeading: string;
  stats: { value: string; label: string }[];
  animeText: string;
  sessionsLabel: string;
  sessionsHeading: string;
  sessions: string[];
  communityLabel: string;
  communityHeading: string;
  communityText: string;
  partnersLabel: string;
  partnersHeading: string;
  askLabel: string;
  askHeading: string;
  askText: string;
  askPlaceholder: string;
  askButton: string;
  askNavLabel: string;
  askSuccess: string;
  askError: string;
  contactLabel: string;
  contactPlaceholder: string;
  qandaLabel: string;
  qandaHeading: string;
  finalHeading: string;
  finalText: string;
};

export const content: Record<Lang, Content> = {
  ar: {
    heroBadge: "الأنمي • الثقافة • بناء المجتمع",
    heroName: "سليمان الحربي",
    heroLine1: "كل قصة تبدأ بمشاهد واحد",
    heroLine2: "لكن أجمل القصص هي التي تجمع الناس حولها",
    tiktokLabel: "تيك توك",
    linkedinLabel: "لينكد إن",
    instagramLabel: "إنستغرام",
    snapchatLabel: "سناب شات",
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
    askSuccess: "وصل سؤالك، شكراً!",
    askError: "حدث خطأ، حاول مرة أخرى.",
    contactLabel: "كيف أتواصل معك؟ (اختياري)",
    contactPlaceholder: "إنستغرام، تيليغرام، أو إيميل...",
    qandaLabel: "أسئلة وأجوبة",
    qandaHeading: "أسئلة أجبت عليها",
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
      "I started as an anime fan, then watching turned into conversations, and conversations turned into sessions, and sessions turned into a community that brings together anime lovers, visual culture, and storytelling. It wasn't just about talking about shows, it was about understanding the ideas, values, characters, and stories that make them capable of moving people around the world.",
    charactersHeading: "Characters That Shaped Me",
    featuredSubtitle: "The Greatest",
    featuredTitle: "👑 Whitebeard",
    featuredText:
      "The strongest man in the world had a very simple dream: to have a family. This character changed the way I see society and belonging, and taught me that the greatest achievements are not always strength or fame, but the people who stand by you and who you stand by.",
    cards: [
      {
        title: "⚔️ Rayleigh",
        description:
          "Quiet wisdom. The character that taught me that experience doesn't need noise, and that real impact comes from the knowledge you pass on to others.",
        image: "/rayleigh.jpg",
        alt: "Rayleigh",
      },
      {
        title: "🩸 Zaraki",
        description:
          "Power without the show. He doesn't need a complicated ability to leave a mark, and what inspires me most is how he sets limits for himself to truly test his strength.",
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
    askSuccess: "Your question was sent, thank you!",
    askError: "Something went wrong, please try again.",
    contactLabel: "How can I reach you? (optional)",
    contactPlaceholder: "Instagram, Telegram, or email...",
    qandaLabel: "Q&A",
    qandaHeading: "Questions I've answered",
    finalHeading: "The journey continues",
    finalText: "Thank you for being part of this journey. Follow me to stay updated.",
  },
};

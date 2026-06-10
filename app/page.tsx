import Image from "next/image";
import { BriefcaseBusiness, Music2 } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: "url('/backgrounds/bg1.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_32%),linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.90)_78%,#000)]" />

        <div className="relative flex w-full max-w-5xl flex-col items-center">

        <Image
          src="/profile/profile.png"
          alt="Sulaiman Alharbi"
          width={260}
          height={260}
          priority
          className="mb-8 h-52 w-52 rounded-full border border-white/30 object-cover shadow-2xl shadow-black/60 md:h-64 md:w-64"
        />

        <p className="mb-4 rounded-full border border-white/15 bg-black/35 px-5 py-2 text-sm text-zinc-300 backdrop-blur-sm">
          الأنمي • الثقافة • بناء المجتمع
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-normal md:text-7xl">
          سليمان الحربي
        </h1>

        <p className="mb-8 max-w-xl text-xl text-zinc-300">
         كل قصة تبدأ بمشاهد واحد
        </p>

        <p className="mb-12 max-w-2xl text-zinc-400">
          لكن أجمل القصص

هي التي تجمع الناس حولها
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="https://www.tiktok.com/@isooly"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 transition hover:bg-white hover:text-black"
          >
            <Music2 size={18} aria-hidden="true" />
            TikTok
          </a>

          <a
            href="https://www.linkedin.com/in/sulimanalharbi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3 transition hover:bg-white hover:text-black"
          >
            <BriefcaseBusiness size={18} aria-hidden="true" />
            LinkedIn
          </a>

        </div>

        </div>

      </section>

      {/* Journey Section */}
      <section
        className="relative z-10 bg-zinc-950 px-6 py-32 text-right"
        dir="rtl"
      >
        <div className="mx-auto max-w-5xl">

          <p className="mb-4 text-sm  text-zinc-500">
            بداية الرحلة
          </p>

          <h2 className="mb-10 text-4xl font-bold md:text-6xl">
            رحلتي مع عالم الأنمي
          </h2>

          <div className="my-14 grid gap-5 md:grid-cols-2">

            <div className="border-r border-white/20 bg-black/25 p-6">
              <h3 className="text-2xl font-bold text-white">
                الرياض
              </h3>
              <p className="mt-2 text-zinc-400">
                هنا بدأت رحلتي مع الأنمي والقصص التي صنعت شغفي.
              </p>
            </div>

            <div className="border-r border-white/20 bg-black/25 p-6">
              <h3 className="text-2xl font-bold text-white">
                مدينة بريدة
              </h3>
              <p className="mt-2 text-zinc-400">
                محطة مهمة تضمنت جلسات وفعاليات ومعرض الأنمي.
              </p>
            </div>

            <div className="border-r border-white/20 bg-black/25 p-6">
              <h3 className="text-2xl font-bold text-white">
                الرس
              </h3>
              <p className="mt-2 text-zinc-400">
                لقاءات ونقاشات جمعت المهتمين بعالم الأنمي.
              </p>
            </div>

            <div className="border-r border-white/20 bg-black/25 p-6">
              <h3 className="text-2xl font-bold text-white">
                حائل
              </h3>
              <p className="mt-2 text-zinc-400">
                الوصول إلى جمهور جديد ومشاركة الشغف في مدينة جديدة.
              </p>
            </div>

          </div>

          <p className="max-w-3xl text-xl leading-relaxed text-zinc-300">

            بدأت كمتابع للأنمي، ثم تحولت المشاهدة إلى نقاشات،
            وتحولت النقاشات إلى جلسات، وتحولت الجلسات إلى مجتمع
            يجمع المهتمين بالأنمي والثقافة البصرية ورواية القصص.

            <br />
            <br />

            لم يكن الهدف الحديث عن الأعمال فقط،
            بل فهم الأفكار والقيم والشخصيات والقصص التي تجعل
            هذه الأعمال قادرة على التأثير في الناس حول العالم.

          </p>

        </div>
      </section>

      {/* Characters Section */}
      <section
        className="bg-zinc-950 px-6 py-32 text-right"
        dir="rtl"
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="mb-10 text-4xl font-bold text-white md:text-5xl">
            الشخصيات التي شكّلتني
          </h2>

          <div className="grid gap-6">

            <div className="grid overflow-hidden rounded-2xl border border-white/25 bg-zinc-900 shadow-2xl shadow-black/30 transition duration-300 hover:border-white lg:grid-cols-[1.05fr_0.95fr]">

              <div className="flex min-h-[420px] items-center justify-center bg-white lg:min-h-[560px]">
                <Image
                  src="/whitebeard-feature.png"
                  alt="Whitebeard"
                  width={1355}
                  height={1161}
                  className="h-full max-h-[560px] w-full scale-110 object-contain"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-12">

                <p className="mb-4 text-sm text-zinc-500">
                  الأعظم
                </p>

                <h3 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                  👑 اللحية البيضاء
                </h3>

                <p className="text-xl leading-10 text-zinc-200">
                  أقوى رجل في العالم كان حلمه بسيطاً جداً:
                  أن يملك عائلة.
                  هذه الشخصية غيّرت نظرتي لمعنى المجتمع والانتماء،
                  وأن أعظم الإنجازات ليست دائماً القوة أو الشهرة،
                  بل الأشخاص الذين تقف معهم ويقفون معك.
                </p>

              </div>

            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition duration-300 hover:border-white">

              <div className="flex h-44 items-center justify-center overflow-hidden bg-white lg:h-48">
              <Image
                src="/rayleigh.jpg"
                alt="Rayleigh"
                width={800}
                height={500}
                className="h-full w-full object-cover object-center"
              />
              </div>

              <div className="p-6">

                <h3 className="mb-4 text-2xl font-bold text-white">
                  ⚔️ ريلي
                </h3>

                <p className="text-base leading-8 text-zinc-200">
                  الحكمة الهادئة.
                  الشخصية التي علمتني أن الخبرة لا تحتاج إلى ضجيج،
                  وأن التأثير الحقيقي يأتي من المعرفة التي تنقلها للآخرين.
                </p>

              </div>

            </div>

            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition duration-300 hover:border-white">

              <div className="flex h-44 items-center justify-center overflow-hidden bg-white lg:h-48">
              <Image
                src="/zaraki.jpg"
                alt="Zaraki Kenpachi"
                width={800}
                height={500}
                className="h-full w-full object-cover object-[center_42%]"
              />
              </div>

              <div className="p-6">

                <h3 className="mb-4 text-2xl font-bold text-white">
                  🩸 زاراكي
                </h3>

                <p className="text-base leading-8 text-zinc-200">
                  القوة بلا ضجيج.
                  لا يحتاج إلى قدرة معقدة ليترك أثره،
                  وأكثر ما يلهمني فيه أنه يضع حدوداً على نفسه
                  حتى يختبر قوته بصدق.
                </p>

              </div>

            </div>

            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition duration-300 hover:border-white">

              <div className="flex h-44 items-center justify-center overflow-hidden bg-white lg:h-48">
              <Image
                src="/might-guy.jpg"
                alt="Might Guy"
                width={800}
                height={500}
                className="h-full w-full object-cover object-[center_22%]"
              />
              </div>

              <div className="p-6">

                <h3 className="mb-4 text-2xl font-bold text-white">
                  🔥 غاي
                </h3>

                <p className="text-base leading-8 text-zinc-200">
                  قوة صنعتها المحاولة.
                  غاي يذكرني أن من يستهينون ببدايتك لا يرون سنوات التدريب،
                  وأن الانضباط قد يصل بصاحبه إلى لحظة يعترف بها الأقوى.
                </p>

              </div>

            </div>

            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition duration-300 hover:border-white">

              <div className="flex h-44 items-center justify-center overflow-hidden bg-white lg:h-48">
              <Image
                src="/escanor.jpg"
                alt="Escanor"
                width={800}
                height={500}
                className="h-full w-full object-cover object-center"
              />
              </div>

              <div className="p-6">

                <h3 className="mb-4 text-2xl font-bold text-white">
                  ☀️ إيسكانور
                </h3>

                <p className="text-base leading-8 text-zinc-200">
                  الثقة بالنفس لا تعني الغرور،
                  بل معرفة قيمتك الحقيقية وعدم التقليل من نفسك.
                </p>

              </div>

            </div>

            </div>

          </div>

        </div>
      </section>

      {/* Anime Outside the Screen Section */}
      <section
        className="bg-black px-6 py-32 text-center"
        dir="rtl"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm  text-zinc-500">
            الأنمي خارج الشاشة
          </p>

          <h2 className="mb-16 text-5xl font-bold text-white md:text-6xl">
            عندما تحولت المشاهدة إلى مجتمع
          </h2>

          <div className="grid gap-10 md:grid-cols-4">

            <div>
              <h3 className="text-6xl font-bold text-white">
                250+
              </h3>
              <p className="mt-3 text-zinc-400">
                مشارك
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-bold text-white">
                5
              </h3>
              <p className="mt-3 text-zinc-400">
                جلسات منفذة
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-bold text-white">
                2
              </h3>
              <p className="mt-3 text-zinc-400">
                جلسات قادمة
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-bold text-white">
                4
              </h3>
              <p className="mt-3 text-zinc-400">
                مدن
              </p>
            </div>

          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <p className="text-xl leading-relaxed text-zinc-300">
              بدأت الرحلة من حب شخصي للأنمي، ثم تحولت إلى جلسات ونقاشات
              ولقاءات جمعت المهتمين بعالم الأنمي والثقافة البصرية ورواية القصص.
              ومع كل فعالية جديدة أكتشف أن أجمل جزء ليس ما أقوله، بل ما يحدث
              بعد انتهاء الجلسة عندما تبدأ الحوارات وتتشكل العلاقات بين الحضور.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Sessions Section */}
      <section
        className="bg-zinc-950 px-6 py-32 text-right"
        dir="rtl"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm  text-zinc-500">
            أبرز الجلسات
          </p>

          <h2 className="mb-16 text-5xl font-bold text-white md:text-6xl">
            محطات من الرحلة
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8">
              <h3 className="text-2xl font-bold text-white">
                رحلة المانجا من الورق إلى الشاشة
              </h3>
            </div>

            <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8">
              <h3 className="text-2xl font-bold text-white">
                كيف يرى كل منا المشهد؟
              </h3>
            </div>

            <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8">
              <h3 className="text-2xl font-bold text-white">
                الأنمي بين الثقافة والفن
              </h3>
            </div>

            <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8">
              <h3 className="text-2xl font-bold text-white">
                كيف غيّر الأنمي العالم؟
              </h3>
            </div>

            <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8 md:col-span-2">
              <h3 className="text-2xl font-bold text-white">
                معرض الأنمي
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Moments From the Community Section */}
      <section
        className="bg-black px-6 py-32 text-right"
        dir="rtl"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm  text-zinc-500">
            لحظات من المجتمع
          </p>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            من الفكرة إلى المجتمع
          </h2>

          <p className="mb-16 max-w-3xl text-lg leading-8 text-zinc-300">
            بعض اللحظات التي تحولت فيها مشاهدة الأنمي من اهتمام شخصي
            إلى جلسات وفعاليات وحوارات جمعت المهتمين بالقصص والثقافة البصرية.
          </p>

          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[190px]">

            <Image
              src="/event1.jpg"
              alt="Event 1"
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover md:col-span-2 md:row-span-2"
            />

            <Image
              src="/event2.jpg"
              alt="Event 2"
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover"
            />

            <Image
              src="/event3.jpg"
              alt="Event 3"
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover"
            />

            <Image
              src="/event4.jpg"
              alt="Event 4"
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover md:row-span-2"
            />

            <Image
              src="/event5.jpg"
              alt="Event 5"
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover"
            />

            <Image
              src="/event6.jpg"
              alt="Event 6"
              width={800}
              height={600}
              className="h-full w-full rounded-2xl border border-white/10 object-cover md:col-span-2"
            />

          </div>

        </div>
      </section>

      {/* Partners Section */}
      <section
        className="bg-zinc-950 px-6 py-32 text-right"
        dir="rtl"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm  text-zinc-500">
            شركاء الرحلة
          </p>

          <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
            جهات آمنت بالفكرة
          </h2>

          <div className="grid gap-6 md:grid-cols-5">

  <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-white">
    <Image
      src="/logos/baseer/baseer.png"
      alt="بصير"
      width={180}
      height={80}
      className="h-14 w-auto object-contain"
    />
  </div>

  <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-white">
    <Image
      src="/logos/literary-partner.png"
      alt="الشريك الأدبي"
      width={180}
      height={80}
      className="h-14 w-auto object-contain"
    />
  </div>

  <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-white">
    <Image
      src="/logos/bonchai.png"
      alt="Bonchai"
      width={180}
      height={80}
      className="h-14 w-auto object-contain"
    />
  </div>

  <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-white">
    <Image
      src="/logos/bash/bash.png"
      alt="Bash"
      width={180}
      height={80}
      className="h-14 w-auto object-contain"
    />
  </div>

  <div className="flex items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-white">
    <Image
      src="/logos/culture-house.png"
      alt="بيت الثقافة"
      width={180}
      height={80}
      className="h-14 w-auto object-contain"
    />
  </div>

</div>

        </div>
      </section>

      {/* Final Section */}
      <section
        className="bg-black px-6 py-32 text-center"
        dir="rtl"
      >
        <div className="mx-auto max-w-4xl">

          <h2 className="mb-8 text-4xl font-bold text-white">
            والرحلة مستمرة
          </h2>

          <p className="mb-12 text-lg text-zinc-300">
            شكراً لكونكم جزءاً من هذه الرحلة. تابعوني لتكونوا مع كل جديد.
          </p>

          <div className="flex justify-center gap-6">

            <a
              href="https://www.linkedin.com/in/sulimanalharbi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-white transition hover:bg-white hover:text-black"
            >
              <BriefcaseBusiness size={18} aria-hidden="true" />
              LinkedIn
            </a>

            <a
              href="https://www.tiktok.com/@isooly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-white transition hover:bg-white hover:text-black"
            >
              <Music2 size={18} aria-hidden="true" />
              TikTok
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

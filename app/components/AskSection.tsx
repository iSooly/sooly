"use client";

import { useState } from "react";
import type { Content } from "../content";
import ChapterLabel from "./ChapterLabel";

type Props = { t: Content; isRtl: boolean };
type FormState = "idle" | "submitting" | "success" | "error";

const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID;

export default function AskSection({ t, isRtl }: Props) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = (formData.get("message") as string).trim();
    const contact = (formData.get("contact") as string).trim();

    const contactLine = contact ? `\n\n📬 للتواصل: ${contact}` : "";

    try {
      const telegramRes = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `📩 سؤال جديد من موقعك:\n\n${message}${contactLine}`,
          }),
        }
      );

      if (AIRTABLE_TOKEN && AIRTABLE_BASE_ID && AIRTABLE_TABLE_ID) {
        fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          },
          body: JSON.stringify({
            records: [{ fields: { Question: message, Contact: contact, Published: false } }],
          }),
        }).catch(() => {});
      }

      if (telegramRes.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section
      id="ask"
      className="bg-zinc-950 px-4 py-16 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-3xl">
        <ChapterLabel number="08" label={t.askLabel} />
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t.askHeading}</h2>
        <p className="mb-10 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">{t.askText}</p>

        {state === "success" ? (
          <div className="rounded-2xl border border-red-600/30 bg-red-950/20 px-6 py-5 text-base text-red-300">
            {t.askSuccess}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              name="message"
              placeholder={t.askPlaceholder}
              required
              rows={5}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white placeholder-zinc-600 transition focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
            <input
              name="contact"
              type="text"
              placeholder={t.contactPlaceholder}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white placeholder-zinc-600 transition focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20"
            />
            <p className="text-xs text-zinc-600">{t.contactLabel}</p>
            {state === "error" && (
              <p className="text-sm text-red-400">{t.askError}</p>
            )}
            <button
              type="submit"
              disabled={state === "submitting"}
              className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-full bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-500 disabled:opacity-60"
            >
              {t.askButton}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

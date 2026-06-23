"use client";

import { useState } from "react";
import type { Content } from "../content";

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
      className="bg-zinc-950 px-4 py-24 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm text-zinc-500">{t.askLabel}</p>
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t.askHeading}</h2>
        <p className="mb-12 max-w-2xl text-lg leading-8 text-zinc-300">{t.askText}</p>

        {state === "success" ? (
          <p className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-lg text-white">
            {t.askSuccess}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              name="message"
              placeholder={t.askPlaceholder}
              required
              rows={6}
              className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4 text-white placeholder-zinc-500 transition focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <input
              name="contact"
              type="text"
              placeholder={t.contactPlaceholder}
              className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4 text-white placeholder-zinc-500 transition focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <p className="text-xs text-zinc-600">{t.contactLabel}</p>
            {state === "error" && (
              <p className="text-sm text-red-400">{t.askError}</p>
            )}
            <button
              type="submit"
              disabled={state === "submitting"}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-60"
            >
              {t.askButton}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

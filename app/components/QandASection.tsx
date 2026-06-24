"use client";

import { useEffect, useState } from "react";
import type { Content } from "../content";
import ChapterLabel from "./ChapterLabel";

type QARecord = {
  id: string;
  fields: { Question: string; Answer: string };
};

const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID;

type Props = { t: Content; isRtl: boolean };

export default function QandASection({ t, isRtl }: Props) {
  const [records, setRecords] = useState<QARecord[]>([]);

  useEffect(() => {
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_ID) return;

    const url = new URL(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`);
    url.searchParams.set("filterByFormula", "AND({Published}=TRUE(),{Answer}!='')");
    url.searchParams.append("fields[]", "Question");
    url.searchParams.append("fields[]", "Answer");

    fetch(url.toString(), {
      headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` },
    })
      .then((r) => r.json())
      .then((data) => setRecords(data.records ?? []))
      .catch(() => {});
  }, []);

  if (records.length === 0) return null;

  return (
    <section
      className="bg-black px-4 py-16 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-3xl">
        <ChapterLabel number="07" label={t.qandaLabel} />
        <h2 className="mb-10 text-4xl font-bold text-white md:text-5xl">{t.qandaHeading}</h2>

        <div className="space-y-4">
          {records.map((record) => (
            <div
              key={record.id}
              className="rounded-2xl border border-white/8 bg-white/4 p-6 transition hover:border-white/15"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="mt-0.5 shrink-0 rounded-full bg-red-600 px-2.5 py-0.5 text-xs font-bold text-white">Q</span>
                <p className="font-semibold text-white leading-relaxed">{record.fields.Question}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 rounded-full bg-zinc-700 px-2.5 py-0.5 text-xs font-bold text-zinc-300">A</span>
                <p className="text-zinc-300 leading-relaxed">{record.fields.Answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

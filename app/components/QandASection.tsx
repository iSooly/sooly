"use client";

import { useEffect, useState } from "react";
import type { Content } from "../content";

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
      className="bg-black px-4 py-24 text-start sm:px-6 sm:py-28"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm text-zinc-500">{t.qandaLabel}</p>
        <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">{t.qandaHeading}</h2>

        <div className="space-y-5">
          {records.map((record) => (
            <div
              key={record.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
            >
              <p className="mb-4 font-semibold text-white">{record.fields.Question}</p>
              <p className="leading-relaxed text-zinc-300">{record.fields.Answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

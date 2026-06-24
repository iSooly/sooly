type Props = { number: string; label: string };

export default function ChapterLabel({ number, label }: Props) {
  return (
    <div className="mb-5 flex items-center gap-2">
      <span className="font-black text-red-600/40 text-xs tabular-nums">{number}</span>
      <div className="h-px w-4 bg-red-600/30" />
      <span className="text-xs font-semibold text-red-500">{label}</span>
    </div>
  );
}

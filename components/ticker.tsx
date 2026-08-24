import { SETS } from "@/lib/sets";

export default function Ticker() {
  const latest = SETS[0];
  const line = latest
    ? `Fresh on the platter: ${latest.title} (${latest.style}, ${latest.length}).`
    : "The booth is warming up. First recordings land here soon.";

  return (
    <div className="ticker pinstripe">
      <div className="shell flex items-center gap-3 py-[7px]">
        <span className="ticker-label">Now playing</span>
        <p className="truncate text-[11px]" style={{ color: "var(--mist)" }}>
          {line}{" "}
          <a href="#sets" className="whitespace-nowrap">
            Go to the set list &raquo;
          </a>
        </p>
      </div>
    </div>
  );
}

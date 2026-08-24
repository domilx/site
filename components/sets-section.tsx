"use client";

import { useState } from "react";
import type { DjSet, SetMedia } from "@/lib/sets";

function Player({ media, title }: { media: SetMedia; title: string }) {
  switch (media.kind) {
    case "audio":
      return <audio controls preload="none" src={media.src} />;
    case "video":
      return <video controls preload="metadata" src={media.src} />;
    case "youtube":
      return (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${media.id}`}
          title={title}
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
      );
    case "soundcloud":
      return (
        <iframe
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            media.url
          )}&color=%232f96cf&show_teaser=false`}
          title={title}
          style={{ aspectRatio: "auto", height: 166 }}
          allow="encrypted-media"
        />
      );
  }
}

function PlayGlyph({ open }: { open: boolean }) {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true">
      {open ? (
        <g fill="#fff">
          <rect x="2" y="1.5" width="2.6" height="8" rx="0.8" />
          <rect x="6.4" y="1.5" width="2.6" height="8" rx="0.8" />
        </g>
      ) : (
        <path d="M2.5 1.2 L9.5 5.5 L2.5 9.8 Z" fill="#fff" />
      )}
    </svg>
  );
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function SetsSection({ sets }: { sets: DjSet[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sets" className="shell scroll-mt-6 py-16 md:py-20">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="display text-[clamp(2rem,4.5vw,2.6rem)]">
          The set list.
        </h2>
        <p className="text-[11px]" style={{ color: "var(--ghost)" }}>
          Audio &amp; video &middot; updated when the night goes well
        </p>
      </div>

      <div className="setlist">
        {sets.length > 0 && (
          <div className="setlist-head">
            <span />
            <span>Title</span>
            <span className="setlist-col-style">Style</span>
            <span>Length</span>
            <span className="setlist-col-date">Recorded</span>
          </div>
        )}

        {sets.length === 0 ? (
          <div className="pinstripe flex flex-col items-center gap-3 px-6 py-12 text-center">
            <span className="tab-mark" style={{ width: 22, height: 22 }} />
            <p className="text-[13px]" style={{ color: "var(--mist)" }}>
              Nothing on the platter yet.
            </p>
            <p
              className="max-w-[40ch] text-[11px]"
              style={{ color: "var(--ghost)" }}
            >
              I&rsquo;ll put the first one up as soon as it&rsquo;s recorded.
              It will play right here.
            </p>
          </div>
        ) : (
          sets.map((s, i) => {
            const open = openIndex === i;
            return (
              <div key={`${s.title}-${s.date}`}>
                <button
                  type="button"
                  className={`setlist-row${open ? " is-open" : ""}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="gel gel--play" aria-hidden="true">
                    <PlayGlyph open={open} />
                  </span>
                  <span className="truncate font-bold">{s.title}</span>
                  <span
                    className="setlist-col-style truncate text-[11px]"
                    style={{ color: "var(--mist)" }}
                  >
                    {s.style}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--mist)" }}
                  >
                    {s.length}
                  </span>
                  <span
                    className="setlist-col-date text-[11px]"
                    style={{ color: "var(--ghost)" }}
                  >
                    {formatDate(s.date)}
                  </span>
                </button>
                {open && (
                  <div className="setlist-tray pinstripe">
                    <Player media={s.media} title={s.title} />
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

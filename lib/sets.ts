/**
 * The set list. Add an entry here and the site does the rest.
 *
 * Media options:
 *   { kind: "audio", src: "/sets/my-set.mp3" }        (drop the file in public/sets/)
 *   { kind: "video", src: "/sets/my-set.mp4" }        (drop the file in public/sets/)
 *   { kind: "youtube", id: "dQw4w9WgXcQ" }            (the video id from the URL)
 *   { kind: "soundcloud", url: "https://soundcloud.com/you/your-set" }
 */

export type SetMedia =
  | { kind: "audio"; src: string }
  | { kind: "video"; src: string }
  | { kind: "youtube"; id: string }
  | { kind: "soundcloud"; url: string };

export type DjSet = {
  title: string;
  date: string; // ISO, e.g. "2026-08-30"
  style: string; // short label, e.g. "warm-up", "peak time", "all vinyl"
  length: string; // "1:02:45"
  media: SetMedia;
};

export const SETS: DjSet[] = [
  // Example: uncomment and edit once the first recording is ready.
  // {
  //   title: "Basement Tape 001",
  //   date: "2026-09-01",
  //   style: "late night",
  //   length: "1:14:20",
  //   media: { kind: "audio", src: "/sets/basement-tape-001.mp3" },
  // },
];

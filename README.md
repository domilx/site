# domidev

The personal site of Domenico Valentino: software, hardware, and DJ sets.
A fully static one-pager built with Next.js (`output: "export"`).

## Develop

```bash
npm run dev
```

## Build (static)

```bash
npm run build
```

The exported site lands in `out/`.

## Posting a set

1. Drop the recording in `public/sets/` (e.g. `public/sets/basement-tape-001.mp3`).
   YouTube and SoundCloud links work too, no file needed.
2. Add an entry to `SETS` in [`lib/sets.ts`](lib/sets.ts):

```ts
{
  title: "Basement Tape 001",
  date: "2026-09-01",
  style: "late night",
  length: "1:14:20",
  media: { kind: "audio", src: "/sets/basement-tape-001.mp3" },
  // or: media: { kind: "video", src: "/sets/basement-tape-001.mp4" },
  // or: media: { kind: "youtube", id: "abc123xyz" },
  // or: media: { kind: "soundcloud", url: "https://soundcloud.com/…" },
}
```

3. Commit and push. Newest entry first: the top of the list feeds the
   "Now playing" ticker.

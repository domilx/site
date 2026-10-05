# domidev

The engineering portfolio of Domenico Valentino: software, embedded systems,
robotics, and audio. The site highlights OverCue, FIRST Robotics, Kaskaraa
Instruments and a working 6502 computer, alongside McGill and Apple experience.
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

## Portfolio content

- Project summaries and contribution details: `components/promo-grid.tsx`
- Education, Apple and teaching experience: `components/about-section.tsx`
- Intro and CV links: `components/hero.tsx`
- Downloadable CVs: `public/cv/`
- Search and social metadata: `app/layout.tsx`

Keep confidential project methods and partner details out of the public copy.
Updating a CV means replacing its PDF in `public/cv/`.

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

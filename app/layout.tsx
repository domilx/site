import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://domidev.net"),
  alternates: { canonical: "/" },
  title: {
    default: "Domenico Valentino | Software, Embedded Systems & Robotics",
    template: "%s · Domenico Valentino",
  },
  description:
    "McGill Computer Engineering student building software for DJ equipment, competition robots and lab instruments. OverCue, FIRST Robotics and Kaskaraa Instruments.",
  openGraph: {
    title: "Domenico Valentino | Software, Embedded Systems & Robotics",
    description:
      "Software for DJ equipment, robots and lab instruments. McGill Computer Engineering. Montréal.",
    url: "https://domidev.net",
    type: "website",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Domenico Valentino. Software for DJ equipment, robots and lab instruments.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import BlurFade from "@/components/blur-fade";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://domidev.net"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Domenico Valentino",
    template: "%s | Domenico Valentino",
  },
  description:
    "Software Engineer, Computer Science Student, and Robotics Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ViewTransitions>
    <html
      lang="en"
      className={`${jetBrainsMono.className} h-full [scrollbar-gutter:stable]`}
    >
      <body className="flex h-full flex-col justify-between bg-black tracking-tight antialiased">
        <header className="w-full pt-4 text-center">
          {/* <nav className="text-[#ffd90081] space-x-8 text-sm tracking-wider">
              <a href="/" className="hover:text-[#FFD700] transition">home.</a>
              <a href="/work" className="hover:text-[#FFD700] transition">work.</a>
              <a href="/contact" className="hover:text-[#FFD700] transition">contact.</a>
            </nav> */}
        </header>
        <div className="flex flex-grow flex-col items-center justify-start p-4">
          <main className="mx-auto w-full max-w-[60ch] space-y-6">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
    // </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: "github", url: "https://github.com/domilx" },
    { name: "instagram", url: "https://www.instagram.com/domi.valentino/" },
    { name: "mail", url: "mailto:hello@domidev.net" },
  ];
  return (
    <footer className="mb-4 text-center">
      <div className="flex justify-center space-x-4 text-sm tracking-tight text-[#ffd90081]">
        {links.map((link, index) => (
          <BlurFade key={index} delay={index * 0.02 + 0.9} yOffset={8}>
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              {link.name}
            </a>
          </BlurFade>
        ))}
      </div>
    </footer>
  );
}

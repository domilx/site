import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://domidev.net'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Domenico Valentino',
    template: '%s | Domenico Valentino',
  },
  description: 'Software Engineer, Computer Science Student, and Robotics Mentor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ViewTransitions>
      <html lang="en" className={`${jetBrainsMono.className} [scrollbar-gutter:stable] h-full`}>
        <body className="antialiased tracking-tight bg-black h-full flex flex-col justify-between ">
          <header className="w-full text-center pt-4">
            {/* <nav className="text-[#ffd90081] space-x-8 text-sm tracking-wider">
              <a href="/" className="hover:text-[#FFD700] transition">home.</a>
              <a href="/work" className="hover:text-[#FFD700] transition">work.</a>
              <a href="/contact" className="hover:text-[#FFD700] transition">contact.</a>
            </nav> */}
          </header>
          <div className="flex-grow flex flex-col justify-start items-center p-4">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
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
  const links = [{ name: 'github', url: 'https://github.com/domilx' }, { name: 'instagram', url: 'https://www.instagram.com/domi.valentino/' }, { name: 'mail' , url: 'mailto:hello@domidev.net' }];
  return (
    <footer className="mb-4 text-center">
      <div className="flex justify-center space-x-4 tracking-tight text-sm text-[#ffd90081]">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import { Dancing_Script, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-elegant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ivy's Sweet 16 - RSVP",
  description: "Join us in celebrating Ivy's Sweet 16! February 13, 2026. RSVP now for a Pretty in Pink celebration.",
  keywords: ['Sweet 16', 'Birthday Party', 'RSVP', 'Pretty in Pink', 'Ivy'],
  authors: [{ name: 'Ivy Sweet 16 Team' }],
  openGraph: {
    title: "Ivy's Sweet 16 - RSVP",
    description: "Join us in celebrating Ivy's Sweet 16! February 13, 2026",
    type: 'website',
    locale: 'en_US',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#E8A0BF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased bg-gradient-to-b from-[#FFFAF8] via-[#FDEBE8] to-[#F4C2C2] min-h-screen">
        {children}
      </body>
    </html>
  );
}

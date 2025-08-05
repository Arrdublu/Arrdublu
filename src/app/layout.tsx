
import type { Metadata } from 'next';
import './globals.css';
import { Alegreya } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/Header';
import { SiteFooter } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});

const newLogoUrl = "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/arrdublu_logo_blackArtboard-1.png?alt=media&token=0c573884-0b4b-405c-ba36-5477f43a1699"

export const metadata: Metadata = {
  title: 'Arrdublu - Exquisite Media Services',
  description: 'Exquisite media services for the discerning client. Unparalleled quality in SEO, creative, and lifestyle content.',
  icons: {
    icon: newLogoUrl,
    apple: newLogoUrl,
  },
  openGraph: {
    title: 'Arrdublu - Exquisite Media Services',
    description: 'Elevate your vision with our top-tier creative, lifestyle, and SEO services.',
    url: 'https://arrdublu.us',
    siteName: 'Arrdublu',
    images: [
      {
        url: newLogoUrl,
        width: 512,
        height: 512,
        alt: 'Arrdublu Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrdublu - Exquisite Media Services',
    description: 'Elevate your vision with our top-tier creative, lifestyle, and SEO services.',
    images: [newLogoUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          alegreya.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

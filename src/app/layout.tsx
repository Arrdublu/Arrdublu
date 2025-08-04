
import type { Metadata } from 'next';
import './globals.css';
import { Alegreya } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/Header';
import { SiteFooter } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { CartProvider } from '@/context/CartProvider';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'Arrdublu - Exquisite Media Services',
  description: 'Exquisite media services for the discerning client. Unparalleled quality in SEO, creative, and lifestyle content.',
  openGraph: {
    title: 'Arrdublu - Exquisite Media Services',
    description: 'Elevate your vision with our top-tier creative, lifestyle, and SEO services.',
    url: 'https://arrdublu.us',
    siteName: 'Arrdublu',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxDb21wcmVoZW5zaXZlJTIwU0VPJTIwQXVkaXR8ZW58MHx8fHwxNzU0MjQzNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        width: 1200,
        height: 630,
        alt: 'Arrdublu SEO Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrdublu - Exquisite Media Services',
    description: 'Elevate your vision with our top-tier creative, lifestyle, and SEO services.',
    images: ['https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxDb21wcmVoZW5zaXZlJTIwU0VPJTIwQXVkaXR8ZW58MHx8fHwxNzU0MjQzNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080'],
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
          <CartProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

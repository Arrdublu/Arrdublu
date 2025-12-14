
import type { Metadata } from 'next';
import './globals.css';
import { Alegreya } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/Header';
import { SiteFooter } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { CurrencyProvider } from '@/context/CurrencyProvider';
import { CartProvider } from '@/context/CartProvider';
import { ChristmasDiscountPopup } from '@/components/layout/ChristmasDiscountPopup';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});

const newLogoUrl = "https://firebasestorage.googleapis.com/v0/b/arrdublu-d1c06.appspot.com/o/arrdublu_logo_blackArtboard-1.png?alt=media&token=577a50cf-ae11-45c7-8a98-e023e59df2d4"
const socialShareImageUrl = "https://images.unsplash.com/photo-1610363665796-0242a42f5394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzbm93JTIwdHJhaW58ZW58MHx8fHwxNzY1ODcyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1200"


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
        url: socialShareImageUrl,
        width: 1200,
        height: 630,
        alt: 'Arrdublu Exquisite Media Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrdublu - Exquisite Media Services',
    description: 'Elevate your vision with our top-tier creative, lifestyle, and SEO services.',
    images: [socialShareImageUrl],
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
          <CurrencyProvider>
            <CartProvider>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
                <ChristmasDiscountPopup />
              </div>
            </CartProvider>
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

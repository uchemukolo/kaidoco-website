import '../styles/globals.css';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Kaido Co | Web Design, App Development & SEO for Non-Tech Entrepreneurs',
  description:
    'Kaido Co helps non-tech entrepreneurs get found online and grow with confidence — through beautiful websites, custom apps, and SEO-led copywriting.',
  keywords:
    'web design for small businesses, SEO copywriting UK, app development for startups, non-tech entrepreneur web studio, Reading UK web designer',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

const baseStyles = `
*{box-sizing:border-box}
html{scroll-behavior:smooth;background:#ffffff}
body{margin:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;background:#ffffff}
:root{
  --bg:#ffffff; --panel:#ffffff; --ink:#092F2E; --muted:#5E6B67; --line:#E1DED4;
  --accent:#FF6B6B; --accent-ink:#092F2E;
  --prod-bg:#092F2E; --prod-ink:#F4F0E9; --prod-muted:#8CADA8; --prod-line:#1D4A45;
  --marquee-dur:36s;
}
::selection{background:var(--accent);color:var(--accent-ink)}
@keyframes kaidoMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
a{color:inherit}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon-light-32x32.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/icon-dark-32x32.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XKVS0L2VXC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKVS0L2VXC');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

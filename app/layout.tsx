import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'ObservOne · AI Operations Intelligence for Critical Infrastructure',
  description:
    'ObservOne unifies telemetry, pinpoints root cause with confidence-scored AI, and automates incident resolution for telecom, ISP, data center and infrastructure operations teams.',
  keywords: [
    'AI operations',
    'AIOps platform',
    'observability',
    'network monitoring',
    'telecom operations',
    'NOC platform',
    'root cause analysis',
    'incident automation',
    'self-healing infrastructure',
    'SLA monitoring',
    'enterprise observability',
  ],
  authors: [{ name: 'ObservOne' }],
  metadataBase: new URL('https://observone.io'),
  openGraph: {
    title: 'ObservOne · AI Operations Intelligence',
    description:
      'Unify telemetry, detect root cause, and automate response across critical infrastructure.',
    type: 'website',
    locale: 'en_US',
    images: ['/og/observone-og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ObservOne · AI Operations Intelligence',
    description: 'AI-driven incident detection, root cause and automation for critical infrastructure.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#0a0a0a] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

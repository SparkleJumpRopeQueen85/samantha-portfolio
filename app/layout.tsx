import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Sora } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n/language-context'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const sora = Sora({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Samantha Ixchel Cruz Techalote · Software Engineer',
  description:
    'Portfolio of Samantha Ixchel Cruz Techalote, a Software Engineer specializing in full stack development, cloud (AWS), and SAP enterprise solutions.',
  generator: 'v0.app',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'AWS',
    'SAP ABAP',
    'React',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name: 'Samantha Ixchel Cruz Techalote' }],
  openGraph: {
    title: 'Samantha Ixchel Cruz Techalote · Software Engineer',
    description:
      'Premium portfolio of a full stack and cloud Software Engineer.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0d14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}

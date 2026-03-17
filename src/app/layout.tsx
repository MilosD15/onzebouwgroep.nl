import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://onzebouwgroep.nl'),
  title: 'Onze Bouwgroep | Schilderwerk, Renovatie en Bouwprojecten in Nederland',
  description:
    'Onze Bouwgroep verzorgt schilderwerk, renovaties en diverse bouwwerkzaamheden voor woningen, gebouwen en projecten in heel Nederland.',
  keywords: [
    'schilderwerk Nederland',
    'renovatie bedrijf Nederland',
    'bouwgroep Nederland',
    'buitenschilderwerk',
    'binnenschilderwerk',
    'renovatie van huizen',
    'bouwprojecten Nederland',
  ],
  openGraph: {
    title: 'Onze Bouwgroep | Schilderwerk, Renovatie en Bouwprojecten',
    description:
      'Betrouwbaar schilderwerk, renovatie en bouwprojecten voor woningen en gebouwen in heel Nederland.',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}

import { company } from '@/content/site'

/** Lokale SEO / rich results (Google) */
export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    description: company.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Venusstraat 68',
      postalCode: '2402 XS',
      addressLocality: 'Alphen aan den Rijn',
      addressCountry: 'NL',
    },
    telephone: company.phones.join(' / '),
    email: company.email,
    url: 'https://onzebouwgroep.nl',
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

import Link from 'next/link'
import { company, contact } from '@/content/site'
import FadeIn from '@/components/FadeIn'
import ContactForm from '@/components/ContactForm'

const mapEmbedSrc =
  'https://maps.google.com/maps?q=Venusstraat+68,+2402+XS+Alphen+aan+den+Rijn,+Nederland&t=&z=15&ie=UTF8&iwloc=&output=embed'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {contact.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">{contact.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-brand-red px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              {contact.ctaQuote}
            </Link>
            <a
              href={`tel:${company.phones[0].replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] border-2 border-foreground/15 px-5 py-3 text-sm font-semibold transition-colors hover:border-brand-red/40"
            >
              {contact.ctaContact}
            </a>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <div className="space-y-6 rounded-[var(--radius-lg)] border border-black/5 bg-brand-gray/50 p-6 sm:p-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-red">
                  {company.name}
                </h3>
                <address className="mt-2 not-italic text-muted leading-relaxed">
                  {company.address}
                </address>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Telefoon</h4>
                <ul className="mt-2 space-y-1">
                  {company.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="font-medium text-foreground underline decoration-brand-red/40 underline-offset-2 hover:decoration-brand-red"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">E-mail</h4>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 inline-block font-medium text-foreground underline decoration-brand-red/40 underline-offset-2 hover:decoration-brand-red"
                >
                  {company.email}
                </a>
              </div>
              <p className="text-sm text-muted">
                KVK: {company.kvk} · {company.legalForm}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ContactForm />
          </FadeIn>
        </div>

        <FadeIn className="mt-10">
          <h3 className="mb-3 text-sm font-semibold text-foreground">Locatie</h3>
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-black/5 shadow-[var(--shadow-card)]">
            <iframe
              title="Kaart — Onze Bouwgroep, Venusstraat 68, Alphen aan den Rijn"
              src={mapEmbedSrc}
              className="h-[320px] w-full grayscale-[0.2] sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

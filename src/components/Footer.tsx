import Link from 'next/link'
import Image from 'next/image'
import { company, footer, nav } from '@/content/site'
import publicUrl from '@/lib/publicUrl'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-foreground text-white">
      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={publicUrl('/logo-final.svg')}
                alt={`${company.name} logo`}
                width={100}
                height={24}
                className="h-6 w-auto opacity-95"
                priority
              />
              <span className="text-xl font-bold tracking-tight">{company.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
              {footer.shortDescription}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">
              Navigatie
            </h2>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/85 underline-offset-4 transition hover:text-brand-yellow hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">
              Contact
            </h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-white/85">
              {company.address}
              <br />
              <a href={`mailto:${company.email}`} className="mt-2 inline-block hover:text-brand-yellow">
                {company.email}
              </a>
              <br />
              {company.phones.map((p) => (
                <span key={p} className="block">
                  <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-brand-yellow">
                    {p}
                  </a>
                </span>
              ))}
              <span className="mt-2 block text-white/70">KVK: {company.kvk}</span>
            </address>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} {footer.copyright}. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  )
}

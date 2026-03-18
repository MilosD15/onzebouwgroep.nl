import Link from 'next/link'
import Image from 'next/image'
import { company, hero } from '@/content/site'
import FadeIn from '@/components/FadeIn'
import publicUrl from '@/lib/publicUrl'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-gray"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-linear-to-br from-white via-brand-gray to-brand-gray/80" />
      <div className="absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/4 -translate-y-1/4 rounded-full bg-brand-yellow/25 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[320px] w-[320px] -translate-x-1/4 translate-y-1/4 rounded-full bg-brand-red/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1320px] gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <FadeIn className="order-2 flex flex-col gap-6 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            {company.name}
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
          >
            {hero.headline}
          </h1>
          <p className="max-w-xl text-lg text-muted leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-(--radius-md) bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-brand-red/95"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-(--radius-md) border-2 border-foreground/15 bg-white px-6 py-3.5 text-base font-semibold transition-colors hover:border-brand-red/40 hover:bg-brand-gray/50"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
          <Link
            href="#projecten"
            className="inline-flex w-fit items-center gap-1 text-sm font-medium text-foreground underline decoration-brand-red/50 underline-offset-4 transition hover:decoration-brand-red"
          >
            {hero.ctaProjects}
          </Link>
        </FadeIn>

        <FadeIn delay={0.12} className="order-1 lg:order-2">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-(--radius-lg) bg-foreground/5 shadow-(--shadow-card) ring-1 ring-black/5">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/10" aria-hidden />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-(--radius-md) bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
              <Image
                src={publicUrl('/logo-final.svg')}
                alt=""
                width={100}
                height={28}
                className="h-7 w-auto opacity-90"
                priority
              />
              <span className="text-xs font-semibold text-foreground/90">Onze Bouwgroep</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

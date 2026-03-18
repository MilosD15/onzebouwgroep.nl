import { about } from '@/content/site'
import FadeIn from '@/components/FadeIn'

export default function AboutSection() {
  return (
    <section
      id="over-ons"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {about.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {about.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative aspect-4/3 overflow-hidden rounded-(--radius-lg) bg-brand-gray shadow-(--shadow-card) ring-1 ring-black/5 lg:aspect-5/4">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-linear-to-br from-black/10 via-transparent to-black/0" aria-hidden />
              <div
                className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center"
                aria-hidden
              >
                <span className="shine-text bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red bg-clip-text text-transparent text-sm font-semibold uppercase tracking-widest sm:text-base">
                  Binnenkort beschikbaar...
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

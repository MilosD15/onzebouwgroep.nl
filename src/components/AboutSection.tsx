import Image from 'next/image'
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-brand-gray shadow-[var(--shadow-card)] ring-1 ring-black/5 lg:aspect-[5/4]">
              <Image
                src={about.imageSrc}
                alt={about.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

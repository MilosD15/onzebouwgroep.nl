import {
  Paintbrush,
  Home,
  Hammer,
  Brush,
  Building2,
  Wrench,
} from 'lucide-react'
import type { Service } from '@/content/site'
import { services } from '@/content/site'
import FadeIn from '@/components/FadeIn'

const iconMap = {
  paint: Paintbrush,
  home: Home,
  hammer: Hammer,
  brush: Brush,
  building: Building2,
  wrench: Wrench,
}

function ServiceIcon({ service }: { service: Service }) {
  const Icon = iconMap[service.icon]
  return (
    <div className="mb-4 inline-flex rounded-[var(--radius-md)] bg-brand-yellow/35 p-3 text-foreground">
      <Icon className="h-6 w-6" aria-hidden />
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section
      id="diensten"
      className="bg-brand-gray py-16 sm:py-20 lg:py-24"
      aria-labelledby="diensten-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2
            id="diensten-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Diensten
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Van binnen- en buitenschilderwerk tot renovatie en allround bouw — wij denken met u mee.
          </p>
        </FadeIn>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <li key={service.id}>
              <FadeIn delay={i * 0.05}>
                <article className="group h-full rounded-[var(--radius-lg)] border border-black/5 bg-white p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <ServiceIcon service={service} />
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import {
  Award,
  MessageCircle,
  Calendar,
  MapPin,
  Scale,
  Users,
} from 'lucide-react'
import { whyUs } from '@/content/site'
import FadeIn from '@/components/FadeIn'

const icons = {
  award: Award,
  message: MessageCircle,
  calendar: Calendar,
  map: MapPin,
  scale: Scale,
  users: Users,
}

export default function WhyUs() {
  return (
    <section
      id="waarom"
      className="bg-brand-gray py-16 sm:py-20 lg:py-24"
      aria-labelledby="waarom-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2
            id="waarom-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {whyUs.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Zes redenen waarom klanten voor Onze Bouwgroep kiezen.
          </p>
        </FadeIn>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.items.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <li key={item.title}>
                <FadeIn delay={i * 0.05}>
                  <div className="flex gap-4 rounded-[var(--radius-lg)] border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-brand-red/10 text-brand-red">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                </FadeIn>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

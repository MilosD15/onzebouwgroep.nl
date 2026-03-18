import { projects } from '@/content/site'
import FadeIn from '@/components/FadeIn'

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section
      id="projecten"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="projecten-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2
            id="projecten-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Projecten & referenties
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Een selectie van uitgevoerde werkzaamheden en impressies van ons team op locatie.
          </p>
        </FadeIn>

        {featured && (
          <FadeIn className="mt-12">
            <article className="overflow-hidden rounded-(--radius-lg) border border-black/5 bg-brand-gray shadow-(--shadow-card) lg:grid lg:grid-cols-2 lg:gap-0">
              <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[320px]">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/10"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center"
                  aria-hidden
                >
                  <span className="shine-text bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red bg-clip-text text-transparent text-sm font-semibold uppercase tracking-widest sm:text-base">
                    Binnenkort beschikbaar...
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                  Uitgelicht project
                </span>
                <h3 className="mt-2 text-2xl font-bold text-foreground">
                  {featured.title}
                </h3>
                <dl className="mt-4 space-y-1 text-sm">
                  <div>
                    <dt className="font-medium text-foreground">Type</dt>
                    <dd className="text-muted">{featured.type}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">Locatie</dt>
                    <dd className="text-muted">{featured.location}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-muted leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </article>
          </FadeIn>
        )}

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <li key={project.id}>
              <FadeIn delay={i * 0.06}>
                <article className="overflow-hidden rounded-(--radius-lg) border border-black/5 bg-white shadow-(--shadow-card) transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="relative h-[96px] overflow-hidden bg-brand-gray/40" aria-hidden>
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                      aria-hidden
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-black/5"
                      aria-hidden
                    />
                    <div
                      className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center"
                      aria-hidden
                    >
                      <span className="shine-text bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red bg-clip-text text-transparent text-xs font-semibold uppercase tracking-widest">
                        Binnenkort beschikbaar...
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-red">{project.type}</p>
                    <p className="text-sm text-muted">{project.location}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServicesGrid from '@/components/ServicesGrid'
import ProjectsSection from '@/components/ProjectsSection'
import WhyUs from '@/components/WhyUs'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-md)] focus:bg-brand-red focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Naar hoofdinhoud
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <ServicesGrid />
        <ProjectsSection />
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

import { useEffect } from 'react'
import { Audiences } from './components/Audiences'
import { ContactForm } from './components/ContactForm'
import { Differentials } from './components/Differentials'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Legal } from './components/Legal'
import { CookieBanner } from './components/CookieBanner'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Clients } from './components/Clients'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WorkWithUs } from './components/WorkWithUs'
import { BUSINESS_NAME, CNPJ, EMAIL, LEGAL_NAME, PHONE_NUMBER, SERVICE_AREA, SITE_URL } from './lib/constants'

export default function App() {
  useEffect(() => {
    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'HVACBusiness',
      name: BUSINESS_NAME,
      legalName: LEGAL_NAME,
      taxID: CNPJ,
      url: SITE_URL,
      image: `${SITE_URL}images/hero-technician.webp`,
      description: 'Instalação, manutenção, limpeza e higienização de ar-condicionado para residências e empresas.',
      telephone: `+${PHONE_NUMBER}`, email: EMAIL,
      areaServed: { '@type': 'City', name: 'Fortaleza', containedInPlace: { '@type': 'State', name: 'Ceará' } },
      address: { '@type': 'PostalAddress', addressLocality: 'Fortaleza', addressRegion: 'CE', addressCountry: 'BR' },
      slogan: 'Climatização com confiança',
      knowsAbout: ['Instalação de ar-condicionado', 'Manutenção preventiva', 'Manutenção corretiva', 'Limpeza e higienização'],
      contactPoint: { '@type': 'ContactPoint', telephone: `+${PHONE_NUMBER}`, contactType: 'customer service', availableLanguage: 'Portuguese' },
      serviceArea: SERVICE_AREA,
    })
    document.head.appendChild(schema)
    return () => schema.remove()
  }, [])

  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Differentials />
        <Audiences />
        <Process />
        <Clients />
        <WorkWithUs />
        <ContactForm />
        <FinalCTA />
      </main>
      <Legal />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  )
}

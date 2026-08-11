import { ExternalLink } from 'lucide-react'
import { trackEvent } from '../lib/tracking'
import { SectionHeading } from './SectionHeading'

const clients = [
  { name: 'ArcelorMittal', logo: 'images/clients/arcelormittal.svg', url: 'https://brasil.arcelormittal.com/' },
  { name: 'Makro Engenharia', logo: 'images/clients/makro-engenharia-azul.webp', url: 'https://makroengenharia.com.br/' },
  { name: 'TOR4', wordmark: true },
  { name: 'Reframax', logo: 'images/clients/reframax-color.svg', url: 'https://reframax.com.br/portal/' },
  { name: 'INEC', logo: 'images/clients/inec.webp', url: 'https://inec.org.br/' },
  { name: 'Ecoban', logo: 'images/clients/ecoban.webp', url: 'https://www.ecoban.com.br/' },
  { name: 'North Shopping Jóquei', logo: 'images/clients/north-shopping-joquei.webp', north: true, url: 'https://www.northshoppingjoquei.com.br/' },
  { name: 'Shinagawa', logo: 'images/clients/shinagawa.webp', url: 'https://shinagawa.com.br/' },
]

function ClientCard({ client, interactive = true }: { client: (typeof clients)[number], interactive?: boolean }) {
  const content = client.wordmark ? (
    <span className="client-wordmark" aria-label={client.name}>TOR<span>4</span></span>
  ) : (
    <img
      src={`${import.meta.env.BASE_URL}${client.logo}`}
      alt={`Logo ${client.name}`}
      loading="lazy"
      decoding="async"
    />
  )

  return (
    <li className={`client-card ${client.north ? 'client-card--north' : ''}`}>
      {client.url ? (
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="client-link"
          aria-label={interactive ? `Visitar o site oficial de ${client.name} (abre em nova aba)` : undefined}
          tabIndex={interactive ? undefined : -1}
          onClick={() => trackEvent('client_site_click', { client: client.name })}
        >
          {content}
          <ExternalLink className="client-external-icon" aria-hidden="true" />
        </a>
      ) : (
        <span className="client-static" title={interactive && !client.url ? 'Site oficial não localizado' : undefined}>{content}</span>
      )}
    </li>
  )
}

export function Clients() {
  return (
    <section id="clientes" className="clients-section section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Quem confia"
          title="Clientes que fazem parte da nossa história"
          description="Empresas atendidas com responsabilidade, qualidade técnica e compromisso em cada serviço."
        />
      </div>

      <div className="clients-marquee" role="region" aria-label="Clientes atendidos">
        <div className="clients-marquee__track">
          <ul className="clients-marquee__group">
            {clients.map((client) => <ClientCard key={client.name} client={client} />)}
          </ul>
          <ul className="clients-marquee__group clients-marquee__duplicate" aria-hidden="true">
            {clients.map((client) => <ClientCard key={client.name} client={client} interactive={false} />)}
          </ul>
        </div>
      </div>
    </section>
  )
}

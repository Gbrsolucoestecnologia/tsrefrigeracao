import { SectionHeading } from './SectionHeading'

const clients = [
  { name: 'ArcelorMittal', logo: 'images/clients/arcelormittal.svg' },
  { name: 'Makro Engenharia', logo: 'images/clients/makro-engenharia-azul.webp' },
  { name: 'TOR4', wordmark: true },
  { name: 'Reframax', logo: 'images/clients/reframax-color.svg' },
  { name: 'INEC', logo: 'images/clients/inec.webp' },
  { name: 'Ecoban', logo: 'images/clients/ecoban.webp' },
  { name: 'North Shopping Jóquei', logo: 'images/clients/north-shopping-joquei.webp', north: true },
  { name: 'Shinagawa', logo: 'images/clients/shinagawa.webp' },
]

function ClientCard({ client }: { client: (typeof clients)[number] }) {
  return (
    <li className={`client-card ${client.north ? 'client-card--north' : ''}`}>
      {client.wordmark ? (
        <span className="client-wordmark" aria-label={client.name}>TOR<span>4</span></span>
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}${client.logo}`}
          alt={`Logo ${client.name}`}
          loading="lazy"
          decoding="async"
        />
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
            {clients.map((client) => <ClientCard key={client.name} client={client} />)}
          </ul>
        </div>
      </div>
    </section>
  )
}

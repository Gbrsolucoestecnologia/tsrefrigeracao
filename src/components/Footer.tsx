import { Building2, Mail, MapPin, Phone, Snowflake } from 'lucide-react'
import { Brand } from './Brand'
import { CNPJ, EMAIL, LEGAL_NAME, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREA } from '../lib/constants'

const quickLinks = [['Início', '#inicio'], ['Sobre', '#sobre'], ['Serviços', '#servicos'], ['Clientes', '#clientes'], ['Trabalhe conosco', '#trabalhe-conosco'], ['Contato', '#contato']]
const serviceLinks = ['Instalação', 'Manutenção preventiva', 'Manutenção corretiva', 'Limpeza e higienização', 'Atendimento residencial', 'Atendimento empresarial']

export function Footer() {
  return (
    <footer className="bg-[#041331] pb-20 text-blue-100/70 sm:pb-0">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_.7fr_1fr_1.2fr]">
        <div>
          <Brand inverse />
          <p className="mt-5 max-w-sm text-sm leading-7">Instalação, manutenção e higienização de ar-condicionado com atendimento em Fortaleza e localidades próximas.</p>
          <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-200"><Snowflake className="size-4" /> Climatização com confiança</div>
        </div>
        <div><h2 className="footer-title">Links rápidos</h2><ul className="footer-list">{quickLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></div>
        <div><h2 className="footer-title">Nossos serviços</h2><ul className="footer-list">{serviceLinks.map((label) => <li key={label}><a href="#servicos">{label}</a></li>)}</ul></div>
        <div>
          <h2 className="footer-title">Contato e empresa</h2>
          <ul className="footer-list">
            <li><a href={PHONE_HREF} className="flex items-center gap-2"><Phone className="size-4 shrink-0" />{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="flex items-start gap-2 break-all"><Mail className="mt-1 size-4 shrink-0" />{EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-1 size-4 shrink-0" /><span>{SERVICE_AREA}</span></li>
            <li className="flex items-start gap-2"><Building2 className="mt-1 size-4 shrink-0" /><span>{LEGAL_NAME}<br />CNPJ {CNPJ}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TS Refrigeração &amp; Climatização. Todos os direitos reservados.</p>
          <nav className="flex flex-wrap gap-4" aria-label="Informações legais"><a href="#privacidade" className="font-semibold text-blue-100">Privacidade</a><a href="#termos" className="font-semibold text-blue-100">Condições de atendimento</a></nav>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, Snowflake } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { trackEvent } from '../lib/tracking'
import { whatsappUrl } from '../lib/constants'

const trust = ['Atendimento sob agendamento', 'Avaliação da necessidade', 'Orçamento antes do serviço', 'Residencial e empresarial']

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#f6fbff] pb-16 pt-36 sm:pt-40 lg:min-h-[760px] lg:pb-20">
      <div className="hero-orb -left-20 top-32 size-72 bg-cyan-200/45" />
      <div className="hero-orb -right-24 top-16 size-[28rem] bg-blue-200/50" />
      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial={false} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}>
          <span className="eyebrow"><Snowflake className="size-4" /> Conforto em todas as estações</span>
          <h1 className="mt-6 max-w-3xl text-[2.55rem] font-black leading-[1.06] tracking-[-0.05em] text-[#071d49] sm:text-5xl lg:text-[3.8rem]">
            Instalação e manutenção de <span className="text-gradient">ar-condicionado</span> com qualidade e segurança
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Atendimento em Fortaleza para residências e empresas. Avaliamos a necessidade e informamos orçamento, disponibilidade e condições antes da contratação.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={() => trackEvent('primary_cta_click', { location: 'hero' })} className="btn-primary px-7 py-4"><WhatsAppIcon className="size-5" /> Solicitar atendimento</a>
            <a href="#servicos" className="btn-secondary px-7 py-4">Ver serviços <ArrowRight className="size-5" /></a>
          </div>
          <div className="mt-8 grid gap-3 border-t border-blue-100 pt-6 sm:grid-cols-2">
            {trust.map((item) => <span key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-600"><CheckCircle2 className="size-4 shrink-0 text-cyan-600" />{item}</span>)}
          </div>
        </motion.div>
        <motion.div initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .65 }} className="relative">
          <div className="absolute -left-6 -top-7 hidden size-24 rotate-12 rounded-3xl border border-cyan-200 bg-white/60 lg:block" />
          <div className="absolute -bottom-7 -right-7 size-40 rounded-full border border-blue-200/70" />
          <div className="hero-image relative aspect-[1.02] overflow-hidden rounded-[2.25rem] border-[6px] border-white shadow-[0_30px_70px_rgba(18,74,130,.22)]">
            <img src={`${import.meta.env.BASE_URL}images/hero-technician.webp`} alt="Técnico realizando manutenção em ar-condicionado split" className="h-full w-full object-cover object-[64%_center]" fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071d49]/30 via-transparent to-cyan-300/10" />
            <Snowflake className="absolute -right-8 -top-8 size-44 text-white/15" strokeWidth={1} aria-hidden="true" />
            <div className="air-line air-line-1" /><div className="air-line air-line-2" /><div className="air-line air-line-3" />
          </div>
          <div className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur sm:left-8">
            <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><ShieldCheck /></span>
            <span><strong className="block text-sm text-[#071d49]">Serviço com segurança</strong><small className="text-slate-500">Cuidado do início ao fim</small></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

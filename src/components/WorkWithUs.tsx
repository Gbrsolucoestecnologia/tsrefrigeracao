import { ArrowRight, BriefcaseBusiness, Mail } from 'lucide-react'
import { EMAIL } from '../lib/constants'

export function WorkWithUs() {
  const subject = encodeURIComponent('Quero trabalhar na TS Refrigeração')

  return (
    <section id="trabalhe-conosco" className="section-space bg-[#eaf8fd]">
      <div className="container-shell">
        <div className="work-with-us relative overflow-hidden rounded-[2rem] bg-[#071d49] p-7 text-white shadow-[0_25px_60px_rgba(7,29,73,.18)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <BriefcaseBusiness className="absolute -right-8 -top-10 size-48 text-white/[.05]" strokeWidth={1} aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <span className="eyebrow border-white/15 bg-white/10 text-cyan-200">Oportunidades</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Trabalhe conosco</h2>
            <p className="mt-4 text-base leading-7 text-blue-100/80">Quer fazer parte da nossa equipe? Envie seu currículo e conte um pouco sobre sua experiência. Quando surgir uma oportunidade, entraremos em contato.</p>
          </div>
          <a href={`mailto:${EMAIL}?subject=${subject}`} className="btn-primary relative z-10 mt-7 shrink-0 self-start bg-cyan-500 hover:bg-cyan-400 lg:mt-0"><Mail className="size-5" /> Enviar currículo <ArrowRight className="size-4" /></a>
        </div>
      </div>
    </section>
  )
}

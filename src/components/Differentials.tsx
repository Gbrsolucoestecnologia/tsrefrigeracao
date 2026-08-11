import { motion } from 'framer-motion'
import { CheckCircle2, Snowflake } from 'lucide-react'
import { differentials } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { SnowflakeEffect } from './SnowflakeEffect'

export function Differentials() {
  return (
    <section id="sobre" className="section-space overflow-hidden bg-[#071d49]">
      <div className="container-shell relative">
        <SnowflakeEffect />
        <Snowflake className="absolute -left-32 -top-24 size-80 text-white/[.025]" strokeWidth={.8} aria-hidden="true" />
        <SectionHeading light eyebrow="Nosso jeito de trabalhar" title="Por que escolher a TS Refrigeração?" description="Confiança se constrói com atenção, transparência e um serviço bem executado." />
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[.045] sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map(({ icon: Icon, title, description }, index) => (
            <motion.article key={title} initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * .07 }} className="differential-item">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><Icon className="size-6" /></span>
              <span><h3 className="font-bold text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-blue-100/65">{description}</p></span>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-blue-100/80">
          {['Soluções personalizadas', 'Cumprimento de prazos', 'Atendimento residencial e empresarial'].map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-cyan-300" />{item}</span>)}
        </div>
      </div>
    </section>
  )
}

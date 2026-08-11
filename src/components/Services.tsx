import { motion } from 'framer-motion'
import { ArrowUpRight, Snowflake } from 'lucide-react'
import { services } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section id="servicos" className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading eyebrow="O que fazemos" title="Nossos serviços" description="Cuidado completo para seu equipamento funcionar com eficiência, economia e ar mais saudável." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.article key={title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: index * .06 }} className="service-card group relative overflow-hidden">
              <Snowflake className="absolute -right-8 -top-8 size-28 text-blue-50 transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.3} aria-hidden="true" />
              <div className="service-icon"><Icon className="size-7" /></div>
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#071d49]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
              <a href="#contato" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#0879ad]">Solicitar serviço <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

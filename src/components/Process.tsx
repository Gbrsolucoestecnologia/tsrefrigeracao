import { motion } from 'framer-motion'
import { processSteps } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Process() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading eyebrow="Simples e transparente" title="Como funciona" description="Do primeiro contato à execução, você sabe exatamente qual é o próximo passo." />
        <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-5">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-cyan-200 via-blue-400 to-cyan-200 lg:block" />
          {processSteps.map(({ icon: Icon, title, description }, index) => (
            <motion.article key={title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="relative text-center lg:px-3">
              <div className="relative z-10 mx-auto grid size-20 place-items-center rounded-3xl border-4 border-white bg-[#e7f8ff] text-[#0879ad] shadow-lg shadow-blue-100"><Icon className="size-7" /><span className="absolute -right-1 -top-2 grid size-7 place-items-center rounded-full bg-[#0d75c6] text-xs font-black text-white">{index + 1}</span></div>
              <h3 className="mt-6 text-lg font-extrabold text-[#071d49]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

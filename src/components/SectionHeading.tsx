import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="mx-auto mb-11 max-w-2xl text-center">
      <span className={`eyebrow ${light ? 'border-white/15 bg-white/10 text-cyan-200' : ''}`}>{eyebrow}</span>
      <h2 className={`mt-5 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-[2.7rem] ${light ? 'text-white' : 'text-[#071d49]'}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-7 ${light ? 'text-blue-100/80' : 'text-slate-600'}`}>{description}</p>}
    </motion.div>
  )
}

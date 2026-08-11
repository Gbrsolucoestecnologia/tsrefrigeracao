import { Mail, Phone, Snowflake } from 'lucide-react'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, whatsappUrl } from '../lib/constants'
import { trackEvent } from '../lib/tracking'
import { SnowflakeEffect } from './SnowflakeEffect'
import { WhatsAppIcon } from './WhatsAppIcon'

export function FinalCTA() {
  return (
    <section className="bg-white px-4 pb-20 sm:px-6">
      <div className="relative mx-auto grid max-w-[1320px] overflow-hidden rounded-[2.5rem] bg-[#061a3d] shadow-[0_30px_70px_rgba(5,31,74,.22)] lg:min-h-[440px] lg:grid-cols-2">
        <SnowflakeEffect />
        <Snowflake className="absolute -right-16 -top-20 size-64 text-white/[.035]" strokeWidth={.8} aria-hidden="true" />
        <div className="relative min-h-72 overflow-hidden lg:min-h-full"><img src={`${import.meta.env.BASE_URL}images/final-cta-ac.webp`} alt="Aparelho de ar-condicionado instalado em ambiente climatizado" className="absolute inset-0 h-full w-full object-cover object-left" loading="lazy" decoding="async" /><div className="absolute inset-0 bg-gradient-to-t from-[#061a3d] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#061a3d]" /></div>
        <div className="relative z-20 flex flex-col justify-center px-7 pb-10 sm:px-12 lg:py-14 lg:pl-8 lg:pr-16">
          <span className="eyebrow border-white/15 bg-white/10 text-cyan-200">Estamos prontos para ajudar</span>
          <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-.035em] text-white sm:text-4xl">Precisa instalar ou fazer manutenção no seu ar-condicionado?</h2>
          <p className="mt-4 text-lg text-blue-100/75">Conte com a TS Refrigeração &amp; Climatização.</p>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'final_cta' })} className="btn-whatsapp mt-7 self-start"><WhatsAppIcon className="size-6" /> Falar no WhatsApp</a>
          <div className="mt-7 flex flex-col gap-3 text-sm text-blue-100 sm:flex-row sm:flex-wrap sm:gap-6"><a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white"><Phone className="size-4 text-cyan-300" />{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 break-all hover:text-white"><Mail className="size-4 shrink-0 text-cyan-300" />{EMAIL}</a></div>
        </div>
      </div>
    </section>
  )
}

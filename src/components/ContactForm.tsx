import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, whatsappUrl } from '../lib/constants'
import { trackEvent } from '../lib/tracking'
import { SectionHeading } from './SectionHeading'
import { SnowflakeEffect } from './SnowflakeEffect'

type Fields = {
  name: string
  phone: string
  email: string
  location: string
  audience: string
  service: string
  equipment: string
  message: string
  consent: boolean
  website: string
}
type Errors = Partial<Record<keyof Fields, string>>
const initial: Fields = { name: '', phone: '', email: '', location: '', audience: '', service: '', equipment: '', message: '', consent: false, website: '' }
const focusOrder: (keyof Fields)[] = ['name', 'phone', 'email', 'location', 'audience', 'service', 'equipment', 'message', 'consent']

const maskPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (fields.name.trim().length < 3) errors.name = 'Informe seu nome completo.'
  if (fields.phone.replace(/\D/g, '').length < 10) errors.phone = 'Informe um telefone válido com DDD.'
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Informe um e-mail válido.'
  if (fields.location.trim().length < 3) errors.location = 'Informe sua cidade e bairro.'
  if (!fields.audience) errors.audience = 'Selecione o tipo de atendimento.'
  if (!fields.service) errors.service = 'Selecione o serviço desejado.'
  if (fields.message.trim().length < 10) errors.message = 'Conte um pouco mais sobre o que você precisa.'
  if (!fields.consent) errors.consent = 'É necessário concordar para continuar.'
  return errors
}

const fieldA11y = (key: keyof Fields, errors: Errors) => ({
  id: `field-${key}`,
  'aria-invalid': Boolean(errors[key]),
  'aria-describedby': errors[key] ? `error-${key}` : undefined,
})

const ErrorMessage = ({ field, errors }: { field: keyof Fields, errors: Errors }) => errors[field]
  ? <span id={`error-${field}`} className="form-error" role="alert">{errors[field]}</span>
  : null

export function ContactForm() {
  const [fields, setFields] = useState(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState('')
  const [manualUrl, setManualUrl] = useState('')
  const lastSubmit = useRef(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { trackEvent('contact_section_view'); observer.disconnect() }
    }, { threshold: .35 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    setStatus('')
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (fields.website) return
    const nextErrors = validate(fields)
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus('Revise os campos destacados antes de continuar.')
      const firstInvalid = focusOrder.find((field) => nextErrors[field])
      window.setTimeout(() => document.getElementById(`field-${firstInvalid}`)?.focus(), 0)
      return
    }
    if (Date.now() - lastSubmit.current < 5000) {
      setStatus('Aguarde alguns segundos antes de enviar novamente.')
      return
    }
    lastSubmit.current = Date.now()
    const clean = (value: string) => value
      .replace(/[<>]/g, '')
      .split('')
      .filter((character) => character.charCodeAt(0) >= 32 && character.charCodeAt(0) !== 127)
      .join('')
      .trim()
    const message = [
      'Olá, gostaria de solicitar um atendimento.', '',
      `*Nome:* ${clean(fields.name)}`,
      `*Telefone:* ${clean(fields.phone)}`,
      fields.email ? `*E-mail:* ${clean(fields.email)}` : '',
      `*Cidade e bairro:* ${clean(fields.location)}`,
      `*Tipo:* ${clean(fields.audience)}`,
      `*Serviço:* ${clean(fields.service)}`,
      fields.equipment ? `*Equipamento/modelo:* ${clean(fields.equipment)}` : '',
      `*Mensagem:* ${clean(fields.message)}`,
    ].filter(Boolean).join('\n')
    const url = whatsappUrl(message)
    setManualUrl(url)
    setStatus('Sua mensagem está pronta. Se o WhatsApp não abrir, use o link exibido abaixo.')
    trackEvent('form_submit', { service: fields.service, audience: fields.audience })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const inputClass = 'form-input'
  return (
    <section ref={sectionRef} id="contato" className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading eyebrow="Vamos conversar" title="Solicite seu atendimento" description="Informe a localização e os dados do equipamento. A mensagem será organizada e aberta no WhatsApp para você confirmar o envio." />
        <div className="grid overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_25px_70px_rgba(10,53,96,.12)] lg:grid-cols-[.72fr_1.28fr]">
          <aside className="contact-aside relative overflow-hidden p-7 text-white sm:p-10">
            <SnowflakeEffect />
            <div className="relative z-10"><span className="eyebrow border-white/15 bg-white/10 text-cyan-200">Atendimento direto</span><h3 className="mt-6 text-3xl font-extrabold leading-tight">Seu conforto começa com uma boa orientação.</h3><p className="mt-4 leading-7 text-blue-100/75">Conte sua necessidade. Nossa equipe avalia o cenário e confirma disponibilidade, orçamento e condições antes da contratação.</p>
              <div className="mt-9 space-y-4">
                <a href={PHONE_HREF} className="contact-link"><Phone className="size-5" /><span><small>Telefone e WhatsApp</small><strong>{PHONE_DISPLAY}</strong></span></a>
                <a href={`mailto:${EMAIL}`} className="contact-link break-all"><Mail className="size-5" /><span><small>E-mail</small><strong>{EMAIL}</strong></span></a>
              </div>
              <div className="mt-9 space-y-3 text-sm text-blue-100/80">{['Atendimento mediante agendamento', 'Orçamento após avaliação', 'Condições informadas antes da contratação'].map((item) => <p key={item} className="flex items-center gap-2"><CheckCircle2 className="size-4 shrink-0 text-cyan-300" />{item}</p>)}</div>
            </div>
          </aside>
          <form onSubmit={submit} noValidate className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10" aria-describedby="form-status">
            <div id="form-status" className="sr-only" aria-live="assertive">{status}</div>
            <label className="form-label" htmlFor="field-name">Nome completo *<input {...fieldA11y('name', errors)} className={inputClass} value={fields.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" /><ErrorMessage field="name" errors={errors} /></label>
            <label className="form-label" htmlFor="field-phone">Telefone *<input {...fieldA11y('phone', errors)} className={inputClass} value={fields.phone} onChange={(e) => update('phone', maskPhone(e.target.value))} inputMode="tel" autoComplete="tel" placeholder="(85) 99999-9999" /><ErrorMessage field="phone" errors={errors} /></label>
            <label className="form-label" htmlFor="field-email">E-mail <input {...fieldA11y('email', errors)} type="email" className={inputClass} value={fields.email} onChange={(e) => update('email', e.target.value)} autoComplete="email" /><ErrorMessage field="email" errors={errors} /></label>
            <label className="form-label" htmlFor="field-location">Cidade e bairro *<input {...fieldA11y('location', errors)} className={inputClass} value={fields.location} onChange={(e) => update('location', e.target.value)} autoComplete="address-level2" placeholder="Ex.: Fortaleza, Aldeota" /><ErrorMessage field="location" errors={errors} /></label>
            <label className="form-label" htmlFor="field-audience">Tipo de atendimento *<select {...fieldA11y('audience', errors)} className={inputClass} value={fields.audience} onChange={(e) => update('audience', e.target.value)}><option value="">Selecione</option><option>Residencial</option><option>Empresarial</option></select><ErrorMessage field="audience" errors={errors} /></label>
            <label className="form-label" htmlFor="field-service">Serviço desejado *<select {...fieldA11y('service', errors)} className={inputClass} value={fields.service} onChange={(e) => update('service', e.target.value)}><option value="">Selecione</option><option>Instalação</option><option>Manutenção preventiva</option><option>Manutenção corretiva</option><option>Limpeza e higienização</option><option>Outro</option></select><ErrorMessage field="service" errors={errors} /></label>
            <label className="form-label sm:col-span-2" htmlFor="field-equipment">Equipamento ou modelo <input {...fieldA11y('equipment', errors)} className={inputClass} value={fields.equipment} onChange={(e) => update('equipment', e.target.value)} placeholder="Ex.: Split 12.000 BTUs" maxLength={120} /></label>
            <label className="form-label sm:col-span-2" htmlFor="field-message">Como podemos ajudar? *<textarea {...fieldA11y('message', errors)} className={`${inputClass} min-h-28 resize-y`} value={fields.message} onChange={(e) => update('message', e.target.value)} maxLength={500} /><ErrorMessage field="message" errors={errors} /></label>
            <label className="hidden" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={fields.website} onChange={(e) => update('website', e.target.value)} /></label>
            <label className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:col-span-2" htmlFor="field-consent"><input {...fieldA11y('consent', errors)} type="checkbox" checked={fields.consent} onChange={(e) => update('consent', e.target.checked)} className="mt-1 size-4 rounded border-slate-300 accent-[#0d75c6]" /><span>Concordo com o uso dos meus dados para retorno e com o encaminhamento da mensagem ao WhatsApp, conforme a <a href="#privacidade" className="font-semibold text-[#0879ad] underline underline-offset-2">política de privacidade</a>.</span></label>
            {errors.consent && <span id="error-consent" className="form-error -mt-4 sm:col-span-2" role="alert">{errors.consent}</span>}
            <button type="submit" className="btn-primary sm:col-span-2 sm:justify-self-start"><MessageCircle className="size-5" /> Preparar mensagem no WhatsApp <ArrowRight className="size-4" /></button>
            {status && <div className="form-status sm:col-span-2" aria-live="polite"><p>{status}</p>{manualUrl && <a href={manualUrl} target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2">Abrir WhatsApp manualmente</a>}</div>}
          </form>
        </div>
      </div>
    </section>
  )
}

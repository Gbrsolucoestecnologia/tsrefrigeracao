import { WhatsAppIcon } from './WhatsAppIcon'
import { whatsappUrl } from '../lib/constants'
import { trackEvent } from '../lib/tracking'

export function WhatsAppButton() {
  return (
    <a href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })} className="whatsapp-float group" aria-label="Solicitar atendimento pelo WhatsApp">
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#061a3d] px-3 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">Fale com a TS Refrigeração</span>
      <WhatsAppIcon className="size-7" />
    </a>
  )
}

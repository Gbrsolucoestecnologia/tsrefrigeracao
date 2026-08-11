import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Brand } from './Brand'
import { WhatsAppIcon } from './WhatsAppIcon'
import { trackEvent } from '../lib/tracking'
import { whatsappUrl } from '../lib/constants'

const links = [
  ['Início', '#inicio'], ['Sobre', '#sobre'], ['Serviços', '#servicos'],
  ['Clientes', '#clientes'], ['Trabalhe conosco', '#trabalhe-conosco'], ['Contato', '#contato'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!open) return
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (event.key === 'Tab') {
        const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); menuButtonRef.current?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); menuButtonRef.current?.focus() }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (open) mobileMenuRef.current?.querySelector<HTMLElement>('a[href]')?.focus()
  }, [open])

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`header-shell container-shell rounded-full border px-5 transition-all sm:px-7 ${open ? 'is-menu-open' : ''} ${scrolled ? 'is-scrolled border-slate-200/80 bg-white/95 shadow-[0_10px_35px_rgba(13,45,85,.16)] backdrop-blur-xl' : 'border-white/20 bg-[#0a315c]/70 shadow-[0_12px_35px_rgba(7,29,73,.2)] backdrop-blur-md'}`}>
        <div className="flex h-[4.25rem] items-center justify-between">
          <Brand />
          <nav className="header-nav hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {links.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
          </nav>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'header' })} className="header-contact header-top-contact hidden lg:inline-flex">
            <WhatsAppIcon className="size-5" /> Fale conosco
          </a>
          <button ref={menuButtonRef} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} className="header-menu-button focus-ring grid size-11 place-items-center rounded-xl lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav ref={mobileMenuRef} id="mobile-menu" className="header-mobile-menu border-t pb-5 pt-3 lg:hidden" aria-label="Navegação para dispositivos móveis">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold">{label}</a>)}
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'mobile_menu' })} className="header-contact mt-2 w-full"><WhatsAppIcon className="size-5" /> Fale conosco</a>
          </nav>
        )}
      </div>
    </header>
  )
}

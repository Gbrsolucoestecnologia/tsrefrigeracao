import { useEffect, useState } from 'react'
import { CONSENT_STORAGE_KEY } from '../lib/constants'
import { initializeTracking } from '../lib/tracking'

type Consent = 'accepted' | 'necessary'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_STORAGE_KEY) as Consent | null
    if (consent === 'accepted') initializeTracking()
    if (!consent) {
      setVisible(true)
      document.body.classList.add('cookie-consent-open')
    }
    return () => document.body.classList.remove('cookie-consent-open')
  }, [])

  const choose = (consent: Consent) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, consent)
    if (consent === 'accepted') initializeTracking()
    document.body.classList.remove('cookie-consent-open')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside className="cookie-banner" aria-label="Preferências de privacidade" aria-live="polite">
      <div>
        <strong>Seu controle de privacidade</strong>
        <p>Usamos armazenamento necessário para lembrar sua escolha. Métricas de acesso só serão ativadas com sua permissão. <a href="#privacidade">Saiba mais</a>.</p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="btn-secondary" onClick={() => choose('necessary')}>Somente necessários</button>
        <button type="button" className="btn-primary" onClick={() => choose('accepted')}>Aceitar métricas</button>
      </div>
    </aside>
  )
}

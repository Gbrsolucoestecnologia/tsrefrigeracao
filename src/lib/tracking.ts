type EventParams = Record<string, string | number | boolean>
type MetaPixel = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    fbq?: MetaPixel
  }
}

let initialized = false

export function trackEvent(name: string, params: EventParams = {}) {
  if (!initialized) return
  window.dataLayer?.push({ event: name, ...params })
  window.fbq?.('trackCustom', name, params)
}

export function initializeTracking() {
  if (initialized) return
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
  const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim()
  initialized = true

  if (gaId) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
    document.head.appendChild(script)
    window.dataLayer = window.dataLayer ?? []
    const gtag = (...args: unknown[]) => window.dataLayer?.push(args)
    gtag('js', new Date())
    gtag('config', gaId, { anonymize_ip: true })
  }

  if (pixelId) {
    const fbq = ((...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args)
      else fbq.queue.push(args)
    }) as MetaPixel
    fbq.queue = []
    fbq.loaded = true
    fbq.version = '2.0'
    window.fbq = fbq

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
    fbq('init', pixelId)
    fbq('track', 'PageView')
  }
}

export const PHONE_DISPLAY = '(85) 98534-1851'
export const PHONE_NUMBER = '5585985341851'
export const PHONE_HREF = `tel:+${PHONE_NUMBER}`
export const EMAIL = 'ts.refrigeracaoclimatiza@gmail.com'
export const SITE_URL = 'https://gbrsolucoestecnologia.github.io/tsrefrigeracao/'
export const BUSINESS_NAME = 'TS Refrigeração & Climatização'
export const LEGAL_NAME = 'Thiago Bernardo da Silva'
export const CNPJ = '54.031.988/0001-85'
export const SERVICE_AREA = 'Fortaleza e localidades próximas, mediante consulta de disponibilidade'
export const CONSENT_STORAGE_KEY = 'tsr-analytics-consent-v1'
export const DEFAULT_MESSAGE =
  'Olá, gostaria de solicitar um atendimento para instalação ou manutenção de ar-condicionado.'

export const whatsappUrl = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`

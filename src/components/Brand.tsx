export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="TS Refrigeração e Climatização — início">
      <img
        src={`${import.meta.env.BASE_URL}images/Logo.webp`}
        alt="TS Refrigeração & Climatização"
        className={`brand-logo-full h-12 w-[185px] object-contain object-left sm:w-[205px] ${inverse ? 'brand-logo-inverse' : ''}`}
      />
      <img src={`${import.meta.env.BASE_URL}images/logo-favicon.png`} alt="TS Refrigeração" className="brand-logo-compact" />
    </a>
  )
}

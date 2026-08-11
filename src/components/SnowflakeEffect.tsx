import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'

type Flake = { id: number; x: number; y: number; size: number; drift: number; duration: number; rotate: number; color: string }
type FlakeStyle = CSSProperties & Record<'--drift' | '--rotate', string>

export function SnowflakeEffect() {
  const layerRef = useRef<HTMLDivElement>(null)
  const [flakes, setFlakes] = useState<Flake[]>([])
  const [reduced, setReduced] = useState(true)
  const id = useRef(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  const spawn = useCallback((x: number, y: number, emphasized = false) => {
    if (reduced) return
    const flake: Flake = { id: ++id.current, x, y, size: 10 + Math.random() * (emphasized ? 12 : 8), drift: -24 + Math.random() * 48, duration: 1700 + Math.random() * 1300, rotate: 120 + Math.random() * 300, color: ['#ffffff', '#9be9ff', '#52d3f5'][Math.floor(Math.random() * 3)] }
    setFlakes((current) => [...current.slice(-17), flake])
    window.setTimeout(() => setFlakes((current) => current.filter((item) => item.id !== flake.id)), flake.duration + 100)
  }, [reduced])

  useEffect(() => {
    if (reduced || window.matchMedia('(pointer: fine)').matches) return
    const timer = window.setInterval(() => spawn(8 + Math.random() * 84, 4 + Math.random() * 26), 1500)
    return () => window.clearInterval(timer)
  }, [reduced, spawn])

  useEffect(() => {
    const parent = layerRef.current?.parentElement
    if (!parent || reduced) return
    const move = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== 'mouse' || Date.now() - lastSpawn.current < 130) return
      lastSpawn.current = Date.now()
      const rect = parent.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      spawn(x, y, x > 52)
    }
    parent.addEventListener('pointermove', move)
    return () => parent.removeEventListener('pointermove', move)
  }, [reduced, spawn])

  return (
    <div ref={layerRef} className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => <span key={flake.id} className="snow-particle" style={{ left: `${flake.x}%`, top: `${flake.y}%`, fontSize: `${flake.size}px`, color: flake.color, animationDuration: `${flake.duration}ms`, '--drift': `${flake.drift}px`, '--rotate': `${flake.rotate}deg` } as FlakeStyle}>❄</span>)}
    </div>
  )
}

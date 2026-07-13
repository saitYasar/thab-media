'use client'

import { useState, useRef, useEffect } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { provinceInventory, ProvinceInventory, categoryLabels } from '@/data/provinceInventory'

interface LocationsMapSectionProps {
  title: string
  description: string
  locale: string
}

interface PopupState {
  id: string
  name: string
  inventory: ProvinceInventory | null
  x: number
  y: number
}

const comingSoonLabels: Record<string, string> = {
  tr: 'Yakında hizmet verilecek',
  en: 'Coming soon',
  fr: 'Bientôt disponible',
}

const legendLabels: Record<string, { active: string; coming: string }> = {
  tr: { active: 'Aktif İller', coming: 'Yakında' },
  en: { active: 'Active Cities', coming: 'Coming Soon' },
  fr: { active: 'Villes actives', coming: 'Bientôt' },
}

function getProvinceColors(id: string) {
  const hasInventory = id in provinceInventory
  return {
    fill: hasInventory ? 'rgba(255, 10, 10, 0.3)' : 'rgba(255, 255, 255, 0.1)',
    stroke: hasInventory ? 'rgba(255, 10, 10, 0.5)' : 'rgba(255, 255, 255, 0.25)',
  }
}

function getProvinceHoverColors(id: string) {
  const hasInventory = id in provinceInventory
  return {
    fill: hasInventory ? 'rgba(255, 10, 10, 0.55)' : 'rgba(255, 255, 255, 0.25)',
    stroke: hasInventory ? 'rgba(255, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.5)',
  }
}

export function LocationsMapSection({ title, description, locale }: LocationsMapSectionProps) {
  const [popup, setPopup] = useState<PopupState | null>(null)
  const [svgLoaded, setSvgLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const hoveredPath = useRef<SVGPathElement | null>(null)
  const labels = categoryLabels[locale] || categoryLabels.tr
  const comingSoon = comingSoonLabels[locale] || comingSoonLabels.tr
  const legend = legendLabels[locale] || legendLabels.tr

  useEffect(() => {
    fetch('/images/turkey-map.svg')
      .then(res => res.text())
      .then(text => {
        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = text
          setSvgLoaded(true)
        }
      })
  }, [])

  useEffect(() => {
    if (!svgLoaded || !svgContainerRef.current) return

    const container = svgContainerRef.current
    const svg = container.querySelector('svg')
    if (!svg) return

    svg.style.background = 'transparent'
    svg.style.width = '100%'
    svg.style.height = 'auto'
    svg.style.maxHeight = '420px'
    svg.removeAttribute('fill')

    const excludeIds = ['kibris', 'kuzey-kibris', 'guney-kibris']
    excludeIds.forEach(id => {
      const el = svg.querySelector(`[id="${id}"]`)
      if (el) el.remove()
    })

    const allGroups = svg.querySelectorAll('g[id]')
    allGroups.forEach(g => {
      const id = g.getAttribute('id') || ''
      if (id === 'turkiye' || id === 'svg-turkiye-haritasi') return

      const colors = getProvinceColors(id)
      const paths = g.querySelectorAll(':scope > path')
      paths.forEach(path => {
        path.setAttribute('fill', colors.fill)
        path.setAttribute('stroke', colors.stroke)
        path.setAttribute('stroke-width', '0.8')
        path.setAttribute('data-province-id', id)
        path.setAttribute('data-province-name', g.getAttribute('data-iladi') || id)
        ;(path as HTMLElement).style.cursor = 'pointer'
        ;(path as HTMLElement).style.transition = 'fill 0.2s, stroke 0.2s'
      })

      const name = g.getAttribute('data-iladi') || id
      const firstPath = paths[0] as SVGPathElement | null
      if (firstPath) {
        const bbox = firstPath.getBBox()
        const cx = bbox.x + bbox.width / 2
        const cy = bbox.y + bbox.height / 2
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        label.setAttribute('x', String(cx))
        label.setAttribute('y', String(cy))
        label.setAttribute('text-anchor', 'middle')
        label.setAttribute('dominant-baseline', 'central')
        label.setAttribute('fill', '#ffffff')
        label.setAttribute('font-size', '6')
        label.setAttribute('font-weight', '500')
        label.setAttribute('font-family', 'Inter, sans-serif')
        label.setAttribute('pointer-events', 'none')
        label.textContent = name
        g.appendChild(label)
      }
    })
  }, [svgLoaded])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (mapRef.current && !mapRef.current.contains(e.target as Node)) {
        setPopup(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleMapClick(e: React.MouseEvent) {
    const target = e.target as Element
    if (!target.matches('path[data-province-id]')) return

    const path = target as SVGPathElement
    const id = path.getAttribute('data-province-id') || ''
    const name = path.getAttribute('data-province-name') || id
    const inventory = provinceInventory[id] || null

    const containerRect = svgContainerRef.current?.getBoundingClientRect()
    if (!containerRect) return

    const x = e.clientX - containerRect.left
    const y = e.clientY - containerRect.top

    setPopup({ id, name, inventory, x, y })
  }

  function handleMouseOver(e: React.MouseEvent) {
    const target = e.target as Element
    if (!target.matches('path[data-province-id]')) return

    const path = target as SVGPathElement
    const id = path.getAttribute('data-province-id') || ''
    const colors = getProvinceHoverColors(id)
    path.setAttribute('fill', colors.fill)
    path.setAttribute('stroke', colors.stroke)
    path.setAttribute('stroke-width', '1.5')
    hoveredPath.current = path
  }

  function handleMouseOut(e: React.MouseEvent) {
    const target = e.target as Element
    if (!target.matches('path[data-province-id]')) return

    const path = target as SVGPathElement
    const id = path.getAttribute('data-province-id') || ''
    const colors = getProvinceColors(id)
    path.setAttribute('fill', colors.fill)
    path.setAttribute('stroke', colors.stroke)
    path.setAttribute('stroke-width', '0.8')

    if (hoveredPath.current === path) {
      hoveredPath.current = null
    }
  }

  const containerHeight = svgContainerRef.current?.clientHeight || 400

  return (
    <Section bg="dark" className="bg-[#060e1f]">
      <Container>
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[40px] md:leading-[1.2] font-bold text-white">
            {title}
          </h2>
          {description && (
            <p className="mt-4 md:mt-5 text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div ref={mapRef} className="relative w-full max-w-5xl mx-auto">
          <div
            ref={svgContainerRef}
            className="w-full"
            style={{ minHeight: '280px' }}
            onClick={handleMapClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          {popup && (
            <div
              className="absolute z-50 pointer-events-none"
              style={{
                left: `${Math.min(Math.max(popup.x, 130), (svgContainerRef.current?.clientWidth || 800) - 130)}px`,
                top: `${Math.max(popup.y, 0)}px`,
                transform: popup.y < containerHeight * 0.35 ? 'translate(-50%, 20px)' : 'translate(-50%, -100%)',
              }}
            >
              <div className="pointer-events-auto bg-[#0c1a3a] border border-white/15 rounded-xl shadow-2xl p-4 min-w-[220px] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-heading font-bold text-white text-base">
                    {popup.name}
                  </h4>
                  <button
                    onClick={() => setPopup(null)}
                    className="text-white/40 hover:text-white/80 transition-colors text-lg leading-none ml-3"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>

                {popup.inventory ? (
                  <div className="space-y-1.5 max-h-[200px] overflow-y-auto">
                    {Object.entries(popup.inventory).map(([key, value]) =>
                      value > 0 ? (
                        <InventoryRow key={key} label={labels[key] || key} count={value} />
                      ) : null
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-white/50 italic">{comingSoon}</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 rounded-sm bg-[rgba(255,10,10,0.25)] border border-[rgba(255,10,10,0.4)]" />
            <span>{legend.active}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 rounded-sm bg-white/[0.08] border border-white/20" />
            <span>{legend.coming}</span>
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-white/30">
          {locale === 'en' ? '* Approximate inventory count' : locale === 'fr' ? '* Nombre approximatif d\'inventaire' : '* Yaklaşık envanter adedidir'}
        </p>
      </Container>
    </Section>
  )
}

function InventoryRow({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-white/60">{label}</span>
      <span className="font-semibold text-white">{count}+</span>
    </div>
  )
}

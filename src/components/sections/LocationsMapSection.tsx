'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
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

const EXCLUDED_IDS = ['turkiye', 'kibris', 'kuzey-kibris', 'guney-kibris']

export function LocationsMapSection({ title, description, locale }: LocationsMapSectionProps) {
  const [popup, setPopup] = useState<PopupState | null>(null)
  const [mapReady, setMapReady] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const objectRef = useRef<HTMLObjectElement>(null)
  const labels = categoryLabels[locale] || categoryLabels.tr
  const comingSoon = comingSoonLabels[locale] || comingSoonLabels.tr
  const legend = legendLabels[locale] || legendLabels.tr

  const styleMap = useCallback(() => {
    const obj = objectRef.current
    if (!obj) return
    const svgDoc = obj.contentDocument
    if (!svgDoc) return

    const svg = svgDoc.querySelector('svg')
    if (!svg) return

    svg.style.background = 'transparent'
    svg.removeAttribute('fill')

    EXCLUDED_IDS.forEach(id => {
      const el = svgDoc.getElementById(id)
      if (el && el.tagName === 'g') el.remove()
    })

    const groups = svg.querySelectorAll('g[id]')
    groups.forEach(g => {
      const id = g.getAttribute('id') || ''
      const hasInventory = id in provinceInventory || id === 'istanbul'
      const paths = g.querySelectorAll('path')
      paths.forEach(path => {
        path.setAttribute('fill', hasInventory ? 'rgba(255, 10, 10, 0.3)' : 'rgba(255, 255, 255, 0.1)')
        path.setAttribute('stroke', hasInventory ? 'rgba(255, 10, 10, 0.5)' : 'rgba(255, 255, 255, 0.25)')
        path.setAttribute('stroke-width', '0.8')
        path.setAttribute('data-province-id', id)
        path.setAttribute('data-province-name', g.getAttribute('data-iladi') || id)
        path.style.cursor = 'pointer'
        path.style.transition = 'fill 0.2s, stroke 0.2s, stroke-width 0.2s'
      })
    })

    setMapReady(true)
  }, [])

  const handleObjectLoad = useCallback(() => {
    styleMap()

    const obj = objectRef.current
    if (!obj) return
    const svgDoc = obj.contentDocument
    if (!svgDoc) return

    svgDoc.addEventListener('click', (e: Event) => {
      const target = e.target as Element
      const path = target.closest('path[data-province-id]')
      if (!path) return

      const id = path.getAttribute('data-province-id') || ''
      const name = path.getAttribute('data-province-name') || id
      const inventory = provinceInventory[id] || null

      const objRect = obj.getBoundingClientRect()
      const mouseEvent = e as MouseEvent
      const x = mouseEvent.clientX - objRect.left
      const y = mouseEvent.clientY - objRect.top

      setPopup({ id, name, inventory, x, y })
    })

    svgDoc.addEventListener('mouseover', (e: Event) => {
      const target = e.target as Element
      const path = target.closest('path[data-province-id]') as SVGPathElement | null
      if (!path) return
      const id = path.getAttribute('data-province-id') || ''
      const hasInventory = id in provinceInventory
      path.setAttribute('fill', hasInventory ? 'rgba(255, 10, 10, 0.55)' : 'rgba(255, 255, 255, 0.25)')
      path.setAttribute('stroke', hasInventory ? 'rgba(255, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.5)')
      path.setAttribute('stroke-width', '1.5')
    })

    svgDoc.addEventListener('mouseout', (e: Event) => {
      const target = e.target as Element
      const path = target.closest('path[data-province-id]') as SVGPathElement | null
      if (!path) return
      const id = path.getAttribute('data-province-id') || ''
      const hasInventory = id in provinceInventory
      path.setAttribute('fill', hasInventory ? 'rgba(255, 10, 10, 0.3)' : 'rgba(255, 255, 255, 0.1)')
      path.setAttribute('stroke', hasInventory ? 'rgba(255, 10, 10, 0.5)' : 'rgba(255, 255, 255, 0.25)')
      path.setAttribute('stroke-width', '0.8')
    })
  }, [styleMap])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (mapRef.current && !mapRef.current.contains(e.target as Node)) {
        setPopup(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
          <object
            ref={objectRef}
            data="/images/turkey-map.svg"
            type="image/svg+xml"
            className="w-full h-auto max-h-[420px]"
            style={{ minHeight: '280px' }}
            onLoad={handleObjectLoad}
            aria-label="Türkiye Haritası"
          />

          {popup && (
            <div
              className="absolute z-50 pointer-events-none"
              style={{
                left: `${Math.min(Math.max(popup.x, 120), (objectRef.current?.clientWidth || 800) - 120)}px`,
                top: `${popup.y}px`,
                transform: 'translate(-50%, -110%)',
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
                  <div className="space-y-1.5 max-h-[280px] overflow-y-auto">
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
              <div className="flex justify-center -mt-[1px]">
                <div className="w-3 h-3 bg-[#0c1a3a] border-r border-b border-white/15 rotate-45 -translate-y-1.5" />
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

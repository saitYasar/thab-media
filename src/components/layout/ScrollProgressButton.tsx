'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'

function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      mq.addEventListener('change', cb)
      return () => mq.removeEventListener('change', cb)
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  )
}

export function ScrollProgressButton() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      setScrollPercent(percent)
      setVisible(scrollTop > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'instant' : 'smooth' })
  }

  const circumference = 2 * Math.PI * 18
  const strokeOffset = circumference * (1 - scrollPercent)

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 right-4 md:bottom-8 md:right-6 z-40 w-11 h-11 rounded-full bg-primary shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary-light hover:scale-110 active:scale-95"
    >
      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="18" fill="none" stroke="white" strokeWidth="2" opacity="0.15" />
        <circle
          cx="22" cy="22" r="18"
          fill="none"
          stroke="#FF0A0A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>
      {/* Arrow icon */}
      <svg className="relative w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}

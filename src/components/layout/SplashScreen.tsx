'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [animateOut, setAnimateOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOut(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (animateOut) {
      const timer = setTimeout(() => setVisible(false), 600)
      return () => clearTimeout(timer)
    }
  }, [animateOut])

  if (!visible) return null

  return (
    <div
      onClick={() => setAnimateOut(true)}
      className={`fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer transition-all duration-600 ${
        animateOut ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}
      style={{ background: 'linear-gradient(160deg, #060e24 0%, #112866 50%, #0a1a4a 100%)' }}
    >
      {/* Turkey silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]" aria-hidden="true">
        <Image
          src="/images/turkey-map.svg"
          alt=""
          width={800}
          height={350}
          className="w-[90%] max-w-[800px] h-auto"
          priority
        />
      </div>

      {/* Content */}
      <div className={`relative flex flex-col items-center gap-6 transition-all duration-700 ${
        animateOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <Image
          src="/logo.svg"
          alt="ThaB Media"
          width={160}
          height={90}
          priority
          className="brightness-0 invert drop-shadow-lg"
        />
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-[3px] bg-accent rounded-full" />
          <p className="text-white/70 text-sm sm:text-base tracking-[0.2em] uppercase font-light">
            Doğru Yer, Doğru Zaman
          </p>
        </div>
      </div>
    </div>
  )
}

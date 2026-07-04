import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'ThaB Media — Açık Hava Reklamcılığı'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #060e24 0%, #112866 60%, #1a3a8f 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(255,10,10,0.08) 0%, transparent 60%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-1px',
              display: 'flex',
            }}
          >
            ThaB Media
          </div>
          <div
            style={{
              width: 60,
              height: 4,
              background: '#FF0A0A',
              borderRadius: 4,
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 400,
              display: 'flex',
            }}
          >
            Açık Hava Reklamcılığı & Medya Planlama
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 50,
            fontSize: 18,
            color: 'rgba(255,255,255,0.3)',
            display: 'flex',
          }}
        >
          thabmedya.com
        </div>
      </div>
    ),
    { ...size }
  )
}

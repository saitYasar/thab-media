'use client'

import { useState, useRef, Suspense, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, RoundedBox, ContactShadows, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { Container } from '@/components/ui/Container'
import { adPreviewFormats } from '@/data/adPreviewFormats'

interface FormatLabels {
  billboard: string
  busStop: string
  digitalScreen: string
  busBack: string
  poleBanner: string
  lightbox: string
}

interface FormatDescriptions {
  billboard: string
  busStop: string
  digitalScreen: string
  busBack: string
  poleBanner: string
  lightbox: string
}

interface AdPreviewStudioProps {
  title: string
  description: string
  selectFormat: string
  uploadImage: string
  resetImage: string
  changeBackground: string
  placeholder: string
  privacyNote: string
  cta: string
  ctaHref: string
  formats: FormatLabels
  formatDescriptions: FormatDescriptions
}

const MAX_FILE_SIZE = 5 * 1024 * 1024

// Each format's 3D configuration
interface Format3DConfig {
  panelWidth: number
  panelHeight: number
  poleHeight: number
  poleCount: number
  hasBase: boolean
  hasShelter: boolean
  hasBusBody: boolean
  isGlowing: boolean
  cameraDistance: number
  cameraHeight: number
}

const FORMAT_CONFIGS: Record<string, Format3DConfig> = {
  billboard: { panelWidth: 4.8, panelHeight: 2.4, poleHeight: 2.8, poleCount: 2, hasBase: false, hasShelter: false, hasBusBody: false, isGlowing: false, cameraDistance: 9, cameraHeight: 4 },
  busStop: { panelWidth: 1.2, panelHeight: 1.8, poleHeight: 0, poleCount: 0, hasBase: false, hasShelter: true, hasBusBody: false, isGlowing: true, cameraDistance: 10, cameraHeight: 3.0 },
  digitalScreen: { panelWidth: 1.8, panelHeight: 3.2, poleHeight: 0.5, poleCount: 1, hasBase: true, hasShelter: false, hasBusBody: false, isGlowing: true, cameraDistance: 8, cameraHeight: 2.5 },
  busBack: { panelWidth: 1.1, panelHeight: 0.9, poleHeight: 0, poleCount: 0, hasBase: false, hasShelter: false, hasBusBody: true, isGlowing: false, cameraDistance: 6, cameraHeight: 1.5 },
  poleBanner: { panelWidth: 0.8, panelHeight: 1.8, poleHeight: 5.0, poleCount: 0, hasBase: false, hasShelter: false, hasBusBody: false, isGlowing: false, cameraDistance: 10, cameraHeight: 4 },
  lightbox: { panelWidth: 1.2, panelHeight: 1.8, poleHeight: 0.3, poleCount: 0, hasBase: true, hasShelter: false, hasBusBody: false, isGlowing: true, cameraDistance: 6.5, cameraHeight: 1.8 },
}

function BusBody() {
  const { scene } = useGLTF('/models/bus.gltf')

  const busScene = useMemo(() => {
    const clone = scene.clone()
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: '#f0c800',
          roughness: 0.35,
          metalness: 0.2,
        })
        child.castShadow = true
      }
    })

    const box = new THREE.Box3().setFromObject(clone)
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    const scale = 5.5 / maxDim
    clone.scale.setScalar(scale)

    const newBox = new THREE.Box3().setFromObject(clone)
    const center = newBox.getCenter(new THREE.Vector3())
    clone.position.sub(center)
    clone.position.y += newBox.getSize(new THREE.Vector3()).y / 2

    return clone
  }, [scene])

  return (
    <group position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      <primitive object={busScene} />
    </group>
  )
}

useGLTF.preload('/models/bus.gltf')

function AdPanel3D({ formatId, userTexture, placeholderText }: { formatId: string; userTexture: THREE.Texture | null; placeholderText: string }) {
  const config = FORMAT_CONFIGS[formatId] || FORMAT_CONFIGS.billboard
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.04
    }
  })

  const placeholderTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = Math.round(1024 * (config.panelHeight / config.panelWidth))
    const ctx = canvas.getContext('2d')!

    const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    grd.addColorStop(0, '#0e1b3d')
    grd.addColorStop(1, '#162d6b')
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${Math.round(canvas.width * 0.055)}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    const words = placeholderText.split(' ')
    const cy = canvas.height / 2
    if (words.length > 1) {
      ctx.fillText(words[0], canvas.width / 2, cy - 30)
      ctx.fillText(words.slice(1).join(' '), canvas.width / 2, cy + 30)
    } else {
      ctx.fillText(placeholderText, canvas.width / 2, cy)
    }

    ctx.strokeStyle = '#FF0A0A'
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.35, cy + 70)
    ctx.lineTo(canvas.width * 0.65, cy + 70)
    ctx.stroke()

    const tex = new THREE.CanvasTexture(canvas)
    tex.needsUpdate = true
    return tex
  }, [placeholderText, config.panelWidth, config.panelHeight])

  const displayTexture = userTexture ?? placeholderTexture
  const panelY = config.hasBusBody ? 0.9 : config.poleHeight + config.panelHeight / 2 + (config.hasBase ? 0.3 : 0)
  const panelZ = config.hasBusBody ? 2.75 : 0
  return (
    <group ref={groupRef}>
      {/* Panel frame - hidden for busStop and poleBanner (custom rendering) */}
      {!config.hasShelter && formatId !== 'poleBanner' && (
        <>
          <RoundedBox args={[config.panelWidth + 0.1, config.panelHeight + 0.1, 0.08]} radius={0.03} position={[0, panelY, panelZ - 0.02]} castShadow>
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} />
          </RoundedBox>
          <mesh position={[0, panelY, panelZ + 0.03]}>
            <planeGeometry args={[config.panelWidth, config.panelHeight]} />
            <meshStandardMaterial
              map={displayTexture}
              emissive={config.isGlowing ? '#ffffff' : '#000000'}
              emissiveIntensity={config.isGlowing ? 0.35 : 0}
              emissiveMap={config.isGlowing ? displayTexture : undefined}
              toneMapped={!config.isGlowing}
            />
          </mesh>
          {config.isGlowing && (
            <pointLight position={[0, panelY, 1.5]} intensity={0.4} color="#aaccff" distance={4} />
          )}
        </>
      )}

      {/* Poles */}
      {config.poleCount === 2 && (
        <>
          <mesh position={[-config.panelWidth * 0.35, config.poleHeight / 2, -0.05]} castShadow>
            <cylinderGeometry args={[0.06, 0.08, config.poleHeight + 0.1, 12]} />
            <meshStandardMaterial color="#222222" metalness={0.95} roughness={0.15} />
          </mesh>
          <mesh position={[config.panelWidth * 0.35, config.poleHeight / 2, -0.05]} castShadow>
            <cylinderGeometry args={[0.06, 0.08, config.poleHeight + 0.1, 12]} />
            <meshStandardMaterial color="#222222" metalness={0.95} roughness={0.15} />
          </mesh>
        </>
      )}
      {config.poleCount === 1 && formatId !== 'poleBanner' && (
        <mesh position={[0, config.poleHeight / 2 + (config.hasBase ? 0.3 : 0), -0.05]} castShadow>
          <cylinderGeometry args={[0.05, 0.07, config.poleHeight, 12]} />
          <meshStandardMaterial color="#222222" metalness={0.95} roughness={0.15} />
        </mesh>
      )}
      {formatId === 'poleBanner' && (
        <>
          {/* Main pole - thick metallic */}
          <mesh position={[0, config.poleHeight / 2, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.14, config.poleHeight + 1, 20]} />
            <meshStandardMaterial color="#777777" metalness={0.95} roughness={0.15} />
          </mesh>
          {/* Top light fixture - sphere */}
          <mesh position={[0, config.poleHeight + 0.6, 0]} castShadow>
            <sphereGeometry args={[0.35, 20, 20]} />
            <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Light fixture neck */}
          <mesh position={[0, config.poleHeight + 0.2, 0]} castShadow>
            <cylinderGeometry args={[0.12, 0.1, 0.3, 16]} />
            <meshStandardMaterial color="#555555" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Left bracket arm */}
          <mesh position={[-0.4, config.poleHeight - 1.2, 0]} rotation={[0, 0, -0.15]} castShadow>
            <boxGeometry args={[0.6, 0.04, 0.04]} />
            <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Right bracket arm */}
          <mesh position={[0.4, config.poleHeight - 1.2, 0]} rotation={[0, 0, 0.15]} castShadow>
            <boxGeometry args={[0.6, 0.04, 0.04]} />
            <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Left banner panel */}
          <RoundedBox args={[config.panelWidth + 0.06, config.panelHeight + 0.06, 0.04]} radius={0.01} position={[-0.65, config.poleHeight - 2.2, 0.01]} castShadow>
            <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.3} />
          </RoundedBox>
          <mesh position={[-0.65, config.poleHeight - 2.2, 0.04]}>
            <planeGeometry args={[config.panelWidth, config.panelHeight]} />
            <meshStandardMaterial map={displayTexture} />
          </mesh>
          {/* Right banner panel */}
          <RoundedBox args={[config.panelWidth + 0.06, config.panelHeight + 0.06, 0.04]} radius={0.01} position={[0.65, config.poleHeight - 2.2, 0.01]} castShadow>
            <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.3} />
          </RoundedBox>
          <mesh position={[0.65, config.poleHeight - 2.2, 0.04]}>
            <planeGeometry args={[config.panelWidth, config.panelHeight]} />
            <meshStandardMaterial map={displayTexture} />
          </mesh>
        </>
      )}

      {/* Base plate */}
      {config.hasBase && (
        <RoundedBox args={[0.8, 0.25, 0.5]} radius={0.03} position={[0, 0.125, 0]} castShadow>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
        </RoundedBox>
      )}

      {/* Bus shelter structure */}
      {config.hasShelter && (
        <group position={[0, 0, -1]} rotation={[0, -Math.PI / 4, 0]}>
          {/* === ROOF === */}
          {/* Main roof - wide, slightly angled */}
          <mesh position={[0, 2.6, -0.4]} rotation={[0.06, 0, 0]} castShadow>
            <boxGeometry args={[4.0, 0.06, 1.5]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Roof ribs / decorative lines */}
          {[-1.5, -0.75, 0, 0.75, 1.5].map((x, i) => (
            <mesh key={i} position={[x, 2.63, -0.4]} rotation={[0.06, 0, 0]}>
              <boxGeometry args={[0.02, 0.02, 1.4]} />
              <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.2} />
            </mesh>
          ))}
          {/* Front roof edge */}
          <mesh position={[0, 2.57, 0.33]} castShadow>
            <boxGeometry args={[4.0, 0.08, 0.04]} />
            <meshStandardMaterial color="#111111" metalness={0.95} roughness={0.1} />
          </mesh>

          {/* === POSTS === */}
          {/* Front posts */}
          <mesh position={[-1.9, 1.3, 0.3]} castShadow>
            <boxGeometry args={[0.05, 2.6, 0.05]} />
            <meshStandardMaterial color="#111111" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[1.9, 1.3, 0.3]} castShadow>
            <boxGeometry args={[0.05, 2.6, 0.05]} />
            <meshStandardMaterial color="#111111" metalness={0.95} roughness={0.1} />
          </mesh>
          {/* Back posts */}
          <mesh position={[-1.9, 1.3, -1.1]} castShadow>
            <boxGeometry args={[0.05, 2.6, 0.05]} />
            <meshStandardMaterial color="#111111" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[1.9, 1.3, -1.1]} castShadow>
            <boxGeometry args={[0.05, 2.6, 0.05]} />
            <meshStandardMaterial color="#111111" metalness={0.95} roughness={0.1} />
          </mesh>

          {/* === BACK WALL - lower opaque, upper glass === */}
          {/* Lower opaque panel */}
          <mesh position={[0, 0.5, -1.1]} castShadow>
            <boxGeometry args={[3.75, 1.0, 0.03]} />
            <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
          </mesh>
          {/* Upper glass panel */}
          <mesh position={[0, 1.6, -1.1]}>
            <boxGeometry args={[3.75, 1.2, 0.02]} />
            <meshPhysicalMaterial color="#99ccdd" transparent opacity={0.2} roughness={0.02} />
          </mesh>

          {/* === SIDE GLASS PANELS === */}
          {/* Left side glass */}
          <mesh position={[-1.9, 1.1, -0.4]}>
            <boxGeometry args={[0.02, 2.0, 1.35]} />
            <meshPhysicalMaterial color="#99ccdd" transparent opacity={0.2} roughness={0.02} />
          </mesh>
          {/* Right side - CLP ad panel (replaces glass, acts as side wall) */}
          <RoundedBox args={[0.08, config.panelHeight + 0.1, config.panelWidth + 0.1]} radius={0.03} position={[1.9, 1.1, -0.4]} castShadow>
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} />
          </RoundedBox>
          <mesh position={[1.94, 1.1, -0.4]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[config.panelWidth, config.panelHeight]} />
            <meshStandardMaterial
              map={displayTexture}
              emissive="#ffffff"
              emissiveIntensity={0.35}
              emissiveMap={displayTexture}
              toneMapped={false}
            />
          </mesh>
          <pointLight position={[2.5, 1.1, -0.4]} intensity={0.4} color="#aaccff" distance={4} />

          {/* === BENCH === */}
          <mesh position={[0, 0.45, -0.8]} castShadow>
            <boxGeometry args={[2.8, 0.04, 0.3]} />
            <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.3} />
          </mesh>
          {[-1.1, 0, 1.1].map((x, i) => (
            <mesh key={i} position={[x, 0.22, -0.8]} castShadow>
              <boxGeometry args={[0.03, 0.44, 0.25]} />
              <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} />
            </mesh>
          ))}
        </group>
      )}

      {/* Bus body - geometry */}
      {config.hasBusBody && (
        <BusBody />
      )}
    </group>
  )
}

function Scene({ formatId, userTexture, userBgTexture, placeholderText }: { formatId: string; userTexture: THREE.Texture | null; userBgTexture: THREE.Texture | null; placeholderText: string }) {
  const config = FORMAT_CONFIGS[formatId]
  const { camera } = useThree()
  const controlsRef = useRef<any>(null)
  const targetPos = useRef(new THREE.Vector3())
  const targetLookAt = useRef(new THREE.Vector3())

  const defaultBgTexture = useMemo(() => {
    const loader = new THREE.TextureLoader()
    const path = formatId === 'busBack' ? '/images/otobus-arka-ornek.jpg' : '/images/default-bg.jpg'
    const tex = loader.load(path)
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
  }, [formatId])

  const floorTexture = useMemo(() => {
    if (formatId !== 'busBack') return null
    const loader = new THREE.TextureLoader()
    const tex = loader.load('/images/road-floor.jpg')
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
  }, [formatId])

  const bgTexture = userBgTexture || defaultBgTexture

  useEffect(() => {
    if (config.hasBusBody) {
      targetPos.current.set(0, config.cameraHeight, config.cameraDistance)
      targetLookAt.current.set(0, 0.9, 2.5)
    } else {
      const panelY = config.poleHeight + config.panelHeight / 2 + (config.hasBase ? 0.3 : 0)
      targetPos.current.set(config.cameraDistance * 0.3, config.cameraHeight, config.cameraDistance)
      targetLookAt.current.set(0, panelY * 0.8, 0)
    }
  }, [formatId, config])

  useFrame(() => {
    camera.position.lerp(targetPos.current, 0.04)
    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLookAt.current, 0.04)
      controlsRef.current.update()
    }
  })

  return (
    <>
      {/* Studio lighting */}
      <ambientLight intensity={0.7} color="#ffffff" />
      <directionalLight
        position={[5, 10, 6]}
        intensity={1.8}
        color="#ffffff"
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight position={[-4, 6, -3]} intensity={0.6} color="#ffffff" />
      <directionalLight position={[0, 4, 8]} intensity={0.5} color="#ffffff" />
      <spotLight position={[0, 8, 5]} angle={0.4} penumbra={0.5} intensity={1.0} color="#ffffff" />
      <spotLight position={[-3, 5, 3]} angle={0.5} penumbra={0.8} intensity={0.4} color="#ddeeff" />

      {/* 3D panel */}
      <AdPanel3D formatId={formatId} userTexture={userTexture} placeholderText={placeholderText} />

      {/* Studio floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 2]} receiveShadow>
        <planeGeometry args={[20, 16]} />
        {floorTexture ? (
          <meshBasicMaterial map={floorTexture} />
        ) : (
          <meshStandardMaterial color="#555555" roughness={0.8} metalness={0.05} />
        )}
      </mesh>
      {/* Background walls - image on sides and back */}
      <mesh position={[0, 4, -6]}>
        <planeGeometry args={[24, 14]} />
        <meshBasicMaterial map={bgTexture} />
      </mesh>
      <mesh position={[-10, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[24, 14]} />
        <meshBasicMaterial map={bgTexture} />
      </mesh>
      <mesh position={[10, 4, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[24, 14]} />
        <meshBasicMaterial map={bgTexture} />
      </mesh>
      {/* Sky ceiling */}
      <mesh position={[0, 11, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[24, 24]} />
        <meshBasicMaterial color="#87CEEB" />
      </mesh>

      {/* Contact shadow */}
      <ContactShadows position={[0, 0.01, 0]} opacity={0.6} scale={10} blur={2} far={4} />

      {/* Controls */}
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={true}
        minDistance={2}
        maxDistance={12}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  )
}

export function AdPreviewStudioSection({
  title,
  description,
  selectFormat,
  uploadImage,
  resetImage,
  changeBackground,
  placeholder,
  privacyNote,
  cta,
  ctaHref,
  formats,
  formatDescriptions,
}: AdPreviewStudioProps) {
  const [activeFormat, setActiveFormat] = useState(adPreviewFormats[0].id)
  const [userImage, setUserImage] = useState<string | null>(null)
  const [userTexture, setUserTexture] = useState<THREE.Texture | null>(null)
  const [userBgTexture, setUserBgTexture] = useState<THREE.Texture | null>(null)
  const [isClient, setIsClient] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const bgInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { setIsClient(true) }, [])

  const formatLabel = formats[activeFormat as keyof FormatLabels]
  const formatDesc = formatDescriptions[activeFormat as keyof FormatDescriptions]

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return
    if (file.size > MAX_FILE_SIZE) return

    const reader = new FileReader()
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string
      setUserImage(dataUrl)
      const loader = new THREE.TextureLoader()
      loader.load(dataUrl, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace
        setUserTexture(tex)
      })
    }
    reader.readAsDataURL(file)
  }

  function handleBgChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return
    if (file.size > MAX_FILE_SIZE) return

    const reader = new FileReader()
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string
      const loader = new THREE.TextureLoader()
      loader.load(dataUrl, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace
        setUserBgTexture(tex)
      })
    }
    reader.readAsDataURL(file)
  }

  function handleReset() {
    setUserImage(null)
    setUserTexture(null)
    setUserBgTexture(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
    if (bgInputRef.current) bgInputRef.current.value = ''
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#2a2a2a] to-[#3a3a3a] py-10 md:py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-5 md:mb-12">
          <h1 className="font-heading text-xl sm:text-3xl md:text-[44px] md:leading-[1.2] font-bold text-white">
            {title}
          </h1>
          <p className="mt-2 md:mt-4 text-sm md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed hidden sm:block">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
          {/* Controls */}
          <div className="space-y-4 order-2 lg:order-1">
            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                {selectFormat}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-1 gap-2">
                {adPreviewFormats.map((format) => {
                  const label = formats[format.id as keyof FormatLabels]
                  const isActive = format.id === activeFormat
                  return (
                    <button
                      key={format.id}
                      onClick={() => setActiveFormat(format.id)}
                      className={`text-left rounded-xl px-3 py-2.5 lg:px-4 lg:py-3.5 text-xs lg:text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-accent text-white shadow-lg shadow-accent/25'
                          : 'bg-white/[0.04] text-white/60 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'
                      }`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>

            <p className="text-xs text-white/35 leading-relaxed">{formatDesc}</p>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 rounded-lg bg-white/[0.08] border border-white/[0.12] text-white/80 px-3 py-2.5 text-xs lg:text-sm font-medium hover:bg-white/[0.14] transition-colors"
              >
                {uploadImage}
              </button>
              {(userImage || userBgTexture) && (
                <button
                  onClick={handleReset}
                  className="rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/50 px-3 py-2.5 text-xs lg:text-sm hover:text-white/80 transition-colors"
                >
                  {resetImage}
                </button>
              )}
            </div>
            <button
              onClick={() => bgInputRef.current?.click()}
              className="w-full rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/50 px-3 py-2 text-xs lg:text-sm hover:bg-white/[0.08] hover:text-white/70 transition-colors"
            >
              {changeBackground}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <input
              ref={bgInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleBgChange}
              className="hidden"
            />

            <p className="text-[10px] lg:text-[11px] text-white/20 leading-relaxed">{privacyNote}</p>

            <a
              href={ctaHref}
              className="block w-full rounded-lg bg-accent text-white text-center py-3 text-sm font-semibold hover:bg-accent-hover transition-colors shadow-sm"
            >
              {cta}
            </a>
          </div>

          {/* 3D Preview */}
          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#3a3a3a] aspect-[3/4] sm:aspect-[4/3] min-h-[380px] sm:min-h-[420px] lg:min-h-[500px]">
            {isClient && (
              <Suspense fallback={
                <div className="absolute inset-0 flex items-center justify-center bg-[#3a3a3a]">
                  <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                </div>
              }>
                <Canvas
                  shadows
                  gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
                  camera={{ fov: 45, near: 0.1, far: 50 }}
                  style={{ background: '#87CEEB' }}
                >
                  <Scene
                    formatId={activeFormat}
                    userTexture={userTexture}
                    userBgTexture={userBgTexture}
                    placeholderText={placeholder}
                  />
                </Canvas>
              </Suspense>
            )}

            {/* Label */}
            <div className="absolute top-3 left-3 pointer-events-none">
              <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-md bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                {formatLabel}
              </span>
            </div>

            {/* Drag hint */}
            <div className="absolute bottom-3 right-3 pointer-events-none">
              <span className="text-[10px] text-white/25">360°</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

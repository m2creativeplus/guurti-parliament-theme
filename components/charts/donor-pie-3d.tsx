"use client"

import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Text, useTexture } from "@react-three/drei"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Maximize2, RotateCw } from "lucide-react"
import * as THREE from "three"

const donorData = [
  { name: "European Union", value: 67.8, color: "#E67E22", logo: "🇪🇺", sdg: 17 },
  { name: "United Kingdom", value: 52.3, color: "#3498DB", logo: "🇬🇧", sdg: 16 },
  { name: "Germany", value: 45.2, color: "#2C3E50", logo: "🇩🇪", sdg: 8 },
  { name: "Netherlands", value: 41.5, color: "#16A085", logo: "🇳🇱", sdg: 10 },
  { name: "Sweden", value: 38.7, color: "#F39C12", logo: "🇸🇪", sdg: 5 },
  { name: "Norway", value: 35.9, color: "#E74C3C", logo: "🇳🇴", sdg: 13 },
  { name: "Denmark", value: 28.4, color: "#9B59B6", logo: "🇩🇰", sdg: 11 },
  { name: "Others", value: 90.2, color: "#7F8C8D", logo: "🌍", sdg: 1 },
]

function SomalilandMap3D() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -0.5, 0]}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial
        map={useTexture(
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag-map_of_Somaliland.svg-ErQXmkZP7fZL56ztLjixERV54VC2jl.png",
        )}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

function DonorPieChart3D({ data, selectedSegment, setSelectedSegment }: any) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
    }
  })

  const total = data.reduce((sum: number, d: any) => sum + d.value, 0)
  let currentAngle = 0

  const sdgColors: { [key: number]: string } = {
    1: "#E5243B",
    5: "#FF3A21",
    8: "#A21942",
    10: "#DD1367",
    11: "#FD9D24",
    13: "#3F7E44",
    16: "#00689D",
    17: "#19486A",
  }

  return (
    <>
      <Suspense fallback={null}>
        <SomalilandMap3D />
      </Suspense>

      <group ref={groupRef} position={[0, 0.5, 0]}>
        {data.map((donor: any, index: number) => {
          const angle = (donor.value / total) * Math.PI * 2
          const startAngle = currentAngle
          const endAngle = currentAngle + angle
          const midAngle = (startAngle + endAngle) / 2

          const isSelected = selectedSegment === index

          const geometry = new THREE.CylinderGeometry(3.5, 3.5, 0.6, 64, 1, false, startAngle, angle)
          const position: [number, number, number] = isSelected
            ? [Math.cos(midAngle) * 0.4, 0, Math.sin(midAngle) * 0.4]
            : [0, 0, 0]

          currentAngle = endAngle

          const segmentColor = sdgColors[donor.sdg] || donor.color

          return (
            <group key={index} position={position}>
              <mesh
                geometry={geometry}
                position={[0, 0, 0]}
                onClick={() => setSelectedSegment(index === selectedSegment ? null : index)}
                onPointerOver={() => (document.body.style.cursor = "pointer")}
                onPointerOut={() => (document.body.style.cursor = "default")}
              >
                <meshStandardMaterial color={segmentColor} roughness={0.2} metalness={0.7} />
              </mesh>
              <Text
                position={[Math.cos(midAngle) * 4.5, 0.2, Math.sin(midAngle) * 4.5]}
                fontSize={0.5}
                color="white"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.08}
                outlineColor="#000000"
              >
                {donor.logo}
              </Text>
              <Text
                position={[Math.cos(midAngle) * 4.5, -0.2, Math.sin(midAngle) * 4.5]}
                fontSize={0.25}
                color={sdgColors[donor.sdg]}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.05}
                outlineColor="#ffffff"
              >
                SDG {donor.sdg}
              </Text>
            </group>
          )
        })}

        <Text position={[0, 1.2, 0]} fontSize={0.6} color="#0D9488" anchorX="center" anchorY="middle" fontWeight={700}>
          SOMALILAND
        </Text>
        <Text position={[0, 0.6, 0]} fontSize={0.3} color="#FFD700" anchorX="center" anchorY="middle">
          ${total.toFixed(1)}M
        </Text>
        <Text position={[0, 0.2, 0]} fontSize={0.2} color="#E5E7EB" anchorX="center" anchorY="middle">
          Total Aid Portfolio
        </Text>
      </group>
    </>
  )
}

export function DonorPie3D() {
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <Card className="w-full card-premium overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/5 to-background">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-background/80">
                Interactive 3D Visualization
              </Badge>
              <Badge className="bg-accent text-accent-foreground">Drag to Rotate</Badge>
              <Badge variant="secondary">SDG Mapped</Badge>
            </div>
            <CardTitle className="text-2xl">Donor Distribution by Country</CardTitle>
            <CardDescription className="text-base mt-2">
              3D visualization with Somaliland map and SDG goal mapping • Click segments for details
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => setSelectedSegment(null)}
            >
              <RotateCw className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div
          className={`${isFullscreen ? "h-screen" : "h-[500px]"} w-full bg-gradient-to-br from-slate-900 to-slate-800`}
        >
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 8, 8]} />
            <OrbitControls enablePan={false} minDistance={8} maxDistance={15} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} castShadow />
            <Suspense fallback={null}>
              <DonorPieChart3D
                data={donorData}
                selectedSegment={selectedSegment}
                setSelectedSegment={setSelectedSegment}
              />
            </Suspense>
          </Canvas>
        </div>

        <div className="p-6 border-t bg-background/95">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {donorData.map((donor, index) => (
              <button
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all hover:shadow-lg ${
                  selectedSegment === index
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setSelectedSegment(index === selectedSegment ? null : index)}
              >
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: donor.color }}></div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold">{donor.name}</p>
                  <p className="text-xs text-muted-foreground">${donor.value}M</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

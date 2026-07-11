import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import type { Group } from 'three'

function Core() {
  const group = useRef<Group>(null)
  const points = useMemo(() => {
    const values = new Float32Array(420)
    for (let i = 0; i < values.length; i += 3) {
      const radius = 1.3 + Math.random() * 2.2
      const angle = Math.random() * Math.PI * 2
      const height = (Math.random() - 0.5) * 3.8
      values[i] = Math.cos(angle) * radius
      values[i + 1] = height
      values[i + 2] = Math.sin(angle) * radius
    }
    return values
  }, [])
  useFrame(({ clock, pointer }) => {
    if (!group.current) return
    group.current.rotation.y = clock.getElapsedTime() * 0.16 + pointer.x * 0.22
    group.current.rotation.x = pointer.y * 0.12
  })
  return <group ref={group}>
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.65}>
      <mesh rotation={[0.3, 0.4, 0]}>
        <icosahedronGeometry args={[1.45, 2]} />
        <MeshDistortMaterial color="#4de0ff" emissive="#1766ff" emissiveIntensity={1.2} roughness={0.12} metalness={0.75} distort={0.28} speed={1.5} wireframe />
      </mesh>
      <mesh scale={0.62} rotation={[0.4, -0.2, 0.4]}>
        <octahedronGeometry args={[1.45, 0]} />
        <meshStandardMaterial color="#99f6ff" emissive="#1678ff" emissiveIntensity={1.5} transparent opacity={0.8} metalness={0.9} roughness={0.16} />
      </mesh>
    </Float>
    <Points positions={points} stride={3} frustumCulled>
      <PointMaterial transparent color="#7be8ff" size={0.025} sizeAttenuation depthWrite={false} opacity={0.65} />
    </Points>
  </group>
}

export function HeroCore() {
  return <div className="hero-canvas" aria-hidden="true">
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.2], fov: 47 }} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}>
      <ambientLight intensity={0.65} />
      <pointLight position={[3, 3, 3]} intensity={18} color="#33c8ff" />
      <pointLight position={[-4, -2, 2]} intensity={8} color="#8766ff" />
      <Suspense fallback={null}><Core /></Suspense>
    </Canvas>
  </div>
}

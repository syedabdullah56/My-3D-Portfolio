import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

// === Computers Model Component ===
const Computers = ({ groupRef }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)
    const handler = (e) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <group ref={groupRef} >
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 10, 5]} intensity={1.2} />
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.60}
        position={isMobile ? [-2.5, -3.2, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  )
}

// === Rotation Controller with Mouse Hold Detection ===
const SceneWrapper = () => {
  const groupRef = useRef()
  const { gl } = useThree()

  const [rotationDirection, setRotationDirection] = useState(0)

  useEffect(() => {
    const canvas = gl.domElement

    const handleMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const centerX = rect.width / 2
      setRotationDirection(x > centerX ? 1 : -1) // right or left
    }

    const handleMouseUp = () => {
      setRotationDirection(0)
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [gl])

  // Rotate continuously while mouse is down
  useFrame(() => {
    if (groupRef.current && rotationDirection !== 0) {
      groupRef.current.rotation.y += rotationDirection * 0.05 // Fast servo-like
    }
  })

  return <Computers groupRef={groupRef} />
}

// === Canvas Export ===
const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SceneWrapper />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas

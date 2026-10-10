'use client';

import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleData {
  x: number;
  y: number;
  z: number;
  speedY: number;
  speedRot: number;
  scale: number;
  color: THREE.Color;
  rotX: number;
  rotY: number;
}

function Particles({ count = 90 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Generate particle positions, speeds, and scales
  const particles = useMemo<ParticleData[]>(() => {
    const temp: ParticleData[] = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 8;
      const speedY = 0.0015 + Math.random() * 0.003;
      const speedRot = 0.004 + Math.random() * 0.008;
      const scale = 0.012 + Math.random() * 0.022;
      // Luminous gold & champagne color variations
      const isGold = Math.random() > 0.4;
      const color = isGold
        ? new THREE.Color(0xf1d492).lerp(new THREE.Color(0xfff1cc), Math.random() * 0.5)
        : new THREE.Color(0xf6f0e8).lerp(new THREE.Color(0xeedbc5), Math.random() * 0.5);

      temp.push({ x, y, z, speedY, speedRot, scale, color, rotX: Math.random() * Math.PI, rotY: Math.random() * Math.PI });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;

    // Smooth mouse lerp
    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

    meshRef.current.position.x = mouseRef.current.x * 0.8;
    meshRef.current.position.y = -mouseRef.current.y * 0.8;

    particles.forEach((p, i) => {
      // Slow drifting upward and floating
      p.y += p.speedY;
      p.rotX += p.speedRot;
      p.rotY += p.speedRot * 0.7;

      if (p.y > 6) p.y = -6;

      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rotX, p.rotY, 0);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, p.color);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {/* Delicate diamond octahedron simulating gold leaf flakes & jasmine petals */}
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial
        transparent={true}
        opacity={0.65}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

export default function HeroParticles() {
  const [enabled, setEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Check screen size
    const mobileCheck = window.innerWidth < 768;
    setIsMobile(mobileCheck);

    // Check WebGL availability safely
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) setEnabled(true);
    } catch {
      setEnabled(false);
    }
  }, []);

  if (!enabled) return null;

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-75"
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 7], fov: 60 }}
          gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        >
          <ambientLight intensity={0.9} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#FFE6A3" />
          <pointLight position={[-5, -5, -3]} intensity={0.8} color="#B89A72" />
          <Particles count={isMobile ? 35 : 110} />
        </Canvas>
      </Suspense>
    </div>
  );
}

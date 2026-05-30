import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
    // gentle drift toward the pointer
    ref.current.position.x +=
      (state.pointer.x * 0.6 - ref.current.position.x) * 0.04;
    ref.current.position.y +=
      (state.pointer.y * 0.4 - ref.current.position.y) * 0.04;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh ref={ref} scale={1.35}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <MeshTransmissionMaterial
          thickness={0.9}
          roughness={0.08}
          transmission={1}
          ior={1.3}
          chromaticAberration={0.45}
          backside
          color="#C06B4A"
        />
      </mesh>
    </Float>
  );
}

function Blob({
  position,
  color,
  scale,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
}) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color={color}
          speed={2.2}
          distort={0.4}
          roughness={0.35}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y +=
      (state.pointer.x * 0.25 - group.current.rotation.y) * 0.03;
    group.current.rotation.x +=
      (-state.pointer.y * 0.15 - group.current.rotation.x) * 0.03;
  });
  return <group ref={group}>{children}</group>;
}

/** Lightweight WebGL scene that floats behind the hero headline. */
export function Hero3D() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#8AA1B1" />
        <Rig>
          <Knot />
          <Blob position={[-3.1, 1.4, -1]} color="#8AA1B1" scale={0.7} />
          <Blob position={[3.2, -1.3, -0.5]} color="#8C9A82" scale={0.55} />
          <Blob position={[2.6, 1.8, -2]} color="#B98A6E" scale={0.42} />
        </Rig>
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}

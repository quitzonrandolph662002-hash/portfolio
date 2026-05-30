import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

/** Soft matte organic blob (wabi-sabi feel). */
function Blob({
  position,
  color,
  scale,
  speed = 2,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed?: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.1;
  });
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color={color}
          speed={1.6}
          distort={0.42}
          roughness={0.85}
          metalness={0}
        />
      </mesh>
    </Float>
  );
}

function Ring() {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.z += delta * 0.1;
    ref.current.position.x +=
      (state.pointer.x * 0.7 - ref.current.position.x) * 0.04;
    ref.current.position.y +=
      (state.pointer.y * 0.5 - ref.current.position.y) * 0.04;
  });
  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref} scale={1.25}>
        <torusGeometry args={[1.1, 0.34, 48, 120]} />
        <MeshDistortMaterial
          color="#F2ECCB"
          speed={1.2}
          distort={0.18}
          roughness={0.7}
          metalness={0.05}
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
      (state.pointer.x * 0.2 - group.current.rotation.y) * 0.03;
    group.current.rotation.x +=
      (-state.pointer.y * 0.12 - group.current.rotation.x) * 0.03;
  });
  return <group ref={group}>{children}</group>;
}

/** Ambient WebGL scene floating behind the hero. */
export function Hero3D() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        {/* Lights only — no remote HDR env map (keeps it offline-safe). */}
        <ambientLight intensity={1.1} />
        <hemisphereLight args={["#FBFAF4", "#A9CFC6", 0.8]} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#7FAEA2" />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#F4EFD2" />
        <Rig>
          <Ring />
          <Blob position={[-3.2, 1.3, -1]} color="#A9CFC6" scale={0.85} />
          <Blob position={[3.3, -1.2, -0.5]} color="#7FAEA2" scale={0.6} speed={2.4} />
          <Blob position={[2.7, 1.9, -2]} color="#E7E0CD" scale={0.5} speed={1.7} />
          <Blob position={[-2.4, -1.8, -1.5]} color="#F4EFD2" scale={0.42} speed={2.2} />
        </Rig>
      </Suspense>
    </Canvas>
  );
}

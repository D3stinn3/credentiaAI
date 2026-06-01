"use client";

import { Line, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import { Vector3 } from "three";

const GOLD = "#a67c00";
const GOLD_GLOW = "#c9a227";
const CYAN = "#0e7c8b";
const CYAN_GLOW = "#2bb8c9";

function useNeuralGraph() {
  return useMemo(() => {
    const nodeCount = 42;
    const radius = 1.35;
    const nodes: Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      nodes.push(
        new Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ),
      );
    }

    const edges: [Vector3, Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 0.95) {
          edges.push([nodes[i], nodes[j]]);
        }
      }
    }

    return { nodes, edges };
  }, []);
}

/** Rotating neural mesh — intelligent automation & clinical decision support */
function NeuralNetwork({ nodes, edges }: ReturnType<typeof useNeuralGraph>) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.18;
    groupRef.current.rotation.x = Math.sin(t * 0.12) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? GOLD : CYAN}
            emissive={i % 3 === 0 ? GOLD_GLOW : CYAN_GLOW}
            emissiveIntensity={0.85}
            metalness={0.4}
            roughness={0.25}
          />
        </mesh>
      ))}
      {edges.map((pair, i) => (
        <Line
          key={`edge-${i}`}
          points={pair}
          color={i % 2 === 0 ? CYAN_GLOW : GOLD_GLOW}
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

/** Gold shield ring — protection, trust, enterprise healthcare */
function ShieldRing() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.08;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2.2, 0, 0]}>
      <torusGeometry args={[1.85, 0.018, 16, 120]} />
      <meshStandardMaterial
        color={GOLD}
        emissive={GOLD_GLOW}
        emissiveIntensity={0.6}
        metalness={0.85}
        roughness={0.15}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

/** Orbiting care-pathway rings — coordination, access, workflows */
function CarePathwayRings() {
  const ringA = useRef<Group>(null);
  const ringB = useRef<Group>(null);
  const ringC = useRef<Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ringA.current) ringA.current.rotation.x = t * 0.35;
    if (ringB.current) ringB.current.rotation.y = t * -0.28;
    if (ringC.current) ringC.current.rotation.z = t * 0.22;
  });

  return (
    <>
      <group ref={ringA} rotation={[0.6, 0.2, 0]}>
        <mesh>
          <torusGeometry args={[2.15, 0.012, 8, 100]} />
          <meshStandardMaterial
            color={CYAN}
            emissive={CYAN_GLOW}
            emissiveIntensity={0.45}
            metalness={0.6}
            roughness={0.3}
            transparent
            opacity={0.55}
          />
        </mesh>
      </group>
      <group ref={ringB} rotation={[1.1, -0.4, 0.3]}>
        <mesh>
          <torusGeometry args={[2.35, 0.01, 8, 100]} />
          <meshStandardMaterial
            color={CYAN}
            emissive={CYAN_GLOW}
            emissiveIntensity={0.45}
            metalness={0.6}
            roughness={0.3}
            transparent
            opacity={0.55}
          />
        </mesh>
      </group>
      <group ref={ringC} rotation={[-0.3, 0.8, -0.2]}>
        <mesh>
          <torusGeometry args={[2.05, 0.014, 8, 100]} />
          <meshStandardMaterial
            color={GOLD}
            emissive={GOLD_GLOW}
            emissiveIntensity={0.4}
            metalness={0.6}
            roughness={0.3}
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>
    </>
  );
}

/** Pulsing core — patient-centered care at the center of automation */
function CareCore() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.06;
    ref.current.scale.setScalar(pulse);
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.42, 1]} />
      <meshStandardMaterial
        color={CYAN}
        emissive={CYAN_GLOW}
        emissiveIntensity={0.9}
        wireframe
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function SceneContent() {
  const graph = useNeuralGraph();

  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={0.9} color={CYAN_GLOW} />
      <pointLight position={[3, -3, -2]} intensity={0.7} color={GOLD_GLOW} />

      <NeuralNetwork {...graph} />
      <ShieldRing />
      <CarePathwayRings />
      <CareCore />

      <Sparkles
        count={60}
        scale={[5, 5, 5]}
        size={2.2}
        speed={0.35}
        color={GOLD_GLOW}
        opacity={0.55}
      />
      <Sparkles
        count={60}
        scale={[5, 5, 5]}
        size={2}
        speed={0.45}
        color={CYAN_GLOW}
        opacity={0.5}
      />
    </>
  );
}

type HealthcareSceneProps = {
  className?: string;
};

export function HealthcareScene({ className = "" }: HealthcareSceneProps) {
  return (
    <div className={`relative h-full w-full ${className}`} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}

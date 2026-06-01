"use client";

import { Line, Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Component, type ReactNode, useMemo, useRef, useState } from "react";
import type { Group, Mesh } from "three";
import { Vector3 } from "three";

const GOLD = "#e8c547";
const CYAN = "#5eead4";

function useNeuralGraph() {
  return useMemo(() => {
    const nodeCount = 36;
    const radius = 1.25;
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
        if (nodes[i].distanceTo(nodes[j]) < 1.0) {
          edges.push([nodes[i], nodes[j]]);
        }
      }
    }

    return { nodes, edges };
  }, []);
}

function NeuralNetwork({ nodes, edges }: ReturnType<typeof useNeuralGraph>) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.35;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? GOLD : CYAN}
            emissive={i % 3 === 0 ? GOLD : CYAN}
            emissiveIntensity={1.2}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      ))}
      {edges.map((pair, i) => (
        <Line
          key={`edge-${i}`}
          points={pair}
          color={i % 2 === 0 ? CYAN : GOLD}
          transparent
          opacity={0.65}
          lineWidth={1.5}
        />
      ))}
    </group>
  );
}

function ShieldRing() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2.15, 0, 0]}>
      <torusGeometry args={[1.75, 0.035, 24, 128]} />
      <meshStandardMaterial
        color={GOLD}
        emissive={GOLD}
        emissiveIntensity={1}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function CarePathwayRings() {
  const ringA = useRef<Group>(null);
  const ringB = useRef<Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ringA.current) {
      ringA.current.rotation.x = t * 0.5;
      ringA.current.rotation.y = t * 0.25;
    }
    if (ringB.current) {
      ringB.current.rotation.y = t * -0.4;
      ringB.current.rotation.z = t * 0.3;
    }
  });

  return (
    <>
      <group ref={ringA} rotation={[0.5, 0.3, 0]}>
        <mesh>
          <torusGeometry args={[2.05, 0.02, 12, 120]} />
          <meshStandardMaterial
            color={CYAN}
            emissive={CYAN}
            emissiveIntensity={0.8}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>
      <group ref={ringB} rotation={[1.2, -0.5, 0.2]}>
        <mesh>
          <torusGeometry args={[2.25, 0.018, 12, 120]} />
          <meshStandardMaterial
            color={GOLD}
            emissive={GOLD}
            emissiveIntensity={0.7}
            transparent
            opacity={0.55}
          />
        </mesh>
      </group>
    </>
  );
}

function CareCore() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.2) * 0.1;
    ref.current.scale.setScalar(pulse);
    ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial
        color={CYAN}
        emissive={CYAN}
        emissiveIntensity={1.5}
        wireframe
      />
    </mesh>
  );
}

function SceneContent() {
  const graph = useNeuralGraph();

  return (
    <>
      <color attach="background" args={["#050a14"]} />
      <fog attach="fog" args={["#050a14", 4, 14]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-4, -2, 3]} intensity={1.2} color={CYAN} />
      <pointLight position={[4, -4, 2]} intensity={1} color={GOLD} />

      <NeuralNetwork {...graph} />
      <ShieldRing />
      <CarePathwayRings />
      <CareCore />

      <Stars radius={80} depth={40} count={1200} factor={3} saturation={0} fade speed={0.8} />
      <Sparkles count={100} scale={6} size={3} speed={0.6} color={GOLD} />
      <Sparkles count={100} scale={6} size={2.5} speed={0.8} color={CYAN} />
    </>
  );
}

type WebGLErrorBoundaryProps = {
  children: ReactNode;
  onError: () => void;
};

class WebGLErrorBoundary extends Component<
  WebGLErrorBoundaryProps,
  { hasError: boolean }
> {
  constructor(props: WebGLErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function CssFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050a14]">
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-accent/30 blur-3xl" />
      <div className="absolute left-1/3 top-1/3 h-32 w-32 animate-spin rounded-full border-2 border-dashed border-gold-primary/50 [animation-duration:12s]" />
      <div className="absolute right-1/4 bottom-1/4 h-40 w-40 animate-spin rounded-full border border-cyan-accent/40 [animation-duration:8s] [animation-direction:reverse]" />
    </div>
  );
}

export function HealthcareScene() {
  const [webglFailed, setWebglFailed] = useState(false);

  if (webglFailed) {
    return <CssFallback />;
  }

  return (
    <WebGLErrorBoundary onError={() => setWebglFailed(true)}>
      <Canvas
        className="!h-full !w-full"
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor("#050a14");
        }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <SceneContent />
      </Canvas>
    </WebGLErrorBoundary>
  );
}

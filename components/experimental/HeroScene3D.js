"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

/**
 * Prototype only — not wired into the live homepage.
 *
 * Tests whether a real-time-lit version of the hero's light shaft and
 * river glow reads better than the current SVG gradient approximation
 * (components/LandscapeHero.js). Uses only procedural geometry and a
 * custom shader — no external 3D assets — so it's evaluable without
 * committing to an asset pipeline first.
 *
 * See VISUAL-SYSTEM.md §5 for how this fits the realism roadmap.
 */

// The light shaft — a vertical plane with a shader that fakes volumetric
// scattering via distance-based falloff and a soft animated flicker,
// rather than SVG's flat linear-gradient-with-opacity trick. This is the
// core thing real-time rendering buys over SVG/CSS: the glow actually
// responds to a light "source" concept instead of being a static gradient.
const shaftVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const shaftFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorCyan;
  uniform vec3 uColorGold;
  varying vec2 vUv;

  void main() {
    // Vertical falloff — brightest near the top (the "source"), fading
    // toward the river. Mirrors the SVG shaft's gradient but with a
    // softer, more physically-plausible curve.
    float verticalFalloff = pow(1.0 - vUv.y, 1.6);

    // Horizontal falloff from center — the shaft narrows as light scatters.
    float horizontalFalloff = 1.0 - smoothstep(0.0, 0.5, abs(vUv.x - 0.5));

    // Slow flicker, matching the ~7s breathing cycle of the SVG version.
    float flicker = 0.85 + 0.15 * sin(uTime * 0.9);

    float intensity = verticalFalloff * horizontalFalloff * flicker;
    vec3 color = mix(uColorGold, uColorCyan, vUv.y);

    gl_FragColor = vec4(color, intensity * 0.55);
  }
`;

function LightShaft() {
  const materialRef = useRef(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorCyan: { value: [120 / 255, 220 / 255, 255 / 255] },
      uColorGold: { value: [201 / 255, 168 / 255, 76 / 255] },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh position={[0, 1.2, -1]}>
      <planeGeometry args={[2.4, 4]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={shaftVertexShader}
        fragmentShader={shaftFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

// Depth-layered valley silhouettes — three simple planes at increasing Z
// distance, colored to match the existing brand navy scale. Real 3D depth
// (true perspective + fog) rather than LandscapeHero's translateY-on-scroll
// approximation of depth.
function ValleyLayers() {
  return (
    <>
      <mesh position={[0, -1.4, -4]} rotation={[0, 0, 0]}>
        <planeGeometry args={[16, 3]} />
        <meshBasicMaterial color="#1c3350" transparent opacity={0.55} />
      </mesh>
      <mesh position={[0, -1.8, -2.5]}>
        <planeGeometry args={[16, 2.4]} />
        <meshBasicMaterial color="#16293e" transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, -2.1, -0.8]}>
        <planeGeometry args={[16, 2]} />
        <meshBasicMaterial color="#0b1826" />
      </mesh>
    </>
  );
}

// Mouse-driven camera parallax — the interactive layer. Subtle, matching
// the site's editorial restraint rather than a showy free-look camera.
function ParallaxCamera({ enabled }) {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    function onMove(e) {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 0.4;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 0.2;
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  useFrame(() => {
    if (!enabled) return;
    camera.position.x += (target.current.x - camera.position.x) * 0.04;
    camera.position.y += (-target.current.y - camera.position.y) * 0.04;
    camera.lookAt(0, 0, -2);
  });

  return null;
}

function Scene({ motionEnabled }) {
  return (
    <>
      <ParallaxCamera enabled={motionEnabled} />
      <ValleyLayers />
      <LightShaft />
    </>
  );
}

function useWebGLSupport() {
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
}

export default function HeroScene3D() {
  const webglSupported = useWebGLSupport();
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setPrefersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!webglSupported) {
    // No-WebGL fallback: fall back to the same gradient the SVG hero
    // uses at rest, so there's never a blank space or broken layout.
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #0b1826 0%, #16293e 55%, #3a3320 82%, rgba(201,168,76,0.55) 100%)",
        }}
      />
    );
  }

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 2], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        frameloop={prefersReduced ? "demand" : "always"}
      >
        <color attach="background" args={["#0b1826"]} />
        <fog attach="fog" args={["#0b1826", 3, 8]} />
        <Scene motionEnabled={!prefersReduced} />
      </Canvas>
    </div>
  );
}

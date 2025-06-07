import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AnimatedShaderBackgroundProps {
  className?: string;
  intensity?: number;
  speed?: number;
}

const AnimatedShaderBackground: React.FC<AnimatedShaderBackgroundProps> = ({
  className = '',
  intensity = 1.0,
  speed = 1.0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(container.offsetWidth, container.offsetHeight) },
        intensity: { value: intensity },
        speed: { value: speed }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        uniform float intensity;
        uniform float speed;

        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);

          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 shake = vec2(sin(iTime * 1.2 * speed) * 0.002, cos(iTime * 2.1 * speed) * 0.002);
          vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
          vec2 v;
          vec4 o = vec4(0.0);

          float f = 2.0 + fbm(p + vec2(iTime * 3.0 * speed, 0.0)) * 0.5;

          for (float i = 0.0; i < 25.0; i++) {
            v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 * speed + i * vec2(13.0, 11.0)) * 2.5 + vec2(sin(iTime * 2.0 * speed + i) * 0.002, cos(iTime * 2.5 * speed - i) * 0.002);
            float tailNoise = fbm(v + vec2(iTime * 0.3 * speed, i)) * 0.2 * (1.0 - (i / 25.0));
            
            // AuraByt brand colors - blues and purples
            vec4 auroraColors = vec4(
              0.2 + 0.4 * sin(i * 0.15 + iTime * 0.3 * speed), // Blue component
              0.4 + 0.3 * cos(i * 0.25 + iTime * 0.4 * speed), // Green component  
              0.8 + 0.2 * sin(i * 0.35 + iTime * 0.2 * speed), // Strong blue
              1.0
            );
            
            vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.6 * speed)) / length(max(v, vec2(v.x * f * 0.012, v.y * 1.2)));
            float thinnessFactor = smoothstep(0.0, 1.0, i / 25.0) * 0.4;
            o += currentContribution * (1.0 + tailNoise * 0.6) * thinnessFactor * intensity;
          }

          o = tanh(pow(o / 80.0, vec4(1.4)));
          gl_FragColor = o * 1.2;
        }
      `,
      transparent: true
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Store references
    rendererRef.current = renderer;
    sceneRef.current = scene;
    materialRef.current = material;

    let frameId: number;
    const animate = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.iTime.value += 0.016;
      }
      if (rendererRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, camera);
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    animationIdRef.current = frameId;

    const handleResize = () => {
      if (!container || !rendererRef.current || !materialRef.current) return;
      
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      
      rendererRef.current.setSize(width, height);
      materialRef.current.uniforms.iResolution.value.set(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      resizeObserver.disconnect();
      
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [intensity, speed]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};

export { AnimatedShaderBackground };
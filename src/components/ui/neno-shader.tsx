"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    camera: THREE.Camera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    uniforms: Record<string, { type: string; value: unknown }>;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      mat2 rotate2d(float angle){
          return mat2(cos(angle),-sin(angle),
                      sin(angle),cos(angle));
      }

      float random(vec2 st){
          return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
      }

      void main(void) {
          vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
          float t = time * 0.1;

          // Domain warp: bend space using layered sin/cos before anything else
          vec2 warp = vec2(
              sin(uv.y * 3.0 + t * 1.5) * cos(uv.x * 2.0 + t * 0.7),
              cos(uv.x * 3.0 - t * 1.2) * sin(uv.y * 2.0 + t * 0.9)
          ) * 0.22;
          uv += warp;

          // Polar coords for angle-based shape modulation
          float r     = length(uv);
          float theta = atan(uv.y, uv.x);

          // Slowly rotate with a sin-modulated speed so it breathes
          uv = rotate2d(t * 0.25 + sin(t * 0.4) * 0.4) * uv;

          float intensity = 0.0;
          float lineWidth = 0.025;

          for(int i = 0; i < 8; i++){
              float fi = float(i);

              // Petal-like boundary: radius varies with angle
              float petals   = sin(theta * (fi + 2.0) + t * (fi * 0.25 + 0.6)) * 0.18;

              // Outward-spiralling ripple
              float ripple   = sin(r * (4.0 + fi * 0.5) - t * 1.8 + fi) * 0.1;

              // Lissajous-style cross-axis interference
              float lissX    = sin(uv.x * (3.0 + fi * 0.7) + t * 1.1);
              float lissY    = cos(uv.y * (3.0 + fi * 0.5) - t * 0.9);
              float liss     = lissX * lissY * 0.07;

              // Breathing pulse per ring (sin gives smoother envelope than raw value)
              float wave     = sin(t * 1.8 + fi * 0.75) * 0.5 + 0.5;

              float shape    = r + petals + ripple + liss;
              intensity     += lineWidth / abs(wave - shape);
          }

          // Color: mix based on angle + radius so hue shifts across the shape
          vec3 color1 = vec3(0.05, 0.4, 1.0);   // deep blue
          vec3 color2 = vec3(0.1,  0.9, 0.3);   // green

          float colorT = sin(theta * 2.0 + r * 3.5 - t * 1.5) * 0.5 + 0.5;
          vec3 baseColor = mix(color1, color2, colorT);

          // Subtle cyan shimmer layer driven by the spiral ripple
          vec3 cyan = vec3(0.0, 0.8, 0.9);
          baseColor  = mix(baseColor, cyan, sin(r * 6.0 - t * 2.5) * 0.25 + 0.25);

          vec3 finalColor = baseColor * intensity;
          finalColor += (random(uv + t) - 0.5) * 0.06;

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const onWindowResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      (uniforms.resolution.value as THREE.Vector2).x = renderer.domElement.width;
      (uniforms.resolution.value as THREE.Vector2).y = renderer.domElement.height;
    };

    onWindowResize();
    window.addEventListener("resize", onWindowResize, false);

    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      (uniforms.time.value as number);
      uniforms.time.value = (uniforms.time.value as number) + 0.05;
      renderer.render(scene, camera);
      if (sceneRef.current) sceneRef.current.animationId = animationId;
    };

    sceneRef.current = { camera, scene, renderer, uniforms, animationId: 0 };
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement);
        }
        sceneRef.current.renderer.dispose();
        geometry.dispose();
        material.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ background: "#000", overflow: "hidden" }}
    />
  );
}

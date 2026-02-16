// src/components/PartnerStoreModel.jsx
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const PartnerStoreModel = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // --- BASIC THREE SETUP ---
    const scene = new THREE.Scene();
    scene.background = null;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(2.2, 2, 4);

    // --- LIGHTS (NEON + SOFT) ---
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
    dirLight.position.set(3, 5, 4);
    scene.add(dirLight);

    const neonPink = new THREE.PointLight(0xff6af0, 1.6, 10);
    neonPink.position.set(-2, 2.2, 2);
    scene.add(neonPink);

    const neonCyan = new THREE.PointLight(0x5ce1ff, 1.4, 10);
    neonCyan.position.set(2.3, 1.2, -2);
    scene.add(neonCyan);

    // Group for animation
    const group = new THREE.Group();
    scene.add(group);

    // --- LOAD GLB STORE MODEL ---
    const loader = new GLTFLoader();
    loader.load(
      "/models/store.glb", // 👈 apna model yahan
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        model.scale.set(1.6, 1.6, 1.6);
        model.position.set(0, -1.1, 0);
        model.rotation.set(0, Math.PI / 8, 0); // thoda right-turn look

        group.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading store.glb:", error);
      }
    );

    // --- RESPONSIVE RESIZE ---
    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;

      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      const t = clock.getElapsedTime();

      // soft float + sway
      group.position.y = Math.sin(t * 1.2) * 0.08;
      group.rotation.y = Math.sin(t * 0.4) * 0.22;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      renderer.dispose();

      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry && obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose && m.dispose());
          } else if (obj.material) {
            obj.material.dispose && obj.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div className="partner-model-wrapper" ref={containerRef}>
      <div className="partner-model-neon-glow" />
      <canvas ref={canvasRef} className="partner-model-canvas" />
    </div>
  );
};

export default PartnerStoreModel;

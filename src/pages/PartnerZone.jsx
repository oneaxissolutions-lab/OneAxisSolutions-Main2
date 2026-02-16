/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useNavigate } from "react-router-dom";
import "../css/Partnerzone.css";

import franchise1 from "../assets/franchise1.png";
import franchise2 from "../assets/franchise2.png";

// ✅ ElectricBorder component
import ElectricBorder from "../components/ElectricBorder";

const PartnerZone = () => {
  const navigate = useNavigate();

  const heroMountRef = useRef(null);
  const globeMountRef = useRef(null);

  const fullText = "Become a One Axis Partner & Build Your Local Franchise";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(t);
    }, 35);
    return () => clearInterval(t);
  }, []);

  // ✅ WhatsApp redirect
  const WHATSAPP_NUMBER = "918954535455";
  const WHATSAPP_MSG =
    "Hi One Axis Solutions! I want to know more about the Franchise opportunity. Please share details.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MSG
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ✅ 3D models (Responsive + ResizeObserver fix)
  useEffect(() => {
    const mountGLB = (mountEl, glbPath, config = {}) => {
      if (!mountEl) return () => {};

      const {
        cameraPos = [0, 1.2, 7],
        target = [0, 1.0, 0],
        modelTargetSize = 3.2,
        modelYOffset = 0.8,
        rotateSpeed = 0.25,
      } = config;

      const scene = new THREE.Scene();
      scene.background = null;

      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
      camera.position.set(...cameraPos);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setClearColor(0x000000, 0);
      renderer.setClearAlpha(0);
      renderer.domElement.style.background = "transparent";
      renderer.domElement.style.display = "block";
      mountEl.appendChild(renderer.domElement);

      // lights
      scene.add(new THREE.AmbientLight(0xffffff, 1.2));
      const dir1 = new THREE.DirectionalLight(0xffffff, 2.2);
      dir1.position.set(5, 6, 4);
      scene.add(dir1);
      const dir2 = new THREE.DirectionalLight(0x88aaff, 1.2);
      dir2.position.set(-6, 3, -3);
      scene.add(dir2);

      // controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.minPolarAngle = Math.PI / 2.8;
      controls.maxPolarAngle = Math.PI / 2.05;

      const loader = new GLTFLoader();
      let model = null;
      let frameId = null;

      const fitModel = (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        // center model
        obj.position.sub(center);

        const maxDim = Math.max(size.x, size.y, size.z);
        const s = modelTargetSize / (maxDim || 1);
        obj.scale.setScalar(s);

        obj.position.y += modelYOffset;
      };

      // ✅ robust resize
      const resize = () => {
        const w = mountEl.clientWidth || 1;
        const h = mountEl.clientHeight || 1;

        camera.aspect = w / h;
        camera.updateProjectionMatrix();

        renderer.setSize(w, h, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      // ✅ ensure mount has size after layout
      requestAnimationFrame(() => resize());

      // ✅ observe parent size changes (mobile/orientation/layout)
      const ro = new ResizeObserver(() => resize());
      ro.observe(mountEl);

      loader.load(
        glbPath,
        (gltf) => {
          model = gltf.scene;

          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
              if (child.material) {
                child.material.side = THREE.DoubleSide;
                child.material.needsUpdate = true;
              }
            }
          });

          fitModel(model);
          scene.add(model);

          controls.target.set(...target);
          controls.update();

          // ✅ resize again after model added
          resize();
        },
        undefined,
        (err) => console.error(`❌ ${glbPath} load error:`, err)
      );

      const clock = new THREE.Clock();
      const animate = () => {
        frameId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        if (model) model.rotation.y = t * rotateSpeed;
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        ro.disconnect();
        if (frameId) cancelAnimationFrame(frameId);

        controls.dispose();
        renderer.dispose();

        scene.traverse((obj) => {
          if (obj.isMesh) {
            obj.geometry?.dispose?.();
            if (Array.isArray(obj.material))
              obj.material.forEach((m) => m?.dispose?.());
            else obj.material?.dispose?.();
          }
        });

        if (renderer.domElement?.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      };
    };

    const cleanupHand = mountGLB(heroMountRef.current, "/hand.glb", {
      cameraPos: [0, 1.2, 7],
      target: [0, 1.2, 0],
      modelTargetSize: 3.8,
      modelYOffset: 1.0,
      rotateSpeed: 0.25,
    });

    const cleanupGlobe = mountGLB(globeMountRef.current, "/globe.glb", {
      cameraPos: [0, 1.1, 7.2],
      target: [0, 1.0, 0],
      modelTargetSize: 4.4,
      modelYOffset: 0.7,
      rotateSpeed: 0.18,
    });

    return () => {
      cleanupHand?.();
      cleanupGlobe?.();
    };
  }, []);

  // ✅ Reveal
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".pz-reveal"));
    if (!els.length) return;

    const inViewNow = (el) => {
      const r = el.getBoundingClientRect();
      return (
        r.top < window.innerHeight * 0.92 && r.bottom > window.innerHeight * 0.08
      );
    };

    els.forEach((el) => {
      if (inViewNow(el)) el.classList.add("pz-inview");
      else el.classList.add("pz-will-animate");
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("pz-inview");
          else entry.target.classList.remove("pz-inview");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ✅ parallax glow follow mouse
  useEffect(() => {
    const root = document.documentElement;
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      root.style.setProperty("--mx", `${x}%`);
      root.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const d = (ms) => ({ transitionDelay: `${ms}ms` });

  // ✅ Tilt helpers
  const handleTilt = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const px = x / r.width;
    const py = y / r.height;

    const rotY = (px - 0.5) * 14;
    const rotX = (0.5 - py) * 12;

    el.style.setProperty("--rx", `${rotX}deg`);
    el.style.setProperty("--ry", `${rotY}deg`);
    el.style.setProperty("--sx", `${px}`);
    el.style.setProperty("--sy", `${py}`);
    el.classList.add("is-tilting");
  };

  const resetTilt = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.classList.remove("is-tilting");
  };

  return (
    <div className="pz-page">
      <div className="pz-floating-orb orb1"></div>
      <div className="pz-floating-orb orb2"></div>
      <div className="pz-floating-orb orb3"></div>

      {/* HERO */}
      <section className="pz-hero">
        <div className="pz-left pz-reveal pz-reveal-left" style={d(120)}>
          <div className="pz-badge">One Axis Solutions • Franchise</div>

          <h1 className="pz-typing">
            {typed}
            <span className="pz-caret" />
          </h1>

          <p className="pz-sub">
            One Axis Solutions is expanding across India. Start your own profitable
            business under our trusted brand with complete support.
          </p>

          <p className="pz-extra-text">
            Join a fast-growing brand with structured systems, transparent processes,
            and scalable opportunities designed for long-term success.
          </p>

          <ul className="pz-list">
            <li>✅ Complete Business Setup & Branding</li>
            <li>✅ Training + Lead Guidance</li>
            <li>✅ Marketing & Social Media Support</li>
            <li>✅ High Growth & ROI Potential</li>
          </ul>

          <div className="pz-actions">
            <button className="pz-btn primary" onClick={openWhatsApp}>
              Apply for Franchise
            </button>
          </div>

          <div className="pz-mini">
            <div className="pz-chip">📍 Pan-India Expansion</div>
            <div className="pz-chip">🤝 Dedicated Support</div>
            <div className="pz-chip">📈 High Growth</div>
          </div>
        </div>

        <div className="pz-right pz-reveal pz-reveal-right" style={d(320)}>
          <div className="pz-canvas" ref={heroMountRef}></div>
        </div>
      </section>

      <div className="pz-section-divider"></div>

      {/* ABOUT */}
      <section className="pz-about">
        <div className="pz-about-inner">
          <div className="pz-about-left pz-reveal pz-reveal-left" style={d(120)}>
            <div className="pz-badge">About One Axis Solutions</div>

            <h2>
              Building <span>Future-Ready Businesses</span> Across India
            </h2>

            <p>
              One Axis Solutions is a growing multi-service company providing Web
              Development, Software Solutions, Interior Services, and Business Consulting.
            </p>

            <p>
              With strong brand positioning, modern technology support, and proven
              operational systems — we help partners build long-term sustainable businesses.
            </p>

            <p>
              Our mission is to empower local entrepreneurs with the right tools,
              brand credibility, and operational clarity so they can confidently
              grow in competitive markets.
            </p>

            <div className="pz-about-stats">
              <div className="pz-stat-box">
                <h3>50+</h3>
                <span>Projects Delivered</span>
              </div>
              <div className="pz-stat-box">
                <h3>Pan India</h3>
                <span>Expansion Vision</span>
              </div>
              <div className="pz-stat-box">
                <h3>100%</h3>
                <span>Partner Support</span>
              </div>
            </div>

            <div className="pz-actions pz-actions--about">
              <button
                className="pz-btn primary"
                onClick={() => navigate("/about-franchise")}
              >
                About One Axis
              </button>
            </div>
          </div>

          <div className="pz-about-right pz-reveal pz-reveal-right" style={d(260)}>
            <div className="pz-img-card pz-neon-card">
              <div className="pz-img-wrap">
                <img src={franchise1} alt="Growth arrow graph" />
              </div>
              <div className="pz-img-content">
                <h3>Growth Strategy</h3>
                <p>Clear roadmap + proven execution to grow faster in your market.</p>
              </div>
            </div>

            <div className="pz-img-card pz-neon-card">
              <div className="pz-img-wrap">
                <img src={franchise2} alt="Team collaboration" />
              </div>
              <div className="pz-img-content">
                <h3>Team Collaboration</h3>
                <p>Dedicated support team + training so you never feel stuck.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pz-section-divider"></div>

      {/* BENEFITS */}
      <section className="pz-benefits">
        <h2 className="pz-reveal pz-reveal-up" style={d(100)}>
          Why Choose One Axis Solutions?
        </h2>

        <p className="pz-section-desc pz-reveal pz-reveal-up" style={d(160)}>
          We don’t just offer a franchise — we offer a complete growth ecosystem
          designed to help you generate consistent revenue and build authority.
        </p>

        <div className="pz-card-grid">
          {[
            ["Low Investment Model", "Start with minimal setup cost and a flexible growth roadmap."],
            ["Complete Training", "Sales, operations, client handling — full training included."],
            ["Marketing Support", "Brand kit, creatives, strategy & local marketing guidance."],
            ["Dedicated Support Team", "Proposals, delivery guidance & scaling assistance."],
            ["Lead Guidance", "Proven online/offline lead methods + conversion support."],
            ["High ROI Potential", "Service-based high margin model for long-term clients."],
          ].map(([t, p], i) => (
            <div key={t} className="pz-reveal pz-reveal-up" style={d(120 + i * 120)}>
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.12}
                thickness={2}
                style={{ borderRadius: 22 }}
              >
                <div
                  className="pz-card pz-card--electric pz-tilt"
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                >
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              </ElectricBorder>
            </div>
          ))}
        </div>
      </section>

      <div className="pz-section-divider"></div>

      {/* STEPS FLOW */}
      <section className="pz-steps">
        <h2 className="pz-reveal pz-reveal-up" style={d(120)}>
          Steps to Become a Franchise Partner
        </h2>

        <p className="pz-steps-sub pz-reveal pz-reveal-up" style={d(220)}>
          Simple process. Fast onboarding. Clear support from day one.
        </p>

        <p className="pz-section-desc pz-reveal pz-reveal-up" style={d(320)}>
          From application to launch and scaling, every step is structured
          to minimize confusion and maximize results.
        </p>

        <div className="pz-flow">
          {[
            ["01", "Apply Online", "Share your city, experience and interest. We’ll contact you."],
            ["02", "Discovery Call", "We explain the model, requirements & your area strategy."],
            ["03", "Agreement", "Finalize partnership, territory and deliverables."],
            ["04", "Training & Setup", "Training, marketing kit, templates & tools included."],
            ["05", "Launch", "Start operations with first lead guidance & support."],
            ["06", "Scale Up", "Increase services, build team and grow revenue."],
          ].map(([no, title, desc], i) => (
            <div
              className="pz-flow-step pz-neon-card pz-reveal pz-reveal-up"
              style={d(160 + i * 110)}
              key={no}
            >
              <div className="pz-flow-top">
                <div className="pz-flow-dot">
                  <span className="pz-flow-no">{no}</span>
                </div>
                {i !== 5 && <div className="pz-flow-line" />}
              </div>

              <div className="pz-flow-body">
                <h3 className="pz-flow-title">{title}</h3>
                <p className="pz-flow-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pz-steps-cta pz-reveal pz-reveal-up" style={d(220)}>
          <button className="pz-btn primary" onClick={openWhatsApp}>
            Start Now
          </button>
          <button className="pz-btn ghost" onClick={openWhatsApp}>
            Get Details
          </button>
        </div>
      </section>

      <div className="pz-section-divider"></div>

      {/* GLOBE */}
      <section className="pz-globe">
        <div className="pz-globe-inner">
          <div className="pz-globe-left pz-reveal pz-reveal-left" style={d(120)}>
            <div className="pz-badge">One Axis Network</div>

            <h2>
              Grow with a <span>Pan-India</span> Partner Network
            </h2>

            <p className="pz-sub">
              Become part of a nationwide ecosystem with brand support & scalable systems.
            </p>

            <p className="pz-extra-text">
              Our centralized system ensures quality control, brand consistency,
              and strategic expansion across multiple cities.
            </p>

            <div className="pz-globe-points">
              <div className="pz-point">🌐 City-wise territory planning</div>
              <div className="pz-point">📌 Brand & trust building support</div>
              <div className="pz-point">🚀 Faster expansion opportunities</div>
            </div>

            <div className="pz-actions">
              <button className="pz-btn ghost" onClick={openWhatsApp}>
                Talk to Us
              </button>
            </div>
          </div>

          <div className="pz-globe-right pz-reveal pz-reveal-right" style={d(320)}>
            <div className="pz-canvas pz-canvas--globe" ref={globeMountRef}></div>
          </div>
        </div>
      </section>

      <div className="pz-section-divider"></div>

      {/* FINAL CTA */}
      <section className="pz-final-cta">
        <div className="pz-final-inner pz-reveal pz-reveal-up" style={d(120)}>
          <div className="pz-final-left">
            <div className="pz-badge">Ready to Start?</div>
            <h2 className="pz-final-title">Let’s talk on WhatsApp</h2>

            <p className="pz-final-desc">
              No forms. No waiting. Message us directly and get the Franchise kit,
              investment details, and next steps instantly.
            </p>

            <div className="pz-final-points">
              <div className="pz-point">⚡ Quick response within minutes</div>
              <div className="pz-point">📄 Franchise brochure + details</div>
              <div className="pz-point">🤝 One-to-one guidance</div>
            </div>

            <div className="pz-final-actions">
              <button className="pz-btn pz-whatsapp-btn" onClick={openWhatsApp}>
                Chat on WhatsApp
              </button>
            </div>

            <p className="pz-final-note">
              *Your message will open in WhatsApp. You can edit it before sending.
            </p>
          </div>

          <div className="pz-final-right">
            <div className="pz-wa-bubble">
              <div className="pz-wa-dot"></div>
              <div className="pz-wa-dot"></div>
              <div className="pz-wa-dot"></div>
              <span>One Axis Solutions</span>
            </div>

            <div className="pz-wa-card">
              <p className="pz-wa-text">
                Hi One Axis Solutions! I want to know more about the Franchise opportunity.
                Please share details.
              </p>
              <div className="pz-wa-row">
                <span>✅ Verified Business</span>
                <span>🟢 Online</span>
              </div>
            </div>

            <div className="pz-wa-glow"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerZone;

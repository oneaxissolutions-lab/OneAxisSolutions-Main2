// src/pages/Webdevelopment.jsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { motion } from "framer-motion";
import "../css/Webdevelopment.css";
import ScheduleModal from "../components/ScheduleModal";
import Web from "../components/Web";

const Webdevelopment = () => {
  // ✅ STATES (component ke andar)
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isWebOpen, setIsWebOpen] = useState(false); // ✅ Web.jsx modal state

  const canvasRef = useRef(null);
  const groupRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);
  const finalProgress = useRef(0); // 0 → 1
  const finalTriggerRef = useRef(null); // flying cards section ka trigger
  const finalCtaRef = useRef(null); // final CTA ("Book a Strategy Call") section
  const ctaEnteredRef = useRef(false); // CTA ke baad model hide karne ke liye

  const strongEase = [0.22, 1, 0.36, 1];

  // ========= FRAMER MOTION VARIANTS =========
  const heroVariants = {
    hidden: { opacity: 0, x: -140, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: strongEase,
        delay: 0.2,
      },
    },
  };

  const sectionSlideLeft = {
    hidden: { opacity: 0, x: -100, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: strongEase },
    },
  };

  const sectionSlideRight = {
    hidden: { opacity: 0, x: 100, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: strongEase },
    },
  };

  const cardsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: strongEase },
    },
  };

  // ========= THREE.JS SETUP =========
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const isSmallScreen = window.innerWidth < 768;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(
      0,
      isSmallScreen ? 0.2 : 0.4,
      isSmallScreen ? 12 : 11
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight.position.set(6, 6, 8);
    scene.add(dirLight);

    // ✅ Base position tuned for overlay
    const base = isSmallScreen ? { x: 0.2, y: -0.05 } : { x: 1.4, y: 0 };

    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

    group.position.set(base.x, base.y, 0);
    group.rotation.y = -0.35;

    const loader = new GLTFLoader();
    loader.load(
      "/laptop.glb",
      (gltf) => {
        const model = gltf.scene;

        const scale = isSmallScreen ? 0.4 : 0.75;
        model.scale.set(scale, scale, scale);
        model.position.set(0, isSmallScreen ? 0.4 : -0.8, 0);

        group.add(model);
      },
      undefined,
      (err) => {
        console.error("Error loading laptop.glb:", err);
      }
    );

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onScroll = () => {
      scrollY.current = window.scrollY;

      const trg = finalTriggerRef.current;
      const cta = finalCtaRef.current;

      if (trg) {
        const rect = trg.getBoundingClientRect();
        const vh = window.innerHeight;

        const triggerStart = vh * 0.9;
        const triggerEnd = -rect.height;

        const clamped = Math.max(
          0,
          Math.min(
            1,
            (triggerStart - rect.top) / (triggerStart - triggerEnd || 1)
          )
        );

        finalProgress.current = clamped;

        let showCards = clamped > 0.3;
        let ctaEntered = false;

        if (cta) {
          const ctaRect = cta.getBoundingClientRect();
          const vh2 = window.innerHeight;
          ctaEntered = ctaRect.top <= vh2 * 0.7;
          if (ctaEntered) {
            showCards = false;
          }
        }

        ctaEnteredRef.current = ctaEntered;

        // flying cards ke liye data-final
        if (showCards) {
          document.body.setAttribute("data-final", "on");
        } else {
          document.body.removeAttribute("data-final");
        }

        // ✅ CTA / footer ke baad overlay + model hide
        if (ctaEntered) {
          document.body.setAttribute("data-cta", "on");
        } else {
          document.body.removeAttribute("data-cta");
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (!canvasRef.current) return;
      camera.aspect =
        canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        canvasRef.current.clientWidth,
        canvasRef.current.clientHeight
      );
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      const g = groupRef.current;
      if (g) {
        // ✅ CTA ke baad model bilkul hide (Three.js side se)
        if (ctaEnteredRef.current) {
          g.visible = false;
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
          return;
        } else {
          g.visible = true;
        }

        const mouseX = mouse.current.x;
        const mouseY = mouse.current.y;

        // 🔥 Mouse effect thoda soft rakha hai
        const mouseOffsetX = mouseX * 0.3;
        const mouseOffsetY = -mouseY * 0.4;

        // ❌ Scroll offset hata diya – taaki laptop same height ke aas-paas rahe
        const softScrollOffset = 0;
        const finalT = finalProgress.current;

        // Desktop pe laptop ko thoda center ke paas rakha gaya
        const centerX = isSmallScreen ? 0.2 : 0.4;
        const slideX = finalT * (centerX - base.x);

        let targetX;
        if (finalT > 0) {
          // Jab flying-cards section start, laptop thoda center ki taraf glide
          targetX = base.x + slideX;
        } else {
          // Normal state: overlay se almost lock feel
          targetX = base.x + mouseOffsetX;
        }

        const targetY = base.y + mouseOffsetY - softScrollOffset;

        g.position.x += (targetX - g.position.x) * 0.12;
        g.position.y += (targetY - g.position.y) * 0.12;

        if (finalT > 0) {
          g.rotation.x = finalT * Math.PI * 0.35;
          g.rotation.y = -0.35 + finalT * (0 - -0.35);
          g.rotation.z = finalT * Math.PI * 0.06;

          const zoomScale = 1 + finalT * 0.45;
          g.scale.set(zoomScale, zoomScale, zoomScale);

          camera.position.z = (isSmallScreen ? 12 : 11) - finalT * 3.5;
        } else {
          g.rotation.x += (0 - g.rotation.x) * 0.1;
          g.rotation.z += (0 - g.rotation.z) * 0.1;
          g.rotation.y += (-0.35 - g.rotation.y) * 0.1;

          const s = g.scale.x + (1 - g.scale.x) * 0.1;
          g.scale.set(s, s, s);

          const baseZ = isSmallScreen ? 12 : 11;
          camera.position.z += (baseZ - camera.position.z) * 0.1;
        }
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // ✅ CLEANUP – sirf listeners, renderer, attributes
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (canvasRef.current?.contains(renderer.domElement)) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      document.body.removeAttribute("data-final");
      document.body.removeAttribute("data-cta");
    };
  }, []);

  return (
    <div className="webdev-page">
      {/* 3D BACKGROUND FIXED */}
      <div className="webdev-3d">
        <div ref={canvasRef} className="three-canvas" />
      </div>

      {/* 💻 SCREEN OVERLAY – code card inside laptop screen */}
      <div className="laptop-screen-overlay">
        <div className="screen-content">
          <div className="screen-panel">
            <pre>
{`// OneAxis Solutions · Web Experience
const laptop = create3DLaptop();
const hero   = createGlassHero();

function buildSite(client) {
  const ui    = designUI(client.brand);
  const ux    = mapUserFlow(client.goals);
  const hooks = createCTAs(["Book Call", "Enquire"]);

  return merge({ ui, ux, hooks });
}

const techStack   = ['React', 'Three.js', 'Framer'];
const performance = optimizeBundle(techStack);

if (client.readyFor3D) {
  hero.attach(laptop);
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* FLY-OUT TECH CARDS */}
      <div className="final-fly-layer">
        <div className="fly-card css">
          <b>CSS</b>
          <span>Modern layouts</span>
        </div>
        <div className="fly-card react">
          <b>React</b>
          <span>Scalable UI</span>
        </div>
        <div className="fly-card html">
          <b>HTML</b>
          <span>Semantic structure</span>
        </div>
        <div className="fly-card js">
          <b>JavaScript</b>
          <span>Smart interactions</span>
        </div>
        <div className="fly-card ui">
          <b>UI / UX</b>
          <span>Conversion-first</span>
        </div>
        <div className="fly-card seo">
          <b>SEO</b>
          <span>Optimised loading</span>
        </div>
      </div>

      {/* CONTENT */}
      <main className="webdev-content">
        {/* HERO */}
        <section className="webdev-hero">
          <motion.div
            className="webdev-text hero-card"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="webdev-tag">
              OneAxis Solutions · Web Experience
            </span>
            <h1>
              Interactive <span>3D Websites</span>
            </h1>
            <p>
              Move your cursor and see the 3D laptop respond in real time. We
              craft smooth, premium web experiences for brands that want to feel
              modern, immersive and unmistakably different.
            </p>

            <div className="webdev-actions">
              <motion.button
                className="webdev-btn primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsWebOpen(true)} // ✅ Web.jsx open
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* WHAT YOU GET – LEFT */}
        <motion.section
          className="webdev-section"
          variants={sectionSlideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <h2>What you get with our web development</h2>
          <p className="section-subtitle">
            Not just another website, but an interactive 3D experience that
            makes visitors pause, explore and remember your brand.
          </p>
          <motion.div
            className="webdev-grid"
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div className="card" variants={cardItem}>
              <h3>Interactive 3D hero</h3>
              <p>
                A 3D laptop or custom model that responds to mouse and scroll,
                tailored to your brand story and key messaging.
              </p>
            </motion.div>
            <motion.div className="card" variants={cardItem}>
              <h3>Pixel-perfect interfaces</h3>
              <p>
                Desktop and mobile optimised layouts, precise typography and
                refined gradients — everything tuned to look premium.
              </p>
            </motion.div>
            <motion.div className="card" variants={cardItem}>
              <h3>Conversion-first structure</h3>
              <p>
                Clear calls-to-action, trust sections and smart layouts that
                guide visitors naturally towards enquiry, booking or demos.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SERVICE BASED – RIGHT */}
        <motion.section
          className="webdev-section alt"
          variants={sectionSlideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <div className="two-col">
            <div className="service-text-card">
              <h2>Built for service-led businesses</h2>
              <p>
                Perfect for agencies, studios, consultants, coaches and IT
                companies where the website is often the first serious
                conversation with your brand.
              </p>
            </div>
            <ul className="bullets">
              <li>High-impact landing pages for campaigns</li>
              <li>Complete company websites and brand hubs</li>
              <li>Portfolio and case-study driven experiences</li>
              <li>Marketing sites for SaaS and tech start-ups</li>
            </ul>
          </div>
        </motion.section>

        {/* PREMIUM POINTS – LEFT */}
        <motion.section
          className="webdev-section"
          variants={sectionSlideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <h2>What makes our 3D sites feel premium?</h2>
          <p className="section-subtitle">
            Thoughtful micro-animations, disciplined typography and balanced 3D
            scenes that feel exciting without ever becoming noisy.
          </p>

          <motion.div
            className="webdev-grid"
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div className="card" variants={cardItem}>
              <h3>Designed micro-interactions</h3>
              <p>
                Buttons, hover states and scroll cues are intentionally crafted
                to feel smooth, responsive and on-brand.
              </p>
            </motion.div>
            <motion.div className="card" variants={cardItem}>
              <h3>Performance as a feature</h3>
              <p>
                Optimised GLB assets, lazy loading and smart bundling so your
                3D experience remains fast and reliable across devices.
              </p>
            </motion.div>
            <motion.div className="card" variants={cardItem}>
              <h3>Mobile-friendly 3D</h3>
              <p>
                Touch-aware controls and tuned effects to keep the experience
                fluid on smaller screens without losing the wow factor.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* TECH STACK – RIGHT */}
        <motion.section
          className="webdev-section alt final-showcase"
          variants={sectionSlideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.div
            className="stack-grid"
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div className="stack-card" variants={cardItem}>
              <h4>React / Next.js</h4>
              <p>
                Modern front-end foundations for single-page apps, SEO-friendly
                pages and smooth navigation.
              </p>
            </motion.div>
            <motion.div className="stack-card" variants={cardItem}>
              <h4>Three.js</h4>
              <p>3D model loading, lighting, cameras and tailored scenes.</p>
            </motion.div>
            <motion.div className="stack-card" variants={cardItem}>
              <h4>Framer Motion / GSAP</h4>
              <p>
                Scroll-based animations, parallax and micro-interactions that
                feel fluid and natural.
              </p>
            </motion.div>
            <motion.div className="stack-card" variants={cardItem}>
              <h4>Semantic HTML</h4>
              <p>
                Clean structure for accessibility, search engines and long-term
                maintainability.
              </p>
            </motion.div>
            <motion.div className="stack-card" variants={cardItem}>
              <h4>Performance</h4>
              <p>
                Tuned assets, reduced layout shifts and strong lighthouse
                scores, even with advanced visuals.
              </p>
            </motion.div>
            <motion.div className="stack-card" variants={cardItem}>
              <h4>Deployment</h4>
              <p>
                Support for Vercel, Netlify and custom domains with reliable SSL
                and CI/CD workflows.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* FLYING CARDS SECTION – spacer only */}
        <section className="webdev-section flying-showcase">
          <div ref={finalTriggerRef} className="final-trigger-marker" />
        </section>

        {/* FINAL CTA – LEFT */}
        <motion.section
          className="final-cta-wrap"
          ref={finalCtaRef}
          variants={sectionSlideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="final-cta">
            <span className="cta-pill">LET’S COLLABORATE</span>

            <h2>
              Design the future of your <br /> digital business
            </h2>

            <p>
              Share your ambitions and our team at OneAxis Solutions will
              transform them into a clear, execution-ready web experience plan.
            </p>

            <motion.button
              className="cta-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsScheduleOpen(true)} // ✅ MODAL OPEN
            >
              Book a Strategy Call
            </motion.button>
          </div>
        </motion.section>
      </main>

      {/* ✅ SCHEDULE MODAL YAHAN RENDER HOGA */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />

      {/* ✅ WEB MODAL – same pattern */}
      <Web isOpen={isWebOpen} onClose={() => setIsWebOpen(false)} />
    </div>
  );
};

export default Webdevelopment;

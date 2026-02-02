// src/pages/Cleaning.jsx
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 👈 yeh naya import
import "../css/Cleaning.css";

import industryImg from "../assets/industrial-cleaning.jpg";
import commercialImg from "../assets/commercial-cleaning.jpg";
import faqVideo from "../assets/video2.mp4";

/* ============ FRAMER MOTION VARIANTS ============ */

const heroLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const heroRight = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sectionFadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.08,
    },
  }),
};

const faqItemVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// right-side face ko front banane ke liye base rotation
const BASE_ROT_Y = -Math.PI / 2;

/* ============ FAQ DATA ============ */

const FAQ_DATA = [
  {
    question: "What types of cleaning products does OneAxis-EcoClean offer?",
    answer:
      "We manufacture a full range of industrial, commercial and institutional cleaning products including floor cleaners, disinfectants, degreasers, glass cleaners, handwash, dishwash and sanitizers.",
  },
  {
    question: "Are these products suitable for commercial and industrial use?",
    answer:
      "Yes. Our formulations are designed for heavy-duty, high-frequency use in offices, factories, warehouses, healthcare spaces and hospitality environments. They are tested for performance and surface safety.",
  },
  {
    question: "Can I place a bulk order for cleaning products?",
    answer:
      "Absolutely. We specialise in bulk supply for offices, hotels, hospitals, industries and institutions. Most products are available in 5L and 50L packs for cost-effective, regular usage.",
  },
  {
    question: "Do you provide delivery services across India?",
    answer:
      "Yes, we serve multiple cities across India. Delivery timelines depend on your location and order volume. Our team will share exact dispatch and delivery details at the time of quotation.",
  },
  {
    question: "Do you offer eco-friendly or low-toxicity cleaning options?",
    answer:
      "Yes. OneAxis-EcoClean offers eco-responsible and low-toxicity formulations that reduce environmental impact while still providing strong cleaning, degreasing and disinfecting performance.",
  },
  {
    question: "Can products or supply plans be customised for my business?",
    answer:
      "Yes. We can customise product selection, packing mix and delivery schedules based on your industry, footfall, hygiene standards and number of locations to keep your spaces consistently stocked and clean.",
  },
];

/* ============ SINGLE FAQ ITEM ============ */

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
      <button type="button" className="faq-question-row" onClick={onToggle}>
        <span className="faq-question-text">{question}</span>

        <span className={`faq-toggle ${isOpen ? "open" : ""}`}>
          <span className="faq-toggle-line horizontal" />
          <span className="faq-toggle-line vertical" />
        </span>
      </button>

      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Cleaning = () => {
  const canvasRef = useRef(null);
  const groupRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate(); // 👈 yahan se routes change karenge

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // ✅ WhatsApp redirect – Get Quote + Discuss Bulk Pricing
  const openWhatsApp = () => {
    const message =
      "Hi, I’m interested in OneAxis-EcoClean bulk cleaning products and services.";
    const url = `https://wa.me/918954535455?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.1, 4);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambient);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(4, 6, 5);
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0xff9ad5, 0.6);
    rimLight.position.set(-4, 3, -3);
    scene.add(rimLight);

    const loader = new GLTFLoader();
    loader.load(
      "/clean.glb",
      (gltf) => {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;

        const maxDim = Math.max(size.x, size.y, size.z);
        const containerHeight = container.clientHeight;

        let scaleFactor = 2 / maxDim;
        if (containerHeight < 500) {
          scaleFactor = 1.6 / maxDim;
        }
        model.scale.setScalar(scaleFactor);

        const group = new THREE.Group();
        group.add(model);

        group.rotation.y = BASE_ROT_Y;
        group.position.y = -0.05;

        scene.add(group);
        groupRef.current = group;
      },
      undefined,
      (err) => console.error("GLB load error ❌", err)
    );

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      pointerRef.current.x = (x - 0.5) * 2;
      pointerRef.current.y = (y - 0.5) * 2;
    };

    container.addEventListener("pointermove", handlePointerMove);

    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const group = groupRef.current;
      if (group) {
        const floatAmplitude = 0.07;
        const floatSpeed = 1.6;
        const baseY = -0.05;
        group.position.y = baseY + Math.sin(t * floatSpeed) * floatAmplitude;

        const p = pointerRef.current;

        const targetRotY = BASE_ROT_Y + p.x * 0.5;
        const targetRotX = p.y * 0.25;

        group.rotation.y += (targetRotY - group.rotation.y) * 0.09;
        group.rotation.x += (targetRotX - group.rotation.x) * 0.09;

        group.position.x = p.x * 0.18;
        group.position.z = p.y * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight || 1;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", handlePointerMove);

      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }

      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry.dispose();
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
    <div className="cleaning-wrapper">
      {/* ========== HERO + MODEL ========== */}
      <section className="cleaning-hero">
        <motion.div
          className="cleaning-hero-left"
          variants={heroLeft}
          initial="hidden"
          animate="visible"
        >
          <p className="cleaning-tagline">
            MANUFACTURER &amp; WHOLESALE SUPPLIER — BULK SUPPLY
          </p>

          <h1 className="cleaning-heading">
            OneAxis-EcoClean <br />
            <span className="cleaning-highlight">Deep Shine</span>
            <br />
            Solutions for Modern <br />
            Businesses
          </h1>

          <p className="cleaning-subtitle">
            Premium, industrial-grade and eco-responsible cleaning products
            designed for businesses that value hygiene, safety and brand image.
          </p>

          <div className="cleaning-cta-row">
            {/* ✅ WhatsApp – Get Quote */}
            <button className="cleaning-btn-primary" onClick={openWhatsApp}>
              Get Quote
            </button>

            {/* ✅ View Products – route change */}
            <button
              className="cleaning-btn-secondary"
              onClick={() => navigate("/cleaning/products")}
            >
              View Products
            </button>
          </div>

          <div className="cleaning-stats-row">
            <div className="cleaning-stat">
              <h3>500+</h3>
              <p>Products</p>
            </div>
            <div className="cleaning-stat">
              <h3>20 Lakh+ liters</h3>
              <p>Supplied</p>
            </div>
            <div className="cleaning-stat">
              <h3>99%</h3>
              <p>Repeat Orders</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="cleaning-hero-right"
          variants={heroRight}
          initial="hidden"
          animate="visible"
        >
          <div className="cleaning-badge-top">
            Bulk supply only in 5L &amp; 50L packaging.
          </div>

          <div ref={canvasRef} className="cleaning-model-wrap" />

          <button className="cleaning-chip cleaning-chip-center">
            Sanitizers
          </button>
          <button className="cleaning-chip cleaning-chip-top-right">
            Industrial Cleaners
          </button>
          <button className="cleaning-chip cleaning-chip-bottom-right">
            Eco Safe
          </button>
        </motion.div>
      </section>

      {/* ========== WHY CHOOSE SECTION ========== */}
      <motion.section
        className="why-cleaning-section"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="why-cleaning-header"
          variants={cardFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          custom={0}
        >
          <h2>Why Choose OneAxis-EcoClean</h2>
          <p>
            Trusted by forward-thinking businesses for reliable, premium and
            eco-aware cleaning solutions tailored to modern spaces.
          </p>
        </motion.div>

        <div className="why-cleaning-grid">
          <motion.div
            className="why-cleaning-image"
            variants={cardFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            custom={0.2}
          >
            <img src={industryImg} alt="Industrial Cleaning" />
            <span className="why-badge">Expert Service</span>
          </motion.div>

          <motion.div
            className="why-cleaning-content"
            variants={cardFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            custom={0.4}
          >
            <span className="why-pill">INDUSTRY LEADER</span>

            <h3>Industrial-Grade Cleaning Solutions</h3>

            <p className="why-desc">
              Precision-engineered solutions for heavy-duty environments. Built
              to deliver uncompromising performance, operational safety and
              surface protection across large-scale facilities.
            </p>

            <div className="why-cards">
              {[
                {
                  title: "Heavy-Duty Performance",
                  desc: "Handles deep-set stains, grease and high-traffic wear while maintaining a refined finish across floors, worktops and machinery surfaces.",
                },
                {
                  title: "Eco-Responsible Formulas",
                  desc: "Designed to balance powerful cleaning action with lower toxicity and mindful chemistry, minimising impact on staff, equipment and the environment.",
                },
                {
                  title: "Certified & Surface-Safe",
                  desc: "Tested across sensitive surfaces and regulated workspaces so you get dependable performance that meets audit and compliance expectations.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="why-card"
                  variants={cardFadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ========== COMMERCIAL CLEANING SECTION ========== */}
      <motion.section
        className="commercial-section"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="commercial-image-wrap"
          variants={cardFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <img src={commercialImg} alt="Commercial office cleaning" />
        </motion.div>

        <motion.div
          className="commercial-right"
          variants={cardFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="commercial-right-inner">
            <h2 className="commercial-heading">Commercial Cleaning Services</h2>

            <p className="commercial-text">
              Tailored cleaning for offices, retail environments and premium
              commercial spaces. OneAxis-EcoClean helps you maintain spotless,
              welcoming interiors that reflect your brand’s standards and
              delight every visitor.
            </p>

            <p className="commercial-text">
              From daily housekeeping and workstation detailing to high-touch
              area disinfection, we build cleaning schedules around your
              occupancy patterns, compliance requirements and image goals. Our
              trained teams, audited checklists and tracked supplies keep every
              corner consistent – not just on day one, but every single day.
            </p>

            <div className="commercial-stats-row">
              {[
                { main: "15+", sub: "Years Experience" },
                { main: "Custom", sub: "Cleaning Plans" },
                { main: "Professional", sub: "Service Standards" },
              ].map((item, i) => (
                <motion.div
                  key={item.sub}
                  className="commercial-stat-card"
                  variants={cardFadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <div className="commercial-stat-main">{item.main}</div>
                  <div className="commercial-stat-sub">
                    <span>{item.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ========== BULK SUPPLY SECTION ========== */}
      <motion.section
        className="bulk-section"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bulk-inner">
          <motion.div
            className="bulk-left"
            variants={cardFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <span className="bulk-pill">BULK &amp; INSTITUTIONAL SUPPLY</span>

            <h2 className="bulk-heading">Bulk Supply for Growing Businesses</h2>

            <p className="bulk-text">
              From multi-location brands to large campuses and industrial
              clusters, OneAxis-EcoClean offers structured bulk supply programs
              that keep you stocked without last-minute scramble.
            </p>

            <div className="bulk-cols">
              {[
                {
                  title: "Offices & Corporates",
                  desc: "Centralised supply for workstations, cafeterias, washrooms and common areas with predictable monthly coverage.",
                },
                {
                  title: "Hotels & Hospitality",
                  desc: "Guest rooms, lobbies, linen and kitchen hygiene under one curated program, tuned to seasonal occupancy.",
                },
                {
                  title: "Healthcare & Institutions",
                  desc: "High-hygiene solutions tuned for sensitive, critical environments with traceable batches and paperwork.",
                },
                {
                  title: "Industrial & Warehouses",
                  desc: "Heavy-duty options for shopfloors, loading bays and storage areas where uptime and safety matter most.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bulk-col"
                  variants={cardFadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* ✅ Bulk Pricing → WhatsApp */}
            <button className="bulk-btn" onClick={openWhatsApp}>
              Discuss Bulk Pricing
            </button>
          </motion.div>

          <motion.div
            className="bulk-right"
            variants={cardFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="bulk-badge-top">
              Bulk supply only in 5L &amp; 50L packaging.
            </div>

            {[
              { main: "30+", sub: "Cities Served" },
              { main: "100K+", sub: "Units Supplied Yearly" },
              { main: "Dedicated", sub: "Account Support" },
            ].map((item) => (
              <div key={item.sub} className="bulk-card">
                <div className="bulk-card-main">{item.main}</div>
                <div className="bulk-card-sub">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ========== FAQ SECTION (Video + Accordion) ========== */}
      <motion.section
        className="faq-section"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="faq-inner">
          {/* LEFT: VIDEO */}
          <motion.div
            className="faq-media"
            variants={cardFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="faq-video-card">
              <div className="faq-video-gradient" />
              <video
                className="faq-video"
                src={faqVideo}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="faq-video-badge">OneAxis-EcoClean</div>
              <p className="faq-video-caption">
                See how our bulk cleaning solutions keep workplaces fresh, safe
                and audit-ready every day.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: ACCORDION */}
          <motion.div
            className="faq-right"
            variants={cardFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="faq-header">
              <h2>Frequently Asked Questions</h2>
              <p>
                Clear answers about our cleaning products, bulk supply programs
                and delivery support for your business.
              </p>
            </div>

            <div className="faq-list">
              {FAQ_DATA.map((item, index) => (
                <motion.div
                  key={item.question}
                  variants={faqItemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.45 }}
                >
                  <FAQItem
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() => toggleFaq(index)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ========== BOTTOM CTA BUTTONS ========== */}
      <motion.section
        className="bottom-cta-section"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="bottom-cta-inner">
          <p className="bottom-cta-label">
            Explore more about OneAxis-EcoClean
          </p>
          <div className="bottom-cta-buttons">
            {/* ✅ AboutCleaning.jsx route */}
            <button
              className="bottom-cta-btn primary"
              onClick={() => navigate("/cleaning/about")}
            >
              About Us
            </button>

            {/* ✅ ProductsCleaning.jsx route */}
            <button
              className="bottom-cta-btn secondary"
              onClick={() => navigate("/cleaning/products")}
            >
              Products
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Cleaning;

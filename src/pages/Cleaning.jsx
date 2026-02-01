/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/Cleaning.css";

import industryImg from "../assets/industrial-cleaning.jpg";
import commercialImg from "../assets/commercial-cleaning.jpg";
import faqVideo from "../assets/video2.mp4";

/* ================= ANIMATIONS ================= */

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ================= COMPONENT ================= */

const Cleaning = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What types of cleaning products does OneAxis-EcoClean offer?",
      a: "Industrial, commercial and institutional cleaning solutions including floor cleaners, disinfectants, degreasers and eco-friendly sanitizers.",
    },
    {
      q: "Are these products suitable for commercial and industrial use?",
      a: "Yes. All products are designed for offices, hospitals, hotels, factories and large facilities.",
    },
    {
      q: "Can I place a bulk order for cleaning products?",
      a: "Yes, we provide bulk pricing, scheduled supply and dedicated account support for institutional buyers.",
    },
    {
      q: "Do you provide delivery services across India?",
      a: "Yes, pan-India delivery is available with reliable logistics partners.",
    },
  ];

  // ✅ VITE + PUBLIC FOLDER = DIRECT ROOT PATH
  const modelSrc = "/cleaning-products-3d-model.glb";

  return (
    <main className="cleaning-wrapper">
      <section className="cleaning-hero">
        <motion.div
          className="cleaning-hero-container"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT */}
          <motion.div className="cleaning-hero-left" variants={heroLeft}>
            <h1>
              OneAxis-EcoClean <br />
              <span>Deep Shine</span> Solutions
            </h1>
          </motion.div>

          {/* RIGHT – 3D MODEL */}
          <motion.div className="cleaning-hero-right" variants={heroRight}>
            <model-viewer
              src={modelSrc}
              className="hero-model-viewer"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              exposure="1.2"
              camera-orbit="60deg 75deg 2.5m"
              alt="Cleaning Products 3D Model"
            />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Cleaning;

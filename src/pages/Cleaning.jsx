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

  return (
    <main className="cleaning-wrapper">
      {/* ================= HERO ================= */}
      <section className="cleaning-hero">
        <p className="bulk-packaging-note">
          Bulk supply only in 5L &amp; 50L packaging.
        </p>

        <motion.div
          className="cleaning-hero-container"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT CONTENT */}
          <motion.div className="cleaning-hero-left" variants={heroLeft}>
            <p className="cleaning-hero-badge">
              Manufacturer &amp; Wholesale Supplier — Bulk Supply
            </p>

            <h1>
              OneAxis-EcoClean <br />
              <span>Deep Shine</span> <br />
              Solutions for Modern <br />
              Businesses
            </h1>

            <p className="cleaning-hero-text">
              Premium, industrial-grade and eco-responsible cleaning products
              designed for businesses that value hygiene, safety and brand
              image.
            </p>

            <div className="cleaning-hero-buttons">
              <button
                className="btn-primary"
                onClick={() =>
                  window.open(
                    "https://wa.me/918954535455?text=Hi,%20I%20need%20a%20cleaning%20quote",
                    "_blank"
                  )
                }
              >
                Get Quote
              </button>

              <Link to="/cleaning/products" className="btn-outline">
                View Products
              </Link>
            </div>

            <div className="cleaning-hero-stats">
              <div>
                <h3>500+</h3>
                <span>PRODUCTS</span>
              </div>
              <div>
                <h3>20 Lakh+ liters Supplied</h3>
                <span>Cleaning Solutions Delivered</span>
              </div>
              <div>
                <h3>99%</h3>
                <span>QUALITY</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – 3D MODEL */}
          <motion.div className="cleaning-hero-right" variants={heroRight}>
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <model-viewer
              className="hero-model-viewer"
              src="/cleaning+products+3d+model.glb"
              alt="Cleaning Products 3D Model"
              camera-controls
              disable-zoom
              shadow-intensity="0.7"
              exposure="1.1"
              camera-orbit="70deg 75deg 2.8m"
            />

            <div className="hero-tag hero-tag-top">Industrial Cleaners</div>
            <div className="hero-tag hero-tag-mid">Sanitizers</div>
            <div className="hero-tag hero-tag-bottom">Eco Safe</div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="cleaning-why">
        <motion.div
          className="cleaning-why-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2>Why Choose OneAxis-EcoClean</h2>
          <p>
            Trusted by forward-thinking businesses for reliable, premium and
            eco-aware cleaning solutions tailored to modern spaces.
          </p>
        </motion.div>

        <motion.div
          className="cleaning-why-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
        >
          {/* LEFT CARD */}
          <motion.div
            variants={fadeUp}
            className="why-image-card hover-lift"
          >
            <img src={industryImg} alt="Industrial Cleaning" />
            <div className="why-expert-chip">
              <span className="chip-main">Expert</span>
              <span className="chip-sub">Service</span>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div variants={fadeUp} className="cleaning-why-right">
            <span className="why-pill">INDUSTRY LEADER</span>
            <h3 className="why-title">Industrial-Grade Cleaning Solutions</h3>
            <p className="why-desc">
              Precision-engineered solutions for heavy-duty environments. Built
              to deliver uncompromising performance, operational safety and
              surface protection across large-scale facilities.
            </p>

            <div className="why-feature-list">
              <div className="why-feature-card">
                <strong>Heavy-Duty Performance</strong>
                <br />
                Handles deep-set stains, grease and high-traffic wear while
                maintaining a refined finish.
              </div>
              <div className="why-feature-card">
                <strong>Eco-Responsible Formulas</strong>
                <br />
                Designed to balance powerful cleaning action with lower toxicity
                and mindful chemistry.
              </div>
              <div className="why-feature-card">
                <strong>Certified &amp; Surface-Safe</strong>
                <br />
                Tested across sensitive surfaces and regulated workspaces for
                dependable, everyday use.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= COMMERCIAL ================= */}
      <section className="cleaning-commercial">
        <motion.div
          className="cleaning-commercial-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
        >
          {/* LEFT IMAGE CARD */}
          <motion.div
            variants={fadeUp}
            className="cleaning-commercial-image hover-lift"
          >
            <img src={commercialImg} alt="Commercial Cleaning" />
          </motion.div>

          {/* RIGHT TEXT SIDE */}
          <motion.div
            variants={fadeUp}
            className="cleaning-commercial-content"
          >
            <h3 className="commercial-title">Commercial Cleaning Services</h3>
            <p className="commercial-desc">
              Tailored cleaning for offices, retail environments and premium
              commercial spaces. OneAxis-EcoClean helps you maintain spotless,
              welcoming interiors that reflect your brand’s standards and
              delight every visitor.
            </p>

            <div className="commercial-stats">
              <div className="commercial-stat-card">
                <h4>15+</h4>
                <span>Years Experience</span>
              </div>
              <div className="commercial-stat-card">
                <h4>Custom</h4>
                <span>Cleaning Plans</span>
              </div>
              <div className="commercial-stat-card">
                <h4>Professional</h4>
                <span>Service Standards</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= BULK SUPPLY ================= */}
      <section className="cleaning-bulk">
        <motion.div
          className="cleaning-bulk-inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
        >
          {/* LEFT CONTENT */}
          <motion.div variants={fadeUp} className="cleaning-bulk-text">
            <span className="bulk-pill">BULK &amp; INSTITUTIONAL SUPPLY</span>
            <h3>Bulk Supply for Growing Businesses</h3>
            <p>
              From multi-location brands to large campuses and industrial
              clusters, OneAxis-EcoClean offers structured bulk supply programs
              that keep you stocked without last-minute scramble.
            </p>

            <div className="bulk-grid">
              <div>
                <strong>Offices &amp; Corporates</strong>
                <p>
                  Centralised supply for workstations, cafeterias, washrooms and
                  common areas.
                </p>
              </div>
              <div>
                <strong>Hotels &amp; Hospitality</strong>
                <p>
                  Guest rooms, lobbies, linen and kitchen hygiene under one
                  curated program.
                </p>
              </div>
              <div>
                <strong>Healthcare &amp; Institutions</strong>
                <p>
                  High-hygiene solutions tuned for sensitive, critical
                  environments.
                </p>
              </div>
              <div>
                <strong>Industrial &amp; Warehouses</strong>
                <p>
                  Heavy-duty options for shopfloors, loading bays and storage
                  areas.
                </p>
              </div>
            </div>

            <div className="bulk-cta">
              <button
                className="btn-primary"
                onClick={() =>
                  window.open(
                    "https://wa.me/918954535455?text=Hi,%20I%20want%20to%20discuss%20bulk%20cleaning%20supply%20pricing",
                    "_blank"
                  )
                }
              >
                Discuss Bulk Pricing
              </button>
            </div>
          </motion.div>

          {/* RIGHT STAT CARDS + TOP NOTE */}
          <motion.div variants={fadeUp} className="cleaning-bulk-stats">
            {/* Right-top note */}
            <p className="bulk-packaging-note">
              Bulk supply only in 5L &amp; 50L packaging.
            </p>

            <div className="bulk-stat-card">
              <span className="bulk-number">30+</span>
              <span className="bulk-label">Cities Served</span>
            </div>
            <div className="bulk-stat-card">
              <span className="bulk-number">100K+</span>
              <span className="bulk-label">Units Supplied Yearly</span>
            </div>
            <div className="bulk-stat-card">
              <span className="bulk-number">Dedicated</span>
              <span className="bulk-label">Account Support</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= FAQ WITH VIDEO ================= */}
      <section className="cleaning-faq-pro">
        <div className="faq-bg-glow" />

        <motion.div
          className="cleaning-faq-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2>Frequently Asked Questions</h2>
          <p>
            Have questions about OneAxis-EcoClean, bulk supply or coverage?
            Here are quick answers for decision-makers and operations teams.
          </p>
        </motion.div>

        {/* LEFT VIDEO | RIGHT FAQ GRID */}
        <div className="cleaning-faq-grid">
          {/* LEFT – VIDEO */}
          <motion.div
            className="faq-video-wrapper"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <video
              src={faqVideo}
              autoPlay
              loop
              muted
              playsInline
              className="faq-video"
            />
          </motion.div>

          {/* RIGHT – FAQ CARDS */}
          <div className="cleaning-faq-container">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-card ${activeFaq === i ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-row"
                  onClick={() =>
                    setActiveFaq(activeFaq === i ? null : i)
                  }
                >
                  <span className="faq-question-text">{f.q}</span>
                  <div className="faq-toggle-btn">
                    {activeFaq === i ? "−" : "+"}
                  </div>
                </button>

                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}

            <div className="faq-end-buttons">
              <Link to="/about" className="faq-btn primary">
                About Us
              </Link>
              <Link to="/cleaning/products" className="faq-btn outline">
                Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cleaning;

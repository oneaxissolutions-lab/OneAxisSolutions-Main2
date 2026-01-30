// src/pages/Cleaning.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/Cleaning.css";

import heroImg from "../assets/cleaning-hero.jpg";
import industryImg from "../assets/industrial-cleaning.jpg";
import commercialImg from "../assets/commercial-cleaning.jpg";

// LightPillar component (components folder me)
import LightPillar from "../components/LightPillar";

// ============ ANIMATION VARIANTS ============
const heroLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const heroRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
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

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const faqCardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Cleaning = () => {
  const faqs = [
    {
      question: "What types of cleaning products does OneAxis-EcoClean offer?",
      answer:
        "We offer a complete portfolio of industrial, commercial and institutional cleaning solutions including floor cleaners, surface disinfectants, washroom hygiene products, degreasers and eco-friendly sanitizers.",
    },
    {
      question:
        "Are OneAxis-EcoClean products suitable for commercial and industrial use?",
      answer:
        "Yes. Our formulations are engineered for demanding commercial and industrial environments such as offices, factories, hospitals, hotels and warehouses.",
    },
    {
      question: "How can I place a bulk order for cleaning products?",
      answer:
        "You can contact our team directly for bulk and contract-based supply. We provide customised pricing, scheduled deliveries and centralised billing for multi-site businesses.",
    },
    {
      question:
        "What makes OneAxis-EcoClean different from other cleaning brands?",
      answer:
        "Our products blend professional-grade performance with an eco-conscious approach. We focus on safety, sustainability and long-term surface care without compromising on cleaning power.",
    },
    {
      question: "Do you provide delivery services across India?",
      answer:
        "Yes, we deliver across India using reliable logistics partners, with priority service and stock planning support for bulk and institutional clients.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <main className="cleaning-wrapper">
      {/* 🔥 FULL-PAGE LIGHT PILLAR BACKGROUND */}
      <div className="cleaning-bg-pillars">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* ============ HERO ============ */}
      <section className="cleaning-hero">
        <motion.div
          className="cleaning-hero-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {/* LEFT */}
          <motion.div variants={heroLeft} className="cleaning-hero-left">
            <h1>
              OneAxis-EcoClean <br />
              <span>Deep Shine</span> <br />
              Solutions for Your <br />
              Business Needs
            </h1>

            <p className="cleaning-hero-text">
              OneAxis-EcoClean combines advanced cleaning science with
              design-led aesthetics to deliver deeper, longer-lasting shine.
              Built for brands that see cleanliness as a core part of their
              customer experience.
            </p>

            <div className="cleaning-hero-buttons">
              {/* ✅ GET QUOTE → WHATSAPP (same number) */}
              <button
                className="btn-primary"
                onClick={() =>
                  window.open(
                    "https://wa.me/918954535455?text=Hi,%20I%20want%20a%20cleaning%20quote%20from%20OneAxis-EcoClean",
                    "_blank"
                  )
                }
              >
                Get Quote
              </button>

              {/* ✅ VIEW PRODUCTS → ProductsCleaning.jsx route */}
              <Link to="/cleaning/products" className="btn-outline">
                View Products
              </Link>
            </div>

            <p className="cleaning-premium-line">
              Crafted for businesses that treat hygiene, ambience and brand
              image as one experience.
            </p>

            <div className="cleaning-hero-stats">
              <div>
                <h3>500+</h3>
                <span>CLEANING PRODUCTS</span>
              </div>
              <div>
                <h3>50K+</h3>
                <span>SATISFIED CUSTOMERS</span>
              </div>
              <div>
                <h3>99%</h3>
                <span>QUALITY GUARANTEE</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={heroRight} className="cleaning-hero-right">
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />
            <motion.img
              src={heroImg}
              alt="OneAxis EcoClean Products"
              className="hero-floating-img"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className="hero-tag hero-tag-top">Industrial Cleaners</div>
            <div className="hero-tag hero-tag-mid">Sanitizers</div>
            <div className="hero-tag hero-tag-bottom">Quality Assured</div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ WHY CHOOSE (gradient background) ============ */}
      <section id="why-cleaning" className="cleaning-why">
        <motion.div
          className="cleaning-why-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2>Why Choose OneAxis-EcoClean</h2>
          <p>
            Trusted by forward-thinking businesses for reliable, premium and
            eco-aware cleaning solutions tailored to modern spaces.
          </p>
        </motion.div>

        <div className="cleaning-why-grid">
          {/* LEFT IMAGE CARD – zoom in */}
          <motion.div
            className="cleaning-why-left"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="why-image-card hover-lift">
              <img src={industryImg} alt="Industrial solutions" />
              <div className="why-expert-chip">
                <span className="chip-main">Expert</span>
                <span className="chip-sub">Service</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT TEXT – fade up */}
          <motion.div
            className="cleaning-why-right"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <span className="why-pill">INDUSTRY LEADER</span>
            <h3 className="why-title">Industrial-Grade Cleaning Solutions</h3>
            <p className="why-desc">
              Precision-engineered solutions for heavy-duty environments. Built
              to deliver uncompromising performance, operational safety and
              surface protection across large-scale facilities.
            </p>

            <motion.div
              className="why-feature-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
            >
              <motion.div
                variants={fadeUp}
                className="why-feature-card hover-lift"
              >
                <h4>Heavy-Duty Performance</h4>
                <p>
                  Handles deep-set stains, grease and high-traffic wear while
                  maintaining a refined finish.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="why-feature-card hover-lift"
              >
                <h4>Eco-Responsible Formulas</h4>
                <p>
                  Designed to balance powerful cleaning action with lower
                  toxicity and mindful chemistry.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="why-feature-card hover-lift"
              >
                <h4>Certified & Surface-Safe</h4>
                <p>
                  Tested across sensitive surfaces and regulated workspaces for
                  dependable, everyday use.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ COMMERCIAL SERVICES (white bg) ============ */}
      <section className="cleaning-commercial">
        <div className="cleaning-commercial-grid">
          {/* LEFT IMAGE – slide up */}
          <motion.div
            className="cleaning-commercial-image hover-lift"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={commercialImg} alt="Commercial Cleaning" />
          </motion.div>

          {/* RIGHT CONTENT – fade up */}
          <motion.div
            className="cleaning-commercial-content"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="commercial-title">Commercial Cleaning Services</h3>
            <p className="commercial-desc">
              Tailored cleaning for offices, retail environments and premium
              commercial spaces. OneAxis-EcoClean helps you maintain spotless,
              welcoming interiors that reflect your brand’s standards and
              delight every visitor.
            </p>

            <motion.div
              className="commercial-stats"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.35 }}
            >
              <motion.div
                variants={fadeUp}
                className="commercial-stat-card hover-lift"
              >
                <h4>15+</h4>
                <span>Years Experience</span>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="commercial-stat-card hover-lift"
              >
                <h4>Custom</h4>
                <span>Cleaning Plans</span>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="commercial-stat-card hover-lift"
              >
                <h4>Professional</h4>
                <span>Service Standards</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ BULK SUPPLY (gradient bg) ============ */}
      <section className="cleaning-bulk">
        <div className="cleaning-bulk-inner">
          {/* LEFT TEXT – fade up */}
          <motion.div
            className="cleaning-bulk-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="bulk-pill">BULK & INSTITUTIONAL SUPPLY</span>
            <h3>Bulk Supply for Growing Businesses</h3>
            <p>
              From multi-location brands to large campuses and industrial
              clusters, OneAxis-EcoClean offers structured bulk supply programs
              that keep you stocked without last-minute scramble.
            </p>

            <div className="bulk-grid">
              <div className="hover-lift-small">
                <strong>Offices & Corporates</strong>
                <p>
                  Centralised supply for workstations, cafeterias, washrooms and
                  common areas.
                </p>
              </div>
              <div className="hover-lift-small">
                <strong>Hotels & Hospitality</strong>
                <p>
                  Guest rooms, lobbies, linen and kitchen hygiene under one
                  curated program.
                </p>
              </div>
              <div className="hover-lift-small">
                <strong>Healthcare & Institutions</strong>
                <p>
                  High-hygiene solutions tuned for sensitive, critical
                  environments.
                </p>
              </div>
              <div className="hover-lift-small">
                <strong>Industrial & Warehouses</strong>
                <p>
                  Heavy-duty options for shopfloors, loading bays and storage
                  areas.
                </p>
              </div>
            </div>

            <button
              className="btn-white"
              onClick={() =>
                window.open(
                  "https://wa.me/918954535455?text=Hi,%20I%20want%20to%20discuss%20bulk%20supply%20with%20OneAxis-EcoClean",
                  "_blank"
                )
              }
            >
              Discuss Bulk Pricing
            </button>
          </motion.div>

          {/* RIGHT STATS – slide from right */}
          <motion.div
            className="cleaning-bulk-stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              variants={slideFromRight}
              className="bulk-stat-card hover-lift"
            >
              <span className="bulk-number">30+</span>
              <span className="bulk-label">Cities Served</span>
            </motion.div>
            <motion.div
              variants={slideFromRight}
              className="bulk-stat-card hover-lift"
            >
              <span className="bulk-number">100K+</span>
              <span className="bulk-label">Units Supplied Yearly</span>
            </motion.div>
            <motion.div
              variants={slideFromRight}
              className="bulk-stat-card hover-lift"
            >
              <span className="bulk-number">Dedicated</span>
              <span className="bulk-label">Account Support</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section id="faq" className="cleaning-faq-pro">
        <div className="faq-bg-glow" />

        {/* FAQ HEADING */}
        <motion.div
          className="cleaning-faq-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Frequently Asked Questions</h2>
          <p>
            Have questions about OneAxis-EcoClean, bulk supply or coverage?
            Here are quick answers for decision-makers and operations teams.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <motion.div
          className="cleaning-faq-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {faqs.map((item, idx) => (
            <motion.div
              key={idx}
              variants={faqCardVariant}
              className={`faq-card hover-lift-soft ${
                activeFaq === idx ? "open" : ""
              }`}
            >
              <button
                className="faq-question-row"
                onClick={() =>
                  setActiveFaq(activeFaq === idx ? null : idx)
                }
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-toggle-btn">
                  {activeFaq === idx ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </motion.div>
          ))}

          {/* FAQ END BUTTONS */}
          <motion.div className="faq-end-buttons" variants={fadeUp}>
            <Link to="/cleaning/about" className="faq-btn primary">
              About Us
            </Link>
            <Link to="/cleaning/products" className="faq-btn outline">
              Products
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Cleaning;

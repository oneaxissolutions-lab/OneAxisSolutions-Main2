// src/components/AboutCleaning.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/AboutCleaning.css";

import heroImg from "../assets/hero.jpg";
import journeyImg from "../assets/cleaning.jpg";
import teamImg from "../assets/commercial.jpg";
import clean from "../assets/clean.jpg";

import LiquidEther from "../components/LiquidEther"; // 🔥 new import

// ========== ANIMATION VARIANTS ==========

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
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

const AboutCleaning = () => {
  return (
    <main className="cleaning-subpage about-cleaning">
      {/* 🔥 FULL-PAGE LIQUID BACKGROUND */}
      <div className="about-liquid-bg">
        <div className="about-liquid-inner">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            color0="#5227FF"
            color1="#FF9FFC"
            color2="#B19EEF"
          />
        </div>
      </div>

      {/* 🔼 SAB ACTUAL CONTENT YAHAN, BG KE UPAR */}
      <div className="about-content">
        {/* TOP BAR WITH BACK BUTTON */}
        <motion.section
          className="subpage-topbar"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <Link to="/" className="back-home-btn">
            ← Back to Home
          </Link>
        </motion.section>

        {/* ========== ABOUT ONEAXIS-ECOCLEAN (hero section with image) ========== */}
        <motion.section
          className="about-section about-hero-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <div className="about-two-col">
            {/* TEXT (slide from left) */}
            <motion.div
              className="about-col about-col-text"
              variants={fadeLeft}
            >
              <span className="about-tag">ABOUT ONEAXIS-ECOCLEAN</span>
              <h1>
                Designed for spaces that deserve more than{" "}
                <span className="brand-gradient-text">“just clean”.</span>
              </h1>
              <p>
                OneAxis-EcoClean is the cleaning and hygiene vertical of
                OneAxis, created for brands that see hygiene, ambience and
                customer perception as one experience. Our products are crafted
                to deliver deep, visible results while keeping your spaces safe,
                welcoming and future-ready.
              </p>
              <p>
                Whether it’s a corporate lobby, a retail flagship store or a
                high-traffic industrial floor, OneAxis-EcoClean helps you
                maintain a consistent standard of care across every square foot
                of your ecosystem.
              </p>

              <motion.div
                className="about-highlight-box"
                variants={scaleIn}
              >
                <h3>
                  Built for{" "}
                  <span className="brand-gradient-text">
                    modern operations
                  </span>
                </h3>
                <p>
                  From product design to delivery, we focus on practicality,
                  reliability and ease of use—so your teams can maintain
                  high-impact spaces without friction.
                </p>
              </motion.div>
            </motion.div>

            {/* IMAGE (soft scale in) */}
            <motion.div
              className="about-col about-col-image"
              variants={scaleIn}
            >
              <div className="about-img-card">
                <div className="about-img-glow"></div>
                <img
                  src={heroImg}
                  alt="OneAxis-EcoClean hero"
                  className="about-img-main"
                />
                <div className="about-img-chip">
                  Premium hygiene <span>by OneAxis-EcoClean</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========== OUR JOURNEY (timeline + side image) ========== */}
        <motion.section
          className="about-section journey-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <div className="about-two-col reverse">
            {/* IMAGE LEFT (fade from left) */}
            <motion.div
              className="about-col about-col-image"
              variants={fadeLeft}
            >
              <div className="about-img-card slim">
                <img
                  src={journeyImg}
                  alt="Journey and evolution"
                  className="about-img-main"
                />
              </div>
            </motion.div>

            {/* TEXT RIGHT (stagger + fadeUp per item) */}
            <motion.div
              className="about-col about-col-text"
              variants={staggerContainer}
            >
              <motion.div className="about-section-head" variants={fadeUp}>
                <h2>
                  Our <span className="brand-gradient-text">Journey</span>
                </h2>
                <p>
                  OneAxis-EcoClean grew from on-ground experience—listening to
                  facility teams, operations managers and business owners who
                  needed more than generic cleaning products.
                </p>
              </motion.div>

              <div className="journey-timeline big">
                <motion.div className="journey-item" variants={fadeUp}>
                  <span className="journey-year">EARLY STAGE</span>
                  <h3>Starting Close to the Floor</h3>
                  <p>
                    We began with simple, focused solutions for everyday
                    challenges—removing stains, managing odours and keeping
                    high-touch surfaces safe in offices and stores.
                  </p>
                </motion.div>
                <motion.div className="journey-item" variants={fadeUp}>
                  <span className="journey-year">GROWTH</span>
                  <h3>Scaling with Client Expectations</h3>
                  <p>
                    As our clients grew into multi-site and multi-city
                    operations, we expanded into bulk supply, category-specific
                    products and structured delivery schedules.
                  </p>
                </motion.div>
                <motion.div className="journey-item" variants={fadeUp}>
                  <span className="journey-year">TODAY</span>
                  <h3>From Vendor to Hygiene Partner</h3>
                  <p>
                    Today, OneAxis-EcoClean stands as a strategic hygiene
                    partner, aligning its portfolio with brand guidelines,
                    sustainability goals and long-term facility planning.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========== MISSION & VISION (two cards + supporting image) ========== */}
        <motion.section
          className="about-section mission-vision-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.div
            className="about-section-head center"
            variants={fadeUp}
          >
            <h2>
              Our <span className="brand-gradient-text">Mission & Vision</span>
            </h2>
            <p>
              Every product, process and interaction at OneAxis-EcoClean is
              guided by a simple belief—clean spaces should feel effortless,
              intentional and reassuring.
            </p>
          </motion.div>

          <div className="mission-vision-layout">
            {/* Left cards (fadeUp stagger) */}
            <motion.div
              className="mission-vision-grid"
              variants={staggerContainer}
            >
              <motion.div className="mv-card" variants={fadeUp}>
                <h3>Our Mission</h3>
                <p>
                  To enable businesses to maintain spotless, safe and branded
                  environments—through dependable cleaning solutions that
                  integrate seamlessly into daily operations.
                </p>
              </motion.div>
              <motion.div className="mv-card" variants={fadeUp}>
                <h3>Our Vision</h3>
                <p>
                  To become the most trusted hygiene and cleaning partner for
                  forward-looking brands across India, known for consistency,
                  design-sensitive thinking and sustainable choices.
                </p>
              </motion.div>
            </motion.div>

            {/* Right image (fade from right) */}
            <motion.div
              className="mission-vision-image"
              variants={fadeRight}
            >
              <div className="about-img-card soft">
                <img
                  src={clean}
                  alt="Mission and Vision"
                  className="about-img-main"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========== MEET OUR TEAM (cards + team image) ========== */}
        <motion.section
          className="about-section team-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <div className="about-two-col">
            {/* TEXT + CARDS (stagger) */}
            <motion.div
              className="about-col about-col-text"
              variants={staggerContainer}
            >
              <motion.div
                className="about-section-head"
                variants={fadeUp}
              >
                <h2>
                  Meet Our{" "}
                  <span className="brand-gradient-text">Team</span>
                </h2>
                <p>
                  Our team blends product knowledge, supply-chain discipline and
                  real-world facility experience. Together, they ensure
                  OneAxis-EcoClean stays aligned with what operations teams
                  actually need.
                </p>
              </motion.div>

              <div className="about-team-grid">
                <motion.div className="team-card" variants={fadeUp}>
                  <div className="team-avatar">A</div>
                  <h3>Account Specialists</h3>
                  <p>
                    Work as your direct partner—mapping consumption, refining
                    product fit and coordinating bulk supply requirements.
                  </p>
                </motion.div>
                <motion.div className="team-card" variants={fadeUp}>
                  <div className="team-avatar">Q</div>
                  <h3>Quality &amp; R&amp;D</h3>
                  <p>
                    Ensure formulations are effective, stable and compatible
                    with a wide range of surfaces, equipment and compliance
                    needs.
                  </p>
                </motion.div>
                <motion.div className="team-card" variants={fadeUp}>
                  <div className="team-avatar">O</div>
                  <h3>Operations &amp; Logistics</h3>
                  <p>
                    Manage inventory, warehousing and timely dispatches so your
                    facilities are never waiting on critical cleaning supplies.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* TEAM IMAGE (scale in) */}
            <motion.div
              className="about-col about-col-image"
              variants={scaleIn}
            >
              <div className="about-img-card">
                <img
                  src={teamImg}
                  alt="OneAxis-EcoClean team"
                  className="about-img-main"
                />
                <div className="about-img-chip bottom-right">
                  Dedicated
                  <br />
                  support teams
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========== CORE VALUES (pills + badge) ========== */}
        <motion.section
          className="about-section values-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.div
            className="about-section-head center"
            variants={fadeUp}
          >
            <h2>
              Our <span className="brand-gradient-text">Core Values</span>
            </h2>
          </motion.div>

          <div className="values-layout">
            {/* Left – pill list (fadeUp stagger) */}
            <motion.div
              className="values-grid"
              variants={staggerContainer}
            >
              <motion.div className="value-pill" variants={fadeUp}>
                <span>Consistency over one-time impact</span>
              </motion.div>
              <motion.div className="value-pill" variants={fadeUp}>
                <span>Safety for people &amp; surfaces</span>
              </motion.div>
              <motion.div className="value-pill" variants={fadeUp}>
                <span>Honest, transparent communication</span>
              </motion.div>
              <motion.div className="value-pill" variants={fadeUp}>
                <span>Partnership mindset, not transactional</span>
              </motion.div>
              <motion.div className="value-pill" variants={fadeUp}>
                <span>Long-term, sustainable thinking</span>
              </motion.div>
              <motion.div className="value-pill" variants={fadeUp}>
                <span>Respect for time, budgets &amp; teams</span>
              </motion.div>
            </motion.div>

            {/* Right – badge (scaleIn) */}
            <motion.div
              className="values-illustration"
              variants={scaleIn}
            >
              <div className="values-badge">
                <div className="values-badge-ring" />
                <div className="values-badge-inner">
                  <span>OneAxis</span>
                  <strong>EcoClean</strong>
                  <p>Trusted Hygiene Partner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========== CERTIFICATIONS & STANDARDS ========== */}
        <motion.section
          className="about-section certifications-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.div
            className="about-section-head"
            variants={fadeUp}
          >
            <h2>
              Certifications &amp;{" "}
              <span className="brand-gradient-text">Standards</span>
            </h2>
            <p>
              We design our internal processes around quality and hygiene
              expectations, helping businesses operate with confidence during
              audits, inspections and brand reviews.
            </p>
          </motion.div>

          <div className="cert-layout">
            <motion.div
              className="cert-grid"
              variants={staggerContainer}
            >
              <motion.div className="cert-card" variants={fadeUp}>
                <h3>Quality-First Mindset</h3>
                <p>
                  Batch-wise quality checks, controlled documentation and vendor
                  validation ensure product reliability throughout the
                  lifecycle.
                </p>
              </motion.div>
              <motion.div className="cert-card" variants={fadeUp}>
                <h3>Alignment with Hygiene Standards</h3>
                <p>
                  Our range is curated to support compliance-friendly hygiene
                  practices across offices, hospitality, healthcare and
                  industrial zones.
                </p>
              </motion.div>
              <motion.div className="cert-card" variants={fadeUp}>
                <h3>Process Discipline</h3>
                <p>
                  From packaging integrity to dispatch timelines, we follow
                  structured SOPs so your supply chain stays predictable and
                  audit-ready.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="cert-badges-strip"
              variants={fadeUp}
            >
              <div className="cert-badge-pill">Quality Assured</div>
              <div className="cert-badge-pill">Consistency Focused</div>
              <div className="cert-badge-pill">Partner-Ready</div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========== BOTTOM PRODUCT CTA BUTTON ========== */}
        <motion.section
          className="about-section about-bottom-cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <div>
            <Link to="/cleaning/products" className="products-pill-btn">
              Products
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default AboutCleaning;

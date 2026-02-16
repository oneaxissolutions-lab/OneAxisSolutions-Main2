// src/pages/AutomationServices.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/AutomationServices.css";

import bgVideo from "../assets/automation-flow.mp4";
import ScheduleModal from "../components/ScheduleModal"; // ✅ same modal as Webdevelopment

const ease = [0.22, 1, 0.36, 1];

// ✅ WhatsApp number (91 + 89545 35455)
const WHATSAPP_NUMBER = "918954535455";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const AutomationServices = () => {
  // ✅ Strategy Call modal state (same pattern as Webdevelopment)
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const whatsappQuote = useMemo(() => {
    const msg =
      "Hi, I’m interested in Automation Services (n8n workflows) from OneAxis Solutions. Please share pricing and the next steps.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, []);

  const whatsappAudit = useMemo(() => {
    const msg =
      "Hi, I’d like an automation audit. Please review my current processes and suggest workflow improvements.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, []);

  const offerings = [
    {
      title: "n8n Workflow Automation",
      desc: "Turn repetitive, manual work into reliable workflows – approvals, alerts, routing, scheduling and data sync built to scale.",
      meta: "Fast implementation • Scalable",
      icon: "⚡",
    },
    {
      title: "WhatsApp & Email Flows",
      desc: "Automated lead follow-ups, reminders, invoices and status updates across WhatsApp and email – consistent every single time.",
      meta: "Higher response • Less effort",
      icon: "💬",
    },
    {
      title: "Google Sheets & CRM Sync",
      desc: "Keep Sheets, CRMs, forms and webhooks perfectly in sync with structured, real-time pipelines and smart deduplication.",
      meta: "Clean, live data",
      icon: "🔁",
    },
    {
      title: "AI-Powered Workflows",
      desc: "Add AI to your flows for auto-summaries, tagging, lead scoring, routing and smart replies that feel personalised at scale.",
      meta: "Modern, intelligent automation",
      icon: "🧠",
    },
    {
      title: "API & Webhook Integrations",
      desc: "Connect payment gateways, shipping tools, support systems and analytics through secure APIs and webhooks.",
      meta: "Connected ecosystem",
      icon: "🔗",
    },
    {
      title: "Monitoring & Optimisation",
      desc: "Health checks, error alerts, retries and continuous optimisation so your workflows remain stable in day-to-day operations.",
      meta: "Built for long-term reliability",
      icon: "🛡️",
    },
  ];

  const useCases = [
    {
      h: "Lead → WhatsApp → CRM",
      p: "Website form submissions automatically create CRM entries, trigger WhatsApp messages, assign owners and schedule follow-ups.",
      tag: "Sales",
    },
    {
      h: "Orders & Payment Notifications",
      p: "On successful payment, send invoices, WhatsApp confirmations and internal notifications to sales, finance or operations.",
      tag: "E-commerce",
    },
    {
      h: "Support Ticket Automation",
      p: "New tickets are categorised, prioritised, assigned to the right agents and instantly acknowledged to the customer.",
      tag: "Support",
    },
    {
      h: "Content & Social Pipelines",
      p: "From ideas to approval to scheduled posts, with reporting summaries shipped on a weekly or monthly basis.",
      tag: "Marketing",
    },
  ];

  const steps = [
    {
      n: "01",
      t: "Discovery Call",
      d: "We understand your current workflows, friction points and desired outcomes so we know exactly what to automate.",
    },
    {
      n: "02",
      t: "Workflow Blueprint",
      d: "We design a clear flow diagram with triggers, actions, logic and failure handling before anything is built.",
    },
    {
      n: "03",
      t: "Build & Integrations",
      d: "We configure n8n workflows, connect APIs, set up webhooks, structure data and thoroughly test every path.",
    },
    {
      n: "04",
      t: "Launch & Monitoring",
      d: "We deploy, add logging, alerts and retries, and then refine the workflows based on real usage and performance.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to build an automation?",
      a: "Smaller workflows usually take 1–2 days, medium flows 3–7 days and complex, multi-system automations can take 1–3 weeks depending on the scope.",
    },
    {
      q: "Do you support both n8n Cloud and self-hosted setups?",
      a: "Yes. We work with both cloud and self-hosted n8n, and we recommend the right option based on your security, budget and infrastructure needs.",
    },
    {
      q: "Can you automate WhatsApp journeys for my business?",
      a: "Absolutely. Using WhatsApp APIs and providers, we automate lead journeys, follow-ups, reminders, status updates and more in a compliant way.",
    },
    {
      q: "Do you provide support after the workflows go live?",
      a: "Yes. We offer ongoing monitoring, fixes and iterative improvements with optional monthly support for production workflows.",
    },
  ];

  const focusAreas = [
    {
      title: "Lead-driven businesses",
      desc: "Coaching, agencies, real estate, institutes and service brands that handle a constant flow of enquiries and conversations.",
      hint: "Never miss a lead or follow-up again.",
    },
    {
      title: "Operations-heavy teams",
      desc: "Logistics, D2C brands, warehouses and support units that send the same type of updates across tools multiple times a day.",
      hint: "Status updates and checklists on autopilot.",
    },
    {
      title: "Founders & lean teams",
      desc: "Small, ambitious teams that want to scale output without simply adding more headcount or manual admin work.",
      hint: "Let workflows handle the busywork.",
    },
    {
      title: "Multi-tool setups",
      desc: "Stacks that include CRMs, payment gateways, forms, WhatsApp, email and analytics – all needing one connected system.",
      hint: "Turn scattered tools into one coherent flow.",
    },
  ];

  return (
    <main className="autoPage">
      {/* ===== Background Video Layer ===== */}
      <div className="autoBg" aria-hidden="true">
        <video
          className="autoVideo"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="autoVignette" />
        <div className="autoGlow" />
        <div className="autoNoise" />
      </div>

      {/* ===== Content Layer ===== */}
      <div className="autoWrap">
        {/* Top bar */}
        <motion.div
          className="autoTopbar"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Link to="/" className="autoBackBtn">
            ← Back to Home
          </Link>

          <div className="autoTopRight">
            <span className="autoMiniPill">
              OneAxis Solutions • Automation • n8n Workflows
            </span>
          </div>
        </motion.div>

        {/* HERO */}
        <section className="autoHero">
          <motion.div
            className="autoHeroGrid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
          >
            <motion.div className="autoHeroLeft" variants={fadeLeft}>
              <div className="autoBadge">
                <span className="autoBadgeDot" />
                Automation Services · OneAxis Solutions
              </div>

              <h1 className="autoTitle">
                Build <span className="autoGradientText">smart workflows</span>{" "}
                that quietly run your business.
              </h1>

              <p className="autoSub">
                We design n8n-powered automations that connect your tools, remove
                repetitive work and keep your operations consistent — with logs,
                retries and monitoring built in from day one.
              </p>

              <div className="autoHeroActions">
                <button
                  className="autoBtn primary"
                  onClick={() => window.open(whatsappQuote, "_blank")}
                >
                  Get Quote on WhatsApp
                </button>

                <button
                  className="autoBtn ghost"
                  onClick={() =>
                    document
                      .getElementById("auto-offerings")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Services
                </button>
              </div>

              <div className="autoStats">
                <div className="autoStatCard">
                  <b>24/7</b>
                  <span>Workflows running</span>
                </div>
                <div className="autoStatCard">
                  <b>Fast</b>
                  <span>Design & delivery</span>
                </div>
                <div className="autoStatCard">
                  <b>Secure</b>
                  <span>APIs & webhooks</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="autoHeroRight" variants={fadeRight}>
              <div className="autoPreview">
                <div className="autoPreviewHeader">
                  <div className="autoDots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="autoPreviewTitle">Workflow Preview</span>
                </div>

                <div className="autoFlow">
                  <div className="node start">
                    <div className="nodeIcon">⏱️</div>
                    <div className="nodeText">
                      <b>Trigger</b>
                      <span>Schedule / Webhook</span>
                    </div>
                  </div>

                  <div className="linkLine" />

                  <div className="node mid">
                    <div className="nodeIcon">🧩</div>
                    <div className="nodeText">
                      <b>Logic</b>
                      <span>Filters & Conditions</span>
                    </div>
                  </div>

                  <div className="linkLine" />

                  <div className="node ai">
                    <div className="nodeIcon">🧠</div>
                    <div className="nodeText">
                      <b>AI Step</b>
                      <span>Tag / Summarise</span>
                    </div>
                  </div>

                  <div className="linkLine" />

                  <div className="node end">
                    <div className="nodeIcon">✅</div>
                    <div className="nodeText">
                      <b>Actions</b>
                      <span>WhatsApp · CRM · Sheets</span>
                    </div>
                  </div>
                </div>

                <div className="autoPreviewFooter">
                  <span>Retries • Logs • Alerts • Deduplication</span>
                  <button
                    className="autoMiniBtn"
                    onClick={() => window.open(whatsappAudit, "_blank")}
                  >
                    Request Audit
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* OFFERINGS */}
        <section id="auto-offerings" className="autoSection">
          <motion.div
            className="autoHead"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>
              What we build with{" "}
              <span className="autoGradientText">automation</span>
            </h2>
            <p>
              Every business has its own way of working. We map your reality and
              design clean, stable and scalable automations that support it.
            </p>
          </motion.div>

          <motion.div
            className="autoGrid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            {offerings.map((x) => (
              <motion.article
                className="autoCard"
                key={x.title}
                variants={fadeUp}
              >
                <div className="autoCardTop">
                  <div className="autoIcon">{x.icon}</div>
                  <span className="autoMeta">{x.meta}</span>
                </div>
                <h3>{x.title}</h3>
                <p>{x.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* USE CASES */}
        <section className="autoSection alt">
          <motion.div
            className="autoHead"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>
              Real-world{" "}
              <span className="autoGradientText">automation scenarios</span>
            </h2>
            <p>
              These are the kind of flows our clients actually rely on day after
              day in production.
            </p>
          </motion.div>

          <motion.div
            className="autoUseGrid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            {useCases.map((u) => (
              <motion.div key={u.h} className="autoUseCard" variants={fadeUp}>
                <span className="autoTag">{u.tag}</span>
                <h3>{u.h}</h3>
                <p>{u.p}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROCESS */}
        <section className="autoSection">
          <motion.div
            className="autoHead"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>
              Our delivery <span className="autoGradientText">process</span>
            </h2>
            <p>
              A transparent, structured approach so you always know what we’re
              building and why.
            </p>
          </motion.div>

          <motion.div
            className="autoSteps"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            {steps.map((s) => (
              <motion.div key={s.n} className="autoStep" variants={fadeUp}>
                <div className="autoStepNum">{s.n}</div>
                <div className="autoStepBody">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* RESULTS / VALUE */}
        <section className="autoSection alt">
          <motion.div
            className="autoHead"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>
              Before vs after{" "}
              <span className="autoGradientText">automation</span>
            </h2>
            <p>
              Not just “cool tech” — a visible shift in how your team works every
              day.
            </p>
          </motion.div>

          <motion.div
            className="autoSplit"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div className="autoBigCard" variants={fadeUp}>
              <h3>Before</h3>
              <ul>
                <li>Manual follow-ups, delays and missed opportunities</li>
                <li>Copy-pasting data across tools and spreadsheets</li>
                <li>No clear view of where things failed in the flow</li>
                <li>Inconsistent execution between team members</li>
              </ul>
            </motion.div>

            <motion.div className="autoBigCard highlight" variants={fadeUp}>
              <h3>After</h3>
              <ul>
                <li>Instant responses and structured follow-ups</li>
                <li>Clean, always-updated pipelines across your tools</li>
                <li>Logs, alerts and retries for predictable behaviour</li>
                <li>Teams focusing on work that actually needs humans</li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* WHY ONEAXIS */}
        <section className="autoSection">
          <motion.div
            className="autoHead"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>
              Why OneAxis <span className="autoGradientText">Solutions</span>
            </h2>
            <p>
              Premium build quality and a reliability-first mindset so your
              automations keep running when it matters.
            </p>
          </motion.div>

          <motion.div
            className="autoWhyGrid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div className="autoWhyCard" variants={fadeUp}>
              <h3>Production-grade logic</h3>
              <p>
                We design around edge cases with retries, fallbacks and error
                handling baked into the architecture.
              </p>
            </motion.div>

            <motion.div className="autoWhyCard" variants={fadeUp}>
              <h3>Clean UI & documentation</h3>
              <p>
                You get a clear blueprint and simple documentation so your team
                understands and can maintain every flow.
              </p>
            </motion.div>

            <motion.div className="autoWhyCard highlight" variants={fadeUp}>
              <h3>Speed without compromise</h3>
              <p>
                We move fast, but never at the cost of stability, structure or
                long-term maintainability.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="autoSection alt">
          <motion.div
            className="autoHead"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>
              FAQs on <span className="autoGradientText">automation</span>
            </h2>
            <p>Common questions we get when teams start automating seriously.</p>
          </motion.div>

          <motion.div
            className="autoFaq"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            {faqs.map((f) => (
              <motion.div key={f.q} className="autoFaqItem" variants={fadeUp}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FINAL CTA – READY TO AUTOMATE */}
        <section className="autoFinal">
          <motion.div
            className="autoFinalCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
          >
            <span className="autoFinalPill">READY TO AUTOMATE?</span>
            <h2>
              Let’s build workflows that save time{" "}
              <span className="autoGradientText">every single day.</span>
            </h2>
            <p>
              Send us a quick WhatsApp message and we’ll share a tailored
              workflow plan and investment estimate for your use case.
            </p>

            <div className="autoFinalActions">
              <button
                className="autoBtn primary big"
                onClick={() => window.open(whatsappQuote, "_blank")}
              >
                Start on WhatsApp
              </button>

              <Link to="/" className="autoBtn ghost big">
                Explore Other Services
              </Link>
            </div>
          </motion.div>
        </section>

        {/* AFTER-CTA FOCUS AREAS */}
        <section className="autoSection autoAfterCta">
          <motion.div
            className="autoHead"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>
              Where automation{" "}
              <span className="autoGradientText">adds the most value</span>
            </h2>
            <p>
              If you recognise yourself in any of these, structured automation
              almost always delivers a strong return on time and investment.
            </p>
          </motion.div>

          <motion.div
            className="autoAfterGrid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            {focusAreas.map((f) => (
              <motion.article
                key={f.title}
                className="autoAfterCard"
                variants={fadeUp}
              >
                <div className="autoAfterBadge" />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <small>{f.hint}</small>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ===== FINAL COLLABORATION CTA (INSIDE autoWrap) ===== */}
        <section className="autoCollab">
          <motion.div
            className="autoCollabCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
          >
            <span className="autoCollabPill">LET’S COLLABORATE</span>

            <h2 className="autoCollabTitle">
              Design the future of your <br />
              <span className="autoGradientText">digital business</span>
            </h2>

            <p className="autoCollabDesc">
              Share your vision and our automation strategists will craft a
              clear, scalable roadmap tailored to your business workflows.
            </p>

            <div className="autoCollabActions">
              <button
                className="autoBtn primary big"
                onClick={() => setIsScheduleOpen(true)}
              >
                Book a Strategy Call
              </button>

              <button
                className="autoBtn ghost big"
                onClick={() => window.open(whatsappQuote, "_blank")}
              >
                WhatsApp Us
              </button>
            </div>

            <div className="autoCollabMini">
              <span>⚡ n8n Workflows</span>
              <span>🛡️ Monitoring</span>
              <span>🔗 Integrations</span>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ✅ Strategy Call Modal (same as Webdevelopment) */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </main>
  );
};

export default AutomationServices;

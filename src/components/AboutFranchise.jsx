import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AboutFranchise.css";

const AboutFranchise = () => {
  const navigate = useNavigate();

  // ✅ WhatsApp (Contact Us)
  const WHATSAPP_NUMBER = "918954535455"; // +91 89545 35455
  const WHATSAPP_MSG =
    "Hi One Axis Solutions! I want to know more about your services/franchise. Please share details.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MSG
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ✅ reveal animation
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".af-reveal"));
    if (!els.length) return;

    const inViewNow = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > window.innerHeight * 0.08;
    };

    els.forEach((el) => {
      if (inViewNow(el)) el.classList.add("af-inview");
      else el.classList.add("af-will-animate");
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("af-inview");
          else entry.target.classList.remove("af-inview");
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

  return (
    <div className="af-page">
      {/* floating orbs */}
      <div className="af-orb orb1" />
      <div className="af-orb orb2" />
      <div className="af-orb orb3" />

      {/* HERO */}
      <section className="af-hero af-hero--big">
        <div className="af-hero-inner">
          <div className="af-left af-reveal af-reveal-left" style={d(120)}>
            <div className="af-badge">One Axis Solutions • About</div>

            <h1 className="af-title">
              Building <span>Future-Ready</span> Businesses Across India
            </h1>

            <p className="af-sub">
              One Axis Solutions is a multi-service company focused on Web Development,
              Software Solutions, Interior Services, and Business Consulting — powered by
              modern systems and execution clarity.
            </p>

            <p className="af-sub af-sub--muted">
              Premium delivery + scalable process. That’s why clients trust us and partners
              grow fast with us.
            </p>

            <div className="af-actions">
              <button className="af-btn primary" onClick={() => navigate("/partner-zone")}>
                ← Back to Partner Zone
              </button>
              <button className="af-btn ghost" onClick={openWhatsApp}>
                Contact Us on WhatsApp
              </button>
            </div>

            <div className="af-kpis">
              <div className="af-kpi">
                <div className="af-kpi-top">
                  <span className="af-kpi-num">50+</span>
                  <span className="af-kpi-tag">Projects</span>
                </div>
                <p>Delivered with quality, speed & modern UI experiences.</p>
              </div>

              <div className="af-kpi">
                <div className="af-kpi-top">
                  <span className="af-kpi-num">Pan-India</span>
                  <span className="af-kpi-tag">Vision</span>
                </div>
                <p>Scaling with a partner-first ecosystem & support model.</p>
              </div>

              <div className="af-kpi">
                <div className="af-kpi-top">
                  <span className="af-kpi-num">100%</span>
                  <span className="af-kpi-tag">Support</span>
                </div>
                <p>Training, marketing, operations — complete guidance.</p>
              </div>
            </div>
          </div>

          <div className="af-right af-reveal af-reveal-right" style={d(260)}>
            <div className="af-glass af-glass--big">
              <div className="af-glass-head">
                <div className="af-dot" />
                <div className="af-dot" />
                <div className="af-dot" />
                <span className="af-glass-title">oneaxis://about</span>
              </div>

              <div className="af-glass-body">
                <div className="af-stack">
                  <span>⚡ Brand + Systems</span>
                  <span>🧠 Strategy + Execution</span>
                  <span>📈 Growth + Scale</span>
                  <span>🤝 Partner-first Support</span>
                  <span>🧩 Templates + Processes</span>
                  <span>🛡️ Quality Control</span>
                </div>

                <div className="af-line" />

                <p className="af-mini">
                  We don’t just deliver services — we build a structured growth engine for
                  businesses and franchise partners with clarity.
                </p>

                <div className="af-tags">
                  <span className="af-tag">Web</span>
                  <span className="af-tag">Software</span>
                  <span className="af-tag">Interiors</span>
                  <span className="af-tag">Consulting</span>
                </div>
              </div>
            </div>

            <div className="af-strip">
              <span>Neon</span>
              <span>Premium</span>
              <span>Fast</span>
              <span>Scalable</span>
            </div>
          </div>
        </div>
      </section>

      <div className="af-divider" />

      {/* MISSION / VISION */}
      <section className="af-section af-section--big">
        <div className="af-wrap">
          <div className="af-grid-2">
            <div className="af-panel af-reveal af-reveal-up" style={d(120)}>
              <h2 className="af-h2">Our Mission</h2>
              <p>
                Empower local entrepreneurs with the right tools, brand credibility and operational
                clarity — so they can grow confidently in competitive markets.
              </p>
              <ul className="af-list">
                <li>✅ Clear processes & templates</li>
                <li>✅ Training + support ecosystem</li>
                <li>✅ Modern tools + quality control</li>
                <li>✅ Transparent communication</li>
              </ul>
            </div>

            <div className="af-panel af-reveal af-reveal-up" style={d(220)}>
              <h2 className="af-h2">Our Vision</h2>
              <p>
                Build a nationwide partner network that delivers consistent service quality, scales
                ethically, and creates real growth opportunities across India.
              </p>
              <ul className="af-list">
                <li>✅ Pan-India expansion model</li>
                <li>✅ Brand consistency + trust</li>
                <li>✅ Scalable systems</li>
                <li>✅ Territory planning & growth roadmap</li>
              </ul>
            </div>
          </div>

          {/* Material block */}
          <div className="af-material af-reveal af-reveal-up" style={d(260)}>
            <h2 className="af-h2">What Makes Us Different</h2>
            <p className="af-desc">
              One Axis is built on systems — not randomness. Every project and partner gets a repeatable
              framework so results are consistent.
            </p>

            <div className="af-material-grid">
              {[
                ["📌 Process Driven", "Clear steps: plan → build → launch → optimize."],
                ["🎯 ROI Mindset", "We focus on outcomes: leads, conversions, trust."],
                ["🧠 Smart Guidance", "Templates, scripts, strategy & ongoing support."],
                ["⚙️ Scalable Delivery", "Tools + QA ensure brand consistency everywhere."],
              ].map(([t, p]) => (
                <div className="af-mcard" key={t}>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="af-divider" />

      {/* SERVICES */}
      <section className="af-section af-section--big">
        <div className="af-wrap">
          <h2 className="af-h2 center af-reveal af-reveal-up" style={d(120)}>
            What We Do
          </h2>
          <p className="af-desc center af-reveal af-reveal-up" style={d(200)}>
            Multi-service delivery with a single goal — build authority + revenue with clarity.
          </p>

          <div className="af-cards">
            {[
              ["Web Development", "High-performance websites, landing pages and modern UI experiences."],
              ["Software Solutions", "Custom systems, admin panels, CRM tools, dashboards & automation."],
              ["Interior Services", "Space planning, execution guidance and premium design strategy."],
              ["Business Consulting", "Operations, pricing, positioning and growth roadmap."],
            ].map(([t, p], i) => (
              <div key={t} className="af-card af-reveal af-reveal-up" style={d(220 + i * 120)}>
                <h3>{t}</h3>
                <p>{p}</p>
                <div className="af-card-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="af-divider" />

      {/* ✅ NEW SECTION 1: Partner Support */}
      <section className="af-section af-section--big">
        <div className="af-wrap">
          <div className="af-split">
            <div className="af-split-left af-reveal af-reveal-left" style={d(120)}>
              <h2 className="af-h2">Partner Support System</h2>
              <p className="af-desc">
                As a partner, you get a full support kit — onboarding, training, sales guidance,
                marketing creatives, and delivery templates so you can start fast and scale smoothly.
              </p>

              <div className="af-bullets">
                <div className="af-bullet">✅ Training + Onboarding</div>
                <div className="af-bullet">✅ Proposal + Pricing Templates</div>
                <div className="af-bullet">✅ Marketing Creatives & Strategy</div>
                <div className="af-bullet">✅ Delivery Support + QA</div>
              </div>
            </div>

            <div className="af-split-right af-reveal af-reveal-right" style={d(220)}>
              <div className="af-box">
                <h3>What you receive</h3>
                <p>
                  Brand kit, onboarding checklist, scripts, SOPs, and step-by-step roadmap to close
                  clients and deliver consistently.
                </p>
                <div className="af-box-strip">
                  <span>Templates</span>
                  <span>Training</span>
                  <span>Support</span>
                  <span>QA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="af-divider" />

      {/* ✅ NEW SECTION 2: Growth Roadmap */}
      <section className="af-section af-section--big">
        <div className="af-wrap">
          <h2 className="af-h2 center af-reveal af-reveal-up" style={d(120)}>
            Growth Roadmap
          </h2>
          <p className="af-desc center af-reveal af-reveal-up" style={d(200)}>
            Clear growth journey — start local, build authority, and scale with multiple services.
          </p>

          <div className="af-roadmap">
            {[
              ["01", "Setup", "City plan, onboarding, brand kit & launch checklist."],
              ["02", "Acquire", "Lead methods, pitch scripts, proposals & conversion support."],
              ["03", "Deliver", "Execution guidance, QA, templates and client success."],
              ["04", "Scale", "Upsell services, build team, increase revenue."],
            ].map(([no, t, p]) => (
              <div className="af-rstep af-reveal af-reveal-up" style={d(260)} key={no}>
                <div className="af-rno">{no}</div>
                <div>
                  <h3 className="af-rtitle">{t}</h3>
                  <p className="af-rdesc">{p}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Contact Us button after 2 new sections */}
          <div className="af-after-btn af-reveal af-reveal-up" style={d(220)}>
            <button className="af-btn primary" onClick={openWhatsApp}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <div className="af-divider" />

      {/* WHY ONE AXIS */}
      <section className="af-section af-last af-section--big">
        <div className="af-wrap">
          <div className="af-why">
            <div className="af-why-left af-reveal af-reveal-left" style={d(120)}>
              <h2 className="af-h2">Why One Axis?</h2>
              <p className="af-desc">
                Because we give you a complete ecosystem — not just a service.
                Systems, branding, training, guidance and scalable opportunities.
              </p>

              <div className="af-pills">
                <span className="af-pill">⚡ Fast execution</span>
                <span className="af-pill">📦 Ready templates</span>
                <span className="af-pill">📈 ROI-first mindset</span>
                <span className="af-pill">🤝 Support team</span>
                <span className="af-pill">🧾 Clear deliverables</span>
              </div>

              <button className="af-btn primary" onClick={() => navigate("/partner-zone")}>
                Explore Franchise Page
              </button>
            </div>

            <div className="af-why-right af-reveal af-reveal-right" style={d(260)}>
              <div className="af-timeline">
                {[
                  ["01", "Understand", "We understand your market + goals."],
                  ["02", "Plan", "Clear roadmap, deliverables & structure."],
                  ["03", "Build", "Design + development + execution."],
                  ["04", "Scale", "Support + optimization + expansion."],
                ].map(([n, t, desc]) => (
                  <div className="af-time" key={n}>
                    <div className="af-time-no">{n}</div>
                    <div className="af-time-body">
                      <h4>{t}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFranchise;

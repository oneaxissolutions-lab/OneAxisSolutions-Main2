import { useState, useEffect, useRef } from "react";
import "../css/GraphicDesign.css";
import gp1 from "../assets/gp1.png";
import GraphicModal from "../components/GraphicModal";
import ScheduleModal from "../components/ScheduleModal";

/* ══════════════════════════════
   DATA
══════════════════════════════ */
const SERVICES = [
  { id:1, ico:"🎯", ibg:"linear-gradient(135deg,#FF9A76,#FF7E9A)", blob:"linear-gradient(135deg,#FF9A76,#FF7E9A)", name:"Brand Identity Design",  desc:"Complete brand ecosystems — logos, color systems, type scales, and guidelines that breathe life into your business story and scale seamlessly.",   tags:["Logo Design","Brand Guidelines","Typography"] },
  { id:2, ico:"✦",  ibg:"linear-gradient(135deg,#FF7E9A,#9B6FD8)", blob:"linear-gradient(135deg,#FF7E9A,#9B6FD8)", name:"Motion & Animation",      desc:"Kinetic design that doesn't just move — it speaks. Brand films, UI motion, reels, and animations that make audiences feel something real.",         tags:["After Effects","Lottie","Brand Films"] },
  { id:3, ico:"🖋", ibg:"linear-gradient(135deg,#7E9AFF,#9B6FD8)", blob:"linear-gradient(135deg,#7E9AFF,#9B6FD8)", name:"Editorial & Print",        desc:"Magazines, brochures, books, and posters crafted with editorial precision. Print as art — designed to be held, kept, and remembered.",             tags:["Magazines","Posters","Brochures"] },
  { id:4, ico:"📦", ibg:"linear-gradient(135deg,#FF9A76,#FF7E9A)", blob:"linear-gradient(135deg,#FF9A76,#FF7E9A)", name:"Packaging Design",          desc:"Shelf presence that sells before it's touched. We craft packaging that wins attention in retail and e-commerce environments.",                    tags:["3D Mockups","Retail","DTC Brands"] },
  { id:5, ico:"🖥", ibg:"linear-gradient(135deg,#7E9AFF,#9B6FD8)", blob:"linear-gradient(135deg,#7E9AFF,#9B6FD8)", name:"UI/UX & Digital Design",    desc:"Interfaces where beauty and function go to war and both win. Pixel-perfect digital experiences built on deep user insight.",                      tags:["Figma","Design Systems","Prototypes"] },
  { id:6, ico:"📱", ibg:"linear-gradient(135deg,#FF7E9A,#9B6FD8)", blob:"linear-gradient(135deg,#FF7E9A,#9B6FD8)", name:"Social Media & Content",    desc:"Cohesive content kits, templates, and campaign visuals that make your feed look intentional, editorial, and impossible to scroll past.",           tags:["Instagram","Campaign Kits","Reels"] },
];

const WHY_CARDS = [
  { ico:"🎯", ibg:"linear-gradient(135deg,#FF9A76,#FF7E9A)", badge:"Core",    badgeBg:"rgba(255,154,118,.12)", badgeBd:"rgba(255,154,118,.28)", badgeC:"#FF9A76", name:"Strategy-First Design",  desc:"Deep brand research & audience mapping before a single pixel is placed." },
  { ico:"✨", ibg:"linear-gradient(135deg,#FF7E9A,#9B6FD8)", badge:"Quality", badgeBg:"rgba(255,126,154,.1)",  badgeBd:"rgba(255,126,154,.25)", badgeC:"#FF7E9A", name:"Pixel-Perfect Output",    desc:"Every deliverable print-ready, screen-ready, and future-proof." },
  { ico:"♾️", ibg:"linear-gradient(135deg,#7E9AFF,#9B6FD8)", badge:"Premium", badgeBg:"rgba(126,154,255,.1)",  badgeBd:"rgba(126,154,255,.25)", badgeC:"#7E9AFF", name:"Unlimited Revisions",     desc:"No caps on Studio & Enterprise. We stop when you say perfect." },
  { ico:"🔒", ibg:"linear-gradient(135deg,#9B6FD8,#FF7E9A)", badge:"Always",  badgeBg:"rgba(155,111,216,.1)",  badgeBd:"rgba(155,111,216,.25)", badgeC:"#9B6FD8", name:"100% IP Ownership",       desc:"Every source file fully yours. NDAs available on request." },
];

const PRICING = [
  { name:"Starter", icon:"🌱", amt:"₹12K",  per:"One-time · Ideal for early founders", feat:false, feats:["Logo Design (3 concepts)","Brand Color System","Typography Pairing","Business Card Design","2 Revision Rounds","Print-ready Files"] },
  { name:"Studio",  icon:"⚡", amt:"₹42K",  per:"Complete brand · Best value",          feat:true,  feats:["Full Brand Identity System","Logo + All Variations","Brand Guidelines Doc","Social Media Starter Kit","Stationery Suite","Unlimited Revisions"] },
  { name:"Growth",  icon:"🚀", amt:"Custom", per:"Ongoing creative partner",             feat:false, feats:["Everything in Studio","UI/UX Design","Motion & Animation","Monthly Design Retainer","Priority Turnaround","Dedicated Designer"] },
];

const FAQ_ITEMS = [
  { q:"How long does a typical project take?",       a:"Logo systems take 1–2 weeks, full brand identities 3–4 weeks, and UI/UX projects 4–8 weeks. We give a precise timeline in every proposal — and we keep to it.", tag:"Timeline" },
  { q:"Do you work with startups on small budgets?", a:"Yes. Our Starter package is built exactly for early-stage founders who need strong design without a big agency budget. As you grow, we grow with you.", tag:"Startup-Friendly" },
  { q:"What counts as 'unlimited revisions'?",       a:"On Studio and Growth plans, we revise until you're genuinely happy. A revision is changes to an approved direction — major pivots are treated as new phases.", tag:"Studio & Growth" },
  { q:"Do I own everything you create?",             a:"Completely. Every source file, every asset — fully yours on final payment. Full IP transfer, no licensing strings, NDAs available on request.", tag:"Full Ownership" },
  { q:"Can you work with my existing guidelines?",   a:"Absolutely. We extend and evolve existing systems all the time. Send us whatever you have — even a rough brief — and we'll build from there, not over it.", tag:"Flexible" },
  { q:"How does payment work?",                      a:"50% upfront, 50% on delivery. For larger projects we can set milestone-based schedules. We accept UPI, bank transfer, and international wire.", tag:"Simple" },
];

const TOOL_ROW_1 = [
  { ico:"🎨", name:"Figma",       cat:"UI Design",    bg:"linear-gradient(135deg,#FF9A76,#FF7E9A)" },
  { ico:"✏️", name:"Illustrator", cat:"Vector Art",   bg:"linear-gradient(135deg,#FF7E9A,#FF9A76)" },
  { ico:"📐", name:"Photoshop",   cat:"Photo Edit",   bg:"linear-gradient(135deg,#9B6FD8,#7E9AFF)" },
  { ico:"🔤", name:"InDesign",    cat:"Print Layout", bg:"linear-gradient(135deg,#7E9AFF,#FF7E9A)" },
  { ico:"📊", name:"Canva Pro",   cat:"Quick Design", bg:"linear-gradient(135deg,#FF9A76,#9B6FD8)" },
  { ico:"🖋", name:"Procreate",   cat:"Illustration", bg:"linear-gradient(135deg,#FF7E9A,#9B6FD8)" },
];

const TOOL_ROW_2 = [
  { ico:"🌀", name:"After Effects", cat:"Motion",         bg:"linear-gradient(135deg,#7E9AFF,#9B6FD8)" },
  { ico:"🔮", name:"Rive",          cat:"Interactive UI", bg:"linear-gradient(135deg,#FF9A76,#FF7E9A)" },
  { ico:"🌐", name:"Framer",        cat:"Web Design",     bg:"linear-gradient(135deg,#FF7E9A,#9B6FD8)" },
  { ico:"📦", name:"Spline 3D",     cat:"3D Web",         bg:"linear-gradient(135deg,#9B6FD8,#7E9AFF)" },
  { ico:"⚡", name:"Lottie",        cat:"Micro-Anim",     bg:"linear-gradient(135deg,#FF9A76,#7E9AFF)" },
  { ico:"🧩", name:"Webflow",       cat:"No-Code",        bg:"linear-gradient(135deg,#7E9AFF,#FF7E9A)" },
];

const BELIEFS = [
  { g:"bc-g1", ico:"🎯", n:"01", title:"Purpose Before Pixels",    desc:"We ask why before we ask how. Every visual decision traces back to a strategic reason." },
  { g:"bc-g2", ico:"✦",  n:"02", title:"Craft is Non-Negotiable",  desc:"We obsess over kerning, spacing, color relationships. The details are the design." },
  { g:"bc-g3", ico:"💬", n:"03", title:"Honest Over Impressive",   desc:"We tell you what will work, not what sounds good. Even if it's uncomfortable." },
  { g:"bc-g4", ico:"🔄", n:"04", title:"Iteration is the Process", desc:"First ideas are starting points. Great work comes from relentless refinement." },
  { g:"bc-g5", ico:"🌍", n:"05", title:"Context Always Wins",      desc:"A brand that works in Mumbai must work in London. We design for your full audience." },
  { g:"bc-g6", ico:"🔒", n:"06", title:"Your Work, Your Asset",    desc:"Everything we create is yours. No strings, no licenses, no drama." },
];

const APPROACH_ROWS = [
  { ico:"🎯", ibg:"linear-gradient(135deg,#FF9A76,#FF7E9A)", n:"01", title:"Deep Discovery",  sub:"Before anything visual",         desc:"We start with questions, not sketches. Brand audit, audience research, competitor analysis — we need to understand your world before we start designing in it." },
  { ico:"💡", ibg:"linear-gradient(135deg,#FF7E9A,#9B6FD8)", n:"02", title:"Bold Concepting", sub:"Multiple directions, no filters", desc:"We explore widely before narrowing. You see 2–3 genuinely different directions — not three versions of the same idea — so you can make a real choice." },
  { ico:"✦",  ibg:"linear-gradient(135deg,#7E9AFF,#9B6FD8)", n:"03", title:"Obsessive Craft",  sub:"Where most studios rush",        desc:"Once a direction is chosen, we go deep. Typography at every scale, color in every context, motion with intention. Nothing ships until it's right." },
  { ico:"📦", ibg:"linear-gradient(135deg,#9B6FD8,#FF9A76)", n:"04", title:"Clean Handoff",   sub:"Yours forever",                   desc:"Final source files, brand guidelines, export specs — everything organised and labelled so you or any future designer can pick it up and run with it." },
];

const GRAPHIC_DESIGN_CARDS = [
  { title:"Logo Design",        icon:"🌀", desc:"Unique and memorable logos that define your brand identity." },
  { title:"Brand Identity",     icon:"🎯", desc:"Complete visual identity including colors, fonts, and style." },
  { title:"Social Media Posts", icon:"📱", desc:"Eye-catching posts, banners, and creatives for engagement." },
  { title:"Posters & Flyers",   icon:"🖼️", desc:"High-quality promotional designs for marketing campaigns." },
  { title:"Business Cards",     icon:"💳", desc:"Clean and professional business card designs." },
  { title:"Packaging Design",   icon:"📦", desc:"Creative packaging that enhances product appeal." },
];

/* ══════════════════════════════
   PARTICLE HOOK
══════════════════════════════ */
function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.offsetWidth, H = canvas.offsetHeight;
    canvas.width = W; canvas.height = H;
    const colors = ["#FF9A76","#FF7E9A","#7E9AFF","#9B6FD8"];
    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 2 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + "88"; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(126,154,255,${(1 - d / 120) * .15})`; ctx.lineWidth = 1; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = canvas.offsetWidth; H = canvas.offsetHeight; canvas.width = W; canvas.height = H; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
}

/* ══════════════════════════════
   MAIN COMPONENT
══════════════════════════════ */
export default function GraphicDesign() {
  const curRef = useRef(null), ringRef = useRef(null);
  const heroCanvas = useRef(null), ctaCanvas = useRef(null);
  const [faqOpen, setFaqOpen] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  useParticles(heroCanvas);
  useParticles(ctaCanvas);

  /* Custom cursor */
  useEffect(() => {
    document.body.classList.add("go");
    let rx = 0, ry = 0, animId;
    const move = e => {
      const c = curRef.current, r = ringRef.current;
      if (c) c.style.transform = `translate(${e.clientX - 8}px,${e.clientY - 8}px)`;
      rx += (e.clientX - rx) * .13;
      ry += (e.clientY - ry) * .13;
      if (r) r.style.transform = `translate(${rx - 22}px,${ry - 22}px)`;
    };
    const loop = () => { animId = requestAnimationFrame(loop); };
    loop();
    const sel = ["a","button",".svc",".tm",".testi",".pr",".wc"].join(",");
    const hover = e => {
      if (curRef.current) curRef.current.classList[e.target.closest(sel) ? "add" : "remove"]("big");
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", hover);
    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hover);
      document.body.classList.remove("go");
    };
  }, []);

  /* Scroll reveal — left / right / up */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), i * 60);
          obs.unobserve(e.target);
        }
      }),
      { threshold: .08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── 3D TILT on cards ── */
  useEffect(() => {
    const cards = document.querySelectorAll('.svc, .wc, .bcard, .pr, .testi-card');
    const handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -10;
      const rotY = ((x - cx) / cx) * 10;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px) scale(1.03)`;
      card.style.transition = 'transform .05s ease';
      // glare
      const glare = card.querySelector('.card-glare');
      if (glare) {
        const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,.18) 0%, transparent 70%)`;
        glare.style.opacity = '1';
      }
    };
    const handleLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
      card.style.transition = 'transform .5s cubic-bezier(.34,1.56,.64,1)';
      const glare = card.querySelector('.card-glare');
      if (glare) glare.style.opacity = '0';
    };
    cards.forEach(c => {
      // inject glare layer
      if (!c.querySelector('.card-glare')) {
        const g = document.createElement('div');
        g.className = 'card-glare';
        g.style.cssText = 'position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .3s;z-index:10;';
        c.style.position = 'relative';
        c.appendChild(g);
      }
      c.addEventListener('mousemove', handleMove);
      c.addEventListener('mouseleave', handleLeave);
    });
    return () => cards.forEach(c => {
      c.removeEventListener('mousemove', handleMove);
      c.removeEventListener('mouseleave', handleLeave);
    });
  }, []);

  /* ── MAGNETIC BUTTONS ── */
  useEffect(() => {
    const btns = document.querySelectorAll('.btn-p, .btn-g, .btn-w');
    const handleMove = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.06)`;
      btn.style.transition = 'transform .1s ease';
    };
    const handleLeave = (e) => {
      e.currentTarget.style.transform = 'translate(0,0) scale(1)';
      e.currentTarget.style.transition = 'transform .5s cubic-bezier(.34,1.56,.64,1)';
    };
    btns.forEach(b => {
      b.addEventListener('mousemove', handleMove);
      b.addEventListener('mouseleave', handleLeave);
    });
    return () => btns.forEach(b => {
      b.removeEventListener('mousemove', handleMove);
      b.removeEventListener('mouseleave', handleLeave);
    });
  }, []);

  /* ── COUNTER ANIMATION on pricing amounts ── */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.animation = 'countPop .6s cubic-bezier(.34,1.56,.64,1) both';
          observer.unobserve(el);
        }
      });
    }, { threshold: .5 });
    document.querySelectorAll('.pr-amt').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── PARALLAX on section backgrounds ── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax-bg').forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.08}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── CURSOR TRAIL ── */
  useEffect(() => {
    const trail = [];
    const NUM = 8;
    for (let i = 0; i < NUM; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = `position:fixed;pointer-events:none;border-radius:50%;z-index:9997;transform:translate(-50%,-50%);transition:opacity .3s;`;
      const size = 6 - i * 0.5;
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      dot.style.background = i % 2 === 0 ? '#FF7E9A' : '#7E9AFF';
      dot.style.opacity = (1 - i / NUM) * 0.5 + '';
      document.body.appendChild(dot);
      trail.push({ el: dot, x: 0, y: 0 });
    }
    let mx = 0, my = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', move);
    let raf;
    const animate = () => {
      let x = mx, y = my;
      trail.forEach((dot, i) => {
        dot.x += (x - dot.x) * (0.3 - i * 0.025);
        dot.y += (y - dot.y) * (0.3 - i * 0.025);
        dot.el.style.left = dot.x + 'px';
        dot.el.style.top = dot.y + 'px';
        x = dot.x; y = dot.y;
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', move);
      trail.forEach(d => d.el.remove());
    };
  }, []);

  /* Tool Pill */
  // eslint-disable-next-line react-hooks/exhaustive-deps

  /* ── SCROLL PROGRESS BAR ── */
  useEffect(() => {
    const bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:0;left:0;height:3px;z-index:99999;background:linear-gradient(90deg,#FF9A76,#FF7E9A,#7E9AFF);width:0%;transition:width .1s;pointer-events:none;border-radius:0 2px 2px 0;box-shadow:0 0 10px rgba(255,126,154,.6);';
    document.body.appendChild(bar);
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); bar.remove(); };
  }, []);

  /* Tool Pill Component */
  const ToolPill = ({ t, hot }) => (
    <div className="tool-pill" style={hot ? { borderColor:"rgba(255,126,154,.2)" } : {}}>
      <div className="tp-ico" style={{ background: t.bg }}>{t.ico}</div>
      <div>
        <div className="tp-name">
          {t.name}
          {hot && <span style={{ fontSize:".55rem", background:"linear-gradient(135deg,#FF9A76,#FF7E9A)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontWeight:800, letterSpacing:".08em" }}> 🔥 HOT</span>}
        </div>
        <div className="tp-cat">{t.cat}</div>
      </div>
    </div>
  );

  return (
    <>
      {/* ── CURSOR ── */}
      <div className="cur" ref={curRef} />
      <div className="cur-ring" ref={ringRef} />

      {/* ══ HERO ══ */}
      <section className="hero">
        <canvas className="hero-canvas" ref={heroCanvas} style={{ width:"100%", height:"100%" }} />
        <div className="hero-inner">
          <div>
            <div className="hero-pill"><span className="pill-d" />Graphic Design Studio </div>
            <h1 className="hero-h1">We Design<br /><span className="gt">Things That</span>Matter.</h1>
            <p className="hero-sub">Brand identities, motion design, editorial work, and digital experiences that don't just look beautiful — they make people stop, feel, and remember.</p>
            <div className="hero-acts">
              <button className="btn-p" onClick={() => setModalOpen(true)}>
                <span>Get Started →</span>
              </button>
            </div>
          </div>

          {/* ── MORPHING ORB ── */}
          <div className="hero-art">
            <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="hero-orb-svg">
              <defs>
                <style>{`
                  @keyframes rotateR1  { to { transform: rotate(360deg);  } }
                  @keyframes rotateR2  { to { transform: rotate(-360deg); } }
                  @keyframes rotateR3  { to { transform: rotate(360deg);  } }
                  @keyframes morphBlob {
                    0%   { d: path("M240,80  C310,70  360,130 355,200 C350,270 300,320 240,325 C180,330 120,280 115,210 C110,140 170,90  240,80  Z"); }
                    33%  { d: path("M240,75  C320,80  365,145 350,215 C335,285 275,325 210,315 C145,305 105,245 120,180 C135,115 180,70  240,75  Z"); }
                    66%  { d: path("M240,85  C305,75  360,125 360,195 C360,265 310,330 245,330 C180,330 125,275 125,205 C125,135 175,95  240,85  Z"); }
                    100% { d: path("M240,80  C310,70  360,130 355,200 C350,270 300,320 240,325 C180,330 120,280 115,210 C110,140 170,90  240,80  Z"); }
                  }
                  @keyframes glowP    { 0%,100%{opacity:.15} 50%{opacity:.4}  }
                  @keyframes floatSat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
                  @keyframes twinkleS { 0%,100%{opacity:.2} 50%{opacity:1} }
                  @keyframes dashFw   { to { stroke-dashoffset: -200; } }
                  @keyframes dashBk   { to { stroke-dashoffset:  200; } }
                  @keyframes scPulse  { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
                  @keyframes spinInner{ to { transform: rotate(360deg); transform-origin:240px 202px; } }
                `}</style>
                <radialGradient id="oglow1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#FF7E9A" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#FF7E9A" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="oglow2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#7E9AFF" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#7E9AFF" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="ocoreGrad" cx="38%" cy="32%" r="62%">
                  <stop offset="0%"   stopColor="#ffb89a"/>
                  <stop offset="45%"  stopColor="#FF7E9A"/>
                  <stop offset="100%" stopColor="#9B6FD8"/>
                </radialGradient>
                <radialGradient id="oshineGrad" cx="30%" cy="28%" r="50%">
                  <stop offset="0%"   stopColor="#fff" stopOpacity="0.22"/>
                  <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="oringG1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#FF9A76" stopOpacity="0.9"/>
                  <stop offset="50%"  stopColor="#FF7E9A" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#9B6FD8" stopOpacity="0.9"/>
                </linearGradient>
                <linearGradient id="oringG2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%"   stopColor="#7E9AFF" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#FF7E9A" stopOpacity="0.6"/>
                </linearGradient>
                <linearGradient id="oringG3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#9B6FD8" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#FF9A76" stopOpacity="0.7"/>
                </linearGradient>
                <clipPath id="imgClip">
                  <circle cx="240" cy="202" r="72"/>
                </clipPath>
              </defs>

              <ellipse cx="210" cy="202" rx="130" ry="120" fill="url(#oglow1)" style={{animation:"glowP 4s ease-in-out infinite"}}/>
              <ellipse cx="275" cy="202" rx="120" ry="110" fill="url(#oglow2)" style={{animation:"glowP 5s ease-in-out infinite 1.5s"}}/>

              <g style={{animation:"rotateR1 28s linear infinite", transformOrigin:"240px 202px"}}>
                <circle cx="240" cy="202" r="195" fill="none" stroke="url(#oringG2)" strokeWidth="1" strokeDasharray="6 16" strokeLinecap="round"/>
                <circle cx="240" cy="7"   r="5.5" fill="#7E9AFF" opacity="0.9"/>
                <circle cx="435" cy="202" r="4.5" fill="#FF9A76" opacity="0.85"/>
                <circle cx="240" cy="397" r="5.5" fill="#9B6FD8" opacity="0.9"/>
                <circle cx="45"  cy="202" r="4.5" fill="#FF7E9A" opacity="0.85"/>
              </g>
              <g style={{animation:"rotateR2 18s linear infinite", transformOrigin:"240px 202px"}}>
                <circle cx="240" cy="202" r="155" fill="none" stroke="url(#oringG3)" strokeWidth="1.2" strokeDasharray="3 22" strokeLinecap="round"/>
                <polygon points="240,48 247,58 240,68 233,58"           fill="#FF9A76" opacity="0.95"/>
                <polygon points="395,202 404,195 395,188 386,195"       fill="#7E9AFF" opacity="0.95" transform="rotate(45,395,195)"/>
              </g>
              <g style={{animation:"rotateR3 11s linear infinite", transformOrigin:"240px 202px"}}>
                <circle cx="240" cy="202" r="115" fill="none" stroke="url(#oringG1)" strokeWidth="1.5" strokeDasharray="8 8" strokeLinecap="round" style={{animation:"dashFw 3s linear infinite"}}/>
                <line x1="240" y1="88"  x2="240" y2="79"  stroke="#FF9A76" strokeWidth="2" strokeLinecap="round"/>
                <line x1="355" y1="202" x2="364" y2="202" stroke="#7E9AFF" strokeWidth="2" strokeLinecap="round"/>
                <line x1="240" y1="317" x2="240" y2="326" stroke="#9B6FD8" strokeWidth="2" strokeLinecap="round"/>
                <line x1="125" y1="202" x2="116" y2="202" stroke="#FF7E9A" strokeWidth="2" strokeLinecap="round"/>
              </g>

              <g style={{animation:"scPulse 5s ease-in-out infinite", transformOrigin:"240px 202px"}}>
                <path fill="url(#ocoreGrad)" opacity="0.92" style={{animation:"morphBlob 8s ease-in-out infinite"}}
                  d="M240,80 C310,70 360,130 355,200 C350,270 300,320 240,325 C180,330 120,280 115,210 C110,140 170,90 240,80 Z"/>
                <path fill="url(#oshineGrad)"
                  d="M240,80 C310,70 360,130 355,200 C350,270 300,320 240,325 C180,330 120,280 115,210 C110,140 170,90 240,80 Z"/>
                <path fill="none" stroke="#fff" strokeWidth="0.7" opacity="0.18"
                  d="M240,80 C310,70 360,130 355,200 C350,270 300,320 240,325 C180,330 120,280 115,210 C110,140 170,90 240,80 Z"/>
              </g>

              <g style={{animation:"spinInner 14s linear infinite"}} opacity="0.18">
                <polygon points="240,132 300,232 180,232" fill="none" stroke="#fff" strokeWidth="1"/>
                <polygon points="240,272 180,172 300,172" fill="none" stroke="#fff" strokeWidth="1"/>
              </g>
              <line x1="240" y1="145" x2="240" y2="259" stroke="#fff" strokeWidth="0.7" opacity="0.15"/>
              <line x1="178" y1="202" x2="302" y2="202" stroke="#fff" strokeWidth="0.7" opacity="0.15"/>

              <image href={gp1} x="168" y="130" width="144" height="144" clipPath="url(#imgClip)" preserveAspectRatio="xMidYMid slice"/>

              <circle cx="240" cy="202" r="8"  fill="#fff" opacity="0.5"/>
              <circle cx="240" cy="202" r="3"  fill="#fff" opacity="0.95"/>
              <circle cx="240" cy="202" r="30" fill="#fff" opacity="0.05" style={{animation:"glowP 3s ease-in-out infinite"}}/>

              <g style={{animation:"floatSat 7s ease-in-out infinite 0s"}}>
                <rect x="48" y="90" width="32" height="32" rx="6" fill="#7E9AFF" opacity="0.75"
                  style={{animation:"rotateR1 6s linear infinite", transformOrigin:"64px 106px"}}/>
              </g>
              <g style={{animation:"floatSat 8s ease-in-out infinite 1s"}}>
                <polygon points="400,75 422,114 378,114" fill="#FF7E9A" opacity="0.75"/>
              </g>
              <g style={{animation:"floatSat 9s ease-in-out infinite 2s"}}>
                <polygon points="55,330 74,319 93,330 93,352 74,363 55,352" fill="#9B6FD8" opacity="0.7"/>
              </g>
              <g style={{animation:"floatSat 6.5s ease-in-out infinite 0.5s"}}>
                <polygon points="394,330 414,356 394,382 374,356" fill="#FF9A76" opacity="0.7"/>
              </g>

              <line x1="178" y1="182" x2="90"  y2="112" stroke="#7E9AFF" strokeWidth="0.8" strokeDasharray="5 7" opacity="0.3"/>
              <line x1="305" y1="182" x2="378" y2="110" stroke="#FF7E9A" strokeWidth="0.8" strokeDasharray="5 7" opacity="0.3"/>
              <line x1="160" y1="265" x2="88"  y2="342" stroke="#9B6FD8" strokeWidth="0.8" strokeDasharray="5 7" opacity="0.3"/>
              <line x1="312" y1="276" x2="375" y2="348" stroke="#FF9A76" strokeWidth="0.8" strokeDasharray="5 7" opacity="0.3"/>

              <path d="M80,40 Q160,120 240,202 Q320,284 400,360"  fill="none" stroke="#FF9A76" strokeWidth="1" strokeDasharray="6 10" opacity="0.18" style={{animation:"dashFw 4s linear infinite"}}/>
              <path d="M400,40 Q320,120 240,202 Q160,284 80,360"  fill="none" stroke="#7E9AFF" strokeWidth="1" strokeDasharray="6 10" opacity="0.18" style={{animation:"dashBk 4s linear infinite"}}/>

              <circle cx="136" cy="152" r="3"   fill="#FF9A76" opacity="0.7"  style={{animation:"twinkleS 2.5s ease-in-out infinite 0.5s"}}/>
              <circle cx="346" cy="158" r="2.5" fill="#7E9AFF" opacity="0.7"  style={{animation:"twinkleS 3.1s ease-in-out infinite 1.1s"}}/>
              <circle cx="118" cy="288" r="2"   fill="#9B6FD8" opacity="0.65" style={{animation:"twinkleS 2.8s ease-in-out infinite 1.7s"}}/>
              <circle cx="358" cy="302" r="2.5" fill="#FF7E9A" opacity="0.65" style={{animation:"twinkleS 3.4s ease-in-out infinite 0.3s"}}/>
            </svg>
          </div>
        </div>
        <div className="scroll-h"><span className="scroll-b" />&nbsp;Scroll to explore</div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="mq">
        <div className="mq-track">
          {[...Array(2)].flatMap(() =>
            ["Brand Identity","Motion Design","Editorial & Print","Packaging Design","UI/UX Design","Social Media Kits","Typography Systems","Creative Direction"]
              .map((t, i) => <span className="mq-item" key={t + i}>{t}</span>)
          )}
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section className="svcs" id="services">
        <div className="svcs-in">
          <div className="svcs-hd">
            <div className="reveal-left">
              <div className="sec-tag">What We Offer</div>
              <h2 className="sec-title">Our Design <span className="gt">Disciplines</span></h2>
            </div>
            <div className="reveal-right">
              <p className="svcs-desc">Every service is delivered with obsessive attention to craft — whether it's a logo for a startup or a full brand system for a global company. We don't do ordinary.</p>
              <button className="sec-link" onClick={() => setModalOpen(true)}>Start a conversation →</button>
            </div>
          </div>
          <div className="svcs-grid">
            {SERVICES.map((s, i) => (
              <div className="svc reveal" key={s.id} style={{ transitionDelay:`${i * 55}ms` }}>
                <div className="svc-blob" style={{ background: s.blob }} />
                <div className="svc-body">
                  <div className="svc-ir">
                    <div className="svc-ico" style={{ background: s.ibg }}>{s.ico}</div>
                    <div className="svc-num">0{s.id}</div>
                  </div>
                  <div className="svc-name">{s.name}</div>
                  <p className="svc-desc">{s.desc}</p>
                  <div className="svc-tags">{s.tags.map(t => <span className="stg" key={t}>{t}</span>)}</div>
                  <button className="svc-lnk" onClick={() => setModalOpen(true)}>Learn More <span className="svc-arr">→</span></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="process" id="process">
        <div className="proc-glow parallax-bg" />
        <div className="proc-in">
          <div className="reveal" style={{ textAlign:"center" }}>
            <div className="sec-tag" style={{ justifyContent:"center" }}>How We Work</div>
            <h2 className="sec-title">The Creative <span className="gt">Process</span></h2>
          </div>
          <div className="proc-steps">
            <div className="proc-line" /><div className="proc-line2" />
            {[
              { n:"01", t:"Discover & Brief",  d:"We immerse in your brand, audience, and ambition. No design begins until we've asked every uncomfortable question." },
              { n:"02", t:"Concept & Explore", d:"Wild ideas first. Multiple directions explored, then ruthlessly edited. Only the fearless concepts survive." },
              { n:"03", t:"Refine & Build",    d:"Chosen direction pushed to its absolute limit. Every pixel, weight, and color obsessed over until inevitable." },
              { n:"04", t:"Deliver & Launch",  d:"Final files, brand guidelines, and source assets — all packaged for perfect handoff. Then we watch your world change." },
            ].map((s, i) => (
              <div className="pst reveal" key={s.n} style={{ transitionDelay:`${i * 80}ms` }}>
                <div className="pst-dot" />
                <div className="pst-num">Step {s.n}</div>
                <div className="pst-title">{s.t}</div>
                <p className="pst-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="why" id="why">
        <div className="why-left">
          <div className="why-mesh" /><div className="why-dots" /><div className="why-shimmer" />
          <div className="why-left-inner reveal">
            <div className="why-pill"><span className="why-pill-dot" />Why Choose Us</div>
            <h2 className="why-h2">Design That <span className="gt">Actually</span> Performs.</h2>
            <p className="why-sub">We're not just a studio that makes things look pretty. Every pixel is backed by strategy, craft, and an obsession with results that genuinely move the needle for your brand.</p>
            <div className="why-cards">
              {WHY_CARDS.map((f, i) => (
                <div className="wc reveal" key={f.name} style={{ transitionDelay:`${i * 60}ms` }}>
                  <div className="wc-top">
                    <div className="wc-ico" style={{ background: f.ibg }}>{f.ico}</div>
                    <span className="wc-badge" style={{ background:f.badgeBg, borderColor:f.badgeBd, color:f.badgeC }}>{f.badge}</span>
                  </div>
                  <div className="wc-name">{f.name}</div>
                  <p className="wc-desc">{f.desc}</p>
                  <div className="wc-accent" style={{ background: f.ibg }} />
                </div>
              ))}
              <div className="wc wc-wide reveal" style={{ transitionDelay:"240ms" }}>
                <div className="wc-top">
                  <div className="wc-ico" style={{ background:"linear-gradient(135deg,#FF9A76,#FF7E9A,#7E9AFF)" }}>🏆</div>
                  <span className="wc-badge" style={{ background:"rgba(155,111,216,.12)", borderColor:"rgba(155,111,216,.3)", color:"#9B6FD8" }}>Award-Winning</span>
                </div>
                <div className="wc-name">Craft That Gets Recognised</div>
                <p className="wc-desc">We've been recognised on Awwwards, Behance, and CSS Design Awards — not because we chased trophies, but because we obsessed over craft. The awards follow the work, not the other way around.</p>
                <div className="wc-accent" style={{ background:"linear-gradient(90deg,#FF9A76,#FF7E9A,#7E9AFF)" }} />
              </div>
            </div>
            <div className="mission-strip">
              <div className="mission-line" />
              <div className="mission-body">
                <span className="mission-label">Our Mission</span>
                <p className="mission-text">
                  We started FormaStudio because we were tired of seeing great ideas buried under mediocre design. Every founder, every product, every brand deserves visuals that actually <em>fight</em> for them.
                </p>
              </div>
              <div className="mission-tags">
                {["Born in India 🇮🇳","Thinking Globally 🌍","Obsessed with Craft ✦","Building the Future 🚀"].map(t => (
                  <span className="mission-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="why-right">
          <div className="why-right-mesh" /><div className="why-right-dots" />
          <div className="wv-ring wvr1" /><div className="wv-ring wvr2" />
          <div className="wv-spark ws1" /><div className="wv-spark ws2" />
          <div className="wv-spark ws3" /><div className="wv-spark ws4" />
          <div className="why-visual reveal-right">
            <div className="wv-main">
              <div className="wvm-tag">Services We Offer · 2025</div>
              <div className="wvm-title">Built for every<br />creative need.</div>
              <div className="wvm-bars">
                {[
                  { name:"Brand Identity",     w:"100%", d:".3s" },
                  { name:"UI/UX Design",       w:"88%",  d:".5s" },
                  { name:"Motion & Animation", w:"78%",  d:".7s" },
                  { name:"Packaging Design",   w:"65%",  d:".9s" },
                  { name:"Editorial & Print",  w:"50%",  d:"1.1s" },
                ].map(s => (
                  <div className="wvb-row" key={s.name}>
                    <div className="wvb-top"><span className="wvb-name">{s.name}</span></div>
                    <div className="wvb-track"><div className="wvb-fill" style={{ width:s.w, animationDelay:s.d }} /></div>
                  </div>
                ))}
              </div>
              <div className="wvm-div" />
              <div className="wvm-foot">
                <span className="wvm-foot-label">On-time delivery rate</span>
                <span className="wvm-foot-val">99%</span>
              </div>
            </div>
            <div className="wv-float wvf1"><span className="wvf-ico">🎨</span><div className="wvf-val">6+</div><div className="wvf-lbl">Services</div></div>
            <div className="wv-float wvf2"><span className="wvf-ico">♾️</span><div className="wvf-val">∞</div><div className="wvf-lbl">Revisions</div></div>
            <div className="wv-float wvf3"><span className="wvf-ico">✅</span><div className="wvf-val">99%</div><div className="wvf-lbl">On Time</div></div>
          </div>
        </div>
      </section>

      {/* ══ TOOLS ══ */}
      <section className="tools" id="tools">
        <div className="tools-mesh" />
        <div className="tools-in">
          <div className="tools-hd reveal-left">
            <div>
              <div className="sec-tag">Our Arsenal</div>
              <h2 className="sec-title">Tools We <span className="gt">Master</span></h2>
            </div>
            <p className="tools-desc">Industry-leading software wielded with precision. These are the exact tools we use to ship world-class work — fast, clean, and ready for any medium.</p>
          </div>
          <div className="tool-rows reveal">
            <div className="tool-row fwd">
              {[...TOOL_ROW_1, ...TOOL_ROW_1].map((t, i) => <ToolPill key={i} t={t} hot={false} />)}
            </div>
            <div className="tool-row rev">
              {[...TOOL_ROW_2, ...TOOL_ROW_2].map((t, i) => <ToolPill key={i} t={t} hot={true} />)}
            </div>
          </div>
          <div className="tools-showcase reveal">
            <div className="tshow-left">
              <div className="tshow-left-mesh" />
              <div className="tshow-pill"><span className="pill-d" />12 Tools in Our Stack</div>
              <h3 className="tshow-title">The right tool<br />for every <span className="gt">creative challenge.</span></h3>
              <p className="tshow-sub">From industry staples to cutting-edge software — we pick what produces the best results, not just what's trending.</p>
              <div className="tshow-cats">
                {[
                  { label:"Design & Brand", color:"#FF9A76" },
                  { label:"Motion & Anim",  color:"#FF7E9A" },
                  { label:"Web & 3D",       color:"#7E9AFF" },
                  { label:"Delivery Stack", color:"#9B6FD8" },
                ].map(c => (
                  <div className="tshow-cat" key={c.label}>
                    <span className="tshow-cat-dot" style={{ background: c.color }} />{c.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="tshow-right">
              <div className="tshow-right-mesh" /><div className="tshow-right-dots" />
              <div className="tshow-orbs">
                <div className="torb torb-main">
                  <span className="torb-main-ico">✦</span>
                  <span className="torb-main-lbl">Our Stack</span>
                </div>
                {[
                  { cls:"torb-a", ico:"🎨", lbl:"Figma" },
                  { cls:"torb-b", ico:"🌀", lbl:"After FX" },
                  { cls:"torb-c", ico:"🔮", lbl:"Rive" },
                  { cls:"torb-d", ico:"🌐", lbl:"Framer" },
                  { cls:"torb-e", ico:"✏️", lbl:"Illustrator" },
                ].map(o => (
                  <div key={o.cls} className={`torb torb-sm ${o.cls}`}>
                    <span className="torb-sm-ico">{o.ico}</span>
                    <span className="torb-sm-lbl">{o.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE BELIEVE ══ */}
      <section className="believe">
        <div className="believe-mesh parallax-bg" />
        <div className="believe-in">
          <div className="believe-top">
            <h2 className="believe-tagline reveal-left">
              Design is not<br />
              <em>decoration.</em>
              <span className="gt">It's a business tool.</span>
            </h2>
            <p className="believe-right-txt reveal-right">
              Every studio says they care about your brand. We mean it differently. We believe <strong>design should earn its place</strong> — through clarity, through emotion, through work that makes your audience act. If it doesn't do something, we don't ship it.
            </p>
          </div>
          <div className="believe-grid">
            {BELIEFS.map((b, i) => (
              <div className={`bcard ${b.g} reveal`} key={b.n} style={{ transitionDelay:`${i * 55}ms` }}>
                <div className="bcard-num">{b.n}</div>
                <span className="bcard-ico">{b.ico}</span>
                <div className="bcard-title">{b.title}</div>
                <p className="bcard-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR APPROACH ══ */}
      <section className="approach">
        <div className="approach-mesh" /><div className="approach-dots" />
        <div className="approach-in">
          <div className="reveal-left">
            <div className="sec-tag">How We Work</div>
            <h2 className="sec-title">Our <span className="gt">Approach</span></h2>
          </div>
          <div className="approach-list reveal-right">
            {APPROACH_ROWS.map((a, i) => (
              <div className="arow reveal" key={a.n} style={{ transitionDelay:`${i * 70}ms` }}>
                <div className="arow-num">{a.n}</div>
                <div className="arow-left">
                  <div className="arow-ico" style={{ background: a.ibg }}>{a.ico}</div>
                  <div>
                    <div className="arow-title">{a.title}</div>
                    <div className="arow-sub">{a.sub}</div>
                  </div>
                </div>
                <p className="arow-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GRAPHIC DESIGN SECTION ══ */}
      <section style={{ position:"relative", padding:"100px 20px", background:"radial-gradient(circle at top, #0b0f1a, #05070d)", color:"#fff", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 30% 20%, rgba(124,58,237,0.25), transparent 40%), radial-gradient(circle at 70% 70%, rgba(0,200,255,0.18), transparent 45%)", filter:"blur(60px)" }} />
        <div style={{ position:"relative", maxWidth:"1100px", margin:"auto" }}>
          <div style={{ textAlign:"center", marginBottom:"50px" }}>
            <h4 style={{ color:"#a78bfa", letterSpacing:"2px" }}>GRAPHIC DESIGN</h4>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,38px)", fontWeight:"700" }}>
              Visuals that <span style={{ background:"linear-gradient(135deg,#7c3aed,#00c8ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Speak</span> for Your Brand
            </h2>
            <p style={{ maxWidth:"650px", margin:"15px auto", color:"#cbd5f5", lineHeight:"1.6", fontSize:"clamp(.85rem,2vw,1rem)" }}>
              We create powerful and aesthetic graphic designs that help your brand look professional, modern, and unforgettable.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:"20px" }}>
            {GRAPHIC_DESIGN_CARDS.map((item, i) => (
              <div key={i} style={{ padding:"25px", borderRadius:"18px", background:"rgba(255,255,255,0.05)", backdropFilter:"blur(18px)", border:"1px solid rgba(255,255,255,0.08)", transition:"0.3s", cursor:"pointer" }}>
                <div style={{ fontSize:"26px", marginBottom:"10px" }}>{item.icon}</div>
                <h3 style={{ marginBottom:"8px", fontSize:"1rem" }}>{item.title}</h3>
                <p style={{ fontSize:"14px", color:"#b6c2e2", lineHeight:"1.5" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="faq" id="faq">
        <div className="faq-mesh" />
        <div className="faq-in">
          <div className="faq-hd reveal-left">
            <div className="sec-tag" style={{ justifyContent:"center" }}>Got Questions?</div>
            <h2 className="sec-title">Things People <span className="gt">Ask Us</span></h2>
          </div>
          <div className="faq-list reveal-right">
            {FAQ_ITEMS.map((f, i) => (
              <div className={`faq-item${faqOpen === i ? " open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
                  <span className="faq-q-text">{f.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    <p className="faq-a-text">{f.a}</p>
                    <span className="faq-a-tag">{f.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-contact reveal-left">
            <div className="faq-contact-txt">
              <h4>Still not sure? Just ask.</h4>
              <p>We reply to every message within 24 hours — no bots, no templates, just a real answer.</p>
            </div>
            <a href="tel:+918954535455" className="btn-p"><span>Drop Us a Line →</span></a>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="cta" id="contact">
        <canvas className="cta-canvas" ref={ctaCanvas} style={{ width:"100%", height:"100%" }} />
        <div className="cta-rings">
          <div className="cta-ring cr1" /><div className="cta-ring cr2" />
          <div className="cta-ring cr3" /><div className="cta-ring cr4" />
        </div>
        <div className="cta-cnt reveal">
          <div className="cta-badge"><span className="pill-d" />Ready to Begin?</div>
          <h2 className="cta-title">Let's Make<br /><span className="gt">Something</span>Remarkable.</h2>
          <p className="cta-sub">Your brand has been quiet long enough. Tell us what you're building and we'll show you how to make it unforgettable.</p>
          <div className="cta-acts">
            <button className="btn-p" onClick={() => setScheduleOpen(true)}>
              <span>Book a Strategy Call →</span>
            </button>
          </div>
        </div>
      </section>

      {/* ══ MODAL ══ */}
      <GraphicModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ScheduleModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />
    </>
  );
}
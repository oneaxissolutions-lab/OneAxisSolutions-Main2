import React, { useMemo, useState, useEffect, useRef } from "react";
import "../css/ProductsCleaning.css";

/* IMAGES */
import paperImg from "../assets/paper.jpg";
import phenylImg from "../assets/phenyl.jpeg";
import glassImg from "../assets/glass.jpeg";
import toiletCleanerImg from "../assets/toiletcleaner.jpeg";
import dishwashImg from "../assets/dishwash.jpeg";
import handwashImg from "../assets/handwash.jpeg";
import detergentPowderImg from "../assets/detergent.png";
import garbageBagImg from "../assets/dust.png";
import scrubImg from "../assets/scrub.png";
import mothballsImg from "../assets/mothballs.jpeg";
import blackphenyl from "../assets/blackphenyl.jpeg";
import floor from "../assets/floor.jpeg";
import wiper from "../assets/wiper.png";
import dustbin from "../assets/dustbin.png";
import mographenyl from "../assets/mographenyl.jpeg";
import rosephenyl from "../assets/rosephenyl.jpeg";
import lemonphenyl from "../assets/lemonphenyl.jpeg";
import lemonhandwash from "../assets/lemonhandwash.jpeg";

/* PRODUCTS DATA */
const PRODUCTS = [
  // 🔹 Phenyl range – alag-alag cards
  {
    id: 1,
    name: "White Floor Phenyl",
    image: phenylImg,
    description: "High-quality white floor disinfectant phenyl for daily mopping.",
    specs: [
      "High active content for effective disinfection",
      "Recommended dilution: 1:20 with water",
      "Suitable for corridors, lobbies & washrooms",
      "Available in 5L & 50L bulk packs",
    ],
  },
  {
    id: 2,
    name: "Rose Phenyl",
    image: rosephenyl,
    description: "Perfumed rose phenyl for hygienic and fragrant floors.",
    specs: [
      "Premium rose fragrance for pleasant ambience",
      "Effective against germs & odour",
      "Ideal for offices, hotels & showrooms",
      "Available in 5L & 50L bulk packs",
    ],
  },
  {
    id: 3,
    name: "Mogra Phenyl",
    image: mographenyl,
    description: "Mogra scented phenyl for long-lasting freshness & disinfection.",
    specs: [
      "Refreshing mogra fragrance",
      "Cleans & deodorizes in one step",
      "Suitable for reception areas & lobbies",
      "Available in 5L & 50L bulk packs",
    ],
  },
  {
    id: 4,
    name: "Lemon Phenyl",
    image: lemonphenyl,
    description: "Lemon phenyl for fresh, hygienic and odour-free floors.",
    specs: [
      "Citrus lemon fragrance for fresh feel",
      "Helps cut through greasy & soiled areas",
      "Perfect for kitchens, corridors & wash areas",
      "Available in 5L & 50L bulk packs",
    ],
  },

  // 🔹 Washroom & surface cleaners
  {
    id: 5,
    name: "Toilet Cleaner",
    image: toiletCleanerImg,
    description: "Powerful toilet cleaner for stains and germs.",
    specs: [
      "Thick formula for better cling on vertical surfaces",
      "Removes hard-water & lime scale stains",
      "Safe for ceramic & porcelain toilet bowls",
      "Ideal for washrooms in offices, hotels & institutions",
    ],
  },
  {
    id: 6,
    name: "Glass & Surface Cleaner",
    image: glassImg,
    description: "Glass & surface cleaner for streak-free shine.",
    specs: [
      "Streak-free cleaning for glass & mirrors",
      "Suitable for windows, tables & displays",
      "Fast-drying, no residue",
    ],
  },

  // 🔹 Handwash – normal + lemon
  {
    id: 7,
    name: "Liquid Handwash",
    image: handwashImg,
    description: "Gentle liquid handwash for everyday hygiene.",
    specs: [
      "Mild on skin, harsh on germs",
      "Suitable for dispensers in offices & public areas",
      "Refreshing fragrance for all-day use",
    ],
  },
  {
    id: 8,
    name: "Lemon Handwash",
    image: lemonhandwash,
    description: "Lemon-fragranced liquid handwash for fresh, clean hands.",
    specs: [
      "Citrusy lemon fragrance",
      "Helps remove oil & light grease from hands",
      "Perfect for kitchens, canteens & offices",
    ],
  },

  // 🔹 Kitchen & laundry
  {
    id: 9,
    name: "Dishwashing Liquid",
    image: dishwashImg,
    description: "Dishwashing liquid that cuts grease effectively.",
    specs: [
      "High-foam formula for tough grease",
      "Gentle on hands with proper dilution",
      "Suitable for hotels, canteens & catering units",
    ],
  },
  {
    id: 10,
    name: "Detergent Powder",
    image: detergentPowderImg,
    description: "Stain-removal detergent powder for clothes.",
    specs: [
      "Effective on tough stains & daily dirt",
      "Suitable for both bucket & machine wash",
      "Fresh fragrance for linen & uniforms",
    ],
  },
  {
    id: 11,
    name: "Scrub Pads",
    image: scrubImg,
    description: "Heavy-duty scrub pads for utensils & surfaces.",
    specs: [
      "Non-rusting, long-lasting scrub material",
      "Ideal for utensils, sinks & counters",
      "Available in multiple sizes for different uses",
    ],
  },

  // 🔹 Hygiene & disposal
  {
    id: 12,
    name: "Toilet Tissue Rolls",
    image: paperImg,
    description: "Soft and absorbent toilet paper rolls.",
    specs: [
      "Soft, 2-ply tissue for comfort",
      "High absorbency, low lint",
      "Ideal for offices, hotels & malls",
    ],
  },
  {
    id: 13,
    name: "Garbage Bags",
    image: garbageBagImg,
    description: "Strong & durable garbage bags for daily waste.",
    specs: [
      "High-gauge bags, tear & leak resistant",
      "Available in Small / Medium / Large sizes",
      "Suitable for home, offices & commercial bins",
    ],
  },
  {
    id: 14,
    name: "Naphthalene Balls",
    image: mothballsImg,
    description:
      "Naphthalene / moth balls to protect clothes, cupboards and storage areas from insects and odour.",
    specs: [
      "Prevents insects & bad odour",
      "Ideal for cupboards, shoe racks & storage boxes",
      "Long-lasting slow release",
    ],
  },

  // 🔹 Floor cleaner + tools
  {
    id: 15,
    name: "Perfumed Floor Cleaner",
    image: floor,
    description:
      "Perfumed floor cleaner for daily mopping, removes stains and leaves a fresh fragrance.",
    specs: [
      "Suitable for marble, tiles & granite",
      "No residue, non-sticky after drying",
      "Fresh long-lasting fragrance",
      "Ideal for offices, schools & showrooms",
    ],
  },
  {
    id: 16,
    name: "Heavy-Duty Floor Wiper",
    image: wiper,
    description:
      "Sturdy floor wiper for quick drying of wet floors and wash areas.",
    specs: [
      "Wide blade for faster drying",
      "Rust-free, sturdy handle compatible",
      "Ideal for corridors, washrooms & large floors",
    ],
  },
  {
    id: 17,
    name: "Premium Swing Dustbin",
    image: dustbin,
    description:
      "Premium plastic dustbin with swing lid for neat and hygienic waste disposal.",
    specs: [
      "Durable plastic body with easy-to-clean surface",
      "Swing lid to control odour",
      "Perfect for offices, reception areas & washrooms",
    ],
  },
];

const ProductsCleaning = () => {
  const [search, setSearch] = useState("");
  const [activeProduct, setActiveProduct] = useState(null);
  const itemsRef = useRef([]);

  // SIMPLE FADE-IN SCROLL ANIMATION (no left/right slide)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // sirf ek baar animate karega
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <main className="products-page">
      {/* HERO */}
      <section
        className="products-hero scroll-reveal from-top"
        ref={(el) => (itemsRef.current[0] = el)}
      >
        <h1 className="products-title">Our Cleaning Products</h1>

        <h2 className="manufacturer-heading">
          Manufacturer &amp; Wholesale Supplier — Bulk Supply
        </h2>

        <p>Premium hygiene &amp; cleaning solutions for modern spaces.</p>

        <p className="bulk-packaging-heading">
          Bulk supply only in 5L &amp; 50L packaging.
        </p>

        <div className="products-search">
          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* GRID */}
      <section className="products-grid">
        {filteredProducts.map((p, i) => (
          <article
            key={p.id}
            ref={(el) => (itemsRef.current[i + 1] = el)}
            className="product-card scroll-reveal"
            onClick={() => setActiveProduct(p)}
          >
            <div className="product-img">
              <img src={p.image} alt={p.name} />
            </div>

            <div className="product-body">
              <h3>{p.name}</h3>
              <p>{p.description}</p>

              <div className="product-specs">
                <span>Manufacturer &amp; Wholesale</span>
                <span>Bulk Supply • 5L &amp; 50L</span>
              </div>

              <div className="product-footer">
                <button type="button">VIEW</button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* MODAL */}
      {activeProduct && (
        <div
          className="modal-overlay"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setActiveProduct(null)}
            >
              ×
            </button>

            <h2>{activeProduct.name}</h2>

            <div className="modal-content">
              <img src={activeProduct.image} alt={activeProduct.name} />

              <div>
                <p>{activeProduct.description}</p>

                {/* SPECS – Key details for each product */}
                {activeProduct.specs && activeProduct.specs.length > 0 && (
                  <div className="product-specs-list">
                    <strong>Key Specifications:</strong>
                    <ul>
                      {activeProduct.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="bulk-packaging-inline">
                  Bulk supply only in 5L &amp; 50L packaging.
                </p>

                <div className="modal-actions">
                  <a
                    href={`https://wa.me/918954535455?text=${encodeURIComponent(
                      `Hi, I want a bulk enquiry for ${activeProduct.name} from OneAxis-EcoClean.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline"
                  >
                    Bulk Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductsCleaning;

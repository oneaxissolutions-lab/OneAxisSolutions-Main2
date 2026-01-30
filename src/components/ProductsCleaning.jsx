import React, { useMemo, useState, useEffect, useRef } from "react";
import "../css/ProductsCleaning.css";

/* IMAGES */
import paperImg from "../assets/paper.jpg";
import phenylImg from "../assets/phenyl.png";
import mothballsImg from "../assets/mothballs.jpg";
import glassImg from "../assets/glass.png";
import floorImg from "../assets/floor.png";
import toiletCleanerImg from "../assets/toiletcleaner.png";
import dishwashImg from "../assets/dishwash.png";
import handwashImg from "../assets/handwash.jpg";
import detergentPowderImg from "../assets/detergent.png";
import detergentLiquidImg from "../assets/liquid.png";
import bleachingImg from "../assets/bleaching.png";
import airFreshnerImg from "../assets/freshner.png";
import roomFreshnerImg from "../assets/roomfreshner.png";
import scrubImg from "../assets/scrub.png";
import garbageBagImg from "../assets/dust.png";

/* PRODUCTS DATA */
const PRODUCTS = [
  {
    id: 1,
    name: "Toilet Paper",
    price: "₹120",
    image: paperImg,
    description:
      "Soft, strong and absorbent toilet paper for daily hygiene.",
  },
  {
    id: 2,
    name: "Phenyl",
    price: "₹85",
    image: phenylImg,
    description:
      "Antibacterial floor cleaner with long-lasting fragrance.",
  },
  {
    id: 3,
    name: "Naphthalene Balls",
    price: "₹45",
    image: mothballsImg,
    description: "Pest control solution for wardrobes and storage.",
  },
  {
    id: 4,
    name: "Glass Cleaner",
    price: "₹95",
    image: glassImg,
    description: "Streak-free cleaner for mirrors and glass surfaces.",
  },
  {
    id: 5,
    name: "Floor Cleaner",
    price: "₹110",
    image: floorImg,
    description: "Multi-surface cleaner with fresh aroma.",
  },
  {
    id: 6,
    name: "Toilet Cleaner Liquid",
    price: "₹75",
    image: toiletCleanerImg,
    description: "Removes tough stains and kills germs.",
  },
  {
    id: 7,
    name: "Dishwashing Liquid",
    price: "₹65",
    image: dishwashImg,
    description: "Cuts grease and cleans utensils effectively.",
  },
  {
    id: 8,
    name: "Hand Wash",
    price: "₹55",
    image: handwashImg,
    description: "Gentle antibacterial hand wash.",
  },
  {
    id: 9,
    name: "Detergent Powder",
    price: "₹180",
    image: detergentPowderImg,
    description: "Powerful stain-removal laundry detergent.",
  },
  {
    id: 10,
    name: "Detergent Liquid",
    price: "₹150",
    image: detergentLiquidImg,
    description: "Liquid detergent for hand & machine wash.",
  },
  {
    id: 11,
    name: "Bleaching Powder",
    price: "₹90",
    image: bleachingImg,
    description: "Industrial disinfectant and whitening agent.",
  },
  {
    id: 12,
    name: "Air Freshener",
    price: "₹125",
    image: airFreshnerImg,
    description: "Instant freshness with long-lasting scent.",
  },
  {
    id: 13,
    name: "Room Freshener",
    price: "₹80",
    image: roomFreshnerImg,
    description: "Continuous fragrance for rooms.",
  },
  {
    id: 14,
    name: "Scrub Pads",
    price: "₹35",
    image: scrubImg,
    description: "Heavy-duty scrub pads for tough cleaning.",
  },
  {
    id: 15,
    name: "Garbage Bags",
    price: "₹140",
    image: garbageBagImg,
    description: "Strong & durable garbage bags.",
  },
];

const ProductsCleaning = () => {
  const [search, setSearch] = useState("");
  const [activeProduct, setActiveProduct] = useState(null);
  const itemsRef = useRef([]);

  /* SCROLL ANIMATION OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.25 }
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
        <p>Premium hygiene &amp; cleaning solutions for modern spaces.</p>

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
        {filteredProducts.map((p, i) => {
          const side = i % 2 === 0 ? "from-left" : "from-right";
          return (
            <article
              key={p.id}
              ref={(el) => (itemsRef.current[i + 1] = el)}
              className={`product-card scroll-reveal ${side}`}
              onClick={() => setActiveProduct(p)}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="product-img">
                <img src={p.image} alt={p.name} />
              </div>

              <div className="product-body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>

                <div className="product-footer">
                  <span>{p.price}</span>
                  <button type="button">VIEW</button>
                </div>
              </div>
            </article>
          );
        })}
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
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
              />
              <div>
                <p>{activeProduct.description}</p>
                <strong>{activeProduct.price}</strong>

                <div className="modal-actions">
                  <button className="primary" type="button">
                    Add to Cart
                  </button>

                  {/* 📲 WhatsApp BULK ENQUIRY (dynamic product name) */}
                  <a
                    href={`https://wa.me/918954535455?text=${encodeURIComponent(
                      `Hi, I want a bulk enquiry for ${activeProduct.name} from OneAxis-EcoClean.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline bulk-call-btn"
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

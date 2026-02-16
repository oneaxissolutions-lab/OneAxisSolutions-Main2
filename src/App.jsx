// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import InteriorDesign from "./pages/InteriorDesign";
import Softwares from "./pages/Softwares";
import Webdevelopment from "./pages/Webdevelopment";
import Cleaning from "./pages/Cleaning";
import AboutCleaning from "./components/AboutCleaning";
import ProductsCleaning from "./components/ProductsCleaning";
import AutomationServices from "./pages/AutomationServices";
import PartnerZone from "./pages/PartnerZone";
import AboutFranchise from "./components/AboutFranchise"; // ✅ ADD THIS

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Webdevelopment" element={<Webdevelopment />} />
        <Route path="/interior" element={<InteriorDesign />} />
        <Route path="/softwares" element={<Softwares />} />
        <Route path="/automation" element={<AutomationServices />} />

        <Route path="/cleaning" element={<Cleaning />} />

        {/* Cleaning sub pages */}
        <Route path="/cleaning/about" element={<AboutCleaning />} />
        <Route path="/cleaning/products" element={<ProductsCleaning />} />

        {/* Partner Zone */}
        <Route path="/partner-zone" element={<PartnerZone />} />

        {/* ✅ About Franchise Page */}
        <Route path="/about-franchise" element={<AboutFranchise />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

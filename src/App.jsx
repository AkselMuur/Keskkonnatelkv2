import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Mission from "./components/Missioon/Missioon";
import CalendarSection from "./components/Calendar/Calendar";
import Workshops from "./components/Workshop/Workshops";
import Topics from "./components/Topics/Topics";
import ContactForm from "./components/ContactForm/Form";
import Footer from "./components/Footer/Footer";
import Partners from "./components/Partners/Partners";

function App() {
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    fetch("/data/seasons.json")
      .then((res) => res.json())
      .then((data) => {
        setSelectedSeason(data[0].id);
      });
  }, []);

  return (
    <div className="layout">

      {/* ⭐ MOBILE HAMBURGER ⭐ */}
      <button
        className="mobile-menu"
        aria-label="Ava menüü"
        onClick={() => {
          document.querySelector(".sidebar").classList.toggle("open");
        }}
      >
        {/* SVG hamburger ikoon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <Sidebar onSelectSeason={setSelectedSeason} />

      <main className="content">
        <Hero />
        <Mission />
        <CalendarSection seasonId={selectedSeason} />
        <Workshops />
        <Topics />
        <Partners />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;

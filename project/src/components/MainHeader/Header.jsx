import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Leaf, Menu } from "lucide-react";

function Header() {
  const { dispatch } = useAppContext();

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo" onClick={(e) => e.preventDefault()}>
          <Leaf />
          <span>Keskkonnatelk</span>
        </a>
        <nav className="nav">
            <div className="links">
                <a href="#kalender">Kalender</a>
                <a href="#missioon">Missioon</a>
            </div>
            <a href="#kontakt" className="btn">Kontakt</a>
        </nav>

        <button
          className="mobile-menu"
          aria-label="Open menu"
          onClick={() => {
            const sidebar = document.getElementById('sidebar');
            sidebar?.classList.toggle('open');
          }}
        >
          <Menu />
        </button>

      </div>
    </header>
  );
}

export default Header;
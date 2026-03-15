import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Keskkonnatelk</h3>
          <p>Anname kogukondadele jõudu loodushariduse ja jätkusuutlike tavade kaudu</p>
        </div>

        <div className="footer-col">
          <h3>Kiirlingid</h3>
          <ul>
            <li><a href="#missioon">Missioon</a></li>
            <li><a href="#kalender">Kalender</a></li>
            <li><a href="#tookojad">Töötoad</a></li>
            <li><a href="#teemad">Teemad</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Kontaktinfo</h3>
          <p>info@keskkonnatelk.ee</p>
          <p>+372 XXX XXXX</p>
          <p>Eesti</p>
        </div>
      </div>

      <div className="footer-bottom">© 2026 Keskkonnatelk. Kõik õigused kaitstud.</div>
    </footer>
  );
}

export default Footer;
import React, { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saadan...");

    const formData = new FormData(e.target);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("Sõnum saadetud!");
      e.target.reset();
    } else {
      setStatus("Viga saatmisel.");
    }
  };

  return (
    <section id="kontakt" className="contact-section">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Võta meiega ühendust</h2>
          <p className="sub">Kirjuta meile, kui sul on küsimusi või soovid koostööd teha</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">

          {/* Web3Forms vajalikud väljad */}
          <input
            type="hidden"
            name="access_key"
            value="03ed9610-3c89-4157-9992-3087451e9e7e"
          />
          <input type="hidden" name="subject" value="Uus kontaktivormi sõnum" />
          <input type="hidden" name="from_name" value="Keskkonnatelk veebivorm" />

          {/* 4 lahtrit: eesnimi, perenimi, email, telefon */}
          <div className="form-grid">

            <div className="form-group">
              <label>Eesnimi</label>
              <input type="text" name="first_name" required />
            </div>

            <div className="form-group">
              <label>Perenimi</label>
              <input type="text" name="last_name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>

            <div className="form-group">
              <label>Telefon</label>
              <input type="tel" name="phone" required />
            </div>

          </div>

          {/* Sõnum */}
          <div className="form-group">
            <label>Sõnum</label>
            <textarea name="message" rows="5" required></textarea>
          </div>

          {/* Nupp */}
          <div className="contact-buttons">
            <button type="submit" className="btn large">Saada</button>
          </div>

          {/* Tulemus */}
          {status && <p className="contact-result">{status}</p>}
        </form>

      </div>
    </section>
  );
}

export default ContactForm;

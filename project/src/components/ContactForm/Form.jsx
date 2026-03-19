import React, { useRef, useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';

function Contact() {
  const { state, dispatch } = useAppContext();
  const firstNameRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (state.showContactForm) {
      setTimeout(() => firstNameRef.current?.focus(), 50);
    }
  }, [state.showContactForm]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    const payload = {
      firstName: form.get('firstName'),
      lastName: form.get('lastName'),
      phone: form.get('phone'),
      email: form.get('email'),
      message: form.get('message'),
    };

    setSending(true);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((r) => r.json())
      .then((data) => {
        setResult({ ok: true, id: data.id });
        dispatch({ type: 'SET_CONTACT', payload: false });
      })
      .catch((err) => {
        setResult({ ok: false, error: err.message });
      })
      .finally(() => setSending(false));
  }

  return (
    <section id="kontakt" className="contact-section">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Võta Meiega Ühendust</h2>
          <p>Täida vorm ja me võtame Sinuga peagi ühendust</p>
        </div>

        {state.showContactForm ? (

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName"><i data-lucide="user"></i> Eesnimi</label>
                <input ref={firstNameRef} name="firstName" type="text" id="firstName" placeholder="Sisesta oma eesnimi" required />
              </div>

              <div className="form-group">
                <label htmlFor="lastName"><i data-lucide="user"></i> Perekonnanimi</label>
                <input name="lastName" type="text" id="lastName" placeholder="Sisesta oma perekonnanimi" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone"><i data-lucide="phone"></i> Telefon</label>
              <input name="phone" type="tel" id="phone" placeholder="+372 XXXX XXXX" required />
            </div>

            <div className="form-group">
              <label htmlFor="email"><i data-lucide="mail"></i> E-post</label>
              <input name="email" type="email" id="email" placeholder="nimi@email.ee" required />
            </div>

            <div className="form-group">
              <label htmlFor="message"><i data-lucide="message-square"></i> Sõnum</label>
              <textarea name="message" id="message" rows="5" placeholder="Kirjuta oma sõnum siia..." />
            </div>

            <div className="contact-buttons">
              <button type="submit" className="btn large" disabled={sending}>
                {sending ? 'Saadan...' : 'Saada Päring'}
              </button>

              <button
                type="button"
                className="btn large btn-close"
                onClick={() => dispatch({ type: 'SET_CONTACT', payload: false })}
              >
                Sulge
              </button>
            </div>

            {result && (
              <div className="contact-result">
                {result.ok
                  ? <div className="muted">Saadetud — id: {result.id}</div>
                  : <div className="muted">Viga: {result.error}</div>}
              </div>
            )}

          </form>

        ) : (

          <div className="contact-open-wrapper">
            <button
              className="btn large"
              onClick={() => dispatch({ type: 'SET_CONTACT', payload: true })}
            >
              Write Us
            </button>
          </div>

        )}

      </div>
    </section>
  );
}

export default Contact;
import React from 'react';

const partners = [
  { name: 'MTÜ Veljo Tormise Kultuuriselts', url: 'www.tormis.ee', href: 'http://www.tormis.ee' },
  { name: 'Samuel Golomb', url: 'www.golomb.ee', href: 'http://www.golomb.ee' },
  { name: 'EPP (Eesti Pandipakend OÜ)', url: 'www.eestipandipakend.ee', href: 'https://www.eestipandipakend.ee/' },
  { name: 'MTÜ Eesti Taaskasutusorganisatsioon', url: 'www.eto.ee', href: 'https://www.eto.ee/' },
  { name: 'Tarmo Kadakas', url: 'www.kadakas.ee', href: 'http://www.kadakas.ee' },
  { name: 'Ökokratt', url: 'okokratt.ee', href: 'https://okokratt.ee/index.php/et-ee/' },
  { name: 'Puhta Vee Teemapark', url: 'www.metsamoisa.ee', href: 'https://www.metsamoisa.ee/' },
  { name: 'Eesti Tele2', url: 'tele2.ee', href: 'https://tele2.ee/' },
  { name: 'Miljon Miksi OÜ', url: 'www.miljonmiksi.ee', href: 'http://www.miljonmiksi.ee' },
  { name: 'Ubari Loodustarkuse Keskus', url: 'www.ubari.ee', href: 'https://www.ubari.ee/' },
  { name: 'NutiAkadeemia', url: 'nutiakadeemia.wordpress.com', href: 'https://nutiakadeemia.wordpress.com/' },
];

function Partners() {
  return (
    <section className="partnerid">
      <div className="partnerid-heading">
        <h2>Meie Partnerid</h2>
        <p>Järgmised organisatsioonid ja ettevõtted osalevad sellel aastal keskkonnatelgis</p>
      </div>

      <ul className="partner-list">
        {partners.map((p, i) => (
          <li key={i}>
            <a className="partner-box" href={p.href} target="_blank" rel="noreferrer">
              <span className="name">{p.name}</span>
              <span className="url">{p.url}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Partners;
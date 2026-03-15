import React from 'react';
import { Sprout, Heart, RefreshCw } from "lucide-react";

function Mission() {
  return (
    <section id="missioon" className="section">
      <div className="container">
        <div className="center">
          <h2>Meie Missioon</h2>
          <p className="sub">Keskkonnatelgis usume kogemuslikku õppimist, mis ühendab inimesi loodusega.</p>
        </div>

        <div className="grid-three values">
          <article className="card value">
            <div className="icon-bg"><Sprout /></div>
            <h3>Meelte Arendamine</h3>
            <p>Arendame Sinu meeli ja oskusi praktiliste loodusetegevuste kaudu.</p>
          </article>

          <article className="card value">
            <div className="icon-bg"><Heart /></div>
            <h3>Jätkusuutlik Eluviis</h3>
            <p>Õpime keskkonnasõbralikke ja tervislikke käitumisviise igapäevaelus.</p>
          </article>

          <article className="card value">
            <div className="icon-bg"><RefreshCw /></div>
            <h3>Keskkonnasäästlikkus</h3>
            <p>Mõistame loodusvarade kaitsmise tähtsust.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Mission;
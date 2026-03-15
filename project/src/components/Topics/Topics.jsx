import React from "react";
import { Waves, Zap, Lightbulb, TreePine } from "lucide-react";

function Topics() {
  return (
    <section id="teemad" className="section bg-white">
      <div className="container">

        <div className="center">
          <h2>Õppeteemad</h2>
          <p className="sub">
            Meie töötoad integreerivad olulisi keskkonnateemad
          </p>
        </div>

        <div className="grid-two topic-grid">

          <div className="topic">
            <div className="topic-icon blue"><Waves /></div>
            <div>
              <h3>Läänemere Kaitse</h3>
              <p>Õpi hoolitsema Läänemere puhtuse ja ökosüsteemi tervise eest.</p>
            </div>
          </div>

          <div className="topic">
            <div className="topic-icon yellow"><Zap /></div>
            <div>
              <h3>Energia Säästmine</h3>
              <p>Avasta praktilisi võimalusi energia säästmiseks igapäevaelus.</p>
            </div>
          </div>

          <div className="topic">
            <div className="topic-icon orange"><Lightbulb /></div>
            <div>
              <h3>Alternatiivenergia</h3>
              <p>Tutvuge taastuvate energiaallikatega ja nende eelistega.</p>
            </div>
          </div>

          <div className="topic">
            <div className="topic-icon green"><TreePine /></div>
            <div>
              <h3>Jätkusuutlik Areng</h3>
              <p>Mõista, kuidas elada loodusega kooskõlas parema tuleviku nimel.</p>
            </div>
          </div>

        </div>

        <div className="two-columns">

          <div>
            <h3 className="section-subtitle">Keskkonnasõbralik Eluviis</h3>
            <p className="muted">
              Meie õppekava rõhutab tervislikke, ökosõbralikke käitumisviise.
            </p>
          </div>

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1632688242366-1c1e1d348939?q=80&w=1080&auto=format&fit=crop"
              alt="Läänemere loodus"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Topics;
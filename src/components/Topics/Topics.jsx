import React from "react";
import { Waves, Zap, Lightbulb, TreePine } from "lucide-react";

function Topics() {
  const topics = [
    {
      icon: <Waves />,
      color: "blue",
      title: "Läänemere Kaitse",
      text: "Õpi hoolitsema Läänemere puhtuse ja ökosüsteemi tervise eest."
    },
    {
      icon: <Zap />,
      color: "yellow",
      title: "Energia Säästmine",
      text: "Avasta praktilisi võimalusi energia säästmiseks igapäevaelus."
    },
    {
      icon: <Lightbulb />,
      color: "orange",
      title: "Alternatiivenergia",
      text: "Tutvuge taastuvate energiaallikatega ja nende eelistega."
    },
    {
      icon: <TreePine />,
      color: "green",
      title: "Jätkusuutlik Areng",
      text: "Mõista, kuidas elada loodusega kooskõlas parema tuleviku nimel."
    }
  ];

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
          {topics.map((t, i) => (
            <div className="topic" key={i}>
              <div className={`topic-icon ${t.color}`}>{t.icon}</div>
              <div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
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

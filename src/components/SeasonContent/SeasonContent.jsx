import React, { useEffect, useState } from "react";

function SeasonContent({ seasonId }) {
  const [season, setSeason] = useState(null);

  useEffect(() => {
    if (!seasonId) {
      setSeason(null);
      return;
    }

    fetch("/data/seasons.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.id === seasonId);
        setSeason(found);
      });
  }, [seasonId]);

  if (!season) return null;

  return (
    <section className="section">
      <div className="container">
        <h2>{season.season} — {season.year}</h2>

        <h3>Külasta Keskkonnatelka</h3>
        <ul>
          {season.events.map((ev, i) => (
            <li key={i}>
              {ev.date} — {ev.place} ({ev.time})
            </li>
          ))}
        </ul>

        <h3>Töötoad</h3>
        <div className="grid-cards">
          {season.workshops.map((ws, i) => (
            <article key={i} className="card">
              <img src={ws.img} alt={ws.title} />
              <h4>{ws.title}</h4>
              <p>{ws.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeasonContent;

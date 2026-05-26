import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

function CalendarSection({ seasonId }) {
  const [season, setSeason] = useState(null);

  useEffect(() => {
    if (!seasonId) return;

    fetch("/data/seasons.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => s.id === seasonId);
        setSeason(found);
      });
  }, [seasonId]);

  if (!season) return null;

  return (
    <section id="kalender" className="section bg-white">
      <div className="container">
        <div className="center">
          <div className="icon-bg large"><Calendar /></div>
          <h2>Külasta Keskkonnatelka</h2>
          <p className="sub">{season.season} — {season.year}</p>
        </div>

        <div className="grid-cards schedule-grid">
          {season.events.map((ev, i) => (
            <article key={i} className="card event">
              <header className="card-header">
                <Calendar />
                <h4>{ev.date}</h4>
              </header>
              <div className="card-body">
                <p className="muted"><MapPin /> {ev.place}</p>
                <p className="muted"><Clock /> {ev.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CalendarSection;

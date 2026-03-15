import React from 'react';
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  { date: '14. juuni', place: 'Puhta Vee Teemapark Metsamõisa Talu', time: '14-19', done: false },
  { date: '25.-27. juuni', place: 'Puhta Vee Teemapark Metsamõisa Talu', time: '12-16', done: false },
  { date: '28.-29. juuni', place: 'Puhta Vee Teemapark Metsamõisa Talu', time: '9-12', done: true },
  { date: '3. august', place: 'Valgejõe Külapäev', time: '12-16', done: false },
  { date: '10. august', place: 'Lauritsapäev (Kuusalu alevik)', time: '12-16', done: true },
  { date: '18. august', place: 'Järsi, Vajangu ja Türje Külapäev', time: '12-16', done: false },
];

function CalendarSection() {
  return (
    <section id="kalender" className="section bg-white">
      <div className="container">
        <div className="center">
          <div className="icon-bg large"><Calendar /></div>
          <h2>Külasta Keskkonnatelka</h2>
          <p className="sub">Tule kohale ja osale meie põnevates töötubades järgmistel kuupäevadel</p>
        </div>

        <div className="grid-cards schedule-grid">
          {events.map((ev, i) => (
            <article key={i} className="card event">
              <header className="card-header">
                <Calendar />
                <h4>{ev.date}</h4>
              </header>
              <div className="card-body">
                <p className={`muted ${ev.done ? 'done' : ''}`}>
                <MapPin />{ev.place}
                </p>
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
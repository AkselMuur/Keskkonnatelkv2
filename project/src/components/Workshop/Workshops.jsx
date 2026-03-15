import React, { useState, useEffect } from "react";
import { Wind, Feather, Eye } from "lucide-react";

function Workshops() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=3")
      .then((res) => res.json())
      .then((data) => {
        const transformed = data.map((d, i) => ({
          id: d.id,

          title: [
            "Tuuliku Meisterdamine",
            "Põletustempel",
            "Looduse Meeleline Kogemine",
          ][i],

          description: [
            "Kavanda ja valmista oma värvikas tuulik.",
            "Loo ainulaadseid puittemplit traditsiooniliste puupõletustehnikate abil.",
            "Testi end looduse kogemisel ja mõistmisel läbi kõigi oma meelte.",
          ][i],

          img: [
            "https://images.unsplash.com/photo-1762549957421-179ed3aed898?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1759142761123-9ab45592b5f6?q=80&w=1080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1656857143191-4ec39c1d4771?q=80&w=1080&auto=format&fit=crop",
          ][i],
        }));

        setWorkshops(transformed);
      })
      .catch(() => {
        setWorkshops([
          {
            id: 1,
            title: "Tuuliku Meisterdamine",
            description: "Kavanda ja valmista oma värvikas tuulik.",
            img: "https://images.unsplash.com/photo-1762549957421-179ed3aed898?q=80&w=1080&auto=format&fit=crop",
          },
          {
            id: 2,
            title: "Põletustempel",
            description: "Loo ainulaadseid puittemplit.",
            img: "https://images.unsplash.com/photo-1759142761123-9ab45592b5f6?q=80&w=1080&auto=format&fit=crop",
          },
          {
            id: 3,
            title: "Looduse Meeleline Kogemine",
            description: "Testi end looduse kogemisel.",
            img: "https://images.unsplash.com/photo-1656857143191-4ec39c1d4771?q=80&w=1080&auto=format&fit=crop",
          },
        ]);
      });
  }, []);

  const icons = [<Wind />, <Feather />, <Eye />];

  return (
    <section id="tookojad" className="section bg-graded-alt">
      <div className="container">
        <div className="center">
          <h2>Meie Töötoad</h2>
          <p className="sub">
            Osale praktilistes tegevustes, mis ühendavad loovust ja
            keskkonnateadlikkust
          </p>
        </div>

        <div className="grid-cards workshops-grid">
          {workshops.map((ws, i) => (
            <article key={ws.id} className="card workshop">
              <div className="image-wrap">
                <img src={ws.img} alt={ws.title} />
                <div className="icon-circle">{icons[i]}</div>
              </div>

              <div className="card-body">
                <h4>{ws.title}</h4>
                <p>{ws.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workshops;
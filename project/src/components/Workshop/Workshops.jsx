import React, { useState, useEffect } from "react";
import { Wind, Feather, Eye } from "lucide-react";

function Workshops() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    fetch("/veebiarendus/Keskonnatelk/workshops.json")
      .then((res) => res.json())
      .then((data) => setWorkshops(data))
      .catch((err) => {
        console.error("JSON load error:", err);
      });
  }, []);

  const icons = [<Wind />, <Feather />, <Eye />];

  return (
    <section id="tookojad" className="section bg-graded-alt">
      <div className="container">
        <div className="center">
          <h2>Meie Töötoad</h2>
          <p className="sub">
            Osale praktilistes tegevustes, mis ühendavad loovust ja keskkonnateadlikkust
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

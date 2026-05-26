import React, { useEffect, useState } from "react";

function Sidebar({ onSelectSeason }) {
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    fetch("/data/seasons.json")
      .then((res) => res.json())
      .then((data) => setSeasons(data))
      .catch((err) => console.error("Season load error:", err));
  }, []);

  return (
    <aside className="sidebar" id="sidebar" aria-label="Peamenüü">
      <h2 className="menu-title"></h2>

      {/* Avaleht + Dark Mode kõrvuti */}
      <div className="top-row">
        <button
          className="sidebar-link active"
          onClick={() => onSelectSeason(seasons[0]?.id)}
        >
          Avaleht
        </button>

        <button
          className="dark-toggle"
          onClick={() => document.body.classList.toggle("dark")}
        >
          🌙
        </button>
      </div>

      <div className="season">
        {seasons.map((s) => (
          <button
            key={s.id}
            className="sidebar-link"
            onClick={() => onSelectSeason(s.id)}
          >
            <span>{s.season}</span>
            <span className="muted">{s.year}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;

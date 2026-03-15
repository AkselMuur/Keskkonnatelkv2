import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar" aria-label="Peamenüü">
      <h2 className="menu-title">Peamenüü</h2>
      <a href="#home" className="sidebar-link active">Avaleht</a>

      <div className="season">
        {[
          { season: '17. hooaeg', year: '2026', path: '/season/17' },
          { season: '16. hooaeg', year: '2025', path: '/season/16' },
          { season: '15. hooaeg', year: '2024', path: '/season/15' },
          { season: '14. hooaeg', year: '2023', path: '/season/14' },
          { season: '13. hooaeg', year: '2022', path: '/season/13' },
          { season: '12. hooaeg', year: '2021', path: '/season/12' },
        ].map((s) => (
          <a key={s.path} href={`#${s.path}`} className="sidebar-link" data-path={s.path}>
            <span>{s.season}</span>
            <span className="muted">{s.year}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
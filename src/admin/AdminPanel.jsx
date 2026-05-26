import React from "react";

function AdminPanel() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Paneel</h1>
      <p>Tere tulemast, admin!</p>

      <button
        className="btn large"
        onClick={() => {
          localStorage.removeItem("admin_auth");
          window.location.reload();
        }}
      >
        Logi välja
      </button>
    </div>
  );
}

export default AdminPanel;

import React, { useEffect, useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

function ProtectedRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth") === "true";
    setIsLoggedIn(auth);
  }, []);

  if (isLoggedIn) {
    return <AdminPanel />;
  }

  return <AdminLogin onLogin={() => window.location.reload()} />;
}

export default ProtectedRoute;

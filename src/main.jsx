import React from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/AppContext";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import ProtectedRoute from "./admin/ProtectedRoute";
import SeasonPage from "./pages/SeasonPage";

// Avaleht
function HomePage() {
  return <App />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/season/:id",
    element: <SeasonPage />,
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);

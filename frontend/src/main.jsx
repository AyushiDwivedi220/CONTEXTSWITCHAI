import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom/client";

import AppRoutes from "./routes/AppRoutes";

import "./index.css";

function App() {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return <AppRoutes />;
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);
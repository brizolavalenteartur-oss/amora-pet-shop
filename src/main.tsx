import React from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./components/landing/LandingPage";

createRoot(document.getElementById("root")!).render(<React.StrictMode><LandingPage /></React.StrictMode>);

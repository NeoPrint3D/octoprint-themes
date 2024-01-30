import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import "./assets/css/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster
      toastOptions={{
        className:
          "bg-base-100/60 bacdkrop-blur-md font-title text-white border border-white/20",
      }}
    />
    <App />
  </React.StrictMode>
);

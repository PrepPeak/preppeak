import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { router } from "./router";
import { Providers } from "@/app/providers";
import { queryClient } from "@/shared/api/query-client.ts";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope,
        );
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers router={router} client={queryClient} />
  </React.StrictMode>,
);

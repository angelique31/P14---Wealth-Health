import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";
import App from "./App";

//indique à react-modal que l'élément avec l'ID "root" est l'élément principal de votre application et qu'il doit être caché pour les lecteurs d'écran lorsque la modale est ouverte.
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import { ContextApi } from "./Api/ContextApi.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout>
        <ContextApi.Provider value={"hello"}>
          <App />
        </ContextApi.Provider>
      </MainLayout>
    </BrowserRouter>
  </StrictMode>
);

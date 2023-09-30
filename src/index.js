import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Home from "./Components/home/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Theme from "./styles/theme";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);

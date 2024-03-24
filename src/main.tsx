import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Theme from "./styles/theme";
import "./index.css";
// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: "dabxjpjk8",
//   api_key: "466474981885677",
//   api_secret: "zyv6Xzqmd3x_NKdLE2XuqtbRP58",
// });

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

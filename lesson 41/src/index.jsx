import { createRoot } from "react-dom/client";
import App from "./App";

import "./style.css";

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <App clickerCount={4}>
      <h1>My First React App</h1>
    </App>
  </>
);

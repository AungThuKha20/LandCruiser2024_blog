import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GeneralContextProvider from "./Context/GeneralContext.jsx";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <MantineProvider>
      <App />
    </MantineProvider>
  </GeneralContextProvider>
);

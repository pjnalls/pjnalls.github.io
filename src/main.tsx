import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";

import { router } from "./pages/utils/router";
import "./styles/index.scss";

import { getLastRoute } from "./pages/utils/last-route";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

router.navigate(getLastRoute());

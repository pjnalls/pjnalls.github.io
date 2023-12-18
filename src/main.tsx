import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";

import App from "./App.tsx";
import "./scss/index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageNotFound from "./routes/404.tsx";
import Resume from "./routes/Resume.tsx";
import React from "react";
import Cover from "./routes/Cover.tsx";
import About from "./routes/About.tsx";
import Works from "./routes/Works.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Cover />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

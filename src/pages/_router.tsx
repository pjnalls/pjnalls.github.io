import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./About";
import Home from "./Home";
import Resume from "./Resume";
import Works from "./Works";
import PageNotFound from "./404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

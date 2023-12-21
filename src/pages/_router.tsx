import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./About";
import Cover from "./Cover";
import Resume from "./Resume";
import Works from "./Works";
import PageNotFound from "./404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Cover />,
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

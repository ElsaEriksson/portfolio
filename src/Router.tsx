import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./Layout";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Contact } from "./pages/Contact";
import { Info } from "./pages/Info";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Info",
        element: <Info />,
      },
      {
        path: "/Projects/:projectId",
        element: <ProjectDetails />,
      },
    ],
  },
]);

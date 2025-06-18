import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Addmission from "./pages/Addmission";
import Fee from "./pages/Fee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/students",
        element: <Addmission />,
      },
      {
        path: "/fee",
        element: <Fee />,
      },
    ],
  },
]);

export default router;

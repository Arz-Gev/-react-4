import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import DashBoardPage from "../pages/DashBoardPage";
import ArticlePage from "../pages/ArticlePage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard/user/:id",
    element: <DashBoardPage />,
  },
  {
    path: "/Article",
    element: <ArticlePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

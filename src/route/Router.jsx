import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

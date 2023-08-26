import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import Header from "../layouts/header";
// import ProtectedRoute from "../features/auth/components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      <Homepage />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/friend",
    element: <Header />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

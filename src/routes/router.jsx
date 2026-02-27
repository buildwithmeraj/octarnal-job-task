import { createBrowserRouter } from "react-router";
import Login from "../components/pages/login/Login";
import Dashboard from "../components/pages/dashboard/Dashboard";
import PrivateRoutes from "../middlewares/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
  },
]);

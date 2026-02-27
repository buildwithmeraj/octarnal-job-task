import { createBrowserRouter } from "react-router";
import Login from "../components/pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

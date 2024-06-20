import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import { LoginAction } from "./hooks-loaders/actions";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/users"}></Navigate>,
  },
  {
    path: "/login",
    action: LoginAction,
    element: <Login></Login>,
  },
  {
    path: "/users",
    element: <h1>Welcome to users page</h1>,
    children: [
      {
        path: "posts",
      },
      {
        path: "comments",
      },
    ],
  },
]);

export default routes;

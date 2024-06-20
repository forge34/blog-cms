import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import { LoginAction } from "./hooks-loaders/actions";
import Home from "./home";

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
    element: <Home></Home>,
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

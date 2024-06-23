import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import { LoginAction } from "./hooks-loaders/actions";
import Home from "./home";
import PostPage from "./posts-page";
import CommentsPage from "./comments-page";
import PostEditPage from "./edit-page";

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
    path: "/user",
    element: <Home></Home>,
    children: [
      {
        path: "posts",
        loader: () => {
          return fetch("http://localhost:3000/api/user/posts", {
            mode: "cors",
            credentials: "include",
          });
        },
        element: <PostPage></PostPage>,
        children: [
          {
            path: "edit",
            elemnt: PostEditPage,
          },
        ],
      },
      {
        path: "comments",
        loader: () => {
          return fetch("http://localhost:3000/api/user/comments", {
            mode: "cors",
            credentials: "include",
          });
        },
        element: <CommentsPage></CommentsPage>,
      },
    ],
  },
]);

export default routes;

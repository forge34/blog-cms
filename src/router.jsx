import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import { LoginAction } from "./hooks-loaders/actions";
import Home from "./home";
import PostPage from "./posts-page";
import CommentsPage from "./comments-page";
import CommentEditPage from "./comment-edit-page";
import PostEditPage from "./post-edit-page";

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
          return fetch(
            "https://blog-backend-production-8991.up.railway.app/api/user/posts",
            {
              mode: "cors",
              credentials: "include",
            }
          );
        },
        element: <PostPage></PostPage>,
      },
      {
        path: "post/edit",
        element: <PostEditPage></PostEditPage>,
      },
      {
        path: "comment/edit",
        element: <CommentEditPage></CommentEditPage>,
      },

      {
        path: "comments",
        loader: () => {
          return fetch(
            "https://blog-backend-production-8991.up.railway.app/api/user/comments",
            {
              mode: "cors",
              credentials: "include",
            }
          );
        },
        element: <CommentsPage></CommentsPage>,
      },
    ],
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Default";
import Home from "./pages/Home";
import NewTodo from "./pages/NewTodo";
import UpdateTodo from "./pages/UpdateTodo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "new-todo",
        element: <NewTodo />,
      },
      {
        path: "update-todo/:id",
        element: <UpdateTodo />,
      },
    ],
  },
]);

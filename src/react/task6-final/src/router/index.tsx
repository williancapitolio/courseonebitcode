import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { Items } from "../pages/Items";
import { Item } from "../pages/Item";
import { NewItem } from "../pages/NewItem";
import { UpdateItem } from "../pages/UpdateItem";
import { NewCat } from "../pages/NewCat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "items",
        element: <Items />,
      },
      {
        path: "items/:itemId",
        element: <Item />,
      },
      {
        path: "items/new",
        element: <NewItem />,
      },
      {
        path: "items/update/:itemId",
        element: <UpdateItem />,
      },
      {
        path: "items/cat",
        element: <NewCat />,
      },
    ],
  },
]);

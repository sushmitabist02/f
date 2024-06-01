import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipe from "./components/Recipe/Recipe.jsx";
import Search from "./components/Search/Search.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Search />,
      },
      // {
      //   path:"recipe",
      //   element:<Recipe/>,
      // },
      {
        path: ":id",
        element: <Recipe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

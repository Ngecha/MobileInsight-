import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Specifications from "./Pages/Specifications";
import NewPhone from "./Pages/NewPhone";
import About from "./Pages/About";

const router = createBrowserRouter([
  // client-side routing
  { path: "/", element: <Home /> },
  { path: "/specs/:id", element: <Specifications /> },
  { path: "/newphone", element: <NewPhone /> },
  { path: "/About", element: <About /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

import "./Styles/scss/style.scss";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Reducers/";

import Main from "./Components/Pages/Main";
import Blog from "./Components/Pages/Blog";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import Category from "./Components/Pages/Category";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const page_main = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={page_main} />
    </React.StrictMode>
  </Provider>,
);

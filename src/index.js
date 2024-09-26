import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import About from "./components/AboutClass";
import ContactClass from "./components/ContactClass";
import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: <Shimmer />,
    children: [
      {
        path: "/",
        element: <Body />,
        // loader: <h1> About page loading..</h1>
      },
      {
        path: "/about",
        element: <About />,
        // loader: <h1> About page loading..</h1>
      },
      {
        path: "/contact",
        element: <ContactClass />,
        // loader: <h1> contact class Loading..</h1>
      },
      {
        path: "/restaurantMenu/:resId",
        element: <Menu />,
        // loader: <h1> contact class Loading..</h1>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Router} />);

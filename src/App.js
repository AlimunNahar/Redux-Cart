import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Main from "./components/layout/Main";
import MyOrders from "./components/MyOrders/MyOrders";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Home />,
        },
        {
          path: "/orders",
          element: <MyOrders />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;

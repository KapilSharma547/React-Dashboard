import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <h1>Home</h1>,
        },
        {
          path: "/users",
          element: <h1>users</h1>,
        },
        {
          path: "/products",
          element: <h1>products</h1>,
        },
        {
          path: "/users/:id",
        },
        {
          path: "/products/:id",
          element: <h1>/products/:id</h1>,
        },
      ],
    },
    {
      path: "/login",
      element: <h1>/login</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

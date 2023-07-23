import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Home from "./pages/home/Home";
import "./styles/global.scss";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import User from "./pages/user/User.jsx";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            {/* <QueryClientProvider client={queryClient}> */}
            <Outlet />
            {/* </QueryClientProvider> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    ,
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Home from "./pages/home/Home";
import "./styles/global.scss";
import Users from "./pages/users/Users";

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
        {/* <Footer /> */}
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

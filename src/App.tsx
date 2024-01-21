import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Welcome from "./pages/Welcome";
import Loading from "./components/Loading";

const Layout = () => (
  <div className="layout-app">
    <Outlet />
  </div>
);
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <NotFound />,
    },

    {
      path: "/home",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [{ index: true, element: <HomePage /> }],
    },

    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return <>{loading ? <Loading /> : <RouterProvider router={router} />}</>;
}

export default App;

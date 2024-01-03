import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Welcome from "./pages/Welcome";

const Layout = () => (
  <div className="layout-app">
    <Header />
    <Outlet />
    <Footer />
  </div>
);
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

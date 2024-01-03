import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";

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
      errorElement: <NotFound />,
    },

    {
      path: "/home",
      element: <Layout />,
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

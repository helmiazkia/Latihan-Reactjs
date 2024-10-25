import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPassword from "./pages/ForgotPassword";  // Changed to uppercase F

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
      errorElement: <ErrorRoute />
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />  // Changed to uppercase F
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;

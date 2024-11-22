import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPassword from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import GoalsPage from "./pages/goals";
import ExpensesPage from "./pages/expenses";




const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/> ,
      errorElement: <ErrorRoute/ >
    },
    {
      path: "/login",
      element: <SignInPage/>,
    },
    {
      path: "/register",
      element: <SignUpPage/>,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword/>
    },
    {
      path: "/balance",
      element: <BalancePage/>,
    },
    {
      path: "/goals",
      element: <GoalsPage/>,
    },
    {
      path: "/expenses",
      element: <ExpensesPage/>
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;

import { createBrowserRouter } from "react-router-dom";
import Layout from "../app/Views/Layout"; 
import Home from "../app/Views/Home";
import Error from "../app/Views/Error"; 
import AccountType from "../features/auth/pages/AccountType"; 
import SignupWithBanner from "../features/auth/pages/Signup";
import CheckoutPage from "../features/auth/pages/CheckoutPage";
import DiscountPage from "../features/auth/pages/DiscountPage";
import HomeDashboard from "../features/auth/pages/HomeDashboard"; 
import RegistrationDetails from "../features/auth/pages/RegistrationDetails"; 
import EmailVerification from "../features/auth/pages/client/pages/EmailVerification";
import LoginWithBanner from "../features/auth/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true, // Default route
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginWithBanner />,
      },
      {
        path: "FindDiscount",
        element: <HomeDashboard />,
      },

      {
        path: "signup",
        element: <DiscountPage />,
      },
    
      {
        path: "signup/:accountType/verification",
        element: <EmailVerification />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />, // Catch-all for unmatched routes
  },
]);

export default router;

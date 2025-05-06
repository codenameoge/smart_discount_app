import { createBrowserRouter } from "react-router-dom";
import Layout from "../app/Views/Layout"; 
import Home from "../app/Views/Home";
import Error from "../app/Views/Error"; 
import AccountType from "../features/auth/pages/AccountType"; 
import SignupWithBanner from "../features/auth/pages/Signup";
import HomeDashboard from "../features/auth/pages/HomeDashboard";
import CheckoutPage from "../features/auth/pages/CheckoutPage";
import DiscountPage from "../features/auth/pages/DiscountPage";
import DiscountApplied from "../features/auth/pages/DiscountApplied";
import CartPage from "../features/auth/pages/CartPage";
import ProductPage from "../features/auth/pages/ProductPage";
import DiscountSearch from "../features/auth/pages/DiscountSearch"; 
import OTPVerification from "../features/auth/pages/OtpPage";
import VerificationModal from "../features/auth/pages/OtpVerifiedPage"; // New confirmation page
import RegistrationDetails from "../features/auth/pages/RegistrationDetails"; 
import EmailVerification from "../features/auth/pages/client/pages/EmailVerification";
import LoginWithBanner from "../features/auth/pages/Login";
import PasswordReset from "../features/auth/pages/PasswordReset";
import ResetPassword from "../features/auth/pages/ResetPassword";
import PasswordResetSuccess from "../features/auth/pages/PasswordResetSuccess";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import ProfileInterface from "../features/auth/pages/ProfileInterface";
import WalletInterface from "../features/auth/pages/WalletInterface";
import CouponAI from "../features/auth/pages/DiscountApplied";
import PaymentPage from "../features/auth/pages/PaymentPage";
import PaymentConfirmation from "../features/auth/pages/PaymentConfirmation";
import PaymentCheckout from "../features/auth/pages/PaymentCheckout";
import PaymentWallet from "../features/auth/pages/PaymentWallet";
import ProductDisplay from "../features/auth/pages/ProductDisplay";
import SearchDiscount from "../features/auth/pages/SearchDiscount";

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
        element: <SignupWithBanner />,
      },
      {
        path: "new-password",
        element: <ResetPassword />,
      },
      {
        path: "payments",
        element: <PaymentWallet/>,
      },
      {
        path: "Scan-Discount",
        element: <DiscountSearch />,
      },
      {
        path: "search",
        element: <SearchDiscount/>,
      },
      {
        path: "discount-result",
        element: <ProductDisplay/>,
      },
      {
        path: "products",
        element:<CartPage/>,
      },
      {
        path: "scan",
        element: <DiscountPage />,
      },
      {
        path: "checkout",
        element:<PaymentCheckout/>,
      },
      {
        path: "payment-confirmation",
        element: <PaymentConfirmation />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "apply-discount",
        element: <DiscountApplied />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "best-discounts",
        element: <ProductPage />,
      },
      {
        path: "password-reset-success",
        element: <PasswordResetSuccess />,
      },
      {
        path: "otp-verification",
        element: <OTPVerification />,
      },
      {
        path: "password-reset",
        element: <PasswordReset />,
      },
      {
        path: "otp-verified",
        element: <VerificationModal />,
      },
      {
        path: "reset-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />, // Catch-all for unmatched routes
  },
]);

export default router;

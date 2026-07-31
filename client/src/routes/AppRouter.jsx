import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Pricing from "../pages/Pricing";
import Resources from "../pages/Resources";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import RefundPolicy from "../pages/RefundPolicy";
import Mentors from "../pages/Mentors";
import MentorDetails from "../pages/MentorDetails";
import Booking from "../pages/Booking";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "mentors",
        element: <Mentors />,
      },
      {
        path: "mentors/:id",
        element: <MentorDetails />,
      },
      {
        path: "booking/:mentorId",
        element: (
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
]);

export default router;

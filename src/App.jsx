import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/about/about";
import Service from "./pages/service/service";
import Project from "./pages/project/project";
import { HelmetProvider } from "react-helmet-async";
import Main from "./pages/main/main";

import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import MainLayout from "./layout/main-layout";
import AuthLayout from "./layout/auth-layout";
import Dashboard from "./pages/dashboard/dashboard";
import ProtectedLayout from "./layout/protechted-layout";
import PublicRoute from "./utils/public-route/public-route";
import UserDetails from "./pages/service/components/user-details/user-details";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/users/:id" element={<UserDetails />} />
            <Route path="/project" element={<Project />} />
          </Route>

          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route
              path="/auth/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/auth/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

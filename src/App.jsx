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
import ProtechtedLayout from "./layout/protechted-layout";
import ProtechtedRoute from "./utils/protechted-route/protechted-route";
import PublicRoute from "./utils/public-route/public-route";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/project" element={<Project />} />
          </Route>

          <Route element={<ProtechtedLayout />}>
            <Route
              path="/dashboard"
              element={
                <ProtechtedRoute>
                  <Dashboard />
                </ProtechtedRoute>
              }
            />
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

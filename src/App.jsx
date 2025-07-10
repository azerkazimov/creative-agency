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

          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
          
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

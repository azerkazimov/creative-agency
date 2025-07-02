import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/about/about";
import Service from "./pages/service/service";
import Project from "./pages/project/project";
import { HelmetProvider } from "react-helmet-async";
import Main from "./pages/main/main";
import Header from "./layout/header/header";

export default function App() {
  return (
    <HelmetProvider>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

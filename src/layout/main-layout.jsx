import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

import Loading from "../components/loading/loading";
import { useAuthMiddleware } from "../middleware/use-auth-middleware";

export default function MainLayout() {
  const { isAuthenticated, user, loading, logout } = useAuthMiddleware();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar
        isAutentificated={isAuthenticated}
        user={user}
        onLogout={logout}
      />
      <Outlet />
      <Footer />
    </>
  );
}

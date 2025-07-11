import { Link, Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";

import Loading from "../components/loading/loading";
import { useAuthMiddleware } from "../middleware/use-auth-middleware";

export default function ProtectedLayout({
  requireAuth = true,
  fallBackComponent = null,
}) {
  const { isAuthenticated, loading, user, logout } = useAuthMiddleware();

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated && requireAuth) {
    return (
      fallBackComponent || (
        <div className="access">
          <h2>Access Denied</h2>
          <span>
            Please <Link to={"/auth/login"}>log in</Link> to access this page
          </span>
        </div>
      )
    );
  }

  return (
    <>
      <Navbar
        isAutentificated={isAuthenticated}
        user={user}
        onLogout={logout}
      />
      <Outlet />
    </>
  );
}

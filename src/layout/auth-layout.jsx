import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import Loading from "../components/loading/loading";
import { useAuthMiddleware } from "../middleware/use-auth-middleware";

export default function AuthLayout() {
  const { isAuthenticated, loading } = useAuthMiddleware();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

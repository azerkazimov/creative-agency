import { useLocation, useNavigate } from "react-router-dom";
import { useAuthMiddleware } from "./use-auth-middleware";
import { useEffect } from "react";

export default function useRouteProtection(
  requiredAuth = false,
  redirectTo = "/auth/login"
) {
  const { isAuthenticated, loading } = useAuthMiddleware();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      if (requiredAuth && !isAuthenticated) {
        navigate(redirectTo, {
          state: { from: location },
          replace: true,
        });
      }
    }
  }, [isAuthenticated, loading, redirectTo, requiredAuth, navigate, location]);

  return { isAuthenticated, loading };
}

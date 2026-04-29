import { Navigate, useLocation } from "react-router-dom";

const ADMIN_KEY = "drive_prime_admin_auth";
export const ADMIN_PASSWORD = "nabilaymane77!!";

export const isAdminAuthed = () =>
  typeof window !== "undefined" && sessionStorage.getItem(ADMIN_KEY) === "1";

export const setAdminAuthed = (v: boolean) => {
  if (v) sessionStorage.setItem(ADMIN_KEY, "1");
  else sessionStorage.removeItem(ADMIN_KEY);
};

export const RequireAdmin = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  if (!isAdminAuthed()) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  return children;
};

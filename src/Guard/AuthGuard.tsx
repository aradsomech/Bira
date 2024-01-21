import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const loggedIn: boolean = useSelector(
    (bigPie: any) => bigPie.authSlice.loggedIn
  );

  if (loggedIn) {
    return <>{children}</>;
  } else {
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }
};

export default AuthGuard;

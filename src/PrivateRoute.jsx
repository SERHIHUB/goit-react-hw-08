import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { selectIsRefreshing } from "./redux/auth/selectors";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/login",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return isLoggedIn || isRefreshing ? Component : <Navigate to={redirectTo} />;
};

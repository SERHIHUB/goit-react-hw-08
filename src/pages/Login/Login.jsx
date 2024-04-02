import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectLoading } from "../../redux/auth/selectors";
import { selectError } from "../../redux/auth/selectors";
import toast, { Toaster } from "react-hot-toast";
import css from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <LoginForm />
      {loading && <p>Waiting...</p>}
      {error &&
        toast.error("check if you entered your email or password correctly.")}
      <div className={css.registerLink}>
        <Link to="/register">to register</Link>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;

import styles from "./Login.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGLogin } from "../../hooks/use-gLogin";

function Login() {
  const navigate = useNavigate();
  const { handleGoogleLogin, loginResults } = useGLogin();

  const user = useSelector((state) => {
    return state.user;
  });

  // console.log(user);
  // console.log(loginResults);

  const loginHandler = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      handleGoogleLogin(tokenResponse);
    },
  });

  useEffect(() => {
    if (
      user.isLoggedIn &&
      loginResults.data &&
      loginResults.data.status === 212
    ) {
      navigate("/register");
      toast.warn(loginResults.data.message);
    }

    if (loginResults.data && loginResults.data.status === 210) {
      toast.warn(loginResults.data.message);
    }

    if (
      user.isLoggedIn &&
      loginResults.data &&
      loginResults.data.status === 200
    ) {
      navigate("/");
      toast.success(`Welcome ${user.name}`);
    }
  }, [loginResults.data, navigate, user.isLoggedIn, user.name]);

  return (
    <div className={styles.bg}>
      <div className={styles.login_image}>
        <img
          alt="yo"
          src="https://res.cloudinary.com/aaspaas/image/upload/v1666902714/Backgrounds/LoginPage_svg_eatprk.png"
        />
      </div>
      <div className={styles.google_login}>
        <button
          disabled={loginResults.isLoading}
          onClick={() => loginHandler()}
        >
          <img
            alt="Google-Logo"
            src="https://res.cloudinary.com/aaspaas/image/upload/v1667074689/Social/googleLogin_ugxmfp.png"
          />
          <span>
            {loginResults.isLoading ? "Logging in..." : "Sign in with google"}
          </span>
        </button>
        <p>
          Having Trouble Signing in?
          <br />
          <a href="/users/contact">Contact us</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

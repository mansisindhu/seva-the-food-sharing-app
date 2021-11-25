import styles from "./signup.module.css";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const login = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
  };

  return (
    <div className={styles.main}>
      <h1>Sign up</h1>
      <div className={styles.form}>
        <input type="text" id="name" name="name" placeholder="Name" />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address "
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Confirm Password"
        />
        <button className={styles.signup_btn}>Sign up</button>
      </div>

      <div className={styles.or}>
        <div className={styles.number}>
          <p>or</p>
        </div>
      </div>

      <div className={styles.lower}>
        <p className={styles.signUpWith}>Sign up with</p>
        <div onClick={login} className={styles.google}>
          <FcGoogle className={styles.iconGoogle} />
          <p>Login with Google</p>
        </div>
        <div className={styles.google}>
          <BsFacebook className={styles.iconFb} />
          <p>Login with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

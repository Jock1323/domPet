import "./login.scss";
import logoWhite from "../../assets/images/logo-white.png";
import logoText from "../../assets/images/logo-text-white.png";
const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login__wrapper">
          <div className="login__left">
            <div className="login__triangle">
              <span className="login__anime">
                <span className="login__anime-inner"></span>
              </span>
              <span className="login__anime">
                <span className="login__anime-inner"></span>
              </span>
            </div>
            <div className="login__logo-wrapper">
              <img src={logoWhite} alt="logo white" className="login__logo" />
              <img src={logoText} alt="logo white" />
            </div>
            <div className="login__info">
              <h3 className="login__info-title">Welcome To Dompet</h3>
              <p className="login__info-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
              <div className="login__info-socials">
                <a href="#" className="login__info-social">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="login__info-social">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="login__info-social">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span className="login__info-footer">
                Privacy PolicyContact© 2021 DexignZone
              </span>
            </div>
          </div>
          <div className="login__right">
            <h3 className="login__right-title">Sign in</h3>
            <p className="login__right-text">
              Sign in by entering information below
            </p>
            <form className="login__right-form">
              <label htmlFor="login-email" className="login__right-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="login-email"
                className="login__right-email"
                required
              />
              <label htmlFor="login-password" className="login__right-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="login-password"
                className="login__right-password"
                required
              />
              <div className="login__right-check">
                <input type="checkbox" className="login__right-checkbox" />
                <p className="login__right-check__text">
                  Remember my preference
                </p>
              </div>
              <button type="submit" className="login__right-btn">
                Sign In
              </button>
            </form>
            <div className="login__right-footer">
              <p className="login__right-footer__text">
                Don't have an account?
              </p>
              <a href="#" className="login__right-footer__link">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

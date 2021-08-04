import React from "react";
import { Link } from "react-router-dom";

function Login({ handleLogin, changeHeaderLink }) {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
    } else {
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(password, email);
  };

  return (
    <div className="page__authorization authorization">
      <h2 className="authorization__title">Вход</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="authorization__fieldset">
          <label className="authorization__field">
            <input
              className="authorization__input"
              placeholder="Email"
              required
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
            />
            <span className="email-input-error" />
          </label>

          <label className="authorization__field">
            <input
              className="authorization__input"
              placeholder="Пароль"
              required
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
            <span className="password-input-error" />
          </label>
        </fieldset>
        <button
          type="submit"
          className="authorization__button btn-opacity btn-opacity_type_high"
        >
          Войти
        </button>
      </form>

      <Link
        onClick={changeHeaderLink}
        to="/sign-up"
        className="authorization__link btn-opacity btn-opacity_type_medium"
      >
        Ещё не зарегистрированы? Зарегистрироваться
      </Link>
    </div>
  );
}

export default Login;

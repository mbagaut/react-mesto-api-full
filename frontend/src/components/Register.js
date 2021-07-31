import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = this.state;
    this.props.handleRegister(password, email);
  };

  render() {
    return (
      <div className="page__authorization authorization">
        <h2 className="authorization__title">Регистрация</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="authorization__fieldset">
            <label className="authorization__field">
              <input
                className="authorization__input"
                placeholder="Email"
                required
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
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
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className="password-input-error" />
            </label>
          </fieldset>
          <button
            type="submit"
            className="authorization__button btn-opacity btn-opacity_type_high"
          >
            Зарегистрироваться
          </button>
        </form>

        <Link
          onClick={this.props.changeHeaderLink}
          to="/sign-in"
          className="authorization__link btn-opacity btn-opacity_type_medium"
        >
          Уже зарегистрированы? Войти
        </Link>
      </div>
    );
  }
}

export default Register;

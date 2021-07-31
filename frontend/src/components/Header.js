import React from "react";
import { Link } from "react-router-dom";

function Header({ onSignOut, changeHeaderLink, headerLink }) {
  const email = localStorage.getItem("email");

  return (
    <header className="header page__header">
      <div className="header__logo" />
      <div>
        <span className="header__user-email">{email}</span>
        {email ? (
          <Link
            onClick={onSignOut}
            to="/sign-in"
            className="header__link btn-opacity btn-opacity_type_medium"
          >
            Выйти
          </Link>
        ) : (
          <Link
            onClick={changeHeaderLink}
            to={headerLink.path}
            className="header__link btn-opacity btn-opacity_type_medium"
          >
            {headerLink.headerlinkText}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

import React from "react";

function Footer() {
  return (
    <footer className="footer page__footer">
      <p className="footer__author">{`© ${new Date().getFullYear()}. Марат Багаутдинов`}</p>
    </footer>
  );
}

export default Footer;

import React from "react";
import headerLogo from '../../images/mesto.SVG';

function Header() {
    return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="логотип"/>
    </header>
    );
};

export default Header;
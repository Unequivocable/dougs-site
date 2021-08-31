import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="title centre">Doug Siggelkow's <Link to="/ebook">eBook</Link>
      </h1>
    </header>
  );
};

export default Header;

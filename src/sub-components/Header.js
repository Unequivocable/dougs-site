import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="title">
        {/* <Link to="/"> */}
          Doug Siggelkow's  
          {/* </Link> */}
        <Link to="/ebook"> eBook</Link>
      </h1>
    </header>
  );
};

export default Header;

import React from "react";
import "../styles/Mobile.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <p>
        <Link className="navigation-p" to="/">
          Home
        </Link>
      </p>
      <p>
        {" "}
        <Link className="navigation-p" to="/about">
          {" "}
          About
        </Link>
      </p>
      <p>
        {" "}
        <Link className="navigation-p" to="/contact">
          Contact Us
        </Link>
      </p>
    </div>
  );
}

export default Navigation;

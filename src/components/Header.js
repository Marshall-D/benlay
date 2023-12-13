import React from "react";
import Mobile from "./Mobile";
import "../styles/Header.css";
import logo from "../images/logo-2.JPG";
function Header() {
  return (
    <>
      <header style={{ paddingBottom: "130px" }}>
        <div id="bottom-header">
          <div id="bottom-header-bottom">
            <div id="inner-bottom-1">
              <img className="logo-image" src={logo} />
              <br />
              <br />
              <br />
              <p className="logo-text">
                {" "}
                BENLAY INFORMATION TECHNOLOGY SYSTEMS LTD. (BIT SYSTEMS)
              </p>
            </div>
            <div id="inner-bottom-2">
              <h1>BENLAYGROUP</h1>
            </div>
          </div>
          <Mobile />
        </div>
      </header>
    </>
  );
}

export default Header;

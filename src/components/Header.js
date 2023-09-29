import React from "react";
import "../styles/Header.css";
import logo from "../images/organ-logo.jpeg";

function Header() {
  return (
    <>
      <header style={{ paddingBottom: "130px" }}>
        <div id="topheader">
          <p>
            Generate your One Time Pass to Heaven. You are just one step away!
            Become an Organ Donor! For more, visit www.mtvorgandaan.com
          </p>
        </div>
        <div id="bottom-header">
          <div id="bottom-header-top">
            <p className="black-text">info@organindia.org |</p>
            <p className="black-text">Toll-free Helpline Number- 18001203648</p>
          </div>

          <div id="bottom-header-bottom">
            <div id="inner-bottom-1">
              <img className="logo-image" src={logo} />
              <p className="logo-text"> Under the aegis of notto</p>
            </div>

            <div id="inner-bottom-2">
              <input
                type="button"
                value="Fund This Cause"
                className="header-button"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

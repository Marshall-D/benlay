import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header>
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
        </div>
      </header>
    </>
  );
}

export default Header;

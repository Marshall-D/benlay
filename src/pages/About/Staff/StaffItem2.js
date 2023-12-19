import React from "react";
import "../../../styles/About.css";
import man from "../../../images/man.png";

function StaffItem2() {
  return (
    <div className="about-footer-container">
      <div>
        <img className="man-icon" src={man} />
      </div>
      <div>
        <p className="bold">
          Name :<span className="span"> Olusoji Mathew</span>
        </p>
        <p className="bold">
          Profession:
          <span className="span"> Information Technology </span>
        </p>
        <p className="bold">
          Position:
          <span className="span"> Executive Director </span>
        </p>
        <p className="bold">
          Industry Experience:
          <span className="span"> 30 years </span>
        </p>
        <p className="bold">
          Nationality:
          <span className="span"> Nigerian </span>
        </p>
        <p className="bold">
          Education:
          <span className="span">
            {" "}
            MCP, MCSE, MCDBA, CCNA, OCP, CISA <br />
          </span>
        </p>
      </div>
    </div>
  );
}

export default StaffItem2;

import React from "react";
import "../../../styles/About.css";
import man from "../../../images/man.png";

function StaffItem5() {
  return (
    <div className="about-footer-container">
      <div>
        <img className="man-icon" src={man} />
      </div>
      <div>
        <p className="bold">
          Name :<span className="span"> Keji Gbenro</span>
        </p>
        <p className="bold">
          Profession:
          <span className="span"> Information Technology </span>
        </p>
        <p className="bold">
          Position:
          <span className="span"> Head,Software Solutions & Training </span>
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
            B.Sc(ComputerScience)1988 University of Lagos,Lagos,Nigeria.
            <br />
          </span>
        </p>
      </div>
    </div>
  );
}

export default StaffItem5;

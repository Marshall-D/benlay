import React from "react";
import "../../../styles/About.css";
import man from "../../../images/man.png";

function StaffItem4() {
  return (
    <div className="about-footer-container">
      <div>
        <img className="man-icon" src={man} />
      </div>
      <div>
        <p className="bold">
          Name :<span className="span"> Akinleye Akinyemi</span>
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
            Msc(ComputerScience)1991 UniversityofLagos,Lagos,Nigeria. Bsc
            (ComputerScience)1986 University of Nigeria, Nsukka, Nigeria.
            <br />
          </span>
        </p>
      </div>
    </div>
  );
}

export default StaffItem4;

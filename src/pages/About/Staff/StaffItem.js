import React from "react";
import "../../../styles/About.css";
import man from "../../../images/man.png";

function StaffItem() {
  return (
    <div className="about-footer-container">
      <div>
        <img className="man-icon" src={man} />
      </div>
      <div>
        <p className="bold">
          Name :<span className="span"> Fabeku Ola </span>
        </p>
        <p className="bold">
          Profession:
          <span className="span"> Information Technology </span>
        </p>
        <p className="bold">
          Position:
          <span className="span"> Managing Director </span>
        </p>
        <p className="bold">
          Industry Experience:
          <span className="span"> 35 years </span>
        </p>
        <p className="bold">
          Nationality:
          <span className="span"> Nigerian </span>
        </p>
        <p className="bold">
          Education:
          <span className="span">
            {" "}
            MBA(2001) University of Ado Ekiti, Ado Ekiti, Nigeria
            <br />
          </span>
          <span className="span">
            HND Computer Studies 1985 The Polytechnic Ibadan, Ibadan Nigeria{" "}
          </span>
        </p>
      </div>
    </div>
  );
}

export default StaffItem;

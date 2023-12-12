import React from "react";
import save from "../../images/save.png";
import "../../styles/About.css";

function AboutFooterItem3() {
  return (
    <div className="about-footer-container">
      <div>
        <img className="about-img" src={save} />
      </div>
      <h3 className="about-h3">Organ Donation Awareness</h3>
      <p className="about-footer-p">
        Now YOU can help raise awareness on organ donation at your organisation,
        college, school, RWA or anywhere else.
      </p>
    </div>
  );
}

export default AboutFooterItem3;

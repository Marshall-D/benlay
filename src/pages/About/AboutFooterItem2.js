import React from "react";
import body from "../../images/body-donation.png";
import "../../styles/About.css";

function AboutFooterItem2() {
  return (
    <div className="about-footer-container">
      <div>
        <img className="about-img" src={body} />
      </div>
      <h3 className="about-h3">Body Donation Directory</h3>
      <p className="about-footer-p">
        Do you know that in India you can donate your whole body after death for
        medical research and education? Click below for information on
        organisations and medical institutions in your area where you can donate
        a body.
      </p>
    </div>
  );
}

export default AboutFooterItem2;

import React from "react";
import brain from "../../images/brain.png";
import "../../styles/About.css";

function AboutFooterItem() {
  return (
    <div className="about-footer-container">
      <div>
        <img className="about-img" src={brain} />
      </div>
      <h3 className="about-h3">What Is Organ Donation</h3>
      <p className="about-footer-p">
        Organ donation is the process of donating organs or biological tissue to
        a living recipient, who is in need of a transplant. What is brain death?
        And how is it related to organ donation? Everything you need to know and
        more
      </p>
    </div>
  );
}

export default AboutFooterItem;

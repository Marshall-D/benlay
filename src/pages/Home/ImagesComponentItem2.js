import React from "react";
import brain from "../../images/brain.png";
import "../../styles/Home.css";

function ImagesComponentItem2() {
  return (
    <div className="home-container">
      <div>
        <img className="home-img" src={brain} />
      </div>
      <h2 className="images-component-h2">What Is Organ Donation</h2>
      <p className="images-component-p">
        Organ donation is the process of donating organs or biological tissue to
        a living recipient, who is in need of a transplant. What is brain death?
        And how is it related to organ donation? Everything you need to know and
        more{" "}
      </p>
    </div>
  );
}

export default ImagesComponentItem2;

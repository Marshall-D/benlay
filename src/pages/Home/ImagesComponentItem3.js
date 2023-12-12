import React from "react";
import body from "../../images/body-donation.png";
import "../../styles/Home.css";

function ImagesComponentItem3() {
  return (
    <div className="home-container">
      <div>
        <img className="home-img" src={body} />
      </div>
      <h2 className="images-component-h2">Body Donation Directory</h2>
      <p className="images-component-p">
        Do you know that in India you can donate your whole body after death for
        medical research and education? Click below for information on
        organisations and medical institutions in your area where you can donate
        a body.
      </p>
    </div>
  );
}

export default ImagesComponentItem3;

import React from "react";
import transplant from "../../images/transplant-new.png";
import "../../styles/Home.css";

function ImagesComponentItem() {
  return (
    <div className="home-container">
      <div>
        <img className="home-img" src={transplant} />
      </div>
      <h2 className="images-component-h2">Transplant Guide</h2>
      <p className="images-component-p">
        Need an organ transplant & don't know where to start? Here's a directory
        of transplant hospitals, doctors & coordinators across India, along with
        places to stay, labs, chemists, taxis & other facilities where you need
        to go.
      </p>
    </div>
  );
}

export default ImagesComponentItem;

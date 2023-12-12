import React from "react";
import save from "../../images/save.png";
import "../../styles/Home.css";

function ImagesComponentItem4() {
  return (
    <div className="home-container">
      <div>
        <img className="home-img" src={save} />
      </div>
      <h2 className="images-component-h2">Organ Donation Awareness</h2>
      <p className="images-component-p">
        Now YOU can help raise awareness on organ donation at your organisation,
        college, school, RWA or anywhere else.
      </p>
    </div>
  );
}

export default ImagesComponentItem4;

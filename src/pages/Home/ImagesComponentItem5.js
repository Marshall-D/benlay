import React from "react";
import dead from "../../images/dead.jpeg";
import "../../styles/Home.css";

function ImagesComponentItem5() {
  return (
    <div className="home-container">
      <div>
        <img className="home-img" src={dead} />
      </div>
      <h2 className="images-component-h2">
        Deceased Organ Donation Data & Government Agencies
      </h2>
      <p className="images-component-p">
        Find the latest data on organ donation and transplantation, and
        information on Central and State Agencies in India...
      </p>
    </div>
  );
}

export default ImagesComponentItem5;

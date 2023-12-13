import React from "react";
import "../../styles/Home.css";
import ImagesComponentItem from "./ImagesComponentItem";
import ImagesComponentItem2 from "./ImagesComponentItem2";
import ImagesComponentItem3 from "./ImagesComponentItem3";
import ImagesComponentItem4 from "./ImagesComponentItem4";
import ImagesComponentItem5 from "./ImagesComponentItem5";

function ImagesComponent() {
  return (
    <div className="images-component">
      <ImagesComponentItem />
      <ImagesComponentItem />
      <ImagesComponentItem />
      <ImagesComponentItem />
      <ImagesComponentItem />
      <ImagesComponentItem />
      <ImagesComponentItem />
      <ImagesComponentItem />
      {/* <ImagesComponentItem2 />

      <ImagesComponentItem3 />
      <ImagesComponentItem4 />
      <ImagesComponentItem5 /> */}
    </div>
  );
}

export default ImagesComponent;

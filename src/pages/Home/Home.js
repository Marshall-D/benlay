import React from "react";
import Slider from "./Slider";
import "../../styles/Home.css";
import ImagesComponent from "./ImagesComponent";
import SupportersSlider from "./SupportersSlider";
// import Radio from "./Radio";
import BottomSlider from "./BottomSlider";

function Home() {
  return (
    <>
      <Slider />
      <div id="donor">
        <input
          type="button"
          value="Apply for a donor card"
          className="donor-button"
        />
      </div>
      <div>
        <h3 className="home-h3">
          By pledging your organs you can save upto 8 lives
        </h3>
      </div>
      <ImagesComponent />
      <SupportersSlider />
      {/* <Radio /> */}
      {/* <BottomSlider /> */}
    </>
  );
}

export default Home;

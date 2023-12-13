import React from "react";
import Slider from "./Slider";
import "../../styles/Home.css";
import ImagesComponent from "./ImagesComponent";
import Hero from "./Hero";
import ServicesSlider from "./ServicesSlider";

function Home() {
  return (
    <>
      <Hero />
      <ServicesSlider />

      <div>
        <h3 className="home-h3">EXPERIENCE OF MAJOR ASSIGNMENTS</h3>
      </div>
      <ImagesComponent />

      <Slider />
    </>
  );
}

export default Home;

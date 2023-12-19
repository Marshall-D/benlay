import React from "react";
import Slider from "./Slider";
import "../../styles/Home.css";
import Hero from "./Hero";
import ServicesSlider from "./ServicesSlider";
import MajorAss from "./MajorAss";

function Home() {
  return (
    <>
      <Hero />
      <ServicesSlider />

      <div>
        <h3 className="home-h3">EXPERIENCE OF MAJOR ASSIGNMENTS</h3>
      </div>
      <MajorAss />

      <Slider />
    </>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(4);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);

  return (
    <>
      <h2
        className="textSize"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "3em 1em",
          color: "black",
          textTransform: "uppercase",
        }}
      >
        {" "}
        THE EXPERT SERIES{" "}
      </h2>

      <Carousel
        style={{ paddingTop: "100px" }}
        autoPlay={true}
        interval={3000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        onChange={(index) => setCurrentSlide(index)}
        selectedItem={currentSlide}
        onClickItem={(index) => setCurrentSlide(index)}
        onInit={() => setTotalSlides(4)}
      >
        <div className="slider-class">
          <p className="slider-p">Bank Expert </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">Hotel Expert </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">Security Expert </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">Finance Expert </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">PayPolls Expert </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">Insurance Expert </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">Personal Expert </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">Sales Point Expert </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">Medical Expert </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">Student Result System </p>
        </div>
        <div className="slider-class">
          <p className="slider-p">Pension Account/ Payment Monitoring </p>
        </div>
      </Carousel>
    </>
  );
}

export default Slider;

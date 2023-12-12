import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../images/slider-img-1.jpg";
import tower from "../../images/tower.jpg";
import radio from "../../images/radio.png";
import pan from "../../images/pan.jpg";
import transplant from "../../images/transplant.jpg";
import organise from "../../images/organise.jpg";
import donor from "../../images/donor.jpg";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(4);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);

  return (
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
      <div className="img-class">
        <img src={img1} />
      </div>
      <div className="img-class">
        <img src={tower} />
      </div>
      <div className="img-class">
        <img src={radio} />
      </div>
      <div className="img-class">
        <img src={pan} />
      </div>
      <div className="img-class">
        <img src={transplant} />
      </div>
      <div className="img-class">
        <img src={organise} />
      </div>
      <div className="img-class">
        <img src={donor} />
      </div>
    </Carousel>
  );
}

export default Slider;

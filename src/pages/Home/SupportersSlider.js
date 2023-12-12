import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/Home.css";

import banner from "../../images/banner.png";
import support from "../../images/support.png";
import mtv from "../../images/mtv.jpg";
import banner2 from "../../images/banner2.jpg";
import mtv2 from "../../images/mtv2.jpg";

function SupportersSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(4);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);

  return (
    <div className="supporters-slider">
      <Carousel
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
          <img src={banner} />
        </div>
        <div className="img-class">
          <img src={mtv} />
        </div>
        <div className="img-class">
          <img src={mtv2} />
        </div>
        <div className="img-class">
          <img src={banner2} />
        </div>
        <div className="img-class">
          <img src={support} />
        </div>
      </Carousel>
    </div>
  );
}

export default SupportersSlider;

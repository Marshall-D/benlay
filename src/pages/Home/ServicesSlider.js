import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/Home.css";

function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(4);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);

  return (
    <>
      <h2 className="slider-h1"> OUR SERVICES </h2>
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
          <div>
            <h2 className="services-h2">Project Turnkey</h2>
            <p className="services-p">
              Bespoke Software Development, Integration of Existing Software and
              Comprehensive Data Analysis, Contract Staff Provision, Consultancy
              arrangement in Managing TI Department of interested Organization,
              Complete Existing System Audit.
            </p>
          </div>
          <div>
            <h2 className="services-h2">Hardware</h2>
            <p className="services-p">Supply, Installation and Maintenance.</p>
          </div>
          <div>
            <h2 className="services-h2">Networking</h2>
            <p className="services-p">
              Local, Wide, Cloud, all in Inter Network Provision.
            </p>
          </div>
          <div>
            <h2 className="services-h2">Power</h2>
            <p className="services-p">Solar, Inverter (with Anern)</p>
          </div>
          <div>
            <h2 className="services-h2">Communication</h2>
            <p className="services-p">
              Effective communication solutions that share Value, Service,
              technical know-how and deliver peace of mind.
            </p>
          </div>
          <div>
            <h2 className="services-h2">Training</h2>
            <p className="services-p">
              Formal and Informal, as systems integrator we train and retrain
              the users of our IT products and other third standard party IT
              products to become experts on such solutions.
            </p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default ServicesSlider;

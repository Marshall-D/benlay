import React from "react";
import Slider from "./Slider";

function Home() {
  return (
    <>
      <Slider />
      <div id="donor">
        <input
          type="button"
          value="Apply for a donor card"
          // yet to implement this classname style, using inline styles for now
          // className="donor-button"
          style={{ marginTop: "20px" }}
        />
      </div>
      <div>
        <p className="black-text">
          By pledging your organs you can save upto 8 lives
        </p>

        <div>arrow</div>
      </div>
    </>
  );
}

export default Home;

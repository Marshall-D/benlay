import React from "react";
import StaffItem from "./StaffItem";
import StaffItem2 from "./StaffItem2";
import StaffItem3 from "./StaffItem3";

function AboutFooter() {
  return (
    <>
      <div className="about-header">
        <h2 className="about-h1">Our Staff</h2>
      </div>
      <StaffItem />
      <StaffItem />
      <StaffItem />
      <StaffItem />
      <StaffItem />
      <StaffItem />
    </>
  );
}

export default AboutFooter;

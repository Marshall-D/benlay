import React from "react";
import StaffItem from "./StaffItem";
import StaffItem2 from "./StaffItem2";
import StaffItem3 from "./StaffItem3";
import StaffItem4 from "./StaffItem4";
import StaffItem5 from "./StaffItem5";

function Staff() {
  return (
    <>
      <div className="about-header">
        <h2 className="about-h1">Our Staff</h2>
      </div>

      <StaffItem />
      <StaffItem2 />
      <StaffItem3 />
      <StaffItem4 />
      <StaffItem5 />
    </>
  );
}

export default Staff;

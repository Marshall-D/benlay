import React from "react";
import "../../styles/Home.css";

import MajorAssItem from "./MajorAssItem";
import MajorAssItem2 from "./MajorAssItem2";
import MajorAssItem3 from "./MajorAssItem3";
import MajorAssItem4 from "./MajorAssItem4";
import MajorAssItem5 from "./MajorAssItem5";

function MajorAss() {
  return (
    <div className="images-component">
      <MajorAssItem />
      <MajorAssItem2 />
      <MajorAssItem3 />
      <MajorAssItem4 />
      <MajorAssItem5 />
    </div>
  );
}

export default MajorAss;

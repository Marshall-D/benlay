import React from "react";
import "../../styles/About.css";
import Person3Icon from "@mui/icons-material/Person3";
import { Icon } from "@mui/material";

function StaffItem() {
  return (
    <div className="about-footer-container">
      <div>
        <Icon
          component={Person3Icon}
          sx={{
            height: "150px",
            width: "150px",
            display: "block",
            margin: "0 auto",
            color: "blue",
          }}
        />{" "}
      </div>

      <p className="bold">
        Name :<span className="span"> Fabeku Ola </span>
      </p>
      <p className="bold">
        Profession:
        <span className="span"> Information Technology </span>
      </p>
      <p className="bold">
        Position:
        <span className="span"> Managing Director: </span>
      </p>
      <p className="bold">
        Industry Experience:
        <span className="span"> 35 years </span>
      </p>
      <p className="bold">
        Nationality:
        <span className="span"> Nigerian </span>
      </p>
      <p className="bold">
        Education:
        <span className="span">
          {" "}
          MBA(2001) University of Ado Ekiti, Ado Ekiti, Nigeria
          <br />
        </span>
        <span className="span">
          HND Computer Studies 1985 The Polytechnic Ibadan, Ibadan Nigeria{" "}
        </span>
      </p>
    </div>
  );
}

export default StaffItem;

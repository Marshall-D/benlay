import React from "react";
import "../../styles/Contact.css";
import { Icon } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

import Brightness1Icon from "@mui/icons-material/Brightness1";
function MainContent() {
  return (
    <div>
      <div className="contact-container">
        <Icon
          component={Brightness1Icon}
          // color="warning"
          fontSize="small"
          // className="icon-img"
          sx={{ color: "#1d9786" }}
        />
        <h1 className="main-content-h1">Helpline</h1>
      </div>

      <p className="bold">
        Address:{" "}
        <span className="span">
          {" "}
          some textsome textsome textsome textsome textsome text
        </span>
      </p>
      <p className="bold">
        Phone: <span className="span"> 18001203648</span>
      </p>
      <p className="bold">
        Email: <span className="span"> sometext@mail.com</span>
      </p>
      <p className="bold">
        social:
        <Icon
          component={InstagramIcon}
          color="warning"
          fontSize="medium"
          sx={{ marginBottom: "-0.3em", marginLeft: "0.5em" }}
        />
      </p>
    </div>
  );
}

export default MainContent;

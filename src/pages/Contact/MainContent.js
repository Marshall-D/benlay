import React from "react";
import "../../styles/Contact.css";
import { Icon } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import TwitterIcon from "@mui/icons-material/Twitter";
function MainContent() {
  return (
    <div>
      <div className="contact-container">
        <Icon
          component={Brightness1Icon}
          fontSize="small"
          sx={{ color: "#273d80" }}
        />
        <h1 className="main-content-h1">Helpline</h1>
      </div>

      <p className="bold">
        Address:
        <span className="span">
          {" "}
          1 Olayinka Bambose Street,Toyin Str.Ext, Off Olowu Str., Ikeja, Lagos
          State.
        </span>
      </p>
      <p className="bold">
        Phone:{" "}
        <span className="span">
          (234)8098482829, (234)8052482829, (234)8 0 37129169
        </span>
      </p>
      <p className="bold">
        Email: <span className="span"> info@benlaygroup.com</span>
      </p>
      <p className="bold">
        social:
        <Icon
          component={InstagramIcon}
          fontSize="medium"
          sx={{ marginBottom: "-0.3em", marginLeft: "0.5em", color: "#273d80" }}
        />
        <Icon
          component={FacebookIcon}
          fontSize="medium"
          sx={{ marginBottom: "-0.3em", marginLeft: "0.5em", color: "#273d80" }}
        />
        <Icon
          component={TwitterIcon}
          fontSize="medium"
          sx={{ marginBottom: "-0.3em", marginLeft: "0.5em", color: "#273d80" }}
        />
      </p>
    </div>
  );
}

export default MainContent;

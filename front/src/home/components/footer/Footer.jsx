import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TikTokIcon from "../TiktokIcon";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <h3 className="titulo-footer">
        <center> Todos los derechos reservados - Prowess Ecuador 2021</center>
      </h3>

      <div className="row ">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <center>
            <a
              href="https://Prowessec.com"
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <LanguageIcon style={{ fontSize: 50 }} />
              www.prowessec.com/
            </a>
          </center>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <center>
            <a
              href="https://instagram.com/prowess_ec?igshid=YmMyMTA2M2Y="
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <InstagramIcon style={{ fontSize: 50 }} />
              @Prowess Ec
            </a>
          </center>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <center>
            <a
              href="https://www.facebook.com/prowess.ec"
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <FacebookIcon style={{ fontSize: 50 }} />
              Prowess Ec
            </a>
          </center>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <center>
            <a
              href="https://www.tiktok.com/@totalprowess_ec?_t=8WfSUUREkkf&_r=1"
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <TikTokIcon color="white" width="50px" />
              @totalprowess_ec
            </a>
          </center>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
          Compartir
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
              <LanguageIcon style={{ fontSize: 30 }} />
            </a>
          </center>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <a
              href="https://instagram.com/prowess_ec?igshid=YmMyMTA2M2Y="
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <InstagramIcon style={{ fontSize: 30 }} />
            </a>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <a
              href="https://www.facebook.com/prowess.ec"
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <FacebookIcon style={{ fontSize: 30 }} />
            </a>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <a
              href="https://www.tiktok.com/@totalprowess_ec?_t=8WfSUUREkkf&_r=1"
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <TikTokIcon style={{ fontSize: 30 }} />
            </a>
        </div>
        <h3 className="texto-footer">
            Dr. A. S. Luis Simbaña Taipéi
      </h3>
      <h3 className="texto-footer">
         Whatsapp:<a className="link-footer" href="https://api.whatsapp.com/send?phone=593998160293&text=Me%20interesa%20saber%20mas%20sobre%20PROWESSEC">(Click aquí ) Para envíarnos un mensaje de WhatsApp +593 99 816 0293.</a></h3>
      <h3 className="texto-footer">
         Correo:<a className="link-footer" href="lesimbania@espe.edu.ec">(Clik aquí ) Para envíarnos un mensaje de correo</a></h3>
      <div className="derechos-footer">
        <h8 className="texto-derechos">Todos los derechos reservados - Prowess Ecuador 2021</h8> 
      </div>
      </div>
    </footer>
  );
};

export default Footer;

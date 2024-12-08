import React from "react";
import { Facebook, WhatsApp, Email } from "@mui/icons-material";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

const Footer = () => {
  return (
    <footer>
      <div className="wave waveTop"></div>
      <div className="wave waveMiddle"></div>
      <div className="wave waveBottom"></div>
      <div className="footer-content">
        <div className="contact-links">
          <ul>
            <li>
              <a
                className="img"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook sx={{ color: "#15548f" }} />
              </a>
            </li>
            <li>
              <a
                className="img"
                href="https://wa.me/+17657671558"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsApp sx={{ color: "#15548f" }} />
              </a>
            </li>
            <li>
              <a
                className="img"
                href="mailto:toptutorsglobal@gmail.com"
                rel="noreferrer"
              >
                <Email sx={{ color: "#15548f" }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="phone-number">
          <a className="img" href="tel:+17657671558">
            <PermPhoneMsgIcon sx={{ color: "#15548f" }} />
          </a>
          <a className="text" href="tel:+17657671558">
            +1 (765) 767-1558
          </a>
        </div>
        <div className="copyright">
          © <a href="https://CeyncFuture.live">CeyncFuture</a> 2024. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Facebook, Twitter, Github, Linkedin } from "react-bootstrap-icons";
import { IconButton } from "@material-ui/core";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <IconButton>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/nduduzo.shabalala.33"
          >
            <Facebook />
          </a>
        </IconButton>

        <IconButton>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nduduzo-shabalala-b39a411a1/"
          >
            <Linkedin />
          </a>
        </IconButton>

        <IconButton>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/VolubleOger664"
          >
            <Twitter />
          </a>
        </IconButton>

        <IconButton>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/volubleogre664?tab=repositories"
          >
            <Github />
          </a>
        </IconButton>
      </div>

      <div className="footer__bottom">
        Made by Nduduzo <strong>With Love And React</strong>
      </div>
    </div>
  );
}

export default Footer;

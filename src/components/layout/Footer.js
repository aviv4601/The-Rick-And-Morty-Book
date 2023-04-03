import React from "react";
import SocialFollow from "../UI/SocialFollow";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        <div>
          <SocialFollow></SocialFollow>
        </div>
        <div className={classes.signture}>By Aviv Amrusi 2022</div>
      </div>
    </footer>
  );
};

export default Footer;

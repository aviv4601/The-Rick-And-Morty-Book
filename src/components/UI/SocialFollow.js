import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import classes from "./SocialFollow.module.css";

export default function SocialFollow() {
  return (
    <div className={classes.container}>
      <a href="https://www.linkedin.com/in/aviv-amrusi/">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="3x"
          className={classes["icon"]}
        />
      </a>
      <a href="https://github.com/aviv4601">
        <FontAwesomeIcon
          icon={faGithub}
          size="3x"
          className={classes["icon"]}
        />
      </a>
    </div>
  );
}

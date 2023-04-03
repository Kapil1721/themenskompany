import React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../../constants/route-path";

const Logo = ({ hide, show }) => {
  return (
    <div id="logoimg">
      <Link to={HOME}>
        <img
          height="100%"
          width="100%"
          src={"/themenskomapnay.logo.webp"}
          alt="the mens company"
          className={hide}
        />

        {show && (
          <img
            src={`/images/bull.png`}
            width="100%"
            height="100%"
            alt="bull"
            id={show}
          />
        )}
      </Link>
    </div>
  );
};

export default Logo;

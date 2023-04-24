/* eslint-disable jsx-a11y/no-distracting-elements */
// eslint-disable-next-line jsx-a11y/no-distracting-elements
import React from "react";

import NaviagtionPanel from "./naviagtionPanel";

const HeaderCarsole = ({ setSearchState, setCartMod }) => {
  return (
    <>
      <div
        style={{
          background: "rgb(231 231 231)",
          color: "black",
          padding: "6px 50px",
          fontWeight: "500",
          textAlign: "center",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="heide"
          style={{
            width: "20%",
            fontSize: "15px",
            display: "flex",
            textAlign: "start",
          }}
        ></div>

        <div className="sdtrytryt">
          <marquee>
            <p>
              <span style={{ textDecoration: "underline" }}>
                Free Shipping Available
              </span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;
              <span style={{ textDecoration: "underline" }}>
                Use Code: “BeABull” & Save 10% On Your First Order
              </span>
            </p>
          </marquee>
        </div>

        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <div style={{ width: "38% !important" }} className="heide">
            <NaviagtionPanel
              setCartMod={setCartMod}
              setSearchState={setSearchState}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCarsole;

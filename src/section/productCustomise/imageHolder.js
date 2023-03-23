import { Icon } from "@iconify/react";
import React from "react";

import { CSTM_IMAGE } from "../../constants/path-constant";

const ImageHolder = ({ setStyleCustomise, productCustomization }) => {
  const {
    buttons,
    collar,
    cuff,
    placket,
    pocket,
    pocketState,
    selevesandcuff,
    base,
  } = productCustomization;

  return (
    <div className="main_image_button_holder">
      <div className="custom_button_holder">
        <div
          className="navi_button  collar"
          onClick={() =>
            setStyleCustomise({
              open: true,
              section: "collar",
            })
          }
        >
          <div className="rippo">
            <Icon icon="material-symbols:add" />
          </div>
          <div className="tetx">collar</div>
        </div>

        <div
          className="navi_button  pocket"
          onClick={() =>
            setStyleCustomise({
              open: true,
              section: "pocket",
            })
          }
        >
          <div className="rippo">
            <Icon icon="material-symbols:add" />
          </div>
          <div className="tetx">pocket</div>
        </div>

        <div
          className="navi_button  placket"
          onClick={() =>
            setStyleCustomise({
              open: true,
              section: "planket",
            })
          }
        >
          <div className="rippo">
            <Icon icon="material-symbols:add" />
          </div>
          <div className="tetx">placket</div>
        </div>

        <div
          className="navi_button  Buttons"
          onClick={() =>
            setStyleCustomise({
              open: true,
              section: "button",
            })
          }
        >
          <div className="rippo">
            <Icon icon="material-symbols:add" />
          </div>
          <div className="tetx">Buttons</div>
        </div>

        <div
          className="navi_button seleves"
          onClick={() =>
            setStyleCustomise({
              open: true,
              section: "seleves",
            })
          }
        >
          <div className="rippo">
            <Icon icon="material-symbols:add" />
          </div>
          <div className="tetx">seleves and cuff</div>
        </div>

        <div
          className="navi_button back"
          onClick={() =>
            setStyleCustomise({
              open: true,
              section: "back",
            })
          }
        >
          <div className="rippo">
            <Icon icon="material-symbols:add" />
          </div>
          <div className="tetx">back</div>
        </div>
      </div>

      <div className="image_section">
        <img src={CSTM_IMAGE + base} alt="back" />

        <img
          src={"/Final/customise/bsc-collar-base-single-button.png"}
          alt="COllar-base"
        />

        {!placket.image.includes("Concealed-Placket") && (
          <img
            src={`/static/displaybutton/${buttons?.toLowerCase()}.png`}
            alt="buttons"
            style={{ zIndex: 1 }}
          />
        )}

        {!collar.image.includes("Bandhgala") && (
          <img src={CSTM_IMAGE + collar.image} alt="collar" />
        )}

        {!selevesandcuff.image.includes("Short") && (
          <img src={CSTM_IMAGE + cuff} alt="cuff" style={{ zIndex: 1 }} />
        )}

        {!placket.image.includes("Concealed-Placket") && (
          <img src={CSTM_IMAGE + placket.image} alt="placket" />
        )}
        {pocketState && (
          <img src={CSTM_IMAGE + pocket} style={{ zIndex: 1 }} alt="pocket" />
        )}
        <img src={CSTM_IMAGE + selevesandcuff.image} alt="seleves" />
      </div>
    </div>
  );
};

export default ImageHolder;

import React, { useState } from "react";

import { Icon } from "@iconify/react";
import { Row, Col, Switch } from "antd";

const MenuPanel = ({ setCustomise }) => {
  function customSwitchHandler(event) {
    if (event === true) {
      document.getElementsByClassName("custom_button_holder")[0].style.display =
        "none";
    } else {
      document.getElementsByClassName("custom_button_holder")[0].style.display =
        "block";
    }
  }

  return (
    <>
      <Row justify="space-around">
        <Col>
          <Icon
            fontSize="30px"
            icon="fluent-mdl2:cancel"
            cursor="pointer"
            onClick={() => setCustomise(false)}
          />
        </Col>

        <Col span={7}>
          <div className="cutom_tetx">CUSTOMISE</div>
        </Col>

        <Col xxl={5}>
          <Row justify="space-between">
            <Col>
              <div className="prv-btn">PREVIEW SHIRT</div>
            </Col>
            <Col>
              <Switch
                onChange={(e) => customSwitchHandler(e)}
                style={{ background: "black" }}
                title="sdasdsa"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MenuPanel;

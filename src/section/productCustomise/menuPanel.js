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
        <Col span={2}>
          <div
            onClick={() => setCustomise(false)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <Icon
              fontSize="20px"
              icon="ion:chevron-back-outline"
              cursor="pointer"
            />
            <span style={{ fontSize: "15px" }}>Back</span>
          </div>
        </Col>

        <Col span={7}></Col>

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

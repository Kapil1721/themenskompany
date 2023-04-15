import React from "react";

import { Col } from "antd";
import { Row } from "antd";

const Details = ({ setState }) => {
  // @ts-ignore
  let details = JSON.parse(localStorage.getItem("THBD43Sdfs324"));

  return (
    <div className="payment-top">
      <Row className="payment-top-desc">
        <Col md={5}>
          <h5>Contact</h5>
        </Col>

        <Col md={15}>
          <p>{details.email}</p>
        </Col>

        <Col md={4}>
          <span onClick={() => setState(true)}>Change</span>
        </Col>
      </Row>

      <Row className="payment-top-desc">
        <Col md={5}>
          <h5>Ship to</h5>
        </Col>

        <Col md={15}>
          <p>
            {details.building},{details.address} ,<br />
            {details.city} ,{details.state}-{details.pincode}, India
          </p>
        </Col>

        <Col md={4}>
          <span onClick={() => setState(true)}>Change</span>
        </Col>
      </Row>
      <Row className="payment-top-desc" style={{ border: "none" }}>
        <Col md={5}>
          <h5>Method</h5>
        </Col>

        <Col md={15}>
          <p>
            Standard · <b>Free</b>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Details;

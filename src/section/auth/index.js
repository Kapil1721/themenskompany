/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { Row, Col } from "antd";

import Login from "./login";

import Register from "./register";

const Index = () => {
  return (
    <Row justify="center">
      <Col xxl={15} xl={15} lg={18} md={22} sm={24} xs={24}>
        <section>
          <div className="container">
            <Login />

            <Register />
          </div>
        </section>
      </Col>
    </Row>
  );
};

export default Index;

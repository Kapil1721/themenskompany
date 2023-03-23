/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { Row, Col } from "antd";

import Login from "./login";
import Register from "./register";

const Index = () => {
  return (
    <Row justify="center">
      <Col xxl={13} xl={15} lg={18} md={22} sm={20} xs={22}>
        <Row justify="space-between" gutter={[20, 20]}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Login />
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Register />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Index;

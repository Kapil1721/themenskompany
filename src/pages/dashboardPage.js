import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADDRESS } from "../constants/route-path";
import Nav from "../section/dashboard/nav";

const DashboardPage = () => {
  const { userName } = useSelector((e) => e.userReducer);

  return (
    <Row justify="center">
      <Col xxl={12} xl={14} lg={18} md={20} sm={20} xs={22}>
        <div className="ccontgy">
          <Row justify="space-between" gutter={[0, 50]}>
            <Col xxl={7} xl={7} lg={7} md={24} sm={24} xs={24}>
              <Nav page={1} />
            </Col>

            <Col xxl={16} xl={16} lg={16} md={22} sm={24} xs={24}>
              <div className="sadlsad">
                Hello <b>{userName}</b>
              </div>

              <div className="sadlsad">
                From your account dashboard you can view your recent orders,
                manage your
                <Link to={ADDRESS}> shipping and billing addresses</Link> , and
                edit your
                <Link to={ADDRESS}> password and account details </Link>.
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default DashboardPage;

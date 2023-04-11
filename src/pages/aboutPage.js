import { Col, Row, Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { STATIC_DATA } from "../constants/path-constant";
import { HOME } from "../constants/route-path";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | The men's kompany World</title>
      </Helmet>

      <Col>
        <div id="banner">
          <div className="content" style={{ top: "8%" }}>
            ABOUT US
          </div>
        </div>

        <Row justify="center" style={{ marginTop: "30px" }}>
          <Col span={20}>
            <div>
              <Breadcrumb style={{ fontSize: "15px" }}>
                <Breadcrumb.Item>
                  <Link to={HOME}>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>About</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>

        <div id="policy-container">
          <Row
            justify="space-between"
            style={{ margin: "60px 0" }}
            gutter={[12, 12]}
          >
            <Col xxl={11} xl={12} id="abt-green">
              <h3>THE MEN’S KOMPANY</h3>

              <h2>Style Beyond Basics</h2>

              <p>
                The Men’s Kompany – A brand to bring life to men’s basics and
                energy to casuals.
              </p>

              <p>
                “Elegance” and “Aesthetics” – The two words that helped us reach
                here. The Men’s Kompany has its roots in these two words. In a
                quarter of the 21st Century where men don’t need to settle their
                needs on the same old basic clothing style or have to follow the
                hippie style to look stylish. The Men’s Kompany is a result of
                the experiments and work we do with the formal and casual
                clothes. We bring for our men the aesthetic shirts, elegant
                kurtas, and stylish trousers, which make their charming look
                even more charismatic.
              </p>

              <p>
                So men, restructure your wardrobe with unique clothes by The
                Men’s Kompany.
              </p>
            </Col>

            <Col xxl={12} xl={12}>
              <img src={STATIC_DATA + `/Image-1-1.webp`} alt="about img" />
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
};

export default AboutPage;

// https://stackblitz.com/edit/js-6dtafj?file=index.html,index.js,style.css

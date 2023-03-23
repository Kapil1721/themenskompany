import { Icon } from "@iconify/react";
import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { STATIC_DATA } from "../../constants/path-constant";

import {
  CAPOLICY,
  EXPOLICY,
  PRPOLICY,
  SHPOLICY,
  TRPOLICY,
  BLOGPAGE,
  HOME,
  ABOUTPAGE,
  SHOP,
  CONTACT,
} from "../../constants/route-path";

import Logo from "../header/components/logo";

import Stack from "../style/stack";

const Index = () => {
  return (
    <Row justify="center" style={{ background: "#F6F6F6" }} id="foote">
      <Row
        className="footer_main"
        style={{ padding: "60px 0", margin: "auto" }}
        justify="space-between"
      >
        <Col span={6} xxl={6} lg={6} xl={6} md={10} sm={10} xs={24}>
          <Logo />

          <div style={{ marginTop: "10px" }} className="footerTxt">
            The Men’s Kompany – <br /> A brand to bring life to men’s <br />
            basics and energy to casuals.
          </div>
        </Col>

        <Col span={4} xxl={4} lg={4} xl={4} md={10} sm={10} xs={24}>
          {LIST1.map((e) => (
            <div className="footerTxt" key={e.id}>
              <Link to={e.link}>{e.title}</Link>
            </div>
          ))}
        </Col>

        <Col
          className="uppp"
          lg={4}
          xl={4}
          span={4}
          xxl={4}
          md={10}
          sm={10}
          xs={24}
        >
          {LIST2.map((e) => (
            <div className="footerTxt" key={e.id}>
              <Link to={e.link}>{e.title}</Link>
            </div>
          ))}
        </Col>

        <Col
          className="uppp"
          span={4}
          lg={4}
          xl={4}
          xxl={4}
          md={10}
          sm={10}
          xs={24}
        >
          <Stack sx={{ width: "50%", margin: "auto" }}>
            <img
              src={`/images/bull.png`}
              width="100%"
              height="100%"
              alt="bull"
            />
          </Stack>

          <Stack sx={{ textAlign: "center", margin: "10px 0" }}>
            support@themenskompany.com
          </Stack>

          <Stack
            sx={{
              width: "50%",
              margin: "auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Stack sx={{ margin: "15px 11px 0 0" }}>
              <a
                href="/https://www.facebook.com"
                without
                rel="noreferrer"
                target={"_blank"}
              >
                <button class="tooltip">
                  <Icon icon={"ri:facebook-fill"} fontSize="22px" />
                </button>
              </a>
            </Stack>

            <Stack sx={{ margin: "15px 11px 0 0" }}>
              <a
                href="https://twitter.com/"
                without
                rel="noreferrer"
                target={"_blank"}
              >
                <button class="tooltip">
                  <Icon icon={"mdi:twitter"} fontSize="22px" />
                </button>
              </a>
            </Stack>

            <Stack sx={{ margin: "15px 11px 0 0" }}>
              <a
                without
                rel="noreferrer"
                href="https://www.instagram.com/themenskompany/?igshid=NDBlY2NjN2I%3D"
                target={"_blank"}
              >
                <button class="tooltip">
                  <Icon icon={"line-md:instagram"} fontSize="22px" />
                </button>
              </a>
            </Stack>
          </Stack>
        </Col>
      </Row>

      <Row
        style={{ width: "100%", borderTop: "1px solid black" }}
        justify="center"
      >
        <Row
          style={{ width: "70%", padding: "20px 0" }}
          justify="space-between"
        >
          <Col>
            <div>© 2022 The Men Kompany. All rights reserved.</div>
          </Col>

          <Col>
            <img
              src={STATIC_DATA + `payments.webp`}
              width="100%"
              height="100%"
              alt="payment mode img"
            />
          </Col>
        </Row>
      </Row>
    </Row>
  );
};

export default Index;

const LIST1 = [
  { id: 1, title: "Home", link: HOME },
  { id: 2, title: "About Us", link: ABOUTPAGE },
  { id: 3, title: "Shop", link: SHOP },
  { id: 4, title: "Blog", link: BLOGPAGE },
  { id: 5, title: "Contact Us", link: CONTACT },
];

const LIST2 = [
  { id: 1, title: "Cancellations & Returns", link: CAPOLICY },
  { id: 2, title: "Exchange Policy", link: EXPOLICY },
  { id: 3, title: "Privacy Policy", link: PRPOLICY },
  { id: 4, title: "Shipping Policy", link: SHPOLICY },
  { id: 5, title: "Terms & Conditions", link: TRPOLICY },
];

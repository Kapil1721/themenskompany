import React from "react";
import { Col, Drawer, Row } from "antd";

import { CONTACT, DASHBOARD, HOME, SHOP } from "../../../constants/route-path";
import { useNavigate } from "react-router-dom";

const DrawerMenu = ({ open, setOpen }) => {
  const Navigate = useNavigate();

  const LinkHandler = (LIKN) => {
    Navigate(LIKN);
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title=""
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Col>
          <Row gutter={[0, 10]}>
            {HH.map((e, i) => (
              <Col
                key={i}
                onClick={() => LinkHandler(e.href)}
                className="mbm-cr"
              >
                <Row>
                  <Col span={2} style={{ marginRight: "10px" }}>
                    <img src={e.icon} alt={e.title} />
                  </Col>

                  <Col>
                    <div className="mbm-nm">{e.title}</div>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Drawer>
    </>
  );
};

export default DrawerMenu;

const HH = [
  {
    title: "Home",
    icon: "/user/home.svg",
    href: HOME,
  },
  {
    title: "Contact",
    icon: "/user/contact.svg",
    href: CONTACT,
  },
  {
    title: "Shop",
    icon: "/user/shop.svg",
    href: SHOP,
  },
  {
    title: "Account",
    icon: "/user/uns.svg",
    href: DASHBOARD,
  },
];

const style = {
  padding: "10px 10px",
};

import React, { useState } from "react";

// @ antd imports

import { Row, Col, Badge, Modal } from "antd";

// @ other imports

import HeaderCarsole from "./components/headerCarsole";

import Logo from "./components/logo";

import { Icon } from "@iconify/react";

// @rounting import

import { CART, CONTACT, HOME, SEARCH, SHOP } from "../../constants/route-path";
import { Link, useNavigate } from "react-router-dom";
import DrawerMenu from "./components/DrawerMenu";
import { useSelector } from "react-redux";

const Index = () => {
  const [open, setOpen] = useState(false);

  const { totalQuantity } = useSelector((e) => e.cartReducer);

  const navigate = useNavigate();

  const [searchState, setSearchState] = useState(false);

  const [search, setSeatce] = useState("");

  const tyas = document.getElementById("mainsearch")?.value;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (tyas === "") {
        document.getElementById("mainsearch").style.borderColor = "red";
      } else {
        document.getElementById("mainsearch").style.borderColor = "white";
        setSearchState(false);
        navigate({
          pathname: SEARCH,
          search: `ge=${search}`,
        });
      }
    }
  };

  return (
    <>
      <Col>
        <Row>
          <HeaderCarsole setSearchState={setSearchState} />
        </Row>

        <Row className="header_mian" justify="space-between">
          <Col xxl={4} xl={5} lg={7} md={2} sm={2} xs={4} id="showHeader">
            <Row justify="start" gutter={[5]}>
              <Col>
                <Icon
                  onClick={() => setOpen(true)}
                  className="weddb__3jd"
                  icon="material-symbols:menu"
                />
              </Col>

              <Col>
                <Icon
                  className="weddb__3jd"
                  icon="ic:baseline-search"
                  onClick={() => setSearchState(true)}
                />
              </Col>
            </Row>
          </Col>

          <Col xxl={4} xl={5} lg={7} md={3} sm={4} xs={4}>
            <Logo />
          </Col>

          <Col
            style={{ marginRight: "50px" }}
            xxl={4}
            xl={5}
            lg={7}
            md={11}
            sm={10}
            xs={16}
            className="hiddenHeadr"
          >
            <Row justify="space-between">
              {Naviagtion.map((panel) => (
                <Col style={{ paddingTop: "9px" }} key={panel.id}>
                  <Link to={panel.to}>
                    <h6 id="nav">{panel.title}</h6>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>

          <Col flex="auto" xxl={1} xl={1} lg={2} md={1} sm={2} xs={2}>
            <img
              src={`/images/bull.png`}
              width="100%"
              height="100%"
              alt="bull"
              className="hiddenHeadr"
            />

            <div id="showHeader">
              <Row justify="end">
                <Col id="cart_main">
                  <Badge count={totalQuantity} color="black">
                    <Link to={CART} style={{ color: "black" }}>
                      <Icon
                        className="cart_icon weddb__3jd"
                        icon="material-symbols:shopping-bag-outline-sharp"
                      />
                    </Link>
                  </Badge>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>

      <DrawerMenu open={open} setOpen={setOpen} />

      <Modal
        className="horizon"
        open={searchState}
        onCancel={() => setSearchState(false)}
        footer=""
      >
        <input
          id="mainsearch"
          placeholder="search"
          type="text"
          onChange={(e) => setSeatce(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </Modal>
    </>
  );
};

export default Index;

const Naviagtion = [
  {
    id: 1,
    title: "HOME",
    to: HOME,
  },
  {
    id: 2,
    title: "SHOP",
    to: SHOP,
  },
  {
    id: 3,
    title: "CONTACT US",
    to: CONTACT,
  },
];

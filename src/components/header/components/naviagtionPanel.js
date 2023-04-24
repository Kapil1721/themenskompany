import { Col, Row, Badge, Divider } from "antd";
import React from "react";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import StyleButton from "../../style/button";

import { CART, DASHBOARD } from "../../../constants/route-path";

import { DELETE_ITEM } from "../../../actions/cart-action";

const NaviagtionPanel = ({ setSearchState, setCartMod }) => {
  const { totalQuantity } = useSelector((e) => e.cartReducer);

  return (
    <>
      <Row justify="space-between" className="hiddenHeadr">
        <Col
          className="gray-icon"
          style={{ marginRight: "5px" }}
          onClick={() => setSearchState(true)}
        >
          <Link to={"#"} style={{ color: "black" }}>
            <Icon
              color="black"
              style={{ fontSize: "25px", marginTop: "6px" }}
              icon="ic:baseline-search"
            />
          </Link>
        </Col>

        <Col className="gray-icon" style={{ marginRight: "5px" }}>
          <Link to={DASHBOARD} style={{ color: "black" }}>
            <Icon
              color="black"
              style={{ fontSize: "25px", marginTop: "5px" }}
              icon="mdi:user"
            />
          </Link>
        </Col>

        <Col
          id="cart_main"
          className="gray-icon"
          style={{ marginRight: "5px" }}
        >
          <Badge count={totalQuantity} color="black" size="small">
            <Icon
              onClick={() => setCartMod(true)}
              color="black"
              className="cart_icon"
              style={{ fontSize: "25px", marginTop: "5px" }}
              icon="eva:shopping-cart-outline"
            />
          </Badge>
        </Col>
      </Row>
    </>
  );
};

export default NaviagtionPanel;

// form .grid.relative{
//   display: flex;
// justify-content: center;
// flex-direction: column;
// align-items: center;
// }
// form button{
// width: 100%;
// transition: 0.3s;
// }
// form button:hover{
// width: 120%;
// }

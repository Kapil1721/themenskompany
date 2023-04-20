import { Col, Row, Badge, Divider } from "antd";
import React from "react";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import StyleButton from "../../style/button";

import {
  CART,
  DASHBOARD,
  CHECKOUT,
  GUESTCHECKOUT,
} from "../../../constants/route-path";

import { DELETE_ITEM } from "../../../actions/cart-action";

import { PDC_IMAGE } from "../../../constants/path-constant";

const NaviagtionPanel = ({ setSearchState }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((e) => e.userReducer);

  const { totalQuantity, cartItem } = useSelector((e) => e.cartReducer);

  const itemRemoveHandler = (rid) => {
    dispatch({ type: DELETE_ITEM, payload: rid });
  };

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
            <Link to={CART} style={{ color: "black" }}>
              <Icon
                color="black"
                className="cart_icon"
                style={{ fontSize: "25px", marginTop: "5px" }}
                icon="eva:shopping-cart-outline"
              />
            </Link>
          </Badge>

          <div className="hidden_box_cart">
            {totalQuantity > 0 ? (
              <div>
                {cartItem.map((e) => (
                  <>
                    <Row justify="space-between" key={e.id}>
                      <Col span={5}>
                        <img
                          src={PDC_IMAGE + e.image}
                          width="100%"
                          // height="100%"
                          alt="cart"
                        />
                      </Col>

                      <Col span={15}>
                        <div className="uiopoiu">{e.name}</div>
                        <div className="oiugyhjbkjl">
                          ₹ {e?.price}&nbsp; <b>x</b> &nbsp; {e?.quantity}
                        </div>

                        <Row justify="space-between">
                          <Col xxl={11}>
                            <StyleButton
                              sx={{
                                fontSize: "10px",
                                padding: "3px",
                                margin: "8px 0",
                              }}
                              varinat="Contained"
                              onClick={() => itemRemoveHandler(e.id)}
                            >
                              remove
                            </StyleButton>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Divider />
                  </>
                ))}

                <Row justify="space-between">
                  <Col xxl={11}>
                    <Link to={CART}>
                      <StyleButton varinat="Contained">Go To Cart</StyleButton>
                    </Link>
                  </Col>

                  <Col xxl={12}>
                    <Link to={userId ? CHECKOUT : GUESTCHECKOUT}>
                      <StyleButton varinat="Contained"> Checkout</StyleButton>
                    </Link>
                  </Col>
                </Row>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>Your Cart Is Empty</div>
            )}
          </div>
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

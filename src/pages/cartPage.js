import React, { useEffect, useState } from "react";

import { Col, Row, Divider, message, Table, Card, Button, Popover } from "antd";

import { Icon } from "@iconify/react";

import StyledButton from "../components/style/button";
import { Link, useNavigate } from "react-router-dom";

import { CHECKOUT, SHOP } from "../constants/route-path";
import { useDispatch, useSelector } from "react-redux";
import { PDC_IMAGE } from "../constants/path-constant";
import {
  INCREASE_QUANTITY,
  REMOVE_ITEM,
  DELETE_ITEM,
} from "../actions/cart-action";
import { couponService } from "../services/apiServices/apiService";

const CartPage = () => {
  const dispatch = useDispatch();

  const { cartItem } = useSelector((e) => e.cartReducer);

  const { userId } = useSelector((e) => e.userReducer);

  const [messageApi, contextHolder] = message.useMessage();

  const [state, setState] = useState(0);

  const [couponCode, setCouponCode] = useState("");

  const [totalAmount, setTotalAmount] = useState("");

  const [couponCodeApplied, setCouponCodeApplied] = useState({
    state: false,
    coupon: "",
    rate: "",
  });

  const Navigation = useNavigate();

  const addHandler = (id) => {
    dispatch({ type: INCREASE_QUANTITY, payload: id });
  };

  const decreasehandler = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const deleteHandler = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
  };

  useEffect(() => {
    let sum = 0;
    cartItem.forEach((e) => {
      sum += Number(e.totalPrice);
    });

    setState(sum);

    if (couponCodeApplied.state === false) {
      setTotalAmount(sum);
    } else {
      setTotalAmount(sum - sum / couponCodeApplied.rate);
    }
  }, [addHandler, decreasehandler, deleteHandler]);

  const CouponHandler = () => {
    if (couponCode === "") {
      document.getElementById("Couponcodes").style.border = "1px solid red";
    } else if (couponCode !== "BeABull") {
      document.getElementById("Couponcodes").style.border = "1px solid gray";
      messageApi.error("Invalid coupon");
    } else if (couponCode === "BeABull") {
      document.getElementById("Couponcodes").style.border = "1px solid gray";

      messageApi.open({
        duration: 1,
        type: "loading",
        content: "checking...",
      });

      couponService(userId).then((e) => {
        if (e.status === 200) {
          messageApi.success("coupon applied");
          setCouponCodeApplied({
            state: true,
            coupon: couponCode,
            rate: 10,
          });
          const amount = state - state / 10;
          setTotalAmount(amount);
        } else if (e.status === 201) {
          messageApi.info("coupon already used");
        } else {
          messageApi.error("something went wrong !! try again ");
        }
      });
    }
  };

  const cuponRemoveHandler = () => {
    setCouponCodeApplied({
      ...couponCodeApplied,
      state: false,
    });
  };

  const navigationHandler = () => {
    Navigation({
      pathname: CHECKOUT,
      search: `coupon=${couponCodeApplied.state}`,
    });
  };

  const content = (list) => {
    return (
      <>
        <div>
          <b>collar :</b> {list.collar.name}
        </div>
        <div>
          <b>buttons :</b> {list.buttons}
        </div>

        <div>
          <b>back :</b> {list.back.name}
        </div>

        <div>
          <b>placket :</b> {list.placket.name}
        </div>

        <div>
          <b>pocket :</b> {list.pocketState.toString()}
        </div>
        <div>
          <b>selevesandcuff :</b> {list.selevesandcuff.name}
        </div>
      </>
    );
  };

  const columns = [
    {
      title: "",
      dataIndex: "image",
      key: "name",

      fixed: "right",
      render: (image) => (
        <div
          style={{
            overflow: "hidden",
            height: "50px",
            width: "50px",
            borderRadius: "50px",
          }}
        >
          <img src={PDC_IMAGE + image} alt="product imgae" />
        </div>
      ),
    },

    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Customize",
      dataIndex: "customize",
      key: "customize",
      align: "center",
      render: (text) => {
        return text !== false ? (
          <Popover
            content={() => content(text)}
            trigger="click"
            title="customise"
          >
            <Button size="small">View</Button>
          </Popover>
        ) : (
          "False"
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Quantity",
      dataIndex: "address",
      key: "address",
      align: "center",
      render: (_, e) => (
        <div>
          <Row justify="space-evenly">
            <Col
              xxl={8}
              style={
                e.quantity === 1
                  ? { display: "none", cursor: "pointer" }
                  : { cursor: "pointer" }
              }
              onClick={() => decreasehandler(e.id)}
              title="Quantity"
            >
              -
            </Col>

            <Col xxl={8}>{e.quantity}</Col>

            <Col
              xxl={8}
              style={
                e.quantity === 5
                  ? { display: "none", cursor: "pointer" }
                  : { cursor: "pointer" }
              }
              onClick={() => addHandler(e.id)}
              title="Increase Quantity"
            >
              +
            </Col>
          </Row>
        </div>
      ),
    },
    {
      title: "Total Price",
      key: "totalPrice",
      align: "center",
      dataIndex: "totalPrice",
    },
    {
      title: "",
      key: "action",
      align: "center",
      render: (_, e) => (
        <Icon
          style={{ cursor: "pointer" }}
          fontSize={"18px"}
          onClick={() => deleteHandler(e.id)}
          icon="material-symbols:cancel"
        />
      ),
    },
  ];

  return (
    <Row justify="center">
      {cartItem.length > 0 ? (
        <Col xxl={12} xl={16} lg={18} md={18} sm={22} xs={22}>
          <div className="CARTYHEADIIN">Cart</div>
          {contextHolder}

          <Table
            columns={columns}
            pagination={false}
            dataSource={cartItem}
            scroll={
              window.screen.width <= 700
                ? {
                    x: "200vw",
                  }
                : ""
            }
          />

          <Row
            justify="space-between"
            gutter={[0, 40]}
            style={{ marginTop: "59px", marginBottom: "59px" }}
          >
            <Col xxl={10} xl={12} lg={11} md={20} sm={22} xs={22}>
              <div className="ctndsa">
                <Link style={{ color: "black" }} to={SHOP}>
                  <Icon
                    style={{ paddingTop: "7px" }}
                    fontSize={"20px"}
                    icon="mdi:arrow-left"
                  />
                  <span>Continue Shopping</span>
                </Link>
              </div>

              <Row className="thr" justify="start">
                <Col
                  xxl={14}
                  xl={14}
                  lg={14}
                  md={15}
                  sm={15}
                  xs={15}
                  style={{ marginTop: "7px" }}
                >
                  <input
                    type="text"
                    id="Couponcodes"
                    placeholder="Coupon Code"
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                </Col>

                <Col xxl={8} xl={8} lg={9} md={9} sm={9} xs={9}>
                  <StyledButton
                    onClick={() => CouponHandler()}
                    sx={{ padding: "13px" }}
                    disable={couponCodeApplied.state ? "false" : "true"}
                    varinat={"Contained"}
                  >
                    Apply Coupon
                  </StyledButton>
                </Col>
              </Row>
            </Col>

            <Col xxl={10} xl={12} lg={11} md={20} sm={22} xs={22}>
              <Card
                title="Cart Total"
                style={{
                  width: 350,
                }}
              >
                <Row justify="space-between">
                  <Col xxl={10} className={"llo"}>
                    Subtotal
                  </Col>

                  <Col xxl={10} className={"llo"}>
                    ₹ {state.toFixed(2)}
                  </Col>
                </Row>

                <Divider />

                {couponCodeApplied.state && (
                  <>
                    <Row justify="space-between">
                      <Col xxl={10} className={"llo"}>
                        Coupon : {couponCodeApplied.coupon}
                      </Col>

                      <Col xxl={10} className="llo">
                        - ₹ {Number(state) / Number(couponCodeApplied.rate)}
                        <span
                          onClick={() => cuponRemoveHandler()}
                          className="removeButon"
                        >
                          remove
                        </span>
                      </Col>
                    </Row>

                    <Divider />
                  </>
                )}

                <Row justify="space-between">
                  <Col xxl={10} className={"llo"}>
                    Total
                  </Col>

                  <Col xxl={10} className={"llo"}>
                    ₹ {Number(totalAmount)?.toFixed(2)}
                  </Col>
                </Row>

                <Row justify={"center"}>
                  <Col xxl={21}>
                    <StyledButton
                      onClick={() => navigationHandler()}
                      sx={{ marginTop: "30px" }}
                      varinat="Contained"
                    >
                      Proceed to checkout
                    </StyledButton>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      ) : (
        <Col>
          <div className="ycie">
            <div>YOUR CART IS EMPTY</div>
            <Link to={SHOP}>
              <div className="sdasd">Continue Shopping</div>
            </Link>
          </div>
        </Col>
      )}
    </Row>
  );
};

export default CartPage;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="cartmodal">
<Row justify="space-between" className="thd">
  <Col className="th" xxl={14}>
    Product
  </Col>

  <Col className="th" xxl={2}>
    Price
  </Col>

  <Col className="th" xxl={2}>
    Quantity
  </Col>

  <Col className="th" xxl={2}>
    Subtotal
  </Col>
</Row>

<>
  {cartItem.map((e) => {
    return (
      <Row justify="space-between" className="thr" key={e.id}>
        <Col className="tr paddingo" xxl={3} title="remove item">
          <Icon
            style={{ cursor: "pointer" }}
            onClick={() => deleteHandler(e.id)}
            icon="material-symbols:cancel"
          />
        </Col>
        <Col className="tr" xxl={2}>
          <div
            style={{
              overflow: "hidden",
              height: "77px",
              borderRadius: "50px",
            }}
          >
            <img src={PDC_IMAGE + e.image} alt="product imgae" />
          </div>
        </Col>
        <Col className="tr paddingo" xxl={10}>
          {e.name}
        </Col>

        <Col className="tr paddingo" xxl={2}>
          ₹ {Number(e.price)?.toFixed(2)}
        </Col>

        <Col className="tr paddingo" xxl={5}>
          <Row justify="space-evenly">
            <Col
              xxl={8}
              style={{ cursor: "pointer" }}
              onClick={() => decreasehandler(e.id)}
              title="Quantity"
            >
              -
            </Col>

            <Col xxl={8}>{e.quantity}</Col>

            <Col
              xxl={8}
              style={{ cursor: "pointer" }}
              onClick={() => addHandler(e.id)}
              title="Increase Quantity"
            >
              +
            </Col>
          </Row>
        </Col>

        <Col xxl={2} className="tr paddingo">
          ₹ {Number(e.totalPrice)?.toFixed(2)}
        </Col>
      </Row>
    );
  })}
</>


</div> */
}

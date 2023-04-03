import React, { useEffect, useCallback, useState, use } from "react";

import { Col, Row, Divider, Radio, Space, message, Result, Tag } from "antd";

import Stack from "../components/style/stack";
import StyleButton from "../components/style/button";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Address from "../section/checkout/address";
import {
  billAddress,
  couponService,
  initiatePayment,
  orderMailer,
  orderService,
  shipAddress,
} from "../services/apiServices/apiService";
import { HOME, ORDER } from "../constants/route-path";
import { EMPTY_CART } from "../actions/cart-action";

import StyledButton from "../components/style/button";

function generateHexCode() {
  const hexValues = "0123456789AaBbCcDdEeFfgGHh";
  let hexCode = "0";
  for (let i = 0; i < 12; i++) {
    hexCode += hexValues[Math.floor(Math.random() * 26)];
  }
  return hexCode;
}

const CheckoutPage = () => {
  const randomHexCode = generateHexCode();

  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const { userId, userName, email } = useSelector((e) => e.userReducer);

  const [searchParams, setSearchParams] = useSearchParams();

  const { cartItem } = useSelector((e) => e.cartReducer);

  const [totalAmount, setTotalAmount] = useState("");

  const [orderStatus, setOrderStatus] = useState(false);

  const [state, setState] = useState(0);

  const [paytmrender, setPaytmrender] = useState(1);

  const [couponCode, setCouponCode] = useState("");

  const [primaryAdd, setprimaryAdd] = useState({});

  const [shipppingAdd, setShipppingAdd] = useState({});

  const [address, setAddress] = useState({
    billingaddress: "",
    shippingaddress: "",
    different: "",
    information: "",
  });

  const [orderRequest, setOrderRequest] = useState({
    user_id: userId,
    shipping_charge: "0",
    discount_charge: "",
    total_amount: "",
    status: "pending",
    payment_method: "",
    order_id: randomHexCode,
  });

  //  initilise payment ----------

  useEffect(() => {
    const script = document.createElement("script");

    script.type = "application/javascript";
    script.crossOrigin = "anonymous";
    script.src =
      "https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/RKiGVE46772965128210.js";

    document.body.appendChild(script);

    billAddress(userId).then((e) => {
      setprimaryAdd(e.data.data[0]);
    });

    shipAddress(userId).then((e) => {
      setShipppingAdd(e.data.data[0]);
    });
  }, []);

  //  paytm payment handler----------

  function useOnceCall(cb, condition = true) {
    const isCalledRef = React.useRef(false);

    React.useEffect(() => {
      if (condition && !isCalledRef.current) {
        isCalledRef.current = true;
        cb();
      }
    }, [cb, condition]);
  }

  useOnceCall(() => {
    if (paytmrender === 1) {
      setPaytmrender(paytmrender + 1);

      if (searchParams.get("paymentstatus") !== null) {
        let obj = JSON.parse(sessionStorage.getItem("checkout_details"));

        let count = 0;

        messageApi.open({
          type: "loading",
          content: "processing ......",
          duration: 2,
        });

        if (searchParams.get("paymentstatus") === "TXN_SUCCESS") {
          cartItem.map((e) =>
            orderService({
              ...obj,
              product_id: e.id,
              product_quantity: e.quantity,
              customization: e.customize,
              size: e.size,
              price: e.price,
              total_price: e.totalPrice,
              payment_status: searchParams.get("paymentstatus"),
              image: e.image,
              product_name: e.name,
            }).then((e) => {
              count += 1;
              if (count === cartItem.length) {
                if (e.status === 200) {
                  sessionStorage.removeItem("checkout_details");

                  orderMailer({
                    orderid: "12345",
                    email: email,
                    username: userName,
                    discount: orderRequest.discount_charge,
                    subtotal:
                      orderRequest.total_amount - orderRequest.discount_charge,
                    total: orderRequest.total_amount,
                    paymentype: orderRequest.payment_method,
                    BillingInfo: primaryAdd,
                    shippinginfo:
                      address.billingaddress === address.shippingaddress
                        ? primaryAdd
                        : shipppingAdd,
                    product: cartItem,
                  }).then((e) => e);

                  setOrderStatus(true);
                  setTimeout(() => {
                    dispatch({ type: EMPTY_CART });
                    Navigate(ORDER);
                  }, 15000);
                } else {
                  messageApi.error("Something went wrong ! try again");
                }
              }
            })
          );
        } else {
          alert("payment failed");
        }
      }
    }
  });

  //  amount handler ----------

  useEffect(() => {
    if (cartItem.length * 1 === 0) {
      Navigate(HOME);
    }

    let sum = 0;
    cartItem.forEach((e) => {
      sum += Number(e.totalPrice);
    });

    setState(sum);

    if (searchParams.get("coupon") === "true") {
      setTotalAmount(sum - sum / 10);
      setOrderRequest({
        ...orderRequest,
        discount_charge: (sum / 10).toString(),
        total_amount: (sum - sum / 10).toString(),
      });
    } else {
      setTotalAmount(sum);

      setOrderRequest({
        ...orderRequest,
        discount_charge: "0",
        total_amount: sum.toString(),
      });
    }
  }, [cartItem, searchParams]);

  //  order handler ----------

  const orderHandler = async () => {
    if (orderRequest.payment_method === "") {
      messageApi.info("Choose a payment method");
    } else if (
      address.billingaddress === "" ||
      address.billingaddress === undefined
    ) {
      messageApi.info("Please enter the billing address");
    } else if (
      address.different &&
      (address.shippingaddress === "" || address.shippingaddress === undefined)
    ) {
      messageApi.info("Please enter the shipping address");
    } else {
      let count = 0;
      messageApi.open({
        type: "loading",
        content: "processing ......",
        duration: 2,
      });

      if (orderRequest.payment_method === "COD") {
        cartItem.map((e) =>
          orderService({
            ...Object.assign(address, orderRequest),
            product_id: e.id,
            product_quantity: e.quantity,
            customization: e.customize,
            size: e.size,
            price: e.price,
            total_price: e.totalPrice,
            payment_status: "Pending",
            image: e.image,
            product_name: e.name,
          }).then((e) => {
            count += 1;
            if (count === cartItem.length) {
              if (e.status === 200) {
                setOrderStatus(true);

                orderMailer({
                  orderid: "12345",
                  email: email,
                  username: userName,
                  discount: orderRequest.discount_charge,
                  subtotal:
                    orderRequest.total_amount - orderRequest.discount_charge,
                  total: orderRequest.total_amount,
                  paymentype: orderRequest.payment_method,
                  BillingInfo: primaryAdd,
                  shippinginfo:
                    address.billingaddress === address.shippingaddress
                      ? primaryAdd
                      : shipppingAdd,
                  product: cartItem,
                }).then((e) => e);

                setTimeout(() => {
                  dispatch({ type: EMPTY_CART });
                  Navigate(ORDER);
                }, 15000);
              } else {
                messageApi.error("Something went wrong ! try again");
              }
            }
          })
        );
      } else if (orderRequest.payment_method === "PAYTM") {
        sessionStorage.setItem(
          "checkout_details",
          JSON.stringify(Object.assign(address, orderRequest))
        );

        let response = await initiatePayment({
          email: "sahilegss@gmail.com",
          orderid: orderRequest.order_id,
          amount: totalAmount,
        });
        let txnCode = await JSON.parse(response.data.data);

        var config = {
          root: "",
          flow: "DEFAULT",
          data: {
            orderId: orderRequest.order_id,
            token: txnCode.body.txnToken,
            tokenType: "TXN_TOKEN",
            amount: totalAmount,
          },
          handler: {
            notifyMerchant: function (eventName, data) {
              console.log(eventName, data);
            },
          },
        };

        window.Paytm.CheckoutJS.init(config)
          .then(function onSuccess() {
            window.Paytm.CheckoutJS.invoke();
          })
          .catch(function onError(error) {
            console.log("error => ", error);
          });
      }
    }
  };

  const purl = () => {
    setSearchParams();
  };

  const CouponHandler = () => {
    if (couponCode === "") {
      document.getElementById("Couponcodes").style.border = "1px solid red";
    } else if (couponCode !== "BeABull") {
      messageApi.warning("Invalide Coupon");
    } else {
      messageApi.open({
        duration: 1,
        type: "loading",
        content: "checking...",
      });

      couponService(userId).then((e) => {
        if (e.status === 200) {
          messageApi.success("coupon applied");
          searchParams.set("coupon", true);
          setSearchParams(searchParams);
        } else if (e.status === 201) {
          messageApi.info("coupon already used");
        } else {
          messageApi.error("something went wrong !! try again ");
        }
      });
    }
  };

  return (
    <>
      {orderStatus && (
        <div id="popover_checkout">
          <Stack
            sx={{
              width: "60%",
              margin: "auto",
              background: "white",
              borderRadius: "8px",
            }}
          >
            <Result
              status="success"
              title="Successfully Purchased"
              subTitle={`Order id: ${randomHexCode} , It will dispatched in 7-10 working days as it is a made-to-order product.`}
              extra={[
                <div style={{ width: "20%", margin: "auto" }}>
                  <StyleButton
                    onClick={() => {
                      Navigate(ORDER);
                      dispatch({ type: EMPTY_CART });
                    }}
                    varinat="Contained"
                  >
                    Go to orders
                  </StyleButton>
                </div>,
              ]}
            />
          </Stack>
        </div>
      )}

      <Row justify="center">
        <Col
          xxl={14}
          xl={18}
          lg={20}
          md={22}
          xs={22}
          sm={22}
          style={{ margin: "60px 0" }}
        >
          {contextHolder}
          <Row justify="space-around">
            <Address setAddress={setAddress} address={address} />

            <Col xxl={8} xl={8} lg={8} md={18} xs={22} sm={22}>
              {searchParams.get("coupon") === "true" ? (
                <>
                  <Stack className="your_yte">Applied coupon</Stack>
                  <Stack sx={{ padding: "10px 0" }}>
                    <Tag
                      onClose={() => purl()}
                      style={{ borderRadius: "50px", padding: "4px 14px" }}
                      closable
                      color="purple"
                    >
                      BeABull
                    </Tag>
                  </Stack>
                </>
              ) : (
                <>
                  <Stack className="your_yte">Apply coupon</Stack>

                  <Stack sx={{ padding: "10px 0" }}>
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
                          onChange={(e) => setCouponCode(e.target.value)}
                          type="text"
                          id="Couponcodes"
                          placeholder="Coupon Code"
                        />
                      </Col>

                      <Col xxl={8} xl={8} lg={9} md={9} sm={9} xs={9}>
                        <StyledButton
                          onClick={() => CouponHandler()}
                          sx={{ padding: "13px" }}
                          varinat={"Contained"}
                        >
                          Apply Coupon
                        </StyledButton>
                      </Col>
                    </Row>
                  </Stack>
                </>
              )}

              <Stack sx={object.details}>
                <Stack className={"your_yte"}>Your Order</Stack>

                <Stack sx={object.detailSub}>
                  <Stack sx={object.pHeading}>Product</Stack>
                  <Stack sx={object.pHeading2}>Total</Stack>
                </Stack>

                <Divider style={{ margin: "17px 0" }} />

                {cartItem.map((e) => (
                  <>
                    <Stack key={e.id} sx={object.detailSub}>
                      <Stack sx={object.pPrice}>{e.name}</Stack>
                      <Stack sx={object.pQty}>x {e.quantity}</Stack>
                      <Stack sx={object.pTotal}>
                        ₹ {Number(e.totalPrice).toFixed(2)}
                      </Stack>
                    </Stack>

                    <Divider style={{ margin: "17px 0" }} />
                  </>
                ))}

                <Stack sx={object.detailSub}>
                  <Stack sx={object.pPrice}>Subtotal</Stack>

                  <Stack sx={object.pTotal}>
                    {" "}
                    ₹ {Number(state).toFixed(2)}{" "}
                  </Stack>
                </Stack>

                <Divider style={{ margin: "17px 0" }} />

                {searchParams.get("coupon") === "true" && (
                  <>
                    <Stack sx={object.detailSub}>
                      <Stack sx={object.pPrice}>Coupon</Stack>

                      <Stack sx={(object.pTotal, { color: "red" })}>
                        - ₹ {Number(state / 10).toFixed(2)}
                      </Stack>
                    </Stack>
                    <Divider style={{ margin: "17px 0" }} />
                  </>
                )}

                <Stack sx={object.detailSub}>
                  <Stack sx={object.pPrice}>Total</Stack>

                  <Stack sx={object.pTotal}>
                    ₹ {Number(totalAmount).toFixed(2)}
                  </Stack>
                </Stack>

                <Divider style={{ margin: "17px 0" }} />

                <Stack sx={object.detailSub}>
                  <Stack>
                    <Radio.Group
                      onChange={(e) => {
                        setOrderRequest({
                          ...orderRequest,
                          payment_method: e.target.value,
                        });
                      }}
                    >
                      <Space direction="vertical">
                        <Radio value={"COD"}>
                          <Stack sx={object.options}>Cash on delivery</Stack>
                        </Radio>

                        <Radio value={"PAYTM"}>
                          <Stack sx={object.options}>Paytm</Stack>

                          <Stack>
                            <img src={`/images/paytm_pg.svg`} alt="paytm" />
                          </Stack>
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </Stack>
                </Stack>

                <Divider style={{ margin: "17px 0" }} />

                <Stack>
                  <StyleButton
                    onClick={() => orderHandler()}
                    sx={{ margin: "20px 0" }}
                    varinat={"Contained"}
                  >
                    Place Order
                  </StyleButton>
                </Stack>
              </Stack>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default CheckoutPage;

const object = {
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #dbdbdb",
    padding: "10px 20px",
    borderRadius: "10px",
  },
  inner: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    width: "10%",
    display: "flex",
    padding: "10px",
    justifyContent: "space-between",
  },
  button: {
    width: "15%",
    display: "flex",
    justifyContent: "space-between",
  },
  details: {
    width: "100%",
    border: "1px solid #dbdbdb",
    padding: "10px 29px",
    borderRadius: "7px",
  },
  detailSub: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  pHeading: {
    fontSize: "19px",
    fontWeight: "500",
    width: "35%",

    color: "gray",
  },
  pHeading2: {
    textAlign: "end",
    fontSize: "19px",
    fontWeight: "500",
    width: "35%",

    color: "gray",
  },

  pPrice: {
    fontSize: "15px",
    fontWeight: "500",
    width: "35%",
  },

  pTotal: {
    fontSize: "15px",
    fontWeight: "500",
    width: "35%",
    textAlign: "end",
  },
  pQty: {
    fontSize: "17px",
    fontWeight: "500",
    width: "20%",
    color: "gray",
  },
  options: {
    fontSize: "16px",
    fontWeight: "500",
  },
};

// SAhilEgss@1234

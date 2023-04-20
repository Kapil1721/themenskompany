// @ts-nocheck
import React, { useEffect } from "react";
import { Breadcrumb, Col, Result, Row } from "antd";
import GuestDetails from "../section/guestCheckout/guestDetails";
import { useState } from "react";
import AddInfo from "../section/guestCheckout/addInfo";
import OrderDetail from "../section/guestCheckout/orderDetail";
import { useSelector } from "react-redux";
import { orderMailer, userNoReg } from "../services/apiServices/apiService";
import Stack from "../components/style/stack";
import StyleButton from "../components/style/button";
import { useNavigate } from "react-router-dom";

function generateHexCode() {
  const hexValues = "0123456789AaBbCcDdEeFfgGHh";
  let hexCode = "0";
  for (let i = 0; i < 12; i++) {
    hexCode += hexValues[Math.floor(Math.random() * 26)];
  }
  return hexCode;
}

const GuestCheckout = () => {
  const Navigate = useNavigate();

  const [state, setState] = useState(true);

  const { cartItem } = useSelector((e) => e.cartReducer);

  const [orderStatus, setOrderStatus] = useState(false);

  const [totalAmount, setTotalAmount] = useState(0);

  const [data, setData] = useState({
    email: "",
    fname: "",
    lname: "",
    address: "",
    building: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const [billData, setBillData] = useState({
    fname: "",
    lname: "",
    address: "",
    building: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const [option, setOption] = useState({
    payment: "1",
    address: "1",
  });

  const obj = {
    email: data.email,
    phone: data.phone,
    details: JSON.stringify(data),
    order_id: generateHexCode(),
    different: Number(option.address) === 2 ? "true" : "false",
    billAddress: Number(option.address) === 2 ? JSON.stringify(billData) : "",
  };

  function something() {
    cartItem.forEach((el) => {
      userNoReg({
        ...obj,
        product_id: el.id,
        product_name: el.name,
        size: el.size,
        price: el.totalPrice / el.quantity,
        total_price: el.totalPrice,
        total_amount: el.totalPrice,
        quantity: el.quantity,
        product_image: el.image,
        customization: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setOrderStatus(true);

          orderMailer({
            orderid: obj.order_id,
            email: data.email,
            username: `${data.fname}`,
            discount: 0,
            subtotal: totalAmount,
            total: totalAmount,
            paymentype: option.payment === "1" ? "PAYTM" : "COD",
            BillingInfo: option.address === "1" ? data : billData,
            shippinginfo: data,
            product: cartItem,
          }).then((e) => e);

          setTimeout(() => {
            Navigate("/");
          }, 5000);
        }
      });
    });
  }

  const checkoutHandler = () => {
    if (Number(option.payment) === 1) {
      // paytm payment gateway
    } else if (Number(option.payment) === 2) {
      if (Number(option.address) === 2) {
        Object.entries(billData).map(([key, value]) => {
          if (value === "") {
            document.getElementById(key).style.borderColor = "red";
            document.getElementsByClassName("redText")[0].style.display =
              "block";
          } else {
            document.getElementById(key).style.borderColor = "gray";
            document.getElementsByClassName("redText")[0].style.display =
              "none";

            if (key === "phone") {
              something();
            }
          }
        });
      } else {
        something();
      }
    }
  };

  const adddressDatahandler = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });

    return true;
  };

  const billAdddressHandler = (e) => {
    setBillData({
      ...billData,
      [e.target.id]: e.target.value,
    });

    return true;
  };

  useEffect(() => {
    let sum = 0;
    cartItem.forEach((e) => {
      sum += Number(e.totalPrice);
    });

    setTotalAmount(sum);

    if (JSON.parse(localStorage.getItem("THBD43Sdfs324"))) {
      setData(JSON.parse(localStorage.getItem("THBD43Sdfs324")));
    }
  }, []);

  const saveInfoHandler = () => {
    Object.entries(data).map(([key, value]) => {
      if (value === "") {
        document.getElementById(key).style.borderColor = "red";
        document.getElementsByClassName("redText")[0].style.display = "block";
      } else {
        document.getElementById(key).style.borderColor = "gray";
        document.getElementsByClassName("redText")[0].style.display = "none";

        if (key === "phone") {
          localStorage.setItem("THBD43Sdfs324", JSON.stringify(data));
          setState(false);
        }
      }

      return true;
    });
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
              subTitle={`Order id: ${obj.order_id} , It will dispatched in 7-10 working days as it is a made-to-order product.`}
              extra={[
                <div style={{ width: "20%", margin: "auto" }}>
                  <StyleButton
                    onClick={() => Navigate("/")}
                    varinat="Contained"
                  >
                    Go to Home
                  </StyleButton>
                </div>,
              ]}
            />
          </Stack>
        </div>
      )}
      <div
        className="guest-checkout-section"
        style={state ? { height: "100vh" } : { height: "100%" }}
      >
        <div className="guest-checkout-form">
          <div className="guest-checkout-form-inner">
            <div className="form-header">
              <img src="/themenskomapnay.logo.webp" alt="" />

              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>

                <Breadcrumb.Item>
                  <span>Details</span>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                  <span>Payment</span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Row gutter={10}>
              {state ? (
                <GuestDetails
                  adddressDatahandler={adddressDatahandler}
                  data={data}
                  saveInfoHandler={saveInfoHandler}
                />
              ) : (
                <AddInfo
                  billData={billData}
                  billAdddressHandler={billAdddressHandler}
                  setState={setState}
                  setOption={setOption}
                  option={option}
                  checkoutHandler={checkoutHandler}
                />
              )}
            </Row>
          </div>
        </div>

        <div className="guest-checkout-desc">
          <OrderDetail />
        </div>
      </div>
    </>
  );
};

export default GuestCheckout;

// @ts-nocheck
import React, { useEffect } from "react";
import { Breadcrumb, Col, Row } from "antd";
import GuestDetails from "../section/guestCheckout/guestDetails";
import { useState } from "react";
import AddInfo from "../section/guestCheckout/addInfo";
import OrderDetail from "../section/guestCheckout/orderDetail";
import { Icon } from "@iconify/react";

const GuestCheckout = () => {
  const [state, setState] = useState(true);

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

  const adddressDatahandler = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });

    return true;
  };

  useEffect(() => {
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
                <AddInfo setState={setState} />
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

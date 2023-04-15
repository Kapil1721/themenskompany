import React, { useState } from "react";

import { Col, Row, message, Breadcrumb } from "antd";
import { Icon } from "@iconify/react";

import StyleButton from "../components/style/button";
import { contactUs } from "../services/apiServices/apiService";
import { Link } from "react-router-dom";
import { HOME } from "../constants/route-path";
import { Helmet } from "react-helmet-async";
import { STATIC_DATA } from "../constants/path-constant";

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    message: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = () => {
    Object.keys(state).forEach((e, i, aaa) => {
      if (state[e] === "") {
        document.getElementById(e).style.border = "1px solid red";
      } else {
        document.getElementById(e).style.border = "1px solid gray";
        if (aaa.length - 1 === i) {
          messageApi.open({
            duration: 2,
            type: "loading",
            content: "sending...",
          });

          contactUs({ ...state }).then((e) => {
            if (e.status === 200) {
              messageApi.success(
                "Thanks for contacting us! Our team will get back to you shortly!"
              );
            } else if (e.status === 210) {
              messageApi.error(
                "Something went wrong !! Try again after sometime"
              );
            }
          });
        }
      }
    });
  };

  return (
    <>
      <Helmet>
        <title> Contact | The men's kompany World</title>
      </Helmet>
      <Row justify="center" style={{ marginTop: "30px" }}>
        <Col span={20}>
          <div>
            <Breadcrumb style={{ fontSize: "15px" }}>
              <Breadcrumb.Item>
                <Link to={HOME}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Shop</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Col>
      </Row>

      <Row justify="center">
        <Col
          xxl={14}
          lg={18}
          xl={20}
          md={22}
          sm={22}
          xs={22}
          style={{ margin: "60px 0" }}
        >
          {contextHolder}

          <Row justify="space-between" gutter={[10, 10]}>
            <Col xxl={7} lg={7} xl={7} md={7} sm={12} xs={24}>
              <a
                style={{ color: "black" }}
                href="tel:+918287819178"
                rel="noreferrer"
              >
                <div className="contact-card">
                  <div>
                    <Icon
                      icon="material-symbols:phone-in-talk"
                      fontSize="60px"
                    />
                  </div>

                  <div className="ettto">Phone</div>

                  <div className="dtoo">+91-8287819178</div>
                </div>
              </a>
            </Col>

            <Col xxl={7} lg={7} xl={7} md={7} sm={12} xs={24}>
              <a
                style={{ color: "black" }}
                href="https://goo.gl/maps/JBDEDn5QvuFc9Py59"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-card">
                  <div>
                    <Icon icon="ic:outline-pin-drop" fontSize="60px" />
                  </div>

                  <div className="ettto">Corporate Address</div>

                  <div className="dtoo">
                    252/1 3rd Floor,Shahpurjat,New Delhi 110049
                  </div>
                </div>
              </a>
            </Col>

            <Col xxl={7} lg={7} xl={7} md={7} sm={12} xs={24}>
              <a
                style={{ color: "black" }}
                href="mailto:support@themenskompany.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-card">
                  <div>
                    <Icon icon="mdi:email" fontSize="60px" />
                  </div>

                  <div className="ettto">Email</div>

                  <div className="dtoo">support@themenskompany.com</div>
                </div>
              </a>
            </Col>
          </Row>

          <Row justify="space-between" style={{ marginTop: "190px " }}>
            <Col xxl={12} lg={12} xl={12} md={12} sm={0} xs={0}>
              <img src={STATIC_DATA + `IMage-3.webp`} alt="asdsaddad" />
            </Col>

            <Col xxl={10} lg={10} xl={10} md={10} sm={24} xs={24}>
              <div className="conatc-ytrn">GET IN TOUCH</div>

              <div className="ujghuasd-ytrnsd">Connect to us</div>

              <Row justify="space-between">
                <Col span={11}>
                  <div className="contact-input">
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => inputHandler(e)}
                      placeholder=" Name"
                    />
                  </div>
                </Col>

                <Col span={11}>
                  <div className="contact-input">
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => inputHandler(e)}
                      placeholder="Email"
                    />
                  </div>
                </Col>

                <Col span={24}>
                  <div className="contact-input">
                    <input
                      type="number"
                      id="phone"
                      onChange={(e) => inputHandler(e)}
                      placeholder="phone"
                    />
                  </div>
                </Col>

                <Col span={24}>
                  <div className="contact-input">
                    <input
                      type="text"
                      id="address"
                      onChange={(e) => inputHandler(e)}
                      placeholder="Address"
                    />
                  </div>
                </Col>

                <Col span={24}>
                  <div className="contact-input">
                    <input
                      type="number"
                      id="zip"
                      onChange={(e) => inputHandler(e)}
                      placeholder="Zip / postal code"
                    />
                  </div>
                </Col>

                <Col span={24}>
                  <div className="contact-input">
                    <textarea
                      id="message"
                      onChange={(e) => inputHandler(e)}
                      rows={7}
                      cols={46}
                      placeholder="message"
                    />
                  </div>
                </Col>

                <Col span={24}>
                  <StyleButton
                    onClick={() => submitHandler()}
                    varinat="Contained"
                  >
                    Submit
                  </StyleButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Contact;

const array = [1, 2, 3, 4, 5, 6, "is", "was"];
const array1 = ["is", "was", "some", "random ", "text"];

let normalData = [
  { category: "one,was" },
  { category: "is,tow" },
  { category: "isads,sads" },
  { category: "is,was" },
];

let y = normalData.filter((e) => {
  if (e.category.split(",").includes("is")) {
    return e;
  }
});
console.log(y);

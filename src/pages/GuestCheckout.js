import React from "react";
import { Breadcrumb, Col, Row } from "antd";

const GuestCheckout = () => {
  return (
    <div>
      <div className="guest-checkout-section">
        <div className="guest-checkout-form">
          <div className="guest-checkout-form-inner">
            <div className="form-header">
              <img src="/themenskomapnay.logo.webp"></img>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Row gutter={10}>
              <Col span={24}>
                <div className="contact-input contact-info">
                  <label>Contact information</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="email"
                  />
                  <div className="check-box">
                    <input type="checkbox" id="check" />
                    <span>
                      Keep me updated on the latest launches & offers.
                    </span>
                  </div>
                </div>
              </Col>

              <Col md={24}>
                <div className="contact-input shopping-area">
                  <label>Shipping address</label>
                  <select>
                    <option>India</option>
                  </select>
                </div>
              </Col>

              <Col md={12}>
                <div className="contact-input">
                  <input type="text" id="fname" placeholder="First Name" />
                </div>
              </Col>

              <Col md={12}>
                <div className="contact-input">
                  <input type="text" id="lname" placeholder="Last Name" />
                </div>
              </Col>
              <Col md={24}>
                <div className="contact-input">
                  <input type="text" id="address" placeholder="Address" />
                </div>
              </Col>
              <Col md={24}>
                <div className="contact-input">
                  <input
                    type="text"
                    id=""
                    placeholder="Apartment, suite, etc."
                  />
                </div>
              </Col>
              <Col md={8}>
                <div className="contact-input">
                  <input type="text" id="city" placeholder="City" />
                </div>
              </Col>

              <Col md={8}>
                <div className="contact-input">
                  <select>
                    <option>Delhi</option>
                  </select>
                </div>
              </Col>

              <Col md={8}>
                <div className="contact-input">
                  <input type="number" id="pincode" placeholder="Pin Code" />
                </div>
              </Col>

              <Col md={24}>
                <div className="contact-input">
                  <input type="number" id="phone" placeholder="Phone" />
                </div>
                <div className="check-box">
                  <input type="checkbox" id="check" />
                  <span>Keep me updated on the latest launches & offers.</span>
                </div>
              </Col>

              <Col md={8}>
                <button className="btnContained" style={{ cursor: "pointer" }}>
                  <span>Continue to shipping</span>
                </button>
              </Col>
            </Row>
          </div>
        </div>
        <div className="guest-checkout-desc"></div>
      </div>
    </div>
  );
};

export default GuestCheckout;

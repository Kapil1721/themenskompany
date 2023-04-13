import React from "react";
import { Col } from "antd";

const GuestDetails = ({ setState }) => {
  return (
    <>
      <Col span={24}>
        <div className="contact-input contact-info">
          <label>
            <span>Contact information</span>
            <span>
              Already have an account? <a href="###">Log in</a>
            </span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="email"
          />
          <div className="check-box">
            <input type="checkbox" id="check" />
            <span>Keep me updated on the latest launches & offers.</span>
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
          <input type="text" id="" placeholder="Apartment, suite, etc." />
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
        <button
          onClick={() => setState(false)}
          className="btnContained"
          style={{ cursor: "pointer" }}
        >
          <span>Continue to shipping</span>
        </button>
      </Col>
    </>
  );
};

export default GuestDetails;

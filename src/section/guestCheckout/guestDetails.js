import React from "react";
import { Col } from "antd";
import { state } from "../../constants/_IndianStates";

const GuestDetails = ({ adddressDatahandler, data, saveInfoHandler }) => {
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
            value={data.email}
            placeholder="Email"
            className="email"
            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            onChange={(e) => adddressDatahandler(e)}
            required
          />
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
          <input
            value={data.fname}
            type="text"
            id="fname"
            onChange={(e) => adddressDatahandler(e)}
            placeholder="First Name"
          />
        </div>
      </Col>

      <Col md={12}>
        <div className="contact-input">
          <input
            type="text"
            value={data.lname}
            id="lname"
            onChange={(e) => adddressDatahandler(e)}
            placeholder="Last Name"
          />
        </div>
      </Col>

      <Col md={24}>
        <div className="contact-input">
          <input
            type="text"
            value={data.address}
            onChange={(e) => adddressDatahandler(e)}
            id="address"
            placeholder="Address"
          />
        </div>
      </Col>

      <Col md={24}>
        <div className="contact-input">
          <input
            type="text"
            value={data.building}
            onChange={(e) => adddressDatahandler(e)}
            id="building"
            placeholder="Apartment, suite, etc."
          />
        </div>
      </Col>

      <Col md={8}>
        <div className="contact-input">
          <input
            value={data.city}
            type="text"
            onChange={(e) => adddressDatahandler(e)}
            id="city"
            placeholder="City"
          />
        </div>
      </Col>

      <Col md={8}>
        <div className="contact-input">
          <select
            onChange={(e) => adddressDatahandler(e)}
            id="state"
            value={data.state}
            placeholder="state"
          >
            <option value={""}>state</option>
            {state.map((item) => (
              <option key={item.value} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </Col>

      <Col md={8}>
        <div className="contact-input">
          <input
            onChange={(e) => adddressDatahandler(e)}
            type="number"
            value={data.pincode}
            id="pincode"
            placeholder="Pin Code"
          />
        </div>
      </Col>

      <Col md={24}>
        <div className="contact-input">
          <input
            value={data.phone}
            type="number"
            onChange={(e) => adddressDatahandler(e)}
            id="phone"
            placeholder="Phone"
            pattern="[789][0-9]{9}"
          />
        </div>

        <div className="redText">Please Enter the required fields *</div>
      </Col>

      <Col md={8}>
        <button
          onClick={() => saveInfoHandler()}
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

// @ts-nocheck
import React, { useState } from "react";
import { Collapse } from "antd";
import { Radio } from "antd";
import { Col } from "antd";
import { Row } from "antd";
import Details from "./component/Details";
import PaymentPanel from "./component/paymentPanel";
const { Panel } = Collapse;

const AddInfo = ({ setState }) => {
  let details = JSON.parse(localStorage.getItem("THBD43Sdfs324"));

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e);

    if (Number(e) === 1 || e === "1") {
      document.getElementById("sdrtsad").click();
    } else {
      document.getElementById("erwwsdv").click();
    }
  };

  return (
    <>
      <Details setState={setState} />

      <div className="payment-heading">
        <h4>Payment</h4>
        <p>All transactions are secure and encrypted.</p>
      </div>

      <PaymentPanel />

      <div className="payment-heading">
        <h4>Billing address</h4>
        <p>Select the address that matches your card or payment method.</p>
      </div>

      <Radio.Group
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%" }}
      >
        <Collapse
          activeKey={value}
          onChange={(e) => onChange(e)}
          accordion
          className="payment-panel"
        >
          <Panel
            id="posada"
            showArrow={false}
            header={
              <Radio id="sdrtsad" value={1}>
                <div style={{ fontSize: "15px" }}>Same as shipping address</div>
              </Radio>
            }
            key={1}
          >
            <div>
              <p>
                {details.email},{details.phone}
              </p>
              <p style={{ marginTop: "4px" }}>
                {details.building},{details.address} ,<br />
                {details.city} ,{details.state}-{details.pincode}, India
              </p>
            </div>
          </Panel>

          <Panel
            showArrow={false}
            id="posada"
            header={
              <Radio id="erwwsdv" value={2}>
                <div style={{ fontSize: "15px" }}>
                  Use a different billing address
                </div>
              </Radio>
            }
            key={2}
          >
            <div className="panel-desc">
              <Row>
                <Col md={24}>
                  <div className="contact-input shopping-area">
                    <select>
                      <option>India</option>
                    </select>
                  </div>
                </Col>

                <Col md={11}>
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
                    <span>
                      Keep me updated on the latest launches & offers.
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </Panel>
        </Collapse>
      </Radio.Group>

      <div className="return-btn">
        <div>
          <span onClick={() => setState(true)}> Return to shipping </span>
        </div>
        <button
          className="btnContained"
          style={{
            cursor: "pointer",
            width: "220px",
          }}
        >
          <span>Complete order</span>
        </button>
      </div>
    </>
  );
};
export default AddInfo;

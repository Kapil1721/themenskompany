import React from "react";
import { Collapse } from "antd";
import { Radio } from "antd";
import { Col } from "antd";
import { Row } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const paytm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Radio value={1}>
        {" "}
        <div style={{ fontSize: "15px" }}>paytm</div>
      </Radio>
      <div style={{ width: "40%" }}>
        <img src="https://themenskompany.com/staticData/payments.webp" alt="" />
      </div>
    </div>
  );
};
const phonepay = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Radio value={1}>
        <div style={{ fontSize: "15px" }}>Phonepay</div>
      </Radio>
      <div style={{ width: "40%" }}>
        <img src="https://themenskompany.com/staticData/payments.webp" alt="" />
      </div>
    </div>
  );
};

const AddInfo = () => (
  <>
    <div className="payment-top">
      <Row className="payment-top-desc">
        <Col md={5}>
          <h5>Contact</h5>
        </Col>

        <Col md={15}>
          <p>wuvovyk@mailinator.com</p>
        </Col>

        <Col md={4}>
          <a href="##">Change</a>
        </Col>
      </Row>
      <Row className="payment-top-desc">
        <Col md={5}>
          <h5>Ship to</h5>
        </Col>

        <Col md={15}>
          <p>
            15 White Second Avenue, Incididunt aut accus, 110096 Perferendis ut
            iusto DL, India
          </p>
        </Col>

        <Col md={4}>
          <a href="##">Change</a>
        </Col>
      </Row>
      <Row className="payment-top-desc" style={{ border: "none" }}>
        <Col md={5}>
          <h5>Method</h5>
        </Col>

        <Col md={15}>
          <p>
            Standard · <b>Free</b>
          </p>
        </Col>
      </Row>
    </div>
    <div className="payment-heading">
      <h4>Payment</h4>
      <p>All transactions are secure and encrypted.</p>
    </div>
    <Collapse accordion className="payment-panel">
      <Panel showArrow={false} header={paytm()} key="1">
        <div className="panel-desc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-252.3 356.1 163 80.9"
            role="img"
            class="eHdoK"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"
            ></path>
            <circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle>
            <circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle>
            <circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle>
            <path
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"
            ></path>
          </svg>
          <p>
            After clicking “Pay now”, you will be redirected to Paytm
            <br /> Payment Gateway to complete your purchase securely.
          </p>
        </div>
      </Panel>
      <Panel showArrow={false} header={phonepay()} key="2">
        <div className="panel-desc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-252.3 356.1 163 80.9"
            role="img"
            class="eHdoK"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"
            ></path>
            <circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle>
            <circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle>
            <circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle>
            <path
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"
            ></path>
          </svg>
          <p>
            After clicking “Pay now”, you will be redirected to PayU
            <br /> to complete your purchase securely.
          </p>
        </div>
      </Panel>
      <Panel
        showArrow={false}
        header={
          <Radio value={3}>
            {" "}
            <div style={{ fontSize: "15px" }}>Cash on Delivery (COD)</div>
          </Radio>
        }
        key="3"
      ></Panel>
    </Collapse>
    <div className="payment-heading">
      <h4>Billing address</h4>
      <p>Select the address that matches your card or payment method.</p>
    </div>
    <Collapse accordion className="payment-panel">
      <Panel
        showArrow={false}
        header={
          <Radio value={3}>
            {" "}
            <div style={{ fontSize: "15px" }}>Same as shipping address</div>
          </Radio>
        }
        key="3"
      ></Panel>
      <Panel
        showArrow={false}
        header={
          <Radio value={3}>
            {" "}
            <div style={{ fontSize: "15px" }}>
              Use a different billing address
            </div>
          </Radio>
        }
        key="2"
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
          </Row>
        </div>
      </Panel>
    </Collapse>

    <div className="return-btn">
      <div>
        <a href="##"> Return to shipping </a>
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

export default AddInfo;

import React from "react";
import { Breadcrumb, Col, Row } from "antd";
import GuestDetails from "../section/guestCheckout/guestDetails";
import { useState } from "react";
import AddInfo from "../section/guestCheckout/addInfo";

const GuestCheckout = () => {
  const [state, setState] = useState(true);

  return (
    <div>
      <div className="guest-checkout-section">
        <div className="guest-checkout-form">
          <div className="guest-checkout-form-inner">
            <div className="form-header">
              <img src="/themenskomapnay.logo.webp" alt="" />
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span
                    onClick={() => setState(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Details
                  </span>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                  <span
                    onClick={() => setState(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Payment
                  </span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Row gutter={10}>
              {state ? <GuestDetails setState={setState} /> : <AddInfo />}
            </Row>
          </div>
        </div>
        <div className="guest-checkout-desc"></div>
      </div>
    </div>
  );
};

export default GuestCheckout;

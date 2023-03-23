import { Row } from "antd";
import React from "react";

const ShippingPolicy = () => {
  return (
    <Row justify="center" style={{ padding: "40px 0" }}>
      <div id="policy-container">
        <div className="heading">SHIPPING POLICY</div>

        <div className="paragraph-page">
          The Men’s Kompany ships its products across India. Read and learn our
          shipping policy for more information regarding our shipping process.
        </div>

        <div className="sub-heading">SHIPPING POLICY FOR INDIAN CUSTOMERS</div>

        <div className="paragraph">
          <li style={{ marginTop: "30px", listStyle: "auto" }}>
            Shipping is completely free on all orders above ₹10,000.
          </li>

          <li style={{ listStyle: "auto" }}>
            When you order products less than ₹10,000, you need to pay a
            shipping fee of ₹100.
          </li>

          <li style={{ listStyle: "auto" }}>
            COD (Cash-on-Delivery) payment option is available on orders up to ₹
            10,000.
          </li>

          <li style={{ listStyle: "auto" }}>
            To fulfill our domestic orders, we use Shiprocket.
          </li>

          <li style={{ listStyle: "auto" }}>
            Once we properly pack your product, it is typically delivered within
            3-7 days. The Men’s Kompany has partnered with reputed courier
            partners so that your product/s reaches on time.
          </li>

          <li style={{ listStyle: "auto" }}>
            Customized orders will take up to 20-25 days to arrive at your
            doorstep. We dispatch the products as soon as they are packed (above
            ₹2000).
          </li>

          <li style={{ marginBottom: "30px", listStyle: "auto" }}>
            Once your product is shipped, you will get the tracking information
            via email.
          </li>
        </div>
      </div>
    </Row>
  );
};

export default ShippingPolicy;

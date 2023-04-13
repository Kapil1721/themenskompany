import { Col, Row } from "antd";
import React from "react";

const OrderDetail = () => {
  return (
    <div className="gcheckout-main">
      <Row justify="space-between" align="middle" gutter={[0, 20]}>
        <Col sm={3}>
          <div className="gcheckout-pimge">
            <img
              src="https://cdn.shopify.com/s/files/1/0618/3183/9957/products/01_63a20998-eb89-46d5-94b7-ac47a2e8a39a_64x64.jpg?v=1680613675"
              alt=""
            />
          </div>
        </Col>

        <Col sm={15}>
          <div className="product-info">Cobalt Check</div>
          <div className="product-de">Navy / XXL / Casual Slim</div>
        </Col>

        <Col sm={4}>
          <div className="product-info">₹ 4,490.00</div>
        </Col>

        <Col xs={24}>
          <Row justify="space-between">
            <Col lg={18} xs={15}>
              <input type="text" id="Couponcodes" placeholder="Coupon Code" />
            </Col>

            <Col xxl={5} xl={8} xs={9}>
              <button>
                <span>Apply</span>
              </button>
            </Col>
          </Row>
        </Col>

        <Col xs={24}>
          <div className="gcheckout-sum">
            <div className="title">Subtotal</div>
            <div className="amt">₹ 4,490.00</div>
          </div>

          <div className="gcheckout-sum">
            <div className="title">Shipping</div>
            <div className="amt">Free</div>
          </div>

          <div className="gcheckout-sum">
            <div className="title-bld">Total</div>
            <div className="amt-blder">₹ 4,490.00</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetail;

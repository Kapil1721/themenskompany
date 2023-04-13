import { Col, Row } from "antd";
import React from "react";
import StyledButton from "../../components/style/button";

const OrderDetail = () => {
  return (
    <div>
      <Row justify={"space-around"} align="middle">
        <Col sm={3}>
          <div className="kamlesh singh">
            <img
              src="https://cdn.shopify.com/s/files/1/0618/3183/9957/products/01_63a20998-eb89-46d5-94b7-ac47a2e8a39a_64x64.jpg?v=1680613675"
              alt=""
            />
          </div>
        </Col>

        <Col sm={14}>
          <div className="">Cobalt Check</div>
          <div className="">Navy / XXL / Casual Slim</div>
        </Col>

        <Col sm={3}>
          <div>₹ 4,490.00</div>
        </Col>

        <Col xs={24}>
          <Row>
            <Col lg={14} xs={15} style={{ marginTop: "7px" }}>
              <input type="text" id="Couponcodes" placeholder="Coupon Code" />
            </Col>

            <Col xxl={8} xl={8} lg={9} md={9} sm={9} xs={9}>
              <StyledButton sx={{ padding: "13px" }} varinat={"Contained"}>
                Apply
              </StyledButton>
            </Col>
          </Row>
        </Col>

        <Col xs={24}>
          <div className="gcheckout-sum">
            <div className="">Subtotal</div>
            <div className="">₹4,490.00</div>
          </div>

          <div className="gcheckout-sum">
            <div className="">Shipping</div>
            <div className="">Free</div>
          </div>

          <div className="gcheckout-sum">
            <div className="">Total</div>
            <div className="">₹4,490.00</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetail;

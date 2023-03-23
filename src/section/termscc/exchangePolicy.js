import { Row } from "antd";
import React from "react";

const ExchangePolicy = () => {
  return (
    <Row justify="center" style={{ padding: "40px 0" }}>
      <div id="policy-container">
        <div className="heading">EXCHANGE POLICY</div>

        <div
          className="heading"
          style={{ textDecoration: "underline", fontSize: "30px" }}
        >
          IS THE PRODUCT DELIVERED TO YOU TOO TIGHT OR TOO LOOSE? DO YOU WANT A
          SMALLER OR BIGGER SIZE?
        </div>

        <div className="paragraph">
          <li>
            By visiting the ‘My Account’ section of The Men’s Kompany store, you
            can request an exchange or directly reach us by dropping an email at
            &nbsp;
            <a href="mailto:support@themenskompany.com">
              support@themenskompany.com
            </a>{" "}
            and mentioning the required size and dimensions for the exchange. We
            will revert you with a response within 24 working hours.
          </li>

          <li>
            We will schedule a delivery person to pick up the previously
            delivered product and release a fresh piece from our stock with the
            right size towards your location.
          </li>

          <li>
            Whenever you experience a size problem, we can replace it with any
            size you need.
          </li>

          <li>
            The product must be unworn/unused if you want an exchange. Plus, you
            need to make the exchange request within three days of receiving the
            parcel.
          </li>

          <li>
            If you have received exchange for a product, it won’t be eligible
            for returns or exchange anymore.
          </li>

          <li>
            In any event, if your required size or color is unavailable in our
            inventory, our regular return and cancellation policy will continue
            to apply.
          </li>
        </div>

        <div
          className="heading"
          style={{ textDecoration: "underline", fontSize: "30px" }}
        >
          DO YOU WANT TO RETURN YOUR PURCHASED PRODUCT AND PURCHASE A NEW
          PRODUCT BY ADJUSTING FROM THE ALREADY PAID AMOUNT?
        </div>

        <div className="paragraph">
          <li>
            This can be done when you drop us a return request from the ‘My
            Account’ section or email us at &nbsp;
            <a href="mailto:support@themenskompany.com">
              support@themenskompany.com
            </a>{" "}
            You also need to mention whether you want The Men’s Kompany credit
            for your delivered product. We will resolve your request within 24
            working hours.
          </li>

          <li>
            We will schedule a delivery guy to pick up the previously delivered
            product.
          </li>

          <li>
            The returned product should be in its original condition. It must
            not be used or worn, and you need to make the request within 3 days
            of delivery.
          </li>

          <li>
            Once we receive the product in its original condition, we will be
            providing you with The Men’s Kompany store credit. You can use the
            credited amount in your next purchase.
          </li>

          <li>
            We issue The Men’s Kompany store credit within 24 hours of receiving
            the product back to our facility.
          </li>
        </div>
      </div>
    </Row>
  );
};

export default ExchangePolicy;

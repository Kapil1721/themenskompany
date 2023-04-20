import { Col, Divider, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PDC_IMAGE } from "../../constants/path-constant";
import { Link } from "react-router-dom";
import { CART } from "../../constants/route-path";

const OrderDetail = () => {
  // @ts-ignore
  const { cartItem } = useSelector((e) => e.cartReducer);
  const [state, setstate] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItem.forEach((e) => {
      sum += Number(e.totalPrice);
    });

    setstate(sum);
  }, []);

  return (
    <div className="gcheckout-main">
      <Row justify="space-between" align="middle" gutter={[0, 20]}>
        {cartItem.map((e) => (
          <>
            <Col sm={3}>
              <div className="gcheckout-pimge">
                <img src={PDC_IMAGE + e.image} alt={e.image} />
              </div>
            </Col>

            <Col sm={15}>
              <div className="product-info">{e.name}</div>
              <div className="product-de">
                {e.size} / {e.quantity}
              </div>
            </Col>

            <Col sm={4}>
              <div className="product-info">₹ {Number(e.price).toFixed(2)}</div>
            </Col>
          </>
        ))}

        <Col sm={24}>
          <Link to={CART}>
            <span className="spantkdb">Edit</span>
          </Link>
        </Col>

        <Divider />

        {/* <Col xs={24}>
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
        </Col> */}

        <Col xs={24}>
          <div className="gcheckout-sum">
            <div className="title">Subtotal</div>
            <div className="amt">₹ {state}.00</div>
          </div>

          <div className="gcheckout-sum">
            <div className="title">Shipping</div>
            <div className="amt">Free</div>
          </div>

          <div className="gcheckout-sum">
            <div className="title-bld">Total</div>
            <div className="amt-blder">₹ {state}.00</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetail;

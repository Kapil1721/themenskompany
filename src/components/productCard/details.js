import React, { useState } from "react";

import { Col, Row, message, Select, Modal } from "antd";
import StyleButton from "../style/button";
import { useDispatch } from "react-redux";

import { ADD_ITEM } from "../../actions/cart-action";
import { Link } from "react-router-dom";
import Popup from "./popup";

const Details = ({ data, image }) => {
  const [count, setCount] = useState(1);

  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const carthandler = (id, name, price) => {
    if (count === 0) {
      messageApi.warning("Please select Quantity");
    } else if (size === "") {
      messageApi.warning("Please select Size");
    } else {
      dispatch({
        type: ADD_ITEM,
        payload: {
          id: id,
          name: name,
          image: image[0].image,
          price: price,
          totalPrice: price,
          size: size,
          quantity: count,
          customize: false,
        },
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }
  };

  return (
    <>
      {contextHolder}

      <div className="popup-details-card">
        <div className="pName">{data?.name}</div>

        <div className="pPrice">₹ {data?.price}</div>

        <div className="product_cateskus">
          <div>
            <span>SKU</span> : {data.sku}
          </div>
          <span>Categories</span> :
          {data.categories.split(",").map((e) => (
            <Link to="#">{e} ,</Link>
          ))}
        </div>

        <div className="product_cateskus">
          <div>
            <span>Tags</span> : {data.tags.split(",").map((e) => `  ${e},`)}
          </div>
        </div>

        <div>
          <Select
            defaultValue="Select A Size"
            style={{ width: "100%" }}
            size="large"
            onChange={(e) => setSize(e)}
            options={data.size.split(",").map((e) => {
              return { lable: e.toUpperCase(), value: e.toUpperCase() };
            })}
          />
        </div>

        <div className="note">
          *The colors seen in the image may vary from the actual product due to
          different computer screen resolutions and displays
        </div>

        <div className="modal_dutton">
          <Row justify="center">
            <Col
              span={2}
              onClick={() =>
                setCount((count) => (count > 1 ? count - 1 : count))
              }
            >
              <div className="minus_key"> -</div>
            </Col>

            <Col span={3}>
              <div className="number">{count}</div>
            </Col>

            <Col
              span={2}
              onClick={() =>
                setCount((count) => (count < 5 ? count + 1 : count))
              }
            >
              <div className="plus_key">+</div>
            </Col>
          </Row>

          <StyleButton
            onClick={() => carthandler(data?.id, data?.name, data?.price)}
            sx={{ marginTop: "19px" }}
            varinat={"Contained"}
          >
            ADD TO CART
          </StyleButton>
        </div>
      </div>

      <Modal open={success} onCancel={() => setSuccess(false)} footer="">
        <Popup />
      </Modal>
    </>
  );
};

export default Details;

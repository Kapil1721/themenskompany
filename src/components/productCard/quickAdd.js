import { Col, Row, Select, Space, message, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../actions/cart-action";
import StyleButton from "../style/button";
import Popup from "./popup";

const QuickAdd = ({ data, setQuick }) => {
  const [count, setCount] = useState(1);

  const [size, setSize] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

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
          image: data.image,
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

      setQuick(false);
    }
  };
  return (
    <>
      <Col span={24}>
        {contextHolder}
        <Row justify="space-between">
          <Col span={5}>
            <div className="adghd">Name</div>
          </Col>

          <Col span={5}>
            <div className="adghd">size</div>
          </Col>

          <Col span={5}>
            <div className="adghd">Qty</div>
          </Col>

          <Col span={5}>
            <div className="adghd">price</div>
          </Col>
        </Row>

        <Row justify="space-between" style={{ margin: "18px 0" }}>
          <Col span={5}>
            <div>{data?.name.slice(0, 20) + ".."}</div>
          </Col>

          <Col span={5}>
            <div>
              <Select
                defaultValue="Select A Size"
                style={{ width: "100%" }}
                size="medium"
                onChange={(e) => setSize(e)}
                options={data.size.split(",").map((e) => {
                  return { lable: e.toUpperCase(), value: e.toUpperCase() };
                })}
              />
            </div>
          </Col>

          <Col span={4}>
            <div className="adghd">
              <Row justify="space-between">
                <Col
                  span={2}
                  onClick={() =>
                    setCount((count) => (count > 1 ? count - 1 : count))
                  }
                >
                  <div className="plus_key">-</div>
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
            </div>
          </Col>

          <Col span={5}>
            <div className="adghd">{data?.price * count}</div>
          </Col>
        </Row>

        <Space direction="horizontal">
          <StyleButton
            onClick={() => carthandler(data?.id, data?.name, data?.price)}
            sx={{ marginTop: "19px" }}
            varinat={"Contained"}
          >
            ADD TO CART
          </StyleButton>

          <StyleButton
            onClick={() => setQuick(false)}
            sx={{ marginTop: "19px" }}
            varinat={"Border"}
          >
            Cancel
          </StyleButton>
        </Space>
      </Col>

      <Modal open={success} onCancel={() => setSuccess(false)} footer="">
        <Popup />
      </Modal>
    </>
  );
};

export default QuickAdd;

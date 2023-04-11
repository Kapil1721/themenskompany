import { Col, Row, Select, Space, message } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_ITEM } from "../../actions/cart-action";
import { CHECKOUT } from "../../constants/route-path";
import StyleButton from "../style/button";

const BuyNow = ({ data, setQuick }) => {
  const [count, setCount] = useState(1);

  const [size, setSize] = useState("");

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

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

      navigate({
        pathname: CHECKOUT,
        search: "coupon=false",
      });
    }
  };

  return (
    <div class="modal_content">
      <div class="modal_img_desc">
        <div class="img">
          <img src="https://thetestingserver.com/themenskompany/product/p33_image_1.jpg"></img>
        </div>
        <div class="img_content">
          <h6>River Blue Grid</h6>
          <p>₹ 4,990</p>
          <a href="###">VIEW DETAILS</a>
        </div>
      </div>
      <div class="modal_size_btn">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        <button>XXL</button>
      </div>

      <div class="modal_default_size">
        <button>REGULAR</button>
        <button>SLIM</button>
      </div>
      <div class="modal_cart_btn">
        <button>ADD TO BAG</button>
      </div>
    </div>
  );
};

export default BuyNow;

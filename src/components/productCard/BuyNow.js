import { message } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ADD_ITEM } from "../../actions/cart-action";
import { CHECKOUT } from "../../constants/route-path";

const BuyNow = ({ data, setQuick }) => {
  const [size, setSize] = useState("xxl");

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();

  const carthandler = (id, name, price) => {
    dispatch({
      type: ADD_ITEM,
      payload: {
        id: id,
        name: name,
        image: data.image,
        price: price,
        totalPrice: price,
        size: size,
        quantity: 1,
        customize: false,
      },
    });
    setTimeout(
      () =>
        navigate({
          pathname: CHECKOUT,
          search: "coupon=false",
        }),
      0
    );
  };

  return (
    <div class="modal_content">
      {contextHolder}
      <div class="modal_img_desc">
        <div class="img">
          <img
            src="https://thetestingserver.com/themenskompany/product/p33_image_1.jpg"
            alt=""
          />
        </div>

        <div class="img_content">
          <h6>{data?.name.slice(0, 20) + ".."}</h6>
          <p>₹ {data?.price}</p>
          <Link>VIEW DETAILS</Link>
        </div>
      </div>

      <div class="modal_size_btn">
        {data.size.split(",").map((e, i) => (
          <button
            key={i}
            onClick={() => setSize(e)}
            className={size.toUpperCase() === e ? "active" : ""}
          >
            {e}
          </button>
        ))}
      </div>

      <div class="modal_cart_btn">
        <button onClick={() => carthandler(data?.id, data?.name, data?.price)}>
          proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default BuyNow;

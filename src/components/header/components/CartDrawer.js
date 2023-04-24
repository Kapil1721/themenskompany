import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PDC_IMAGE } from "../../../constants/path-constant";
import {
  INCREASE_QUANTITY,
  REMOVE_ITEM,
  DELETE_ITEM,
} from "../../../actions/cart-action";
import { useNavigate } from "react-router-dom";
import { CART, SHOP } from "../../../constants/route-path";
import { GUESTCHECKOUT } from "../../../constants/route-path";

const CartDrawer = ({ setCartMod }) => {
  const { cartItem, totalQuantity } = useSelector((e) => e.cartReducer);
  const { userId } = useSelector((e) => e.userReducer);

  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const addHandler = (id) => {
    dispatch({ type: INCREASE_QUANTITY, payload: id });
  };

  const decreasehandler = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const deleteHandler = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
  };

  console.log(totalQuantity);

  return (
    <>
      {totalQuantity !== 0 ? (
        <div className="side_cart">
          {cartItem.map((el, i) => (
            <div className="side_cart_box" key={i}>
              <div className="cart-img">
                <img src={PDC_IMAGE + el.image} />
              </div>
              <div className="cart-desc">
                <h4>{el.name}</h4>
                <p>{el.size}</p>
                <h4>₹ {el.price}</h4>
                <div className="action-btns">
                  <div className="cancel-icon">
                    <Icon
                      cursor="pointer"
                      icon="mdi:cancel-bold"
                      onClick={() => deleteHandler(el.id)}
                    />
                  </div>

                  <div class="product-count">
                    <button
                      disabled={Number(el.quantity) === 1}
                      onClick={() =>
                        decreasehandler(Number(el.quantity) === 1 ? 0 : el.id)
                      }
                      class="button-count no-active"
                    >
                      -
                    </button>

                    <input
                      type="text"
                      readonly
                      class="number-product"
                      value={el.quantity}
                    />

                    <button
                      onClick={() =>
                        addHandler(Number(el.quantity) === 5 ? 0 : el.id)
                      }
                      class="button-count"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="proceed_btns">
            <button
              onClick={() => {
                Navigate(CART);
                setCartMod(false);
              }}
            >
              VIEW CART
            </button>

            <button
              onClick={() => {
                Navigate(userId ? CART : GUESTCHECKOUT);
                setCartMod(false);
              }}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="emptybag">
            <Icon icon="solar:bag-3-linear" fontSize={100} color="#dbdbdb" />

            <span>You have no items in your bag.</span>

            <div className="asdsa">
              <button
                onClick={() => {
                  Navigate(SHOP);
                  setCartMod(false);
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDrawer;

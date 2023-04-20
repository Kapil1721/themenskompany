// @ts-nocheck
import React, { useState } from "react";
import { Collapse } from "antd";
import { Radio } from "antd";

const { Panel } = Collapse;

const PaymentPanel = ({ setOption, option }) => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e);

    if (Number(e) === 1 || e === "1") {
      document.getElementById("1ftd").click();
    } else {
      document.getElementById("2ftd").click();
    }
  };

  return (
    <Radio.Group
      defaultValue={value}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{ width: "100%" }}
    >
      <Collapse
        activeKey={value}
        accordion
        className="payment-panel"
        // @ts-ignore
        onChange={(e) => {
          onChange(e);
          setOption({
            ...option,
            payment: e,
          });
        }}
      >
        <Panel
          id="posada"
          showArrow={false}
          header={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Radio value={1} id="1ftd">
                <div style={{ fontSize: "15px" }}>paytm</div>
              </Radio>
              <div style={{ width: "40%" }}>
                <img
                  src="https://themenskompany.com/staticData/payments.webp"
                  alt=""
                />
              </div>
            </div>
          }
          key={1}
        >
          <div className="panel-desc">
            {svg()}
            <p>
              After clicking “Pay now”, you will be redirected to Paytm
              <br /> Payment Gateway to complete your purchase securely.
            </p>
          </div>
        </Panel>

        <Panel
          id="posada"
          showArrow={false}
          header={
            <Radio value={2} id="2ftd">
              <div style={{ fontSize: "15px" }}>Cash on Delivery (COD)</div>
            </Radio>
          }
          key={2}
        >
          <div className="panel-desc">
            <p>click on “Complete order” to contine cash on delivery Method</p>
          </div>
        </Panel>
      </Collapse>
    </Radio.Group>
  );
};

export default PaymentPanel;

const svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-252.3 356.1 163 80.9"
      role="img"
      className="eHdoK"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="2"
        d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"
      ></path>
      <circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle>
      <circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle>
      <circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle>
      <path
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="2"
        d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"
      ></path>
    </svg>
  );
};

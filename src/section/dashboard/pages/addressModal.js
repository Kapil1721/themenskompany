/* eslint-disable no-useless-concat */
import React from "react";

import { Col, Modal, Row, message } from "antd";

import {
  billAddressPost,
  shipAddressPost,
} from "../../../services/apiServices/apiService";

const AddressModal = ({ open, setOpen, address, setAddress }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const updateHandler = (e) => {
    setAddress({
      ...address,
      [e.target.id]: e.target.value,
    });
  };

  const insertHandler = () => {
    messageApi.open({
      duration: 1,
      type: "loading",
      content: "Loading...",
    });

    if (open.variant === "Primary") {
      billAddressPost("post", address).then((e) => {
        if (e.status === 200) {
          message.success("Billing adddress added successfully");

          setOpen({
            ...open,
            state: false,
          });
        } else {
          message.error("something went wrong try again");
        }
      });
    } else {
      shipAddressPost("post", address).then((e) => {
        if (e.status === 200) {
          message.success("Shipping adddress added successfully");
          setOpen({
            ...open,
            state: false,
          });
        } else {
          message.error("shipping went wrong try again");
        }
      });
    }
  };

  const addressUpdateHandler = () => {
    messageApi.open({
      duration: 1,
      type: "loading",
      content: "Loading...",
    });

    if (open.variant === "Primary") {
      billAddressPost("put", address).then((e) => {
        if (e.status === 200) {
          message.success("Billing adddress updated successfully");

          setOpen({
            ...open,
            state: false,
          });
        } else {
          message.error("something went wrong try again");
        }
      });
    } else {
      shipAddressPost("put", address).then((e) => {
        if (e.status === 200) {
          message.success("Shipping adddress updated successfully");
          setOpen({
            ...open,
            state: false,
          });
        } else {
          message.error("Shipping went wrong try again");
        }
      });
    }
  };

  return (
    <div>
      {contextHolder}
      <Modal
        title={open.variant + " " + "Address"}
        centered
        open={open.state}
        onOk={() =>
          open.action === "Add" ? insertHandler() : addressUpdateHandler()
        }
        onCancel={() =>
          setOpen({
            ...open,
            state: false,
          })
        }
        width={1000}
      >
        <Row justify="space-between" gutter={[10, 0]}>
          <Col xxl={12} lg={12} xl={12} sm={24} xs={24} md={12}>
            <label>
              First Name <span>*</span>
            </label>

            <input
              type="text"
              id="fname"
              onChange={(e) => updateHandler(e)}
              value={address.fname}
              placeholder="first name"
            />
          </Col>

          <Col xxl={12} lg={12} xl={12} sm={24} xs={24} md={12}>
            <label placeholder="first Name">
              Last Name <span>*</span>
            </label>

            <input
              type="text"
              id="lname"
              onChange={(e) => updateHandler(e)}
              value={address.lname}
              placeholder="last name"
            />
          </Col>
        </Row>

        <Row>
          <Col xxl={11} lg={11} xl={11} sm={24} xs={24} md={12}>
            <label placeholder="first Name">
              phone <span>*</span>
            </label>

            <input
              type="number"
              id="phone"
              onChange={(e) => updateHandler(e)}
              value={address.phone}
              placeholder="phone number"
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <label placeholder="first Name">
              Country / Region <span>*</span>
            </label>

            <input
              type="text"
              id="state"
              onChange={(e) => updateHandler(e)}
              value={address.state}
              placeholder="Country / Region"
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <label placeholder="first Name">
              Street address <span>*</span>
            </label>

            <input
              type="text"
              id="streetaddress1"
              onChange={(e) => updateHandler(e)}
              value={address.streetaddress1}
              placeholder="street address 1"
            />

            <input
              type="text"
              id="streetaddress2"
              onChange={(e) => updateHandler(e)}
              value={address.streetaddress2}
              placeholder="street address 2"
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <label placeholder="first Name">
              Town / City <span>*</span>
            </label>

            <input
              type="text"
              id="town"
              onChange={(e) => updateHandler(e)}
              value={address.town}
              placeholder="town city "
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <label placeholder="first Name">
              State / Counrty<span>*</span>
            </label>

            <input
              type="text"
              id="country"
              onChange={(e) => updateHandler(e)}
              value={address.country}
              placeholder="state / country"
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <label placeholder="first Name">
              Postcode / ZIP<span>*</span>
            </label>

            <input
              type="text"
              id="postcode"
              onChange={(e) => updateHandler(e)}
              value={address.postcode}
              placeholder="zip code"
            />
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default AddressModal;

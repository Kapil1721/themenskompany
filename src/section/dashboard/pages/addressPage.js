import React, { useState, useEffect } from "react";

import { Col, Row, Card } from "antd";

import Nav from "../nav";
import AddressModal from "./addressModal";

import {
  billAddress,
  shipAddress,
} from "../../../services/apiServices/apiService";
import { useSelector } from "react-redux";

const AddressPage = () => {
  const { userId } = useSelector((e) => e.userReducer);

  const [shipping, setShipping] = useState({
    fname: "",
    lname: "",
    phone: "",
    streetaddress1: "",
    streetaddress2: "",
    town: "",
    state: "",
    postcode: "",
    userid: userId,
    country: "",
  });

  const [billsAddress, setBillAddress] = useState({
    fname: "",
    lname: "",
    phone: "",
    streetaddress1: "",
    streetaddress2: "",
    town: "",
    state: "",
    postcode: "",
    userid: userId,
    country: "",
  });

  const [open, setOpen] = useState({
    variant: "",
    state: false,
    action: "",
  });

  const [opsen, setOspen] = useState({
    variant: "",
    state: false,
    action: "",
  });

  useEffect(() => {
    billAddress(userId).then((e) => {
      setBillAddress({
        ...billsAddress,
        fname: e.data.data[0].fname,
        lname: e.data.data[0].lname,
        phone: e.data.data[0].phone,
        streetaddress1: e.data.data[0].streetaddress1,
        streetaddress2: e.data.data[0].streetaddress2,
        town: e.data.data[0].town,
        state: e.data.data[0].state,
        postcode: e.data.data[0].postcode,
        country: e.data.data[0].country,
      });
    });

    shipAddress(userId).then((e) => {
      setShipping({
        ...shipping,
        fname: e.data?.data[0].fname,
        lname: e.data?.data[0].lname,
        phone: e.data?.data[0].phone,
        streetaddress1: e.data?.data[0].streetaddress1,
        streetaddress2: e.data?.data[0].streetaddress2,
        town: e.data?.data[0].town,
        state: e.data?.data[0].state,
        postcode: e.data?.data[0].postcode,
        country: e.data?.data[0].country,
      });
    });
  }, []);

  return (
    <>
      <Row justify="center">
        <Col xxl={12} xl={14} lg={18} md={20} sm={20} xs={22}>
          <div className="ccontgy">
            <Row justify="space-between" gutter={[0, 50]}>
              <Col xxl={7} xl={7} lg={7} md={24} sm={24} xs={24}>
                <Nav page={4} />
              </Col>

              <Col xxl={16} xl={16} lg={16} md={22} sm={24} xs={24}>
                <div className="sadlsad">
                  The following addresses will be used on the checkout page by
                  default.
                </div>

                <Row justify="space-between" gutter={[20, 20]}>
                  <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Card
                      title="Billing Address"
                      extra={
                        <p
                          onClick={() =>
                            setOpen({
                              action:
                                billsAddress.fname === "" ? "Add" : "Update",
                              variant: "Primary",
                              state: true,
                            })
                          }
                          className="btnEdit"
                        >
                          {billsAddress.fname === "" ? "Add" : "Edit"}
                        </p>
                      }
                      style={{
                        width: "100%",
                      }}
                    >
                      {billsAddress.fname === "" ? (
                        <div className="jhyh">Add a Billing Address</div>
                      ) : (
                        <div className="address-tag">
                          {billsAddress.fname + " " + billsAddress.lname}
                          <br />
                          {billsAddress.phone}
                          <br />
                          {billsAddress.streetaddress1}
                          <br />
                          {billsAddress.streetaddress2}
                          <br />
                          {billsAddress.town}
                          <br />
                          {billsAddress.state}
                          <br />
                          {billsAddress.postcode}
                          <br />
                          {billsAddress.country}
                        </div>
                      )}
                    </Card>
                  </Col>

                  <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Card
                      title="Shipping Address"
                      extra={
                        <p
                          onClick={() =>
                            setOspen({
                              action: shipping.fname === "" ? "Add" : "Update",
                              variant: "Shipping",
                              state: true,
                            })
                          }
                          className="btnEdit"
                        >
                          {shipping.fname === "" ? "Add" : "Edit"}
                        </p>
                      }
                      style={{
                        width: "100%",
                      }}
                    >
                      {shipping.fname === "" ? (
                        <div className="jhyh">Add a Shipping Address</div>
                      ) : (
                        <div className="address-tag">
                          {shipping?.fname + " " + shipping?.lname}
                          <br />
                          {shipping.phone}
                          <br />
                          {shipping.streetaddress1}
                          <br />
                          {shipping.streetaddress2}
                          <br />
                          {shipping.town}
                          <br />
                          {shipping.state}
                          <br />
                          {shipping.postcode}
                        </div>
                      )}
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <AddressModal
        setOpen={setOpen}
        open={open}
        address={billsAddress}
        setAddress={setBillAddress}
      />

      <AddressModal
        setOpen={setOspen}
        open={opsen}
        address={shipping}
        setAddress={setShipping}
      />
    </>
  );
};

export default AddressPage;

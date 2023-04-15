// @ts-nocheck
import React, { useEffect, useState } from "react";

import { Col, Divider, Checkbox } from "antd";

import Stack from "../../components/style/stack";
import StyleButton from "../../components/style/button";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import {
  billAddress,
  shipAddress,
} from "../../services/apiServices/apiService";

import { Link } from "react-router-dom";

import { ADDRESS } from "../../constants/route-path";

const Address = ({ setAddress }) => {
  const { userId } = useSelector((e) => e.userReducer);

  const [primaryAdd, setprimaryAdd] = useState({});

  const [shipppingAdd, setShipppingAdd] = useState({});

  const [state, setState] = useState(false);

  const [texy, setTexy] = useState("");

  useEffect(() => {
    billAddress(userId).then((e) => {
      setprimaryAdd(e.data.data[0]);
    });

    shipAddress(userId).then((e) => {
      setShipppingAdd(e.data.data[0]);
    });
  }, [state]);

  useEffect(() => {
    setAddress({
      billingaddress: primaryAdd?.id,
      shippingaddress: shipppingAdd?.id,
      different: state,
      information: texy,
    });
  }, [primaryAdd, shipppingAdd, state, texy]);

  return (
    <Col xxl={15} xl={15} lg={15} md={18} xs={22} sm={22}>
      <Stack className="gthssadu_rge">Billing details</Stack>

      <Divider />

      {primaryAdd !== undefined ? (
        <>
          <Stack sx={object.main}>
            <Stack sx={object.icon}>
              <Icon icon="mdi:user" fontSize="30px" />
            </Stack>

            <Stack sx={object.inner}>
              <Stack>
                <Stack className={"gthu_saasd"}>
                  {primaryAdd.fname} {primaryAdd.lname}
                </Stack>
                <Stack className={"gthu_saasd"}>
                  {primaryAdd.streetaddress1}
                </Stack>
              </Stack>

              <Stack>
                <Stack className={"gthu_saasd"}>+91 {primaryAdd.phone}</Stack>
                <Stack className={"gthu_saasd"}>{primaryAdd.town}</Stack>
              </Stack>
            </Stack>

            <Stack sx={object.button}>
              <Link to={ADDRESS} style={{ width: "100%" }}>
                <StyleButton varinat="Contained">Edit</StyleButton>
              </Link>
            </Stack>
          </Stack>

          <Stack sx={{ margin: "20px 0" }}>
            <Checkbox onChange={(e) => setState(e.target.checked)}>
              Use Different Shipping Address
            </Checkbox>
          </Stack>
        </>
      ) : (
        <Link to={ADDRESS}>
          <Stack sx={object.p}> Add address </Stack>
        </Link>
      )}

      {state && (
        <Stack>
          {shipppingAdd !== undefined ? (
            <Stack sx={object.main}>
              <Stack sx={object.icon}>
                <Icon icon="mdi:user" fontSize="30px" />
              </Stack>

              <Stack sx={object.inner}>
                <Stack>
                  <Stack className={"gthu_saasd"}>
                    {shipppingAdd.fname} {shipppingAdd.lname}
                  </Stack>
                  <Stack className={"gthu_saasd"}>
                    {shipppingAdd.streetaddress1}
                  </Stack>
                </Stack>

                <Stack>
                  <Stack className={"gthu_saasd"}>
                    +91 {shipppingAdd.phone}
                  </Stack>
                  <Stack className={"gthu_saasd"}>{shipppingAdd.town}</Stack>
                </Stack>
              </Stack>

              <Stack sx={object.button}>
                <Link to={ADDRESS} style={{ width: "100%" }}>
                  <StyleButton varinat="Contained">Edit</StyleButton>
                </Link>
              </Stack>
            </Stack>
          ) : (
            <Link to={ADDRESS}>
              <Stack sx={object.p}> Add shipping address </Stack>
            </Link>
          )}
        </Stack>
      )}

      <Stack className="gthssadu_rge" sx={{ marginTop: "30px" }}>
        Additional information
      </Stack>

      <Divider />

      <Stack>
        <textarea
          name="altenative"
          cols="70"
          rows="10"
          style={{ outline: "none" }}
          onChange={(e) => setTexy(e.target.value)}
        />
      </Stack>
    </Col>
  );
};

export default Address;

const object = {
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #dbdbdb",
    padding: "10px 20px",
    borderRadius: "10px",
  },

  inner: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
  },

  icon: {
    width: "10%",
    display: "flex",
    padding: "10px",
    justifyContent: "space-between",
  },

  button: {
    width: "15%",
    display: "flex",
    justifyContent: "space-between",
  },

  p: {
    color: "black",
    fontSize: "20px",
    fontWeight: "500",
    textDecoration: "underline",
  },
};

// SAhilEgss@1234

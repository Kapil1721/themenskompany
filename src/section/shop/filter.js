// @ts-nocheck
/* eslint-disable no-lone-blocks */
import { Icon } from "@iconify/react";
import {
  Col,
  Row,
  Drawer,
  Breadcrumb,
  Input,
  Checkbox,
  Divider,
  Button,
  Slider,
} from "antd";

import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import StyleButton from "../../components/style/button";

const Filter = ({
  paramsHandler,
  searchHandler,
  setSearchState,
  activeCapsule,
  setActiveCapsule,
  setPriceRange,
  state,
  len,
}) => {
  const [SearchParams, setSearchParams] = useSearchParams();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="shop_filer_container">
        <Row gutter={[0, 30]} align="middle">
          <Col xxl={10} xl={10} lg={10} md={10} sm={24} xs={24}>
            <div>
              <Breadcrumb style={{ fontSize: "15px" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Shop</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>

          <Col xxl={4} xl={4} lg={4}>
            <Row>
              <div
                className={activeCapsule === 2 ? "capsule active" : "capsule"}
                onClick={() => setActiveCapsule(2)}
              >
                <span></span>
                <span></span>
              </div>

              <div
                className={activeCapsule === 3 ? "capsule active" : "capsule"}
                onClick={() => setActiveCapsule(3)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Row>
          </Col>

          <Col xxl={10} xl={10} lg={12} md={14} sm={24} xs={24}>
            <Row justify="end" gutter={20} align="middle">
              <Col>
                <p>{len} PRODUCTS</p>
              </Col>

              <Col>
                <p
                  onClick={() => showDrawer()}
                  style={{
                    textDecoration: "underline",
                    fontWeight: "660",
                    cursor: "pointer",
                  }}
                >
                  Filter
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Drawer
        title="Filter"
        placement="left"
        onClose={onClose}
        open={open}
        style={{ position: "relative" }}
      >
        <Row justify="start">
          <Col xs={24}>
            <div>
              <Input.Search
                required={true}
                placeholder="search product"
                style={{
                  width: "100%",
                }}
                onChange={(e) => setSearchState(e.target.value)}
                onSearch={() => searchHandler()}
              />
            </div>
          </Col>

          <Divider />

          <Col xs={24}>
            <div className="filter-text-category">Category</div>
          </Col>

          <Col xs={24}>
            <Checkbox.Group
              defaultValue={SearchParams.get("category")?.split(",")}
              onChange={(e) => paramsHandler(e)}
            >
              <Row style={{ flexDirection: "column" }} gutter={[0, 10]}>
                {ProductData.map((e, i) => (
                  <Col key={i}>
                    <Checkbox value={e.value}>{e.label}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Col>

          <Col xs={24}>
            <div className="filter-text-price">Price</div>
          </Col>

          <Col xs={24}>
            <Slider
              range
              min={0}
              max={10000}
              onAfterChange={(e) => setPriceRange(e)}
              defaultValue={[0, 10000]}
            />
          </Col>
        </Row>

        <Row
          justify="end"
          gutter={[10]}
          style={{ position: "absolute", bottom: "20px", width: "80%" }}
        >
          <Col span={12}>
            <StyleButton
              onClick={onClose}
              sx={{ marginTop: "19px" }}
              varinat={"Border"}
            >
              Reset
            </StyleButton>
          </Col>

          <Col span={12}>
            <StyleButton
              onClick={onClose}
              sx={{ marginTop: "19px" }}
              varinat={"Contained"}
            >
              close
            </StyleButton>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default Filter;

const ProductData = [
  {
    label: "Latest Arrival",
    value: "Latest Arrival",
  },
  {
    label: "Feature",
    value: "Feature",
  },
  {
    label: "Kurta",
    value: "Kurta",
  },
  {
    label: "Pants",
    value: "Pants",
  },
  {
    label: "Shirt",
    value: "Shirt",
  },
];

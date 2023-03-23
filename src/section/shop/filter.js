import { Icon } from "@iconify/react";
import { Col, Row, Select, Input, Breadcrumb } from "antd";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = ({ paramsHandler, searchHandler, setSearchState }) => {
  const [SearchParams, setSearchParams] = useSearchParams();

  return (
    <div className="shop_filer_container">
      <Row gutter={[0, 30]}>
        <Col xxl={12} xl={12} lg={10} md={10} sm={24} xs={24}>
          <div>
            <Breadcrumb style={{ fontSize: "15px" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Shop</Breadcrumb.Item>
              <Breadcrumb.Item>{SearchParams.get("category")}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Col>

        <Col xxl={12} xl={12} lg={14} md={14} sm={24} xs={24}>
          <Row justify="end">
            <Col xxl={7} xl={8} lg={10} md={10} sm={9} xs={11}>
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

            <Col
              xxl={6}
              xl={6}
              lg={7}
              md={7}
              sm={10}
              xs={7}
              style={{ margin: "0 30px" }}
            >
              <Select
                defaultValue="category"
                style={{ width: 180 }}
                onChange={(e) => paramsHandler(e)}
                bordered={false}
                options={ProductData.map((e) => {
                  return { value: e.name, label: e.name };
                })}
              />
            </Col>

            <Col xxl={1} xl={1} lg={2} md={1} sm={2} xs={1}>
              {SearchParams.get("category") !== null ? (
                <div className="togs" onClick={() => setSearchParams("")}>
                  <Icon icon="system-uicons:reset" />
                </div>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;

const ProductData = [
  {
    id: 1,
    name: "Latest Arrival",
  },
  {
    id: 2,
    name: "Feature",
  },
  {
    id: 3,
    name: "Kurta",
  },
  {
    id: 4,
    name: "Pants",
  },
  {
    id: 5,
    name: "Shirt",
  },
];

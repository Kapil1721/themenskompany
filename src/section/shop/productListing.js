// @ts-nocheck
import React from "react";
import { Col, Row } from "antd";

import ProductCard from "../../components/productCard/index";

const ProductListing = ({ state, activeCapsule, priceRange, setLen }) => {
  return (
    <Row justify="start" className="tytryt" gutter={[15, 40]}>
      {[]
        .concat(state)
        .reverse()
        .filter((el) => el.price > priceRange[0] && el.price < priceRange[1])
        .map((e, _, array) => {
          setLen(array.length);
          return (
            <Col
              xxl={activeCapsule !== 2 ? 8 : 12}
              xl={activeCapsule !== 2 ? 8 : 12}
              lg={activeCapsule !== 2 ? 8 : 12}
              md={12}
              sm={24}
              xs={24}
              span={8}
              key={e.id}
              // className="howw"textCls="psmall_size"
            >
              <ProductCard
                textCls={activeCapsule === 2 ? "plarge_size" : "psmall_medium"}
                data={e}
              />
            </Col>
          );
        })}
    </Row>
  );
};

export default ProductListing;

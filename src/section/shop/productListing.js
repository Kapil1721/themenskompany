import React from "react";
import { Col, Row } from "antd";

import ProductCard from "../../components/productCard/index";

const ProductListing = ({ state }) => {
  return (
    <Row justify="start" className="tytryt" gutter={[30, 50]}>
      {state.map((e) => (
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          span={8}
          key={e.id}
          // className="howw"
        >
          <ProductCard textCls="plarge_size" data={e} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductListing;

import { Col, Row, message, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

import ProductListing from "../section/shop/productListing";

import { productSearch } from "../services/apiServices/apiService";

const SearchPage = () => {
  const [SearchParams] = useSearchParams();

  const [messageApi, contextHolder] = message.useMessage();

  const [loader, setLoader] = useState(true);

  const [state, setState] = useState([]);

  useEffect(() => {
    let x = SearchParams.get("ge");

    productSearch(x).then((e) => {
      if (e.status === 200) {
        setState(e.data.data);
        setLoader(false);
      } else {
        messageApi.error("something went wrong");
      }
    });
  }, [SearchParams, messageApi]);

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     }
  //   });
  // });

  // const hiddenElement = document.querySelectorAll(".howw");
  // hiddenElement.forEach((e) => observer.observe(e));

  return (
    <>
      {/* <Helmet>
        <title>
          search result for {SearchParams.get("ge")} | The men's kompany World
        </title>
      </Helmet> */}

      {contextHolder}

      <Row justify="center" style={{ margin: "50px 0 " }}>
        <Col span={19} style={{ fontSize: "35px" }}>
          Search Result For{" "}
          <span style={{ textDecoration: "underline" }}>
            {SearchParams.get("ge")}
          </span>
        </Col>
      </Row>

      <Row justify="center" style={{ margin: "50px 0 " }}>
        <Col span={17}>
          <Row justify="start">
            <Col
              xxl={24}
              span={18}
              lg={18}
              md={24}
              xs={24}
              sm={24}
              style={{ position: "relative" }}
            >
              {state.length > 0 ? (
                <ProductListing state={state} />
              ) : (
                <div style={{ width: "60%", margin: "auto" }}>
                  <img
                    src={ "/noproductfound.png"}
                    alt="no product found"
                  />
                </div>
              )}

              {loader && (
                <div className="product-spinner">
                  <Spin style={{ zIndex: "111" }} />
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SearchPage;

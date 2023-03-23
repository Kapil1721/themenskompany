import { Col, Row, Pagination, message, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { useOnce } from "../hooks/useOnce";
import Filter from "../section/shop/filter";
import ProductListing from "../section/shop/productListing";
import {
  productSearch,
  productService,
} from "../services/apiServices/apiService";

const ShopPage = () => {
  const [SearchParams, setSearchParams] = useSearchParams();

  const [messageApi, contextHolder] = message.useMessage();

  const [loader, setLoader] = useState(true);

  const [state, setState] = useState([]);

  const [searchState, setSearchState] = useState([]);

  const [canback, setCanBack] = useState(false);

  useOnce(() => {
    setLoader(true);

    if (SearchParams.get("category")) {
      productService(`product?category=${SearchParams.get("category")}`).then(
        (e) => {
          if (e.status === 200) {
            setState(e.data.data);
            setLoader(false);
            setCanBack(true);
          } else {
            messageApi.error(
              "Something Went Wrong !!Refresh This Page Or Try Again later "
            );
          }
        }
      );
    } else {
      productService("product").then((e) => {
        if (e.status === 200) {
          setState(e.data.data);
          setLoader(false);
          setCanBack(true);
        }
      });
    }
  });

  useEffect(() => {
    if (canback) {
      if (SearchParams.get("category")) {
        productService(`product?category=${SearchParams.get("category")}`).then(
          (e) => {
            if (e.status === 200) {
              setState(e.data.data);
              setLoader(false);
            } else {
              messageApi.error(
                "Something Went Wrong !!Refresh This Page Or Try Again later "
              );
            }
          }
        );
      } else {
        productService("product").then((e) => {
          if (e.status === 200) {
            setState(e.data.data);
            setLoader(false);
          }
        });
      }
    }
    setLoader(true);
  }, [SearchParams, messageApi]);

  const paramsHandler = (cate) => {
    setSearchParams(`category=${cate.toLowerCase()}`);
  };

  const searchHandler = () => {
    setLoader(true);

    productSearch(searchState).then((e) => {
      if (e.status === 200) {
        setState(e.data.data);
        setLoader(false);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Shop | The men's kompany World</title>
      </Helmet>

      <Row>
        <div id="banner">
          <div className="content"> &nbsp; &nbsp; Shop</div>
        </div>
      </Row>

      {contextHolder}

      <Row justify="center">
        <Col
          xxl={15}
          xl={17}
          lg={18}
          md={20}
          sm={22}
          xs={23}
          style={{
            borderBottom: "1px dashed rgb(197 197 197)",
            marginBottom: "50px",
          }}
        >
          <Filter
            paramsHandler={paramsHandler}
            searchHandler={searchHandler}
            setSearchState={setSearchState}
          />
        </Col>
      </Row>

      <Row justify="center" style={{ marginBottom: "60px" }}>
        <Col xxl={15} xl={17} lg={18} md={20} sm={22} xs={23}>
          <Row justify="start">
            <Col span={24} style={{ position: "relative" }}>
              {state.length > 0 ? (
                <ProductListing state={state} />
              ) : (
                <div style={{ width: "60%", margin: "auto" }}>
                  <img src={"/noproductfound.png"} alt="no product found" />
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

export default ShopPage;

import React, { useEffect, useState } from "react";

import { Col, Row, message, Spin, Divider, Modal } from "antd";
import Detail from "../section/ProductDetails/detail";
import ProductImages from "../section/ProductDetails/productImages";

import Customisa from "../section/productCustomise/index";

import Index from "../components/productCard";
import { useParams, useSearchParams } from "react-router-dom";
import {
  productDetails,
  productImages,
  productCustomise,
  productService,
  productCateService,
} from "../services/apiServices/apiService";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../actions/cart-action";
import { Helmet } from "react-helmet-async";
import ProductCard from "../components/productCard/index";

import RecentlyViewed from "../components/recentlyViewed";
import { Icon } from "@iconify/react";
import Popup from "../components/productCard/popup";

const ProductDetails = () => {
  const { pid, cate, title } = useParams();

  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const [customise, setCustomise] = useState(false);

  const [state, setState] = useState([]);

  const [data, setdata] = useState([]);

  const [size, setSize] = useState("");

  const [loader, setLoader] = useState(true);

  const [Imageloader, setImageLoader] = useState(true);

  const [imageState, setImageState] = useState([]);

  const [customiseImage, setCustomiseImage] = useState([]);

  const [cateData, setCateData] = useState([]);

  const [success, setSuccess] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const [productCustomization, setProductCustomization] = useState({
    collar: {
      name: "spread-collar",
      change: false,
      image: "",
    },
    pocket: "",
    pocketState: false,
    placket: {
      name: "Regular-Placket",
      change: false,
      image: "",
    },
    buttons: "black",
    selevesandcuff: {
      name: "long-Sleeve",
      change: false,
      image: "",
    },
    cuff: "",
    base: "",
    back: {
      name: "No-Pleats",
      change: false,
      image: "",
    },
  });

  const [styleCustomise, setStyleCustomise] = useState({
    open: false,
    section: "collar",
  });

  useEffect(() => {
    document.getElementById("foote").style.display = "block";

    productDetails(pid).then((e) => {
      if (e.status === 200) {
        setState(e.data.data[0]);
        setLoader(false);
      } else {
        setLoader(false);
        messageApi.error(
          "Something Went Wrong !!Refresh This Page Or Try Again later"
        );
      }
    });

    productImages(pid).then((e) => {
      if (e.status === 200) {
        setImageState(e.data.data);
        setImageLoader(false);
      } else {
        setImageLoader(false);
        messageApi.error(
          "Something Went Wrong !!Refresh This Page Or Try Again later "
        );
      }
    });

    productCustomise(pid).then((el) => {
      if (el.status === 200) {
        setCustomiseImage(el.data.data);

        el.data.data.map((e) => {
          if (e.name.includes("Spread")) {
            productCustomization.collar.image = e.image;
          } else if (e.name.includes("Regular-Placket")) {
            productCustomization.placket.image = e.image;
          } else if (e.name.includes("long-Sleeve")) {
            productCustomization.selevesandcuff.image = e.image;
          } else if (e.name.includes("cuff")) {
            productCustomization.cuff = e.image;
          } else if (e.name.includes("pocket")) {
            productCustomization.pocket = e.image;
          } else if (e.name.includes("base")) {
            productCustomization.base = e.image;
          }
        });
      } else {
        messageApi.error(
          "Something Went Wrong !!Refresh This Page Or Try Again later "
        );
      }
    });

    productService("product").then((e) => {
      if (e.status === 200) {
        setdata(e.data.data);
      }
    });

    productCateService(cate.toLowerCase()).then((e) => {
      if (e.status === 200) {
        setCateData(e.data.data);
      }
    });
  }, [pid]);

  const customiseCheckHandler = (item) => {
    if (
      item.collar.change === true ||
      item.pocketState === true ||
      item.placket.change === true ||
      item.buttons !== "black" ||
      item.selevesandcuff.change === true ||
      item.back.change === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  const carthandler = (id, name, price) => {
    if (size === "") {
      messageApi.warning("Please select Size");
    } else {
      dispatch({
        type: ADD_ITEM,
        payload: {
          id: id,
          name: name,
          image: imageState[0].image,
          price: price,
          totalPrice: price,
          size: size,
          quantity: 1,
          customize: customiseCheckHandler(productCustomization)
            ? productCustomization
            : false,
        },
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }
  };
  useEffect(() => {
    if (searchParams.get("customise") === "true") {
      setCustomise(true);
    }
  }, [customise, searchParams]);

  const openCustomiseHandler = () => {
    searchParams.set("customise", true);
    setSearchParams(searchParams);
    setCustomise(true);
  };

  const closeCustomiseHandler = () => {
    setSearchParams();
    setCustomise(false);
  };

  return (
    <>
      <Helmet>
        <title>
          {state.name !== undefined ? state?.meta_title : "Details"} | The men's
          kompany World
        </title>
        <meta name="description" content={state.meta_content} />
        <meta name="keywords" content={state.keyword} />
      </Helmet>

      <Row justify="center">
        {!styleCustomise.open ? (
          <Col
            xxl={14}
            xl={16}
            lg={18}
            md={22}
            sm={22}
            xs={22}
            style={{ margin: "60px 0" }}
          >
            <Row justify="center" gutter={[30, 90]}>
              <Col xxl={14} xl={14} lg={13} md={13} sm={20} xs={22}>
                <ProductImages
                  setCustomise={closeCustomiseHandler}
                  setStyleCustomise={setStyleCustomise}
                  customise={customise}
                  state={imageState}
                  productCustomization={productCustomization}
                />

                {Imageloader && (
                  <div className="product-spinner">
                    <Spin style={{ zIndex: "111" }} />
                  </div>
                )}
              </Col>

              {contextHolder}

              <Col xxl={10} xl={10} lg={11} md={11} sm={22} xs={22}>
                <Detail
                  setSize={setSize}
                  carthandler={carthandler}
                  state={state}
                  setCustomise={openCustomiseHandler}
                />

                {loader && (
                  <div className="product-spinner">
                    <Spin style={{ zIndex: "111" }} />
                  </div>
                )}
              </Col>
            </Row>
          </Col>
        ) : (
          <Col span={24}>
            <Customisa
              productCustomization={productCustomization}
              setProductCustomization={setProductCustomization}
              setStyleCustomise={setStyleCustomise}
              styleCustomise={styleCustomise}
            />
          </Col>
        )}
      </Row>

      <Divider />

      <Row justify="center" style={{ marginTop: "70px" }} className="mmukbd">
        <Col xxl={17} xl={18} lg={18} md={20} sm={22} xs={23}>
          <div className="lasd">You May Also Like</div>
        </Col>
      </Row>

      <Row justify="center" className="mmukbd">
        <Col xxl={17} xl={18} lg={18} md={20} sm={22} xs={23}>
          <Row justify="start" style={{ padding: "50px 0", margin: "auto" }}>
            <Col span={24} style={{ position: "relative" }}>
              <Row justify="start" className="tytryt" gutter={[15, 15]}>
                {cateData
                  .filter((_, i) => i < 4 && _.id !== pid)
                  .map((e) => (
                    <Col
                      xxl={6}
                      xl={6}
                      lg={10}
                      md={8}
                      sm={12}
                      xs={12}
                      span={8}
                      key={e.id}
                    >
                      <ProductCard textCls="psmall_size" data={e} />
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="center" className="mmukbd">
        <Col xxl={17} xl={18} lg={18} md={20} sm={22} xs={23}>
          <Row justify="start" style={{ padding: "10px 0 90px 0" }}>
            <Col span={24} style={{ position: "relative" }}>
              <RecentlyViewed />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        className="mmukbd"
        justify="center"
        style={{
          paddingBottom: "62px",
          borderBottom: "2px solid",
          background: "#F8F6F2",
        }}
      >
        <Col span={24}>
          <div className="lasd " style={{ padding: "30px 0" }}>
            Need Help ?
          </div>

          <Row justify="center">
            <Col xxl={16} xl={18} lg={20} md={20} sm={14} sx={14}>
              <Row gutter={[10, 10]} justify="space-between">
                {NEDHLPSEC.map((w, i) => (
                  <Col xxl={6} xl={8} lg={8} md={12} sm={24} sx={24} key={i}>
                    <div className="conatac">
                      <div className="icomv">
                        <Icon fontSize="2pc" icon={w.icon} />
                      </div>

                      <div>
                        <p>{w.upper}</p>
                        <p>{w.lower}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal open={success} onCancel={() => setSuccess(false)} footer="">
        <Popup />
      </Modal>
    </>
  );
};

export default ProductDetails;

const NEDHLPSEC = [
  {
    icon: "ic:baseline-local-phone",
    upper: "+918287819178",
    lower: "(Mon - Fri, 10:00-6:30 IST)",
  },
  {
    icon: "logos:whatsapp-monochrome-icon",
    upper: "+918287819178",
    lower: "(Mon - Fri, 10:00-6:30 IST)",
  },
  {
    icon: "line-md:email",
    upper: "support@themenskompany.com",
    lower: "(Typical response time: 24 hours)",
  },
];

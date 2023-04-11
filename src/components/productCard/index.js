import React, { useState, useEffect, useRef } from "react";
import Stack from "../style/stack";

import { Col, Modal, Row, Card } from "antd";
import ImageSlide from "./imageSlide";
import Details from "./details";

import { Link, useNavigate } from "react-router-dom";

import { PRODUCTDETAILS, AUTH } from "../../constants/route-path";

import { PDC_IMAGE } from "../../constants/path-constant";

import { productImages } from "../../services/apiServices/apiService";

import LazyImage from "../lazyImage/index";

import QuickAdd from "./quickAdd";
import { useSelector } from "react-redux";
import BuyNow from "./BuyNow";
import Popup from "./popup";

const Index = ({ data, textCls }) => {
  let recentItems = localStorage.getItem("__x77yy");

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [quick, setQuick] = useState(false);

  const [buyn, setBuyn] = useState(false);

  const [imageData, setImagedata] = useState([]);

  const cardRef = useRef();

  const { userId } = useSelector((e) => e.userReducer);

  useEffect(() => {
    productImages(data.id).then((e) => {
      if (e.status === 200) {
        setImagedata(e.data.data);
      }
    });
  }, []);

  const recentlyViewehandler = (newItem) => {
    if (recentItems !== null) {
      let items = JSON.parse(recentItems);
      const existingItem = items.find((e) => e.id === newItem.id);

      if (existingItem) return;
      else {
        let rest = [...items, newItem];
        localStorage.setItem("__x77yy", JSON.stringify(rest));
      }
    } else {
      let rest = [newItem];
      localStorage.setItem("__x77yy", JSON.stringify(rest));
    }
  };

  const cusHan = (cate, id, tii) => {
    navigate({
      pathname: `/shop/details/${cate}/${id}/${tii}`,
      search: "?customise=true",
    });
  };

  const buyNowHandler = () => {
    if (!userId) {
      navigate(AUTH);
    } else {
      setBuyn(true);
    }
  };

  return (
    <>
      <Card
        onClick={() => recentlyViewehandler(data)}
        style={{ borderRadius: 1 }}
        ref={cardRef}
        className="productcard"
        cover={
          <Link
            target="_blank"
            to={PRODUCTDETAILS(
              data.name.replaceAll(" ", "-"),
              data.id,
              data.categories.split(",")[0]
            )}
          >
            <LazyImage
              src2={PDC_IMAGE + data?.image2}
              src={PDC_IMAGE + data?.image}
              alt={data.name}
              placeholder={PDC_IMAGE + data?.image}
              cardRef={cardRef}
            />
          </Link>
        }
      >
        <Stack
          onClick={() => setOpen(true)}
          id={textCls === "psmall_size" ? "quickSmall" : "quick"}
          className="quick_view"
        >
          <img
            src="/user/quick.svg"
            height="100%"
            width="100%"
            alt="quickview"
          />
        </Stack>

        <Stack
          onClick={() => setQuick(true)}
          id={textCls === "psmall_size" ? "cartSmall" : "cart"}
          className="quick_view"
        >
          <img
            src="/user/addtocart.svg"
            height="100%"
            width="100%"
            alt="quickview"
          />
        </Stack>

        {data.customisable === "true" && (
          <Stack
            onClick={() =>
              cusHan(
                data.categories.split(",")[0],
                data.id,
                data.name.replaceAll(" ", "-")
              )
            }
            id={textCls === "psmall_size" ? "CustomiseSmall" : "Customise"}
            className="quick_view"
          >
            <img
              src="/user/customise.svg"
              height="100%"
              width="100%"
              alt="quickview"
            />
          </Stack>
        )}

        {/* <Stack
          onClick={() => buyNowHandler()}
          sx={StyleCard.quickView}
          className="quick_view"
        >
          BUY NOW
        </Stack> */}

        <Stack
          className={"productCard"}
          onClick={() => recentlyViewehandler(data)}
        >
          <Row justify="space-between" align="middle">
            <Col xxl={16} xl={18} lg={18} md={16} sm={18} xs={16}>
              <Link
                target="_blank"
                to={PRODUCTDETAILS(
                  data.name.replaceAll(" ", "-"),
                  data.id,
                  data.categories.split(",")[0]
                )}
              >
                <h3
                  onClick={() => recentlyViewehandler(data)}
                  className={textCls}
                >
                  {data?.name.length > (textCls === "psmall_size" ? 10 : 36)
                    ? data?.name.slice(0, textCls === "psmall_size" ? 20 : 36) +
                      " " +
                      "..."
                    : data?.name}
                </h3>
              </Link>

              <p> ₹ {Number(data?.price).toFixed(2)}</p>
            </Col>
            <Col xxl={8} xl={6} lg={6} md={8} sm={6} xs={8} align="end">
              <button onClick={() => setBuyn(true)} className="buy_now_btn">
                BUY NOW
              </button>
            </Col>
          </Row>
        </Stack>
      </Card>

      <Modal
        centered
        open={open}
        okType="link"
        onCancel={() => setOpen(false)}
        width={900}
        footer={""}
      >
        <Row justify="center" gutter={[20, 20]}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={20}>
            <ImageSlide image={imageData} />
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={20}>
            <Details data={data} image={imageData} />
          </Col>
        </Row>
      </Modal>

      <Modal
        centered
        open={quick}
        okType="link"
        onCancel={() => setQuick(false)}
        width={900}
        footer={""}
      >
        <QuickAdd data={data} setQuick={setQuick} />
      </Modal>

      <Modal
        centered
        open={buyn}
        okType="link"
        onCancel={() => setBuyn(false)}
        width={400}
        footer={""}
      >
        <BuyNow data={data} setQuick={setBuyn} />
      </Modal>
    </>
  );
};

export default Index;

const StyleCard = {
  card: { width: "95%" },
  image: {
    width: "100%",
    position: "relative",
    cursor: "pointer",
  },

  quickView: {
    position: "absolute",
    bottom: "77px",
    textAlign: "center",
    width: "100%",
    background: "#00000074",
    fontSize: "15px",
    cursor: "pointer",
    color: "white",
    padding: "7px",
    left: 0,
    zIndex: 111,
    backdropFilter: "blur(2px)",
    opacity: "0",
  },

  quick: {
    position: "absolute",
    top: "30px",
    textAlign: "center",
    width: "7%",
    background: "white",
    fontSize: "15px",
    cursor: "pointer",
    color: "white",
    padding: "7px",
    zIndex: 111,
    opacity: "0",
    right: "10px",
    borderRadius: "8px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },
  cart: {
    position: "absolute",
    top: "80px",
    textAlign: "center",
    width: "7%",
    background: "white",
    fontSize: "15px",
    cursor: "pointer",
    color: "white",
    padding: "7px",
    zIndex: 111,
    opacity: "0",
    right: "10px",
    borderRadius: "8px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },

  quickSmall: {
    position: "absolute",
    top: "30px",
    textAlign: "center",
    width: "12%",
    background: "white",
    fontSize: "15px",
    cursor: "pointer",
    color: "white",
    padding: "7px",
    zIndex: 111,
    opacity: "0",
    right: "10px",
    borderRadius: "8px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },

  cartSmall: {
    position: "absolute",
    top: "73px",
    textAlign: "center",
    width: "12%",
    background: "white",
    fontSize: "15px",
    cursor: "pointer",
    color: "white",
    padding: "7px",
    zIndex: 111,
    opacity: "0",
    right: "10px",
    borderRadius: "8px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },

  Customise: {
    position: "absolute",
    top: "130px",
    textAlign: "center",
    width: "7%",
    background: "white",
    fontSize: "15px",
    cursor: "pointer",
    color: "white",
    padding: "7px",
    zIndex: 111,
    opacity: "0",
    right: "10px",
    borderRadius: "8px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },

  CustomiseSmall: {
    position: "absolute",
    top: "115px",
    textAlign: "center",
    width: "12%",
    background: "white",
    fontSize: "15px",
    cursor: "pointer",
    color: "white",
    padding: "7px",
    zIndex: 111,
    opacity: "0",
    right: "10px",
    borderRadius: "8px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  },
};

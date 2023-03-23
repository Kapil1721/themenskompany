import { Icon } from "@iconify/react";
import { Row, Col } from "antd";
import React, { useState } from "react";
import Index from "../components/productCard";

import Stack from "../components/style/stack";
import SwiperSlider from "../section/home/bannerSlider";

import { Helmet } from "react-helmet-async";

import { productRandService } from "../services/apiServices/apiService";
import Testmonial from "../section/home/testmonial";
import Subscribe from "../section/home/subscribe";

import RecentlyViewed from "../components/recentlyViewed";

import { useOnce } from "../hooks/useOnce";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCTDETAILS, SHOP } from "../constants/route-path";

const Home = () => {
  let recentItems = localStorage.getItem("__x77yy");
  const Navigate = useNavigate();

  const [state, setState] = useState([]);

  useOnce(() => {
    productRandService().then((e) => {
      if (e.status === 200) {
        setState(e.data.data);
      }
    });
  });

  const clickHandler = (likn, to) => {
    Navigate({
      pathname: likn,
      search: `category=${to}`,
    });
  };

  return (
    <>
      <Helmet>
        <title> The men's kompany</title>
      </Helmet>

      <div>
        <Row>
          <SwiperSlider />
        </Row>

        <Row justify="center" style={{ marginTop: "40px" }}>
          <Col xxl={15} xl={16} lg={20} md={22} sm={15} xs={22}>
            <Row justify="start" gutter={[30, 30]}>
              {DT.map((e, i) => (
                <Col key={i} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                  <div className="traa">
                    <img src={"/images/" + e.image} alt="vv" />

                    <div className="content">
                      {/* <div className="dis">SHINE LIKE AN ETHEREAL STAR</div> */}
                      <Link
                        to={PRODUCTDETAILS(
                          e.title.replaceAll(" ", "-"),
                          e.id,
                          e.cate.split(",")[0]
                        )}
                      >
                        <span className="btn">SHOP NOW</span>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <Row justify={"center"}>
              <Row justify="center">
                <Col span={24}>
                  <div className="hheadin" style={{ textAlign: "center" }}>
                    Now Featuring
                  </div>
                </Col>
              </Row>

              <Row justify="center">
                <Col>
                  <Row justify="start" gutter={[15, 15]}>
                    {state
                      .filter((e, index) => index < 8)
                      .map((e) => (
                        <Col
                          xxl={6}
                          xl={6}
                          lg={6}
                          md={8}
                          sm={12}
                          xs={12}
                          style={{ marginBottom: "20px" }}
                          key={e.id}
                        >
                          <Index data={e} textCls="psmall_size" />
                        </Col>
                      ))}
                  </Row>
                </Col>
              </Row>
            </Row>

            <Row
              justify="start"
              gutter={[30, 30]}
              style={{ marginTop: "40px" }}
            >
              <Col xxl={12} xl={12} lg={12} md={12} sm={24}>
                <div className="traa">
                  <img src={"/images/" + `lower1.jpg`} alt="ba" />
                  <div className="content">
                    <div className="titles">KURTA</div>
                    <span
                      className="btn"
                      onClick={() => clickHandler(SHOP, "kurta")}
                    >
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </Col>

              <Col xxl={12} xl={12} lg={12} md={12} sm={24}>
                <Row gutter={[30, 15]}>
                  <Col xxl={24}>
                    <div className="traa">
                      <img src={"/images/" + `lower2.jpg`} alt="ba" />
                      <div className="content">
                        <div className="titles">SHIRT</div>
                        <span
                          className="btn"
                          onClick={() => clickHandler(SHOP, "shirt")}
                        >
                          SHOP NOW
                        </span>
                      </div>
                    </div>
                  </Col>

                  <Col xxl={24} xl={24} lg={24} md={24} sm={24}>
                    <div className="traa">
                      <img src={"/images/" + `lower3.jpg`} alt="ba" />
                      <div className="content">
                        <div className="titles">PANTS</div>
                        <span
                          className="btn"
                          onClick={() => clickHandler(SHOP, "pants")}
                        >
                          SHOP NOW
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        {recentItems !== null && (
          <Row justify="center" style={{ margin: "5rem 0" }}>
            <Col span={20}>
              <RecentlyViewed />
            </Col>
          </Row>
        )}

        <Row justify="center" style={{ marginTop: "5rem" }}>
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={24}
            span={24}
            style={{ background: "#FFF7EC", padding: "50px 20px" }}
          >
            <Subscribe />
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={24}>
            <Testmonial />
          </Col>
        </Row>

        <Row justify="center" style={{ background: "black", color: "white" }}>
          <Stack className={"footer_main"}>
            <Row
              justify="space-between"
              className="bussssssss "
              style={{
                background: "black",
                color: "white",
                margin: "auto",
                padding: "10px",
              }}
            >
              <Col>
                <Stack>
                  <Icon fontSize="40px" icon="ion:return-up-back" />
                  <p className="sadsatyhlm">7-Days Return Policy</p>
                </Stack>
              </Col>

              <Col>
                <Stack>
                  <Icon fontSize="40px" icon="ph:truck-light" />
                  <p className="sadsatyhlm">Free Shipping</p>
                </Stack>
              </Col>

              <Col>
                <Stack>
                  <Icon fontSize="40px" icon="ion:gift-sharp" />
                  <p className="sadsatyhlm">Benefits On First Order</p>
                </Stack>
              </Col>
            </Row>
          </Stack>
        </Row>
      </div>
    </>
  );
};

export default Home;

const DT = [
  {
    image: "upper1.jpg",
    title: "Black and white check cotton shirt",
    id: "5",
    cate: "kurta",
  },
  {
    image: "upper2.jpg",
    title: "Black Cotton Kurta",
    id: "1",
    cate: "shirt",
  },
];

// eslint-disable-next-line no-lone-blocks
{
  /* <Row justify="center">
<Col xxl={4} xl={6} md={8} lg={7} sm={10} xs={15}>
  <Stack
    className="sdasdsadasd"
    sx={{ margin: "20px auto ", width: "40%" }}
  >
    <img height="100%" width="100%" src={"/mmm.svg"} alt="sadsad" />
  </Stack>

  <Stack sx={{ textAlign: "center", marginBottom: "6rem" }}>
    <h2 className="hheadin">Now Featuring</h2>

    <p>Discover our newest launches and bestsellers.</p>
  </Stack>
</Col>
</Row>



<Row justify="center">
<Stack className={"home_product_container"}>
  <img
    height="100%"
    width="100%"
    src={STATIC_DATA + `Mid-Baner.webp`}
    alt="altentive"
  />
</Stack>
</Row>

<Row justify="center">
<Stack sx={{ marginBottom: "6rem" }}>
  <h1 className="hheadin">Shop By Category</h1>
</Stack>
</Row>

<Row justify="center">
<Stack className={"home_product_container"}>
  <Row justify="start" gutter={[15, 15]}>
    {state
      .filter((e, index) => index > 3 && index < 7)
      .map((e) => (
        <Col
          xxl={8}
          xl={8}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ marginBottom: "20px" }}
          key={e.id}
        >
          <Index data={e} />
        </Col>
      ))}
  </Row>
</Stack>
</Row>

<Row justify="center" gutter={[0, 100]}>
<Stack className={"hyjiusd_sds"} sx={{ marginTop: "40px" }}>
  <Col
    xxl={11}
    xl={11}
    lg={12}
    md={12}
    sm={24}
    xs={24}
    className="wkusd"
    style={{
      flexDirection: "column",
      justifyContent: "center",
      display: "flex",
      width: "90%",
    }}
  >
    <h2 className="hheadin dasd">
      The Men's Kompany Is Not A Usual Casual Or Traditional Go-To
      Brand;
    </h2>

    <h3>We Are The Shirt Styler Your Wardrobe Always Wanted.</h3>

    <StyleButton
      varinat="Border"
      sx={{ width: "35%", marginTop: "10px" }}
    >
      Our Story
    </StyleButton>
  </Col>

  <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
    <Stack sx={{ width: "100%" }}>
      <img
        height="100%"
        width="100%"
        src={STATIC_DATA + `eeee.webp`}
        alt="dsadsads"
      />
    </Stack>
  </Col>
</Stack>
</Row> */
}

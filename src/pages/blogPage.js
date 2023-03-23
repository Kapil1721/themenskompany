import { Row, Col, message, Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import StyleButton from "../components/style/button";

import { BLOGDETAIL, HOME } from "../constants/route-path";

import { blogService } from "../services/apiServices/apiService";

const BlogPage = () => {
  const [state, setState] = useState([]);
  const [search, searchValue] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    blogService().then((e) => {
      if (e.status === 200) {
        setState(e.data.data);
      } else {
        messageApi.error("something went wrong,refresh this spage");
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Blogs | The men's kompany World</title>
      </Helmet>
      <Col style={{ margin: "auto" }}>
        <div style={{ marginBottom: "40px" }} id="bannerBlg">
          <div style={{ top: "86px" }} className="content">
            Blogs
          </div>
        </div>

        <Row justify="center" style={{ marginBottom: "86px" }}>
          <Col span={20}>
            <div>
              <Breadcrumb style={{ fontSize: "15px" }}>
                <Breadcrumb.Item>
                  <Link to={HOME}>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Blog</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>

        {contextHolder}

        <Row justify="start" className="thnme" gutter={[33, 13]}>
          {state
            .filter((e) =>
              e.post_name.toLowerCase().includes(search.toLowerCase())
            )
            .map((e) => (
              <Col key={e.id} xxl={8} xl={8} lg={8} md={12} sm={12} xs={24}>
                <div id="blogdetails">
                  <div className="blogimahge">
                    <Link to={BLOGDETAIL}>
                      <img src={e.post_img} alt="imgae" loading="lazy" />
                    </Link>
                  </div>

                  <div className="gold">MEN'S STYLE</div>
                  <Link to={BLOGDETAIL}>
                    <div className="heading">{e.post_name}</div>
                  </Link>
                  <div className="date">{e.post_date}</div>

                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: e.post_description.slice(0, 250) + "....",
                    }}
                  />

                  <Link to={BLOGDETAIL}>
                    <StyleButton varinat="Border" sx={{ width: "37%" }}>
                      READ MORE
                    </StyleButton>
                  </Link>
                </div>
              </Col>
            ))}
        </Row>
      </Col>
    </>
  );
};

export default BlogPage;

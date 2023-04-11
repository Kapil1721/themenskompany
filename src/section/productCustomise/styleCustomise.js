import { Col, Row, message } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import StyleButton from "../../components/style/button";

import ImageLoader from "../../components/loader/imageLoader";
import { COLR_IMAGE } from "../../constants/path-constant";

import { productSectionCustomise } from "../../services/apiServices/apiService";

const StyleCustomise = ({ setStyleCustomise, setCustomise, state }) => {
  const { pid } = useParams();

  const [messageApi, contextHolder] = message.useMessage();

  const [activeCollar, setActtiveCollar] = useState(state.collar.image);
  const [activeCollarName, setActtiveCollarName] = useState(state.collar.image);

  const [loader, setLoader] = useState(true);

  const [array, setArrauy] = useState([]);

  const [collarImage, setCollarImage] = useState({
    base: "",
  });

  const includelIst = [
    "Bandhgala",
    "Polo",
    "Prince-Charlie",
    "Concealed",
    "Spread-Collar",
  ];

  useEffect(() => {
    document.getElementById("foote").style.display = "none";

    let bll = document.getElementsByClassName("mmukbd");

    for (var i = 0; i < bll.length; i++) {
      bll[i].style.display = "none";
    }

    productSectionCustomise(pid, "collar").then((el) => {
      if (el.status === 200) {
        let x = [];
        el.data.data
          .filter((e) => includelIst.includes(e.title))
          .map((e) => x.push(e));

        setArrauy(x);

        el.data.data.map((e) => {
          if (e.name.includes("Bandhgala")) {
            collarImage.base = e.image;
          }
        });
      } else {
        messageApi.error(
          "Something Went Wrong !!Refresh This Page Or Try Again later "
        );
      }
    });

    return () => {
      document.getElementById("foote").style.display = "block";
      for (var i = 0; i < bll.length; i++) {
        bll[i].style.display = "";
      }
    };
  }, []);

  const saveHandler = async () => {
    await setCustomise({
      ...state,
      collar: {
        name: activeCollarName,
        image: activeCollar,
        change: true,
      },
    });

    await setStyleCustomise({
      section: "collar",
      open: false,
    });
  };

  return (
    <div className="coustom_style_holder">
      <Row justify="space-between">
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          style={{ position: "relative" }}
        >
          {contextHolder}
          <div className="style_imageholder">
            <img
              loading="lazy"
              src={COLR_IMAGE + collarImage.base}
              alt="body base"
            />

            <img
              loading="lazy"
              src={`/static/collar-single-button.png`}
              alt="@@@2"
            />

            <img
              loading="lazy"
              src={COLR_IMAGE + activeCollar}
              alt="collar"
              onLoad={() => setLoader(false)}
            />
          </div>

          {loader && <ImageLoader />}
        </Col>

        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          xs={24}
          sm={24}
          className="padssa"
        >
          <div className="styleSea_holder">
            <Row justify="center">
              <Col span={12}>
                <Row justify="center">
                  <Col xxl={7} xl={11} lg={12} md={10}>
                    <div className={"text text-active"}>Collar</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row justify="start" gutter={[10, 10]}>
            {array.map((e) => (
              <Col
                xxl={6}
                xl={6}
                lg={8}
                md={8}
                sm={8}
                xs={12}
                style={{ overflow: "hidden" }}
              >
                <div
                  onClick={() => {
                    setActtiveCollar(e.image);
                    setActtiveCollarName(e.title);
                    setCollarImage({
                      ...collarImage,
                      collar: e.image,
                    });
                    setLoader(true);
                  }}
                  key={e.id}
                  className={
                    e.image === activeCollar
                      ? "style_sections active-item "
                      : "style_sections"
                  }
                >
                  <div className="style_section_image">
                    <img
                      loading="lazy"
                      src={`/customise/${"collar"}/${e.title}.svg`}
                      alt={e.title}
                    />
                  </div>

                  <div className="style_section_text">
                    {e.title.replace("-", " ")}
                  </div>
                </div>

                {e.image === activeCollar && loader && <ImageLoader />}
              </Col>
            ))}
          </Row>

          <Row justify="space-around" className="hosadsasai">
            <Col span={11}>
              <div className="button-dssadssda">
                <StyleButton
                  onClick={() =>
                    setStyleCustomise({
                      section: "collar",
                      open: false,
                    })
                  }
                  sx={{ padding: "15px 0" }}
                  varinat="Border"
                >
                  Cancel
                </StyleButton>
              </div>
            </Col>

            <Col span={11}>
              <div className="button-dssadssda">
                <StyleButton
                  onClick={() => saveHandler()}
                  sx={{ padding: "15px 0" }}
                  varinat="Contained"
                >
                  Save
                </StyleButton>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default StyleCustomise;

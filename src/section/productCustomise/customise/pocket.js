import { Col, Row, message } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyleButton from "../../../components/style/button";
import { PKT_IMAGE } from "../../../constants/path-constant";

import { productSectionCustomise } from "../../../services/apiServices/apiService";

const Pocket = ({ setStyleCustomise, state, setCustomise }) => {
  const { pid } = useParams();

  const [activePocket, setActtivePocket] = useState(1);

  const [pocketImage, setPocketImage] = useState({
    pocketState: false,
    pocket: "",
    button: "",
    base: "",
  });

  const [messageApi, contextHolder] = message.useMessage();

  const [array, setArray] = useState([]);

  useEffect(() => {
    document.getElementById("foote").style.display = "none";

    productSectionCustomise(pid, "pocket").then((el) => {
      if (el.status === 200) {
        setArray(el.data.data);

        el.data.data.map((e) => {
          if (e.image === state.pocket) {
            pocketImage.pocket = e.image;
          } else if (e.name.includes("pocket-base")) {
            pocketImage.base = e.image;
          } else if (e.name.includes("pocket-Button")) {
            pocketImage.button = e.image;
          }
        });
      } else {
        messageApi.error(
          "Something Went Wrong !!Refresh This Page Or Try Again later "
        );
      }
    });
  }, []);

  const pocketHandler = (id) => {
    setActtivePocket(id);
    if (id === 1) {
      setPocketImage({
        ...pocketImage,
        pocketState: false,
      });
    } else {
      setPocketImage({
        ...pocketImage,
        pocketState: true,
      });
    }
  };

  const saveHandler = async () => {
    await setCustomise({
      ...state,
      pocketState: pocketImage.pocketState,
    });

    await setStyleCustomise({
      section: "collar",
      open: false,
    });
  };

  return (
    <div className="coustom_style_holder">
      <Row justify="space-between">
        {contextHolder}
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="style_imageholder">
            <img src={PKT_IMAGE + pocketImage.base} alt="base" />

            <img
              src={PKT_IMAGE + pocketImage.button}
              alt="button"
              style={{ zIndex: "111" }}
            />

            <img
              style={
                pocketImage.pocketState === false
                  ? { display: "none" }
                  : { display: "block" }
              }
              src={PKT_IMAGE + pocketImage.pocket}
              alt="@@@2"
            />
          </div>
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
                  {MENU.map((e) => (
                    <Col
                      xxl={7}
                      xl={11}
                      lg={12}
                      md={10}
                      key={e.id}
                      onClick={() => pocketHandler(e.id)}
                    >
                      <div className="text text-active">{e.title}</div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>

          <Row justify="start" gutter={[10, 10]}>
            {POCKET.map((e) => (
              <Col xxl={6} xl={6} lg={8} md={8} sm={8} xs={12}>
                <div
                  onClick={() => pocketHandler(e.id)}
                  key={e.id}
                  className={
                    e.id === activePocket
                      ? "style_sections active-item "
                      : "style_sections"
                  }
                >
                  <div className="style_section_image">
                    <img
                      src={`/customise/pocket/pocket_${e.id}.svg`}
                      alt="collar"
                    />
                  </div>

                  <div className="style_section_text">{e.title}</div>
                </div>
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

export default Pocket;

const MENU = [
  {
    id: 1,
    title: "Pocket",
  },
];

var POCKET = [
  { id: 1, title: "NO Pocket", name: "noPocket" },
  { id: 2, title: "Single Pocket", name: "singlePockt" },
];

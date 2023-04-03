import { Col, Row, message } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyleButton from "../../../components/style/button";
import { PLK_IMAGE } from "../../../constants/path-constant";

import { productSectionCustomise } from "../../../services/apiServices/apiService";

const Placket = ({ setStyleCustomise, setCustomise, state }) => {
  const { pid } = useParams();

  const [activePlacket, setActtivePlacket] = useState(state.placket.image);

  const [activePlacketName, setActtivePlacketName] = useState(
    state.placket.name
  );

  const [messageApi, contextHolder] = message.useMessage();

  const [sleeveImage, setSleeveImage] = useState({
    concealed: "",
    regular: "",
    base: "",
    tuxedo: "",
  });

  const [array, setArray] = useState([]);

  useEffect(() => {
    document.getElementById("foote").style.display = "none";

    let bll = document.getElementsByClassName("mmukbd");

    for (var i = 0; i < bll.length; i++) {
      bll[i].style.display = "none";
    }

    productSectionCustomise(pid, "placket").then((el) => {
      if (el.status === 200) {
        setArray(el.data.data);

        el.data.data.map((e) => {
          if (e.name.includes("base")) {
            sleeveImage.base = e.image;
          } else if (e.name.includes("Regular-Placket")) {
            sleeveImage.regular = e.image;
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
      placket: {
        name: activePlacketName,
        change: true,
        image: activePlacket,
      },
    });

    await setStyleCustomise({
      section: "placket",
      open: false,
    });
  };

  return (
    <div className="coustom_style_holder">
      <Row justify="space-between">
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          {contextHolder}
          <div className="style_imageholder">
            <img src={PLK_IMAGE + sleeveImage.base} alt="base" />

            <img src={PLK_IMAGE + activePlacket} alt="placket" />
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
                  <Col xxl={7} xl={11} lg={12} md={10}>
                    <div className="text text-active">Placket</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row justify="start" gutter={[10, 10]}>
            {array
              .filter((e) => e.title !== "null")
              .map((e) => (
                <Col xxl={6} xl={6} lg={8} md={8} sm={8} xs={12}>
                  <div
                    onClick={() => {
                      setActtivePlacketName(e.title);
                      setActtivePlacket(e.image);
                    }}
                    key={e.id}
                    className={
                      e.image === activePlacket
                        ? "style_sections active-item "
                        : "style_sections"
                    }
                  >
                    <div className="style_section_image">
                      <img
                        src={`/static/placket/${e.title}.svg`}
                        alt="collar"
                      />
                    </div>

                    <div className="style_section_text">
                      {e.title.replace("-", " ")}
                    </div>
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

export default Placket;

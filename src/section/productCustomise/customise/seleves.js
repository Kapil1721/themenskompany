import { Col, Row, message } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyleButton from "../../../components/style/button";
import { SLV_IMAGE } from "../../../constants/path-constant";
import { productSectionCustomise } from "../../../services/apiServices/apiService";

const Seleves = ({ setStyleCustomise, setCustomise, state }) => {
  const { pid } = useParams();

  const [activeSleeve, setActtiveSleeve] = useState(state.selevesandcuff.image);
  const [activeSleeveName, setActtiveSleeveName] = useState(
    state.selevesandcuff.name
  );

  const [messageApi, contextHolder] = message.useMessage();

  const [sleeveImage, setSleeveImage] = useState({
    long: "",
    short: "",
  });

  const [array, setArray] = useState([]);

  useEffect(() => {
    document.getElementById("foote").style.display = "none";

    productSectionCustomise(pid, "sleeve").then((el) => {
      if (el.status === 200) {
        setArray(el.data.data);

        el.data.data.map((e) => {
          if (e.name.includes("Long-Sleeves")) {
            sleeveImage.long = e.image;
          } else if (e.name.includes("Short-sleeves")) {
            sleeveImage.short = e.image;
          }
        });
      } else {
        messageApi.error(
          "Something Went Wrong !!Refresh This Page Or Try Again later"
        );
      }
    });
  }, []);

  const saveHandler = async () => {
    await setCustomise({
      ...state,
      selevesandcuff: {
        name: activeSleeveName,
        change: false,
        image: activeSleeve,
      },
    });

    await setStyleCustomise({
      section: "seleves",
      open: false,
    });
  };

  return (
    <div className="coustom_style_holder">
      <Row justify="space-between">
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          {contextHolder}
          <div className="style_imageholder">
            <img src={SLV_IMAGE + activeSleeve} alt="sleeve" />
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
                    <div className={"text text-active"}>Sleeves</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row justify="start" gutter={[10, 10]}>
            {array.map((e) => (
              <Col xxl={6} xl={6} lg={8} md={8} sm={8} xs={12}>
                <div
                  onClick={() => {
                    setActtiveSleeveName(e.title);
                    setActtiveSleeve(e.image);
                  }}
                  key={e.id}
                  className={
                    e.image === activeSleeve
                      ? "style_sections active-item "
                      : "style_sections"
                  }
                >
                  <div className="style_section_image">
                    <img src={`/static/sleeve/${e.title}.svg`} alt="collar" />
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

export default Seleves;

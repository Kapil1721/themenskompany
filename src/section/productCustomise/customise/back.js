import { Col, Row, message } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyleButton from "../../../components/style/button";
import { BCK_IMAGE } from "../../../constants/path-constant";
import { productSectionCustomise } from "../../../services/apiServices/apiService";

const CustomiseBack = ({ setStyleCustomise, setCustomise, state }) => {
  const { pid } = useParams();

  const [activeSleeve, setActtiveSleeve] = useState(1);
  const [activeSleeveName, setActtiveSleeveName] = useState(1);

  // const [sleeveImage, setSleeveImage] = useState("bsc-back-no-pleats-long");

  const [messageApi, contextHolder] = message.useMessage();

  const [backImage, setBackImage] = useState({
    base: "",
    back: "",
  });

  const [array, setArray] = useState([]);

  let ba = ["No-Pleats", "Box-Pleats", "Dart", "Side-Pleats"];

  useEffect(() => {
    document.getElementById("foote").style.display = "none";

    productSectionCustomise(pid, "back").then((el) => {
      if (el.status === 200) {
        let x = [];
        el.data.data.filter((e) => ba.includes(e.title)).map((e) => x.push(e));

        setArray(x);

        el.data.data.map((e) => {
          if (e.name.includes("Back")) {
            backImage.base = e.image;
          } else if (e.name.includes("No-Pleats")) {
            if (state.back.image === "") {
              setActtiveSleeve(e.image);
            } else {
              setActtiveSleeve(state.back.image);
            }
            backImage.back = e.image;
          }
        });
      } else {
        messageApi.error(
          "Something Went Wrong !!Refresh This Page Or Try Again later "
        );
      }
    });
  }, []);

  const saveHandler = async () => {
    await setCustomise({
      ...state,
      back: activeSleeve,
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
            <img src={BCK_IMAGE + backImage.base} alt="@@@2" />

            <img
              src={BCK_IMAGE + activeSleeve}
              alt="@@@2"
              style={{ zIndex: "1111" }}
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
                  <Col xxl={7} xl={11} lg={12} md={10}>
                    <div className={"text text-active"}>Back</div>
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
                      setActtiveSleeve(e.image);
                      setActtiveSleeveName(e.title);
                    }}
                    key={e.id}
                    className={
                      e.image === activeSleeve
                        ? "style_sections active-item "
                        : "style_sections"
                    }
                  >
                    <div className="style_section_image">
                      <img src={`/static/back/${e.title}.svg`} alt="collar" />
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

export default CustomiseBack;

// const MENU = [
//   {
//     id: 1,
//     title: "Back",
//   },
// ];

// var BACK = [
//   { id: 1, title: "No Pleats", name: "bsc-back-no-pleats-long" },
//   { id: 2, title: "Box Pleats", name: "bsc-back-box-pleats-long" },
//   { id: 3, title: "Side Pleats", name: "bsc-back-side-pleats-long" },
//   { id: 4, title: "Dart", name: "bsc-back-darts-long" },
//   { id: 5, title: "Deep Dart", name: "bsc-back-deep-darts-long" },
// ];

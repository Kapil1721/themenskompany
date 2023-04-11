import { Col, Row, message } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyleButton from "../../../components/style/button";
import { BTN_IMAGE } from "../../../constants/path-constant";
import { productSectionCustomise } from "../../../services/apiServices/apiService";

const CustomiseButton = ({ setStyleCustomise, state, setCustomise }) => {
  const { pid } = useParams();

  const [activeButton, setActtiveButton] = useState(state.buttons);

  const [messageApi, contextHolder] = message.useMessage();

  const [ButtonImage, setButtonImage] = useState({
    button: "Black",
    base: "",
  });

  const [array, setArray] = useState([]);

  useEffect(() => {
    document.getElementById("foote").style.display = "none";

    let bll = document.getElementsByClassName("mmukbd");

    for (var i = 0; i < bll.length; i++) {
      bll[i].style.display = "none";
    }

    productSectionCustomise(pid, "button").then((el) => {
      if (el.status === 200) {
        setArray(el.data.data);

        el.data.data.map((e) => {
          if (e.name.includes("base")) {
            ButtonImage.base = e.image;
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
      buttons: activeButton,
    });

    await setStyleCustomise({
      section: "button",
      open: false,
    });
  };

  return (
    <div className="coustom_style_holder">
      <Row justify="space-between">
        {contextHolder}
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="style_imageholder">
            <img src={BTN_IMAGE + ButtonImage.base} alt="@@@2" />

            <img src={`/static/buttons/${ButtonImage.button}.png`} alt="@@@2" />
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
                    <div className="text text-active">Button</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row justify="start" gutter={[10, 10]}>
            {BUTTON.map((e) => (
              <Col xxl={6} xl={6} lg={8} md={8} sm={8} xs={12}>
                <div
                  onClick={() => {
                    setActtiveButton(e.title);
                    setButtonImage({
                      ...ButtonImage,
                      button: e.title,
                    });
                  }}
                  key={e.id}
                  className={
                    e.title.toLowerCase() === activeButton.toLowerCase()
                      ? "style_sections active-item "
                      : "style_sections"
                  }
                >
                  <div className="style_section_image">
                    <img
                      src={`/customise/button/button_${e.id}.jpg`}
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

export default CustomiseButton;

var BUTTON = [
  { id: 1, title: "Grey", name: "gray" },
  { id: 2, title: "natural", name: "natural" },
  { id: 3, title: "Black", name: "black" },
  { id: 4, title: "Brown", name: "brown" },
  { id: 5, title: "Maroon", name: "maroon" },
  { id: 6, title: "Blue", name: "blue" },
  { id: 7, title: "Pink", name: "pink" },
  { id: 9, title: "Wood", name: "wood" },
];

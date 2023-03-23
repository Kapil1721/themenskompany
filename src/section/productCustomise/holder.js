import { Row, Col } from "antd";
import ImageHolder from "./imageHolder";
import MenuPanel from "./menuPanel";

const Holder = ({ setCustomise, productCustomization, setStyleCustomise }) => {
  return (
    <>
      <Col
        style={{
          background: "#f7f7f7",
          padding: "30px 0",
        }}
        span={24}
      >
        <MenuPanel setCustomise={setCustomise} />

        <Row justify="center">
          <Col
            style={{ margin: "30px 0" }}
            xxl={16}
            xl={19}
            lg={24}
            md={24}
            sm={20}
            xs={22}
          >
            <ImageHolder
              setStyleCustomise={setStyleCustomise}
              productCustomization={productCustomization}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Holder;

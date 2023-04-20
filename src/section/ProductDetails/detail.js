import React from "react";

import { Col, Divider, Row, Collapse, Tabs } from "antd";

import StyleButton from "../../components/style/button";
import { Icon } from "@iconify/react";

const { Panel } = Collapse;

const Detail = ({ setCustomise, carthandler, setSize, state, size }) => {
  return (
    <div className="summary_conatiner">
      <div className="cname details_meskmpkr">The Men's Kompany</div>

      <div className="Pname detail_heading">{state.name}</div>

      <div className="pPrice details_prids">
        ₹ {Number(state.price).toFixed(2)}
        <span className="details_itsitalk">Incl. of all taxes</span>
      </div>

      <Divider />

      <div className="psized">
        <div class="modal_size_btn dfghjkst">
          {state?.size?.split(",").map((e, i) => (
            <button
              key={i}
              onClick={() => setSize(e)}
              className={size.toUpperCase() === e ? "active" : ""}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Row justify="space-between">
          <Col span={12}>
            <StyleButton
              onClick={() =>
                carthandler(state.id, state.name, Number(state.price))
              }
              varinat="Contained"
            >
              Add To Cart
            </StyleButton>
          </Col>

          <Col span={11}>
            <StyleButton
              disable={state.customisable}
              varinat="Border"
              onClick={() => setCustomise()}
            >
              Customise
            </StyleButton>
          </Col>
        </Row>
      </div>

      <div className="pshipdetail">
        <div className="icon-corener">
          <Icon icon="ph:truck-fill" color="#767676" fontSize="42px" />
        </div>

        <div className="text-corener details_meskmpkr">
          Dispatched in <span> 7-10 working days</span> as it is a made-to-order
          product.
        </div>
      </div>

      <div>
        <Collapse>
          <Panel header="Size chart" key="1">
            <div
              className="gghyhj details_meskmpkr"
              style={{ padding: "0 27px" }}
              dangerouslySetInnerHTML={{ __html: state.sizechart }}
            />
          </Panel>
        </Collapse>
      </div>

      <div className="product_tabs">
        <Tabs
          type="card"
          tabBarStyle={{
            fontWeight: "500",
            borderBottom: "none",
          }}
          defaultActiveKey="3"
          items={tabData(
            state.productspecification,
            state.sku,
            state.categories,
            state.discription
          )}
        />
      </div>
    </div>
  );
};

export default Detail;

const tabData = (productspecification, skyTags, category, discription) => {
  return [
    {
      key: "1",
      label: `Product specifications`,
      children: (
        <div className="gghyhj">
          {productspecification?.split(",")?.map((e) => {
            return <li className="details_speceds">{e}</li>;
          })}
        </div>
      ),
    },
    {
      key: "2",
      label: `Categories /sku/tags`,
      children: `${skyTags} ,${category}`,
    },
    {
      key: "3",
      label: `Description`,
      children: (
        <div className="pdescription details_speceds">{discription}</div>
      ),
    },
  ];
};

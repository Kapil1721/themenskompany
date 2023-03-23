import React, { useEffect, useState } from "react";

import { Button, Col, Row, Table, Popconfirm, Tag, message } from "antd";

import Nav from "../nav";

import { Icon } from "@iconify/react";
import {
  billAddress,
  cancelOrder,
  gteOrderService,
  shipAddress,
} from "../../../services/apiServices/apiService";
import { PDC_IMAGE } from "../../../constants/path-constant";
import { useSelector } from "react-redux";

function copyText() {
  const div = document.getElementById("myDiv");

  const tempInput = document.createElement("input");
  tempInput.setAttribute("value", div.textContent);
  document.body.appendChild(tempInput);

  tempInput.select();

  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

const OrdersPages = () => {
  const { userId } = useSelector((e) => e.userReducer);

  const [state, setState] = useState([]);

  const [aciveId, setActiveId] = useState(0);

  const [modal, setModal] = useState(false);

  const [shipping, setShipping] = useState([]);

  const [billsAddress, setBillAddress] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();

  const orderCancelHandler = (id) => {
    messageApi.open({
      type: "loading",
      content: "cancelling order.....",
      duration: 1,
    });

    cancelOrder({ id: id }).then((e) => {
      if (e.status === 200) {
        messageApi.success("Order cancelled successfully");
        setModal(false);
      }
    });
  };

  useEffect(() => {
    gteOrderService(userId).then((e) => {
      setState(e.data.data);
    });
  }, [messageApi, modal]);

  const detailsHandler = (id) => {
    setActiveId(id);
    setModal(true);
  };

  useEffect(() => {
    billAddress(userId).then((e) => {
      setBillAddress(e.data.data);
    });

    shipAddress(userId).then((e) => {
      setShipping(e.data.data);
    });
  }, []);

  const columns = [
    {
      title: "",
      dataIndex: "image",
      key: "name",
      render: (image) => (
        <div
          style={{
            overflow: "hidden",
            height: "50px",
            width: "50px",
            borderRadius: "50px",
          }}
        >
          <img src={PDC_IMAGE + image} alt="product imgae" />
        </div>
      ),
    },
    {
      title: "Product",
      dataIndex: "product_name",
      key: "address",
      render: (text) => text.slice(0, 29) + "...",
    },
    {
      title: "Price",
      key: "total_amount",
      dataIndex: "total_amount",
      render: (price) => Number(price).toFixed(2),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, e) => (
        <Tag
          color={
            e.status === "pending"
              ? "default"
              : e.status === "cancelled"
              ? "#db0c0c"
              : "success"
          }
        >
          {e.status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "",
      key: "action",
      render: (_, val) => (
        <Button onClick={() => detailsHandler(val.id)} size="small">
          view
        </Button>
      ),
    },
  ];

  return (
    <>
      <Row justify="center">
        <Col xxl={12} xl={14} lg={18} md={20} sm={20} xs={22}>
          {contextHolder}
          <div className="ccontgy">
            <Row justify="space-between" gutter={[0, 50]}>
              <Col xxl={7} xl={7} lg={7} md={24} sm={24} xs={24}>
                <Nav page={2} />
              </Col>

              {!modal ? (
                <Col xxl={16} xl={16} lg={16} md={22} sm={24} xs={24}>
                  {state.length * 1 === 0 ? (
                    <div className="empty-container">
                      <Icon fontSize="24px" icon={"mdi:tick-circle"} />

                      <div className="sadlsad">
                        Browse products No order has been made yet .
                      </div>

                      <button>Browse Product</button>
                    </div>
                  ) : (
                    <Table
                      columns={columns}
                      pagination={false}
                      dataSource={state}
                      scroll={
                        window.screen.width <= 700
                          ? {
                              x: "130vw",
                            }
                          : ""
                      }
                    />
                  )}
                </Col>
              ) : (
                <Col xxl={16}>
                  <div className="toto" onClick={() => setModal(false)}>
                    -- Back
                  </div>

                  {state
                    .filter((e) => e.id === aciveId)
                    .map((e) => (
                      <div key={e.id} className="uidgsa">
                        <div className="asdasdsads">
                          <div>
                            <div className="status">
                              <Tag
                                color={
                                  e.status === "pending"
                                    ? "default"
                                    : e.status === "cancelled"
                                    ? "#db0c0c"
                                    : "success"
                                }
                              >
                                {e.status.toUpperCase()}
                              </Tag>
                            </div>

                            <div className="sdsadas">
                              <span style={{ fontWeight: 600 }}>#ORDERID</span>
                              &nbsp;: &nbsp;
                              <span id="myDiv">
                                <Tag color="volcano">{e.order_id}</Tag>
                              </span>
                              <span>
                                <Icon
                                  fontSize={16}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => copyText()}
                                  icon="ic:round-content-copy"
                                />
                              </span>
                            </div>

                            <div className="detailsss">
                              <div className="pname">{e.product_name}</div>
                              <div className="pqty">
                                <span>Qty : </span> {e.product_quantity}
                              </div>

                              <div className="pqty">
                                <span>Size : </span> {e.size}
                              </div>

                              <div className="pqty">
                                <span>Price : </span>{" "}
                                {Number(e.price).toFixed(2)}
                              </div>

                              {Number(e.discount_charge) !== 0 && (
                                <div className="pqty">
                                  <span>Discount: </span>
                                  {Number(e.discount_charge).toFixed(2)}
                                </div>
                              )}

                              <div className="pqty">
                                <span>Total price : </span>
                                {Number(e.total_amount).toFixed(2)}
                              </div>

                              <div className="addressBlk">Address</div>

                              <div className="sdsaragh">
                                Billing
                                {e.different === "true" ? "" : " - shipping"}
                                &nbsp; Address
                              </div>

                              <div>
                                <p>
                                  {billsAddress[0]?.fname +
                                    " " +
                                    billsAddress[0]?.lname}
                                </p>

                                <p>
                                  {billsAddress[0]?.streetaddress1 +
                                    "," +
                                    billsAddress[0]?.town}
                                </p>
                                <p>
                                  {billsAddress[0]?.state +
                                    "," +
                                    billsAddress[0]?.country}
                                </p>
                              </div>

                              {e.different === "true" && (
                                <>
                                  <div className="sdsaragh">
                                    Shipping Address
                                  </div>
                                  <div>
                                    <p>
                                      {shipping[0]?.fname +
                                        " " +
                                        shipping[0]?.lname}
                                    </p>

                                    <p>
                                      {shipping[0]?.streetaddress1 +
                                        "," +
                                        shipping[0]?.town}
                                    </p>
                                    <p>
                                      {shipping[0]?.state +
                                        "," +
                                        shipping[0]?.country}
                                    </p>
                                  </div>
                                </>
                              )}

                              <div className="addressBlk">Payment</div>

                              <div className="pqty">
                                <span>Payment method : </span>
                                {e.payment_method}
                              </div>

                              <div className="pqty">
                                <span>Payment status : </span>
                                {e.payment_status}
                              </div>
                            </div>
                          </div>

                          <div className="iajsdsas">
                            <img src={PDC_IMAGE + e.image} alt="product__" />
                          </div>
                        </div>

                        {e.status === "pending" && (
                          <div className="cancelbutton">
                            <Popconfirm
                              title="Cancel order"
                              description="Are you sure to cancel this order?"
                              okText="Yes"
                              cancelText="No"
                              onConfirm={() => orderCancelHandler(e.id)}
                            >
                              <Button type="primary" danger>
                                cancel
                              </Button>
                            </Popconfirm>

                            <div>Need Help? conatact us at +91 8287819178</div>
                          </div>
                        )}
                      </div>
                    ))}
                </Col>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrdersPages;

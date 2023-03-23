import React, { useState, useEffect } from "react";

import { Col, Row, message } from "antd";

import Nav from "../nav";
import {
  userDetails,
  userUpdte,
  userForgotPassword,
} from "../../../services/apiServices/apiService";

import StyleButton from "../../../components/style/button";
import { useSelector } from "react-redux";

const AccountDetails = () => {
  const { userId } = useSelector((e) => e.userReducer);

  const [messageApi, contextHolder] = message.useMessage();

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const [pass, setPass] = useState({
    password: "",
    newpassword: "",
    confirmpassword: "",
  });

  const userInputHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const userPasswordHandler = (e) => {
    setPass({
      ...pass,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    userDetails({ id: userId }).then((e) => {
      if (e.status === 200) {
        setUserData({
          fname: e.data.data[0].fname,
          lname: e.data.data[0].lname,
          email: e.data.data[0].email,
        });
      }
    });
  }, []);

  const updatedDetails = () => {
    Object.keys(userData).forEach((e, i, sad) => {
      if (document.getElementById(e).value === "") {
        document.getElementById(e).style.border = "1px solid red";
      } else {
        document.getElementById(e).style.border = "1px solid gray";
        if (sad.length - 1 === i) {
          messageApi.open({
            duration: 1,
            type: "loading",
            content: "Loading...",
          });

          userUpdte({ ...userData, id: userId }).then((e) => {
            if (e.status === 200) {
              messageApi.success("Details Updated Succesfully");
            } else {
              messageApi.error("Something Went Wrong ,Try Again ");
            }
          });
        }
      }
    });
  };

  const updatePassword = () => {
    Object.keys(userData).forEach((e, i, sad) => {
      if (document.getElementById(e).value === "") {
        document.getElementById(e).style.border = "1px solid red";
      } else if (pass.confirmpassword !== pass.newpassword) {
        if (sad.length - 1 === i) {
          messageApi.error("New password and confirm password must be same ");
        }
      } else {
        document.getElementById(e).style.border = "1px solid gray";
        if (sad.length - 1 === i) {
          messageApi.open({
            duration: 1,
            type: "loading",
            content: "Loading...",
          });
          userForgotPassword({ ...pass, id: userId }).then((e) => {
            if (e.status === 200) {
              messageApi.success("password changed successfully");
            } else if (e.status === 201) {
              messageApi.error("incorrect password");
            } else {
              messageApi.error("Something Went Wrong ,Try Again ");
            }
          });
        }
      }
    });
  };

  return (
    <>
      <Row justify="center">
        {contextHolder}
        <Col xxl={12} xl={14} lg={18} md={20} sm={20} xs={22}>
          <div className="ccontgy">
            <Row justify="space-between" gutter={[0, 50]}>
              <Col xxl={7} xl={7} lg={7} md={24} sm={24} xs={24}>
                <Nav page={5} />
              </Col>

              <Col xxl={16} xl={16} lg={16} md={22} sm={24} xs={24}>
                <div className="Acountdeetail_conatiner">
                  <Row justify="space-between" gutter={[20, 0]}>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                      <label>
                        First Name <span>*</span>
                      </label>
                      <input
                        id="fname"
                        value={userData.fname}
                        onChange={(e) => userInputHandler(e)}
                        type="text"
                        placeholder="first name"
                      />
                    </Col>

                    <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                      <label placeholder="first Name">
                        Last Name <span>*</span>
                      </label>

                      <input
                        value={userData.lname}
                        id="lname"
                        onChange={(e) => userInputHandler(e)}
                        type="text"
                        placeholder="last name"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <label>
                        Email address <span>*</span>
                      </label>

                      <input
                        id="email"
                        value={userData.email}
                        onChange={(e) => userInputHandler(e)}
                        type="text"
                        placeholder="example@gmail.com"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col span={6}>
                      <StyleButton
                        onClick={() => updatedDetails()}
                        sx={{ margin: 0 }}
                        varinat="Contained"
                      >
                        Update
                      </StyleButton>
                    </Col>
                  </Row>

                  <div className="pchnage">Password change</div>

                  <Row>
                    <Col span={24}>
                      <label>
                        Current password (leave blank to leave unchanged)
                        <span>*</span>
                      </label>

                      <input
                        type="password"
                        id="password"
                        onChange={(e) => userPasswordHandler(e)}
                        placeholder="current password"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <label>
                        New password (leave blank to leave unchanged){" "}
                        <span>*</span>
                      </label>

                      <input
                        type="password"
                        id="newpassword"
                        onChange={(e) => userPasswordHandler(e)}
                        placeholder="New password"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <label>
                        Confirm new password <span>*</span>
                      </label>

                      <input
                        type="password"
                        id="confirmpassword"
                        onChange={(e) => userPasswordHandler(e)}
                        placeholder="Confirm new password"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col span={6}>
                      <StyleButton
                        onClick={() => updatePassword()}
                        sx={{ margin: 0 }}
                        varinat="Contained"
                      >
                        Update
                      </StyleButton>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AccountDetails;

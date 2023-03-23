import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Checkbox, message } from "antd";

import StyleButton from "../../components/style/button";
import { userAuth } from "../../services/apiServices/apiService";
import { HOME } from "../../constants/route-path";
import { useDispatch } from "react-redux";
import { LOGIN_HANDLER } from "../../actions/login-actions";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = () => {
    if (!state.email.includes("@") || state.email.length === 0) {
      messageApi.error("please enter a valid email address");
    } else if (state.password.length === 0) {
      messageApi.error("please enter correct password");
    } else {
      messageApi.open({
        type: "loading",
        content: "Verifying user .....",
        duration: 3,
      });

      userAuth({ email: state.email, password: state.password }).then((e) => {
        if (e.status === 200) {
          messageApi.success("login successfully");

          dispatch({
            type: LOGIN_HANDLER,
            payload: {
              userId: e.data.data[0].id,
              email: e.data.data[0].email,
              name: e.data.data[0].fname,
            },
          });
          navigate(HOME);
        } else if (e.status === 210) {
          messageApi.error("Worng credentials ");
        }
      });
    }
  };

  return (
    <div className="container_Auth">
      {contextHolder}
      <div className="head">Login</div>

      <div className="innerbox">
        <div className="input_box">
          <label>
            Username or email address <span>*</span>
          </label>
          <input type="email" id="email" onChange={(e) => inputHandler(e)} />
        </div>

        <div className="input_box">
          <label>
            Password <span>*</span>
          </label>

          <input
            type="password"
            id="password"
            onChange={(e) => inputHandler(e)}
          />
        </div>

        <div>
          <Checkbox>Remember me</Checkbox>
        </div>

        <div className="button">
          <StyleButton varinat="Contained" onClick={() => submitHandler()}>
            Login
          </StyleButton>
        </div>

        <div className="forgot_tetx">
          <Link to={"#"}>lost Your Password ?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

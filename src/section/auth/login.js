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
          messageApi.error("incorrect email or passwords ");
        }
      });
    }
  };

  const toggleForm = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  };

  return (
    <div className="user signinBx">
      {contextHolder}
      <div className="imgBx">
        <img
          style={{ opacity: "0.62" }}
          src="https://thetestingserver.com/themenskompany/product/p1_image_2.jpg"
          alt=""
        />
      </div>

      <div className="formBx">
        <div className="form">
          <h2>Sign In</h2>
          <input
            type="email"
            id="email"
            onChange={(e) => inputHandler(e)}
            placeholder="Username"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => inputHandler(e)}
          />

          <StyleButton
            sx={{ margin: "10px 0" }}
            varinat="Contained"
            onClick={() => submitHandler()}
          >
            Login
          </StyleButton>

          <p className="signup">
            Don't have an account ?
            <Link to="#" onClick={() => toggleForm()}>
              Sign Up.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

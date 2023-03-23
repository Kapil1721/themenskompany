import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import StyleButton from "../../components/style/button";

import { message } from "antd";
import { userRegister, userAuth } from "../../services/apiServices/apiService";
import { HOME } from "../../constants/route-path";
import { useDispatch } from "react-redux";
import { LOGIN_HANDLER } from "../../actions/login-actions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const key = "updatable";

  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });

    console.log(state);
  };

  const submitHandler = () => {
    if (
      state.email === "" ||
      state.password === "" ||
      state.fname === "" ||
      state.lname === ""
    ) {
      messageApi.warning("Please complete the require fields");
    } else {
      messageApi.open({
        key,
        duration: 1,
        type: "loading",
        content: "Loading...",
      });

      userRegister({
        username: `${state.fname} ${state.lname}`,
        email: state.email,
        password: state.password,
      }).then((e) => {
        if (e.status === 200) {
          messageApi.success("User registered successfully");

          userAuth({ email: state.email, password: state.password }).then(
            (e) => {
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
            }
          );
        } else if (e.status === 201) {
          messageApi.info("Email alerady in use, try another email");
        }
      });
    }
  };

  return (
    <div className="container_Auth">
      <div className="head">Register</div>
      {contextHolder}
      <div className="innerbox">
        <div className="dsadsa">
          <div className="input_box">
            <label>
              First name <span>*</span>
            </label>

            <input onChange={(e) => inputHandler(e)} id="fname" type="text" />
          </div>

          <div className="input_box">
            <label>
              Last name <span>*</span>
            </label>

            <input onChange={(e) => inputHandler(e)} id="lname" type="text" />
          </div>
        </div>

        <div className="input_box">
          <label>
            email address <span>*</span>
          </label>

          <input type="email" onChange={(e) => inputHandler(e)} id="email" />
        </div>

        <div className="input_box">
          <label>
            Password <span>*</span>
          </label>

          <input
            type="password"
            onChange={(e) => inputHandler(e)}
            id="password"
          />
        </div>

        <div className="button c3edf">
          <StyleButton onClick={() => submitHandler()} varinat="Contained">
            Register
          </StyleButton>
        </div>
      </div>
    </div>
  );
};

export default Register;

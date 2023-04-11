import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

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

  const toggleForm = () => {
    const container = document.querySelector(".container");
    console.log(container);
    container.classList.toggle("active");
  };

  return (
    <div className="user signupBx">
      {contextHolder}
      <div className="formBx">
        <div className="form">
          <h2>Create an account</h2>
          <input
            onChange={(e) => inputHandler(e)}
            id="fname"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={(e) => inputHandler(e)}
            id="lname"
            type="text"
            placeholder="Last Name"
          />
          <input
            type="email"
            onChange={(e) => inputHandler(e)}
            id="email"
            placeholder="Email Address"
          />
          <input
            type="password"
            onChange={(e) => inputHandler(e)}
            id="password"
            placeholder="Create password"
          />

          <StyleButton
            sx={{ margin: "10px 0" }}
            onClick={() => submitHandler()}
            varinat="Contained"
          >
            Register
          </StyleButton>

          <p className="signup">
            Already have an account ?
            <Link to="#" onClick={() => toggleForm()}>
              Sign in.
            </Link>
          </p>
        </div>
      </div>
      <div className="imgBx">
        <img
          style={{ opacity: ".82" }}
          src="https://thetestingserver.com/themenskompany/product/p42_image_5.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;

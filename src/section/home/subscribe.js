import React, { useState } from "react";
import StyleButton from "../../components/style/button";
import Stack from "../../components/style/stack";
import { subscribe } from "../../services/apiServices/apiService";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const [sub, setSub] = useState({
    state: false,
    error: "",
  });

  const subscribeHandler = () => {
    if (email === "") {
      document.getElementById("placehoide").style.borderColor = "red";
    } else {
      document.getElementById("placehoide").style.borderColor = "gray";
      subscribe({ email: email }).then((e) => {
        setSub({
          state: true,
          error: e.status,
        });
      });
    }
  };

  return (
    <>
      <Stack
        className={"home_product_container"}
        sx={{ margin: "auto", textAlign: "center" }}
      >
        <div className="keepintouch">KEEP IN TOUCH WITH US</div>

        <div className="subscribeHead">
          We'll send you updates on new launches,products and events, only good
          stuff.
        </div>
      </Stack>
      <Stack sx={{ margin: "23px auto" }} id="inputIv">
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          id="placehoide"
        />

        <Stack id="htnh" sx={{ marginTop: "9px " }}>
          <StyleButton onClick={() => subscribeHandler()} varinat="Contained">
            Subscribe
          </StyleButton>
        </Stack>
      </Stack>
      {sub.state && (
        <div
          style={
            sub.error === 200
              ? { textAlign: "center", color: "green" }
              : { textAlign: "center", color: "red" }
          }
        >
          {sub.error === 200
            ? "You have successfully signed up to the newsletter"
            : "You have already signed up"}
        </div>
      )}
    </>
  );
};

export default Subscribe;

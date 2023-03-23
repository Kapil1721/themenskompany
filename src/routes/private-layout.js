import React from "react";
import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Header from "../components/header";

import Footer from "../components/footer";
import { AUTH } from "../constants/route-path";

const PrivateRoute = ({ ...rest }) => {
  // const Navigate = useNavigate();
  const { userId } = useSelector((e) => e?.userReducer);

  if (!userId) {
    return <Navigate to={AUTH} />;
  } else {
    return (
      <>
        <Header />
        {rest.element}
        <Footer />
      </>
    );
  }
};

export default PrivateRoute;

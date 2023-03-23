import React from "react";
import Header from "../components/header";

import Footer from "../components/footer";

const PublicRoute = ({ ...rest }) => {
  return (
    <>
      <Header />
      {rest.element}
      <Footer />
    </>
  );
};

export default PublicRoute;

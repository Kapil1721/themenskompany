import React from "react";
import Header from "../components/header";

import Footer from "../components/footer";
import { AUTH, GUESTCHECKOUT } from "../constants/route-path";

const PublicRoute = ({ ...rest }) => {
  if (rest.path === AUTH) {
    return (
      <>
        <Header />
        {rest.element}
      </>
    );
  } else if (rest.path === GUESTCHECKOUT) {
    return <>{rest.element}</>;
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

export default PublicRoute;

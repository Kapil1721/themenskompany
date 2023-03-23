import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import { Icon } from "@iconify/react";
import { HOME } from "../constants/route-path";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      icon={<Icon icon="ic:round-shopping-cart" />}
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          onClick={() => navigate(HOME)}
          style={{ background: "gray" }}
          type="primary"
        >
          Back Home
        </Button>
      }
    />
  );
}

export default PageNotFound;

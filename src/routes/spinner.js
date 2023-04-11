import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import NProgress from "nprogress";
import { useEffect } from "react";
import "nprogress/nprogress.css";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 120,
      color: "black",
      textAlign: "center",
      fontWeight: "400",
    }}
    spin
  />
);
const Spinner = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);
  return (
    <div id="sipperskhdf">
      <Spin indicator={antIcon} />
    </div>
  );
};
export default Spinner;

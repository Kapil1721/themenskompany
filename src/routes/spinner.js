import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

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
  return (
    <div id="sipperskhdf">
      <Spin indicator={antIcon} />
    </div>
  );
};
export default Spinner;

import React from "react";

const StyleButton = ({ sx, children, varinat, onClick, disable }) => {
  return (
    <button
      style={
        disable === "false"
          ? { cursor: "not-allowed", ...sx }
          : { cursor: "pointer", ...sx }
      }
      className={"btn" + varinat}
      onClick={onClick ? onClick : ""}
      disabled={disable === "false" ? true : false}
    >
      <span>{children}</span>
    </button>
  );
};

export default StyleButton;

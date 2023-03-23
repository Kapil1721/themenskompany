import React from "react";

const Stack = ({ sx, children, id, onClick, className }) => {
  return (
    <div
      id={id ? id : ""}
      className={className ? className : ""}
      onClick={onClick}
      style={sx}
    >
      {children}
    </div>
  );
};

export default Stack;

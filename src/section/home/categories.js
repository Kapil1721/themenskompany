import React from "react";

const Categories = ({ data }) => {
  return (
    <div className="cuksdh">
      <img src={`/categories/${data.icon}`} alt="sv" />
      <span>{data.title}</span>
    </div>
  );
};

export default Categories;

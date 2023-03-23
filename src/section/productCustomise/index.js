import React from "react";
import CustomiseBack from "./customise/back";
import CustomiseButton from "./customise/button";
import Placket from "./customise/Placket";

import Pocket from "./customise/pocket";
import Seleves from "./customise/seleves";
import StyleCustomise from "./styleCustomise";

const Index = ({
  setStyleCustomise,
  styleCustomise,
  productCustomization,
  setProductCustomization,
}) => {
  const { section } = styleCustomise;

  return (
    <div>
      {section === "collar" ? (
        <StyleCustomise
          state={productCustomization}
          setCustomise={setProductCustomization}
          setStyleCustomise={setStyleCustomise}
        />
      ) : section === "pocket" ? (
        <Pocket
          state={productCustomization}
          setStyleCustomise={setStyleCustomise}
          setCustomise={setProductCustomization}
        />
      ) : section === "planket" ? (
        <Placket
          state={productCustomization}
          setStyleCustomise={setStyleCustomise}
          setCustomise={setProductCustomization}
        />
      ) : section === "button" ? (
        <CustomiseButton
          state={productCustomization}
          setStyleCustomise={setStyleCustomise}
          setCustomise={setProductCustomization}
        />
      ) : section === "seleves" ? (
        <Seleves
          state={productCustomization}
          setStyleCustomise={setStyleCustomise}
          setCustomise={setProductCustomization}
        />
      ) : (
        <CustomiseBack
          state={productCustomization}
          setStyleCustomise={setStyleCustomise}
          setCustomise={setProductCustomization}
        />
      )}
    </div>
  );
};

export default Index;

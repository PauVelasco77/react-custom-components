/* eslint-disable react/prop-types */
import React from "react";
import Title from "../title";

const Example = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Title text={text} />
    </div>
  );
};

export default Example;

import React, { FC } from "react";
import Button, { ButtonProps } from "../button";

const Example: FC<ButtonProps> = ({ text = "Button" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button text={text} />
    </div>
  );
};

export default Example;

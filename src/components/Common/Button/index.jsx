import React from "react";
import "./index.css";

const Button = (props) => {
  return (
    <div className="button" {...props}>
      {props?.children}
    </div>
  );
};

export default Button;

import React, { memo } from "react";
import "./index.css";

const Card = (props) => {
  return <span className="card">{props.children}</span>;
};

export default memo(Card);

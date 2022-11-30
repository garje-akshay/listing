import React from "react";
import { getTranslation } from "./helper";

const Translation = (props) => {
  return <div>{getTranslation(props?.children)}</div>;
};

export default Translation;

import React from "react";
import "./style.scss";

const Carpet = ({ children, className } : { children? : any, className? : string}) => {
  const theClassName = `carpet${className ? ` ${className}` : ""}`;

  return <div className={theClassName}>{children}</div>;
};

export default Carpet;

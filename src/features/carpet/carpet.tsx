import React from "react";
import "./style.scss";

const Carpet = ({ children, className } : { children? : JSX.Element[] | JSX.Element, className? : string}) => {
  const theClassName = `carpet${className ? ` ${className}` : ""}`;

  return <div className={theClassName}>{children}</div>;
};

export default Carpet;

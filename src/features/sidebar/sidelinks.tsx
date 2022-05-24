import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Sidelink = ({ icon, label, url } : { icon:string, label:string, url:string}) => {
  const pathname = "/";
  const substring = pathname.split("/")[1];

  return (
    <Link
      className={`btn Sidebar__link${
        url === `/` ? " active" : ""
      }`}
      to={url}
    >
      <i className={`bi ${icon} ms-5 me-2`} />
      <span className="Sidebar__label">{label}</span>
    </Link>
  );
};

export default Sidelink;

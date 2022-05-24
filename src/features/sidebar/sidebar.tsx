import React, { Fragment } from "react";

import Sidelink from "./sidelinks";
import { links } from "./constants";

import "./style.scss";

export const Sidebar = () => {
  return (
    <div className={`Sidebar`}>
      {links.map(({ label, url, icon }, index) => (
        <Fragment key={index}>
          <Sidelink {...{ label, url, icon }} />
        </Fragment>
      ))}
    </div>
  );
};

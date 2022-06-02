import React from "react";

export const DetailCard = ({label, children} : {label : string | number, children : JSX.Element[] | JSX.Element}) => (
  <div className="card mb-5">
    <div className="card-body">
      <h5 className="card-title">{label}</h5>
      <table className="table">
        <tbody>{children}</tbody>
      </table>
    </div>
  </div>
)
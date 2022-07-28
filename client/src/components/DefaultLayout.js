import React from "react";
import { Button } from "react-bootstrap";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="header bs1">
        <div className="d-flex justify-content-between">
          <h1>Renting Cars</h1>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default DefaultLayout;

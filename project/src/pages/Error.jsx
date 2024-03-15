import React from "react";
import "../index.css";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="error">
      <h1>error</h1>
      <p className="text">Invalid '{error.value}'</p>
    </div>
  );
};

export default Error;

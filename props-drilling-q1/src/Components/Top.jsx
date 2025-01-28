import React from "react";
import Main from "./Main";

const Top = ({ name }) => {
  return (
    <div className="mt-4">
      <h2 className="font-semibold">Top Component</h2>
      <Main name={name} />
    </div>
  );
};

export default Top;

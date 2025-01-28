import React from "react";
import Bottom from "./Bottom";

const Main = ({ name }) => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold">Main Component</h3>
      <Bottom name={name} />
    </div>
  );
};

export default Main;

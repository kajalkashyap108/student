import React from "react";
import BottomMain from "./BottomMain";

const Bottom = ({ name }) => {
  return (
    <div className="mt-4">
      <h4 className="font-semibold">Bottom Component</h4>
      <BottomMain name={name} />
    </div>
  );
};

export default Bottom;

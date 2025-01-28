import React from "react";
import BottomMainRight from "./BottomMainRight";

const BottomMain = ({ name }) => {
  return (
    <div className="mt-4">
      <h5 className="font-semibold">Bottom Main Component</h5>
      <BottomMainRight name={name} />
    </div>
  );
};

export default BottomMain;

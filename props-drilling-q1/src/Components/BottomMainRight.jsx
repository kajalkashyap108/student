import React from "react";

const BottomMainRight = ({ name }) => {
  return (
    <div className="mt-4">
      <h6 className="font-semibold">Bottom Main Right Component</h6>
      <p className="text-blue-600">
        {name ? `Hello, ${name}!` : "Please enter your name above."}
      </p>
    </div>
  );
};

export default BottomMainRight;

import React from "react";
import { useTheme } from "../Context/ThemeContext";

const Content = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-4 mt-4 rounded ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h2>Content Component</h2>
      <p>This component adapts to the current theme.</p>
    </div>
  );
};

export default Content;

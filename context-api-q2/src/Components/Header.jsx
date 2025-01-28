import React from "react";
import { useTheme } from "../Context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-4 mt-4 rounded ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h2>Header Component</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default Header;

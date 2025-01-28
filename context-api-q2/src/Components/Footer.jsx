import React from "react";
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-4 mt-4 rounded ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h2>Footer Component</h2>
      <p>This is the footer section.</p>
    </div>
  );
};

export default Footer;

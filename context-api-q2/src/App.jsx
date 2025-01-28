import React from "react";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="border px-4 py-2 rounded mt-4 bg-blue-500 text-white"
    >
      Toggle Theme
    </button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Context API Theme Example</h1>
        <ThemeToggleButton />
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

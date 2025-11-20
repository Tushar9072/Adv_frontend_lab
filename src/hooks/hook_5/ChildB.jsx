import React from "react";

import { ThemeContext } from "./ThemeContext";

const ChildB = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const themeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div
      className={`h-full w-full ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <div className="bg-gray-500">Child B class theme {theme}</div>
      <button onClick={themeChange} className="">
        Change Theme
      </button>
    </div>
  );
};

export default ChildB;

import React from "react";

import { ThemeContext } from "./ThemeContext";

const ChildA = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const themeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="h-full bg-gray-50 w-full">
      <div className="bg-gray-500">Child A class theme {theme}</div>
      <button onClick={themeChange} className="">Change Theme</button>
    </div>
  );
};

export default ChildA;

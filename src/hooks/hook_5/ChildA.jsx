import React from "react";

import { ThemeContext } from "./ThemeContext";

const ChildA = () => {
  const theme = React.useContext(ThemeContext);

  
  return <div className="">Child A class theme {theme}</div>;
};

export default ChildA;



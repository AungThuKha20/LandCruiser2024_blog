import React, { createContext, useState } from "react";

export const GeneralContext = createContext();
const GeneralContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    return setMenu(!menu);
  };
  return (
    <GeneralContext.Provider value={{ handleMenu, menu }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;

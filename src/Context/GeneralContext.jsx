import React, { createContext, useState } from "react";

export const GeneralContext = createContext();
const GeneralContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    return setMenu(!menu);
  };
  const [details, setDetails] = useState(false);
  const handleDetails = () => {
    return setDetails(!details);
  };
  //Performance
  const [pOne, setPone] = useState(false);
  const handlePOne = () => {
    setPTwo(false);
    setPThree(false);
    return setPone(!pOne);
  };
  const [pTwo, setPTwo] = useState(false);
  const handlePTwo = () => {
    setPone(false);
    setPThree(false);

    return setPTwo(!pTwo);
  };
  const [pThree, setPThree] = useState(false);
  const handlePThree = () => {
    setPone(false);
    setPTwo(false);

    return setPThree(!pThree);
  };
  return (
    <GeneralContext.Provider
      value={{
        handleMenu,
        menu,
        handleDetails,
        details,
        pOne,
        handlePOne,
        pTwo,
        handlePTwo,
        pThree,
        handlePThree
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;

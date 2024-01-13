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
  const [pOne, setPone] = useState(true);
  const handlePOne = () => {
    setPTwo(false);
    setPThree(false);
    return setPone(!pOne);
  };
  const [cOne, setCOne] = useState(true);
  const handleCOne = () => {
    setCTwo(false);
    setCThree(false);
    return setCOne(!cOne);
  };
  const [pTwo, setPTwo] = useState(false);
  const handlePTwo = () => {
    setPone(false);
    setPThree(false);

    return setPTwo(!pTwo);
  };
  const [cTwo, setCTwo] = useState(false);
  const handleCTwo = () => {
    setCOne(false);
    setCThree(false);

    return setCTwo(!cTwo);
  };
  const [pThree, setPThree] = useState(false);
  const handlePThree = () => {
    setPone(false);
    setPTwo(false);

    return setPThree(!pThree);
  };
  const [cThree, setCThree] = useState(false);
  const handleCThree = () => {
    setCOne(false);
    setCTwo(false);

    return setCThree(!cThree);
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
        handlePThree,
        cOne,
        handleCOne,
        cTwo,
        handleCTwo,
        cThree,
        handleCThree
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;

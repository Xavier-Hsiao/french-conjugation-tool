import { createContext, useState, useContext, Children } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tense, setTense] = useState("PRESENT");
  const [verb, setVerb] = useState("aller");
  const [isVerbValid, setIsVerbValid] = useState(true);

  return (
    <AppContext.Provider
      value={{ verb, setVerb, tense, setTense, isVerbValid, setIsVerbValid }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

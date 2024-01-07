import { createContext, useState, useContext, Children } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tense, setTense] = useState("present");
  const [verb, setVerb] = useState("Aller");

  return (
    <AppContext.Provider value={{ verb, setVerb, tense, setTense }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

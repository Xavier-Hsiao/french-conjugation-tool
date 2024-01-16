import { createContext, useState, useContext, children } from "react";
import { personEtre, personAvoir } from "../data/data";
import Lefff from "french-verbs-lefff/dist/conjugations.json";
import * as FrenchVerbs from "french-verbs";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tense, setTense] = useState("PRESENT");
  const [verb, setVerb] = useState("aller");
  const [isVerbValid, setIsVerbValid] = useState(true);

  // Check whether the verb users input exists in Lefff dictionary object
  function checkValidity(verb) {
    setIsVerbValid(verb in Lefff);
  }

  // ❗we will get "aux" in Main.jsx file
  function displayResult(aux) {
    const persons = aux === "ETRE" ? personEtre : personAvoir;

    return persons.map((p, i) => (
      <p key={i}>
        {p.personName}{" "}
        {getResult(
          verb,
          tense,
          p.personIndex,
          aux,
          p.agreeGender,
          p.agreeNumber
        )}
      </p>
    ));
  }

  function getResult(verb, tense, personIndex, aux, gender, number) {
    const result = FrenchVerbs.getConjugation(Lefff, verb, tense, personIndex, {
      aux,
      agreeGender: gender,
      agreeNumber: number,
    });

    return result;
  }

  return (
    <AppContext.Provider
      value={{
        verb,
        setVerb,
        tense,
        setTense,
        isVerbValid,
        checkValidity,
        displayResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

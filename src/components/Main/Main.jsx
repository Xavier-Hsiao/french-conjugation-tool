import { useAppContext } from "../../context/AppContext";
import * as FrenchVerbs from "french-verbs";
import Lefff from "french-verbs-lefff/dist/conjugations.json";
import styles from "./Main.module.scss";
// import { useEffect } from "react";

export default function Main() {
  const { verb, tense, isVerbValid, setIsVerbValid } = useAppContext();
  // According to french-verb package definitions
  const person = [
    { personName: "Je", personIndex: 0, agreeGender: "M", agreeNumber: "S" },
    { personName: "Tu", personIndex: 1, agreeGender: "M", agreeNumber: "S" },
    { personName: "Il", personIndex: 2, agreeGender: "M", agreeNumber: "S" },
    { personName: "Elle", personIndex: 2, agreeGender: "F", agreeNumber: "S" },
    { personName: "Nous", personIndex: 3, agreeGender: "M", agreeNumber: "P" },
    { personName: "Vous", personIndex: 4, agreeGender: "M", agreeNumber: "P" },
    { personName: "Ils", personIndex: 5, agreeGender: "M", agreeNumber: "P" },
    { personName: "Elles", personIndex: 5, agreeGender: "F", agreeNumber: "P" },
  ];

  // Check whether the verb users input exists in Lefff dictionary object
  function checkValidity(verb) {
    setIsVerbValid(verb in Lefff);
  }

  checkValidity(verb);

  // Ensure it runs after the first render
  // useEffect(() => {
  //   setIsVerbValid(verb in Lefff);
  // }, [isVerbValid, setIsVerbValid]);

  if (!isVerbValid)
    return (
      <div className={styles.error}>
        <h3>😥 No Definitions Found</h3>
        <p>
          Sorry pal, we could not find definitions for the verb you were looking
          for. Please check the verb you entered is correct and valid. You must
          provide the infinitive verb.
        </p>
      </div>
    );

  // Get auxiliary of the verb, being être or avoir
  const aux = FrenchVerbs.getAux(verb);

  function getResult(verb, tense, personIndex, aux, gender, number) {
    FrenchVerbs.getConjugation(Lefff, verb, tense, personIndex, {
      aux,
      agreeGender: gender,
      agreeNumber: number,
    });
  }

  return (
    <main>
      {/* Capitalize the first character of verb */}
      <h1>{verb.charAt(0).toUpperCase() + verb.slice(1)}</h1>
      <div className={styles.divider}>
        <p>Conjugaison</p>
      </div>
      <div className={styles.result}>
        {person.map((p, i) => (
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
        ))}
      </div>
    </main>
  );
}

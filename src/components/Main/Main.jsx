import { useAppContext } from "../../context/AppContext";
import * as FrenchVerbs from "french-verbs";
import Lefff from "french-verbs-lefff/dist/conjugations.json";
import styles from "./Main.module.scss";

export default function Main() {
  const { verb, tense } = useAppContext();
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
  // Get auxiliary of the verb, being être or avoir
  const aux = FrenchVerbs.getAux(verb);
  // Check whether the verb users input exists in Lefff dictionary object
  function isVerbValid(verb) {
    return verb in Lefff;
  }

  function getResult(verb, tense, personIndex, aux, gender, number) {
    return isVerbValid(verb)
      ? FrenchVerbs.getConjugation(Lefff, verb, tense, personIndex, {
          aux: aux,
          agreeGender: gender,
          agreeNumber: number,
        })
      : "";
  }

  return (
    <main>
      {/* Capitalize the first character of verb */}
      <h1>{verb.charAt(0).toUpperCase() + verb.slice(1)}</h1>
      <div className={styles.divider}>
        <p>Conjugaison</p>
      </div>
      <div className={styles.result}>
        {isVerbValid(verb) ? (
          person.map((p, i) => (
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
          ))
        ) : (
          <h3>😥 No conjugations found! Did you provide a valid verb?</h3>
        )}
      </div>
    </main>
  );
}

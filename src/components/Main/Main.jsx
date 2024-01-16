import { useAppContext } from "../../context/AppContext";
import * as FrenchVerbs from "french-verbs";
import styles from "./Main.module.scss";

export default function Main() {
  const { verb, isVerbValid, checkValidity, displayResult } = useAppContext();
  // According to french-verb package definitions

  checkValidity(verb);

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

  return (
    <main>
      {/* Capitalize the first character of verb */}
      <h1>{verb.charAt(0).toUpperCase() + verb.slice(1)}</h1>
      <div className={styles.divider}>
        <p>Conjugaison</p>
      </div>
      <div className={styles.result}>{displayResult(aux)}</div>
    </main>
  );
}

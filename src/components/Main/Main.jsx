import { useAppContext } from "../../context/AppContext";
import styles from "./Main.module.scss";

export default function Main() {
  const { verb, setVerb, tense, setTense } = useAppContext();

  return (
    <main>
      <h1>{verb}</h1>
      <div className={styles.divider}>
        <p>Conjugaison</p>
      </div>
      <div className={styles.result}>
        <p>Je vais</p>
        <p>Tu vas</p>
        <p>Il va</p>
        <p>Elle va</p>
        <p>Nous allons</p>
        <p>Vous allez</p>
        <p>Ils vont</p>
      </div>
    </main>
  );
}

import { useAppContext } from "../../context/AppContext";
import styles from "./Header.module.scss";

export default function Header() {
  const { tense, setTense } = useAppContext();

  function handleTenseSelect(event) {
    setTense((currentTense) => event.target.value);
  }

  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <img
          src="src/assets/images/logo.svg"
          alt="logo"
          className={styles.logo}
        />
      </div>
      <nav className={styles.navbar}>
        <div className={styles.tenseGroup}>
          <select value={tense} onChange={handleTenseSelect}>
            <option value="PRESENT">Présent</option>
            <option value="FUTUR">Futur</option>
            <option value="PASSE_SIMPLE">Passé simple</option>
            <option value="PASSE_COMPOSE">Passé composé</option>
            <option value="PLUS_QUE_PARFAIT">Plus que parfait</option>
            <option value="IMPARFAIT">Imparfait</option>
            <option value="SUBJONCTIF_PRESENT">Subjonctif présent</option>
            <option value="CONDITIONNEL_PRESENT">Conditionnel</option>
          </select>
          <img
            src="src/assets/images/icon-arrow-down.svg"
            alt="selection-down"
            className={styles.down}
          />
        </div>
        <div className={styles.modeGroup}>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <div>
            <img
              src="src/assets/images/icon-moon.svg"
              alt="dark-mode-icon"
              className={styles.moon}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

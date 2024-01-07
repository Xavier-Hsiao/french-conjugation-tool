import { useAppContext } from "../../context/AppContext";
import styles from "./Header.module.scss";

export default function Header() {
  const {tense, setTense} = useAppContext;

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
            <option value="present">Présent</option>
            <option value="futur">Futur</option>
            <option value="passe-simple">Passé simple</option>
            <option value="passe-compose">Passé composé</option>
            <option value="plus-que-parfait">Plus que parfait</option>
            <option value="imparfait">Imparfait</option>
            <option value="subjonctif-present">Subjonctif présent</option>
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

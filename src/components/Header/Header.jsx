import { useContext } from "react";
import { useAppContext } from "../../context/AppContext";
import styles from "./Header.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header() {
  const { tense, setTense } = useAppContext();
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTenseSelect(event) {
    setTense((currentTense) => event.target.value);
  }

  function handleThemeChange() {
    const isThemeDark = theme === "dark";
    setTheme(isThemeDark ? "light" : "dark");
  }

  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <img
          src="https://raw.githubusercontent.com/Xavier-Hsiao/french-conjugation-tool/master/src/assets/images/logo.svg"
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
            src="https://raw.githubusercontent.com/Xavier-Hsiao/french-conjugation-tool/master/src/assets/images/icon-arrow-down.svg"
            alt="selection-down"
            className={styles.down}
          />
        </div>
        <div className={styles.modeGroup}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              onChange={handleThemeChange}
              checked={theme === "dark"}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <div>
            <img
              src="https://raw.githubusercontent.com/Xavier-Hsiao/french-conjugation-tool/master/src/assets/images/icon-moon.svg"
              alt="dark-mode-icon"
              className={styles.moon}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

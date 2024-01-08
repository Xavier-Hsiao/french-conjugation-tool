import { useAppContext } from "../../context/AppContext";
import styles from "./Search.module.scss";

export default function Search() {
  const { verb, setVerb } = useAppContext();

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setVerb((currentVerb) =>
        event.target.value.toLowerCase().replaceAll(" ", "")
      );
    }
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        className={
          verb.length > 0
            ? styles.searchInput
            : `${styles.warning} ${styles.searchInput}`
        }
        defaultValue={verb}
        onKeyDown={handleKeyPress}
      />
      <img
        src="https://raw.githubusercontent.com/Xavier-Hsiao/french-conjugation-tool/master/src/assets/images/icon-search.svg"
        alt="search-icon"
      />
      {verb.length > 0 ? null : (
        <div className={styles.warningText}>
          <p>
            Woops! Can't be empty...Put a valid verb in and press{" "}
            <code>Enter</code> again.
          </p>
        </div>
      )}
    </div>
  );
}

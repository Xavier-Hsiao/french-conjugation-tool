import { useAppContext } from "../../context/AppContext";
import styles from "./Search.module.scss";

export default function Search() {
  const { verb, setVerb } = useAppContext();

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setVerb((currentVerb) => event.target.value);
    }
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.searchInput}
        defaultValue={verb}
        onKeyDown={handleKeyPress}
      />
      <img src="src/assets/images/icon-search.svg" alt="search-icon" />
    </div>
  );
}
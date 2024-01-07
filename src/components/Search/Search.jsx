import { useAppContext } from "../../context/AppContext";
import styles from "./Search.module.scss";

export default function Search() {
  const { verb, setVerb } = useAppContext();

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      const validVerb = event.target.value.toLowerCase().replaceAll(" ", "");
      setVerb((currentVerb) => validVerb);
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

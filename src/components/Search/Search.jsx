import styles from "./Search.module.scss";

export default function Search() {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.searchInput} />
      <img src="src/assets/images/icon-search.svg" alt="search-icon" />
    </div>
  );
}

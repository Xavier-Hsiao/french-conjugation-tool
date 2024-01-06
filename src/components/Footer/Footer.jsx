import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.source}>
        <span>Source</span>
        <a href="#">https://en.wikitionary.org/wiki/blah</a>
        <img
          src="src/assets/images/icon-new-window.svg"
          alt="new-window-icon"
        />
      </div>
    </footer>
  );
}

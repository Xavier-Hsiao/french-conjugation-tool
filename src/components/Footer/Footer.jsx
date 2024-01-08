import { useAppContext } from "../../context/AppContext";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { verb, isVerbValid } = useAppContext();

  return isVerbValid ? (
    <footer>
      <div className={styles.source}>
        <span>Source:</span>
        <a
          href={`https://fr.wiktionary.org/wiki/${verb}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          🤓 click me to see more information about {verb}
        </a>
        <img
          src="src/assets/images/icon-new-window.svg"
          alt="new-window-icon"
        />
      </div>
    </footer>
  ) : null;
}

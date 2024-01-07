import { useAppContext } from "../../context/AppContext";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { verb } = useAppContext();

  return (
    <footer>
      <div className={styles.source}>
        <span>Source:</span>
        <a href={`https://fr.wiktionary.org/wiki/${verb}`} target="_blank">
          🤓 click me to see more information about {verb}
        </a>
        <img
          src="src/assets/images/icon-new-window.svg"
          alt="new-window-icon"
        />
      </div>
    </footer>
  );
}

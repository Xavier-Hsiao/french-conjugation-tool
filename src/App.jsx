import styles from "./App.module.scss";
import * as FrenchVerbs from "french-verbs";
import Lefff from "french-verbs-lefff/dist/conjugations.json";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Search />
      <Main />
      <Footer />
    </div>
  );
}

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.searchInput} />
      <img src="src/assets/images/icon-search.svg" alt="search-icon" />
    </div>
  );
}

function Main() {
  return (
    <main>
      <h1>Aller</h1>
      <div className={styles.divider}>
        <p>Conjugaison</p>
      </div>
      <div className={styles.result}>
        <p>Je vais</p>
        <p>Tu vas</p>
        <p>Il va</p>
        <p>Elle va</p>
        <p>Nous allons</p>
        <p>Vous allez</p>
        <p>Ils vont</p>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="source">
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

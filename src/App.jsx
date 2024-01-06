import styles from "./App.module.scss";
import * as FrenchVerbs from "french-verbs";
import Lefff from "french-verbs-lefff/dist/conjugations.json";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

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


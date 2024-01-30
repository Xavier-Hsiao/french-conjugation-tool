import styles from "./App.module.scss";
import { ThemeContext } from "./context/ThemeContext";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <AppProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme} ${styles.appWrapper}`}>
          <div className={styles.container}>
            <Header />
            <Search />
            <Main />
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </AppProvider>
  );
}

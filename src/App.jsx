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
    <div className={`${theme} ${styles.container}`}>
      <AppProvider>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header />
          <Search />
          <Main />
          <Footer />
        </ThemeContext.Provider>
      </AppProvider>
    </div>
  );
}

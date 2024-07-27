import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import "../s";

const App = () => {
  const [category, setCategory] = useState("general");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <>
      <Navbar
        setCategory={setCategory}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <NewsBoard category={category} darkMode={darkMode} />
    </>
  );
};

export default App;

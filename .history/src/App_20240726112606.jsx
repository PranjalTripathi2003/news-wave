import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [darkMode, setDarkMode] = useState(false); // Add dark mode state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar
        setCategory={setCategory}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;

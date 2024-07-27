import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import "./styles/DarkMode.css";

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
      <NewsBoard category={category} darkMode={darkMode} />{" "}
      {/* Pass darkMode */}
    </div>
  );
};

export default App;

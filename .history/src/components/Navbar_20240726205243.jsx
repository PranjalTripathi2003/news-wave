import React from "react";
import "../styles/Navbar.css"; // Adjust the path as necessary

const Navbar = ({ setCategory, toggleDarkMode, darkMode }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <span
          className={`badge ${
            darkMode ? "bg-light text-dark" : "bg-dark text-light"
          }`}
          onClick={() => setCategory("general")}
          style={{ cursor: "pointer" }}
        >
          NewsWave
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${darkMode ? "text-light" : "text-dark"}`}
                onClick={() => setCategory("business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${darkMode ? "text-light" : "text-dark"}`}
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${darkMode ? "text-light" : "text-dark"}`}
                onClick={() => setCategory("health")}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${darkMode ? "text-light" : "text-dark"}`}
                onClick={() => setCategory("science")}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${darkMode ? "text-light" : "text-dark"}`}
                onClick={() => setCategory("sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${darkMode ? "text-light" : "text-dark"}`}
                onClick={() => setCategory("technology")}
              >
                Technology
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button
              className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
              onClick={toggleDarkMode}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Navbar = ({ setCategory, darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span
            className="badge bg-light text-dark fs-4"
            onClick={() => setCategory("general")}
          >
            NewsWave
          </span>
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("science")}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
          </ul>
          <button
            className="btn btn-secondary ms-auto"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

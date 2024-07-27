import React from "react";
import "../styles/Navbar.css"; // Adjust the path as necessary

const Navbar = ({ setCategory, toggleDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NewsWave
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
              <div className="nav-link" onClick={() => setCategory("technology")}>
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("health")}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Health
              </div>
            </li>
          </ul>
          <button
            className="btn btn-secondary ms-auto"
            onClick={toggleDarkMode}
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

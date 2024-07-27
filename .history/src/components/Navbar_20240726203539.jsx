import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => setCategory("general")}>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("business")}>
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("health")}>
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("science")}>
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("technology")}>
                Technology
              </a>
            </li>
          </ul>
          <div className="badge text-bg-secondary">
            <a className="nav-link" onClick={() => setCategory("general")}>
              General
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

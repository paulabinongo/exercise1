import React, { useState } from "react";

function Navbar({ color, src, width, height, container }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={"navbar" + (color ? ` is-${color}` : "")}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={"container" + (container ? ` is-${container}` : "")}>
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={src} width={width} height={height} />
          </a>
          <div className="navbar-item">The Form</div>
          <div
            className={"navbar-burger burger" + (menuOpen ? "is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div
          id="navbarBasicExample"
          className={"navbar-menu" + (menuOpen ? "is-active" : "")}
        >
          <div className="navbar-start">
            <a className="navbar-item has-text-white">Home</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button">Login</a>
                <a className="button">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

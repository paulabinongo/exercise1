import React, { useState } from "react";

import LinkButton from "../LinkButton";

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
            <img className="image" src={src} width={width} height={height} />
          </a>
          <div className="navbar-item">The Form</div>
          <a
            role="button"
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <span />
            <span />
            <span />
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={"navbar-menu" + (menuOpen ? " is-active" : "")}
        >
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <LinkButton color="primary">Login</LinkButton>
                <LinkButton color="danger">Sign up</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

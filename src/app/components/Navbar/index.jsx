import React, { useState } from "react";

import LinkButton from "../LinkButton";

import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { getToken, deleteToken } from "../../utils/token";

function Navbar(props) {
  const { color, src, width, height, container } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = !!getToken();

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
            <a href="/" className="navbar-item">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              {isLoggedIn ? (
                <LinkButton
                  onClick={() => {
                    deleteToken();
                    props.history.push("/");
                  }}
                >
                  Logout
                </LinkButton>
              ) : (
                <Link to="/login">
                  <LinkButton color="danger">Login</LinkButton>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
// import React from "react";
// import { withRouter } from "react-router";
// import { Link } from "react-router-dom";
// import { getToken, deleteToken } from "../../utils/token";

// const Header = (props) => {
//   const isLoggedIn = !!getToken();

//   return (
//     <div className="flex pa1 justify-between nowrap orange">
//       <div className="flex flex-fixed black">
//         <div className="fw7 mr1">Hacker News</div>
//         <Link to="/" className="ml1 no-underline black">
//           new
//         </Link>
//         {isLoggedIn && (
//           <div className="flex">
//             <div className="ml1">|</div>
//             <Link to="/create" className="ml1 no-underline black">
//               submit
//             </Link>
//           </div>
//         )}
//       </div>

//       <div className="flex flex-fixed">
//         {isLoggedIn ? (
//           <div
//             className="ml1 pointer black"
//             onClick={() => {
//               deleteToken();
//               props.history.push("/");
//             }}
//           >
//             logout
//           </div>
//         ) : (
//           <Link to="/login" className="ml1 no-underline black">
//             login
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default withRouter(Header);

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              CADASTAR
            </Link>
          </li>
          <li>
            <Link to="/listar" className="link">
              LISTAR
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/" className="link">
            <li>CADASTAR</li>
          </Link>
          <Link to="/listar" className="link">
            <li>LISTAR</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "About", "My Work", "Chat"];

  const handleActive = (name) => setActive(name);
  const path = (_path) => {
    switch (_path) {
      case "Home":
        return "/";
      case "About":
        return "/about";
      case "My Work":
        return "/projects";
      case "Chat":
        return "/contact";
      default:
        return "";
    }
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          {links.map((item, i) => {
            return (
              <li
                key={i.toString()}
                onClick={(e) => handleActive(item)}
                className={
                  active === item ? "header__navLink active" : "header__navLink"
                }
              >
                <Link to={path(item)}>
                  <Button>{item.toString()}</Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

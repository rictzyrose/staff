import React from "react";

import "./header.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },

  {
    path: "#service",
    display: "Service",
  },

  {
    path: "#projects",
    display: "Projects",
  },

  {
    path: "#blog",
    display: "Blog",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Filipino Freelance Staffing Agency</h2>
          </div>

          {/* ------ navigation -------*/}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a href={item.path} className="menu__link">
                    {" "}
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Navigation() {
  const menuItems = [
    { path: "/", label: "HOME" },
    { path: "/Projects", label: "PROJECTS" },
    { path: "/Contact", label: "CONTACT" },
    { path: "/Info", label: "INFO" },
  ];

  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <>
      <section className="container--title">
        <h2 className="personalName">Elsa Eriksson</h2>
        <p className="professionalTitle">Web Developer</p>
      </section>
      <section className="container--navigation">
        <nav className="container--navigationMenue">
          <ul className="container--navigationList">
            {menuItems.map((menuItem, index) => (
              <li
                className={`container--navigationOption ${
                  activeLink === menuItem.path ? "selected" : ""
                }`}
                key={index}
              >
                <section className="container--lineDot">
                  <article className="nav--line"></article>
                  <article className="nav--dot">●</article>
                </section>
                <NavLink
                  className="menueLink"
                  to={menuItem.path}
                  onClick={() => handleNavLinkClick(menuItem.path)}
                >
                  {menuItem.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}

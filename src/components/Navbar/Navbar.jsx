import styles from "../../styles/navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);

  return (
    <>
      <nav className={styles.nav_container}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.logo_name}>
            News Monkey
          </NavLink>
        </div>
        {menuToggle ? (
          <span
            onClick={() => setMenuToggle(!menuToggle)}
            className={`${styles.menubar} material-symbols-outlined`}
          >
            menu
          </span>
        ) : (
          <span
            onClick={() => setMenuToggle(!menuToggle)}
            className={`${styles.menubar} material-symbols-outlined`}
          >
            close
          </span>
        )}

        <ul
          className={
            menuToggle
              ? styles.category_container
              : styles.category_container_hamburger
          }
        >
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "white" : "#ccc" };
              }}
              className={styles.category_item}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "white" : "#ccc" };
              }}
              className={styles.category_item}
              to="/business"
            >
              Business
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "white" : "#ccc" };
              }}
              className={styles.category_item}
              to="/entertainment"
            >
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "white" : "#ccc" };
              }}
              className={styles.category_item}
              to="/health"
            >
              Health
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "white" : "#ccc" };
              }}
              className={styles.category_item}
              to="/science"
            >
              Science
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "white" : "#ccc" };
              }}
              className={styles.category_item}
              to="/sports"
            >
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "white" : "#ccc" };
              }}
              className={styles.category_item}
              to="/technology"
            >
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

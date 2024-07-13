import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Css/PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing" className={styles.link}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={styles.link}>About</NavLink>
        </li>
        <li>
          <NavLink to="/sign" className={styles.link}>Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

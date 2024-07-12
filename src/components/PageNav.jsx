import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./css/PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing" className="link">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product" className="link">Product</NavLink>
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

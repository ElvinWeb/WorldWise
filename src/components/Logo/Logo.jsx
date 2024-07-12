import styles from "./Css/Logo.module.css";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src={logoImg} alt="WorldWise-logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;

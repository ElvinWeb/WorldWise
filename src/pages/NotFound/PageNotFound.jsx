import { Link } from "react-router-dom";
import styles from "./Css/PageNotFound.module.css"

export default function PageNotFound() {
  return (
    <div className={styles.notfoundBlock}>
      <div className={styles.notfound}>
        <div className={styles.notfoundTitle}>
          <h1>404</h1>
        </div>
        <h2>Oops! Nothing was found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable. 
          <Link to="/">
            Return to homepage
          </Link>
        </p>
      </div>
    </div>
  );
}

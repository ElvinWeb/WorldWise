import PageNav from "../../components/Nav/PageNav";
import Button from "../../components/Button/Button";
import styles from "./Css/Signup.module.css";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className={styles.signup}>
      <PageNav />
      <form className={styles.form}>
        <h2>Sign up</h2>

        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="fullname"
            id="fullname"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input
            type="password"
            id="passwordConfirm"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <div>
          <Button type="primary">Sign up</Button>
        </div>
      </form>
    </main>
  );
}

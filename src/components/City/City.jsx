import { useParams } from "react-router-dom";
import styles from "./Css/City.module.css";
// import Spinner from "../Spinner/Spinner";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
//   }).format(new Date(date));

function City() {
  const { id } = useParams();

  return <div className={styles.city}>City - {id} </div>;
}

export default City;

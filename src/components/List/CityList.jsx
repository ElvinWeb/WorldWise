import Spinner from "../Spinner/Spinner";
import CityItem from "../Item/CityItem";
import styles from "./Css/CityList.module.css";
import Message from "../Message/Message";
const message = "Add your first city by clicking on a city on the map";

function CityList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message={message} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

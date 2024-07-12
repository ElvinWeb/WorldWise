import Spinner from "../Spinner/Spinner";
import styles from "./Css/CountryList.module.css";
import CountryItem from "../Item/CountryItem";
import Message from "../Message/Message";
const message = "Add your first city by clicking on a city on the map";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message={message} />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;

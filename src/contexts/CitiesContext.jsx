import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();
const URL = `http://localhost:9000/cities`;

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(URL);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        throw new Error("Failed to fetch cities");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      throw new Error("Failed to fetch cities");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("context is undefined");
  return context;
}

export { CitiesProvider, useCities };

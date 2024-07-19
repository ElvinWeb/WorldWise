import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();
const API_URL = `http://localhost:9000/cities`;

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(API_URL);
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
      const res = await fetch(`${API_URL}/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      throw new Error("Failed to get specific cities");
    } finally {
      setIsLoading(false);
    }
  }
  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch {
      alert("Failed to create city");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      alert("Failed to delete city");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
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

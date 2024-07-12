import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import PageNotFound from "./pages/NotFound/PageNotFound";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import HomePage from "./pages/Home/Homepage";
import AppLayout from "./pages/App/AppLayout";
import Login from "./pages/Login/Login";
import CityList from "./components/List/CityList";
import CountryList from "./components/List/CountryList";
const URL = `http://localhost:9000/cities`;

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(URL);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch cities");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageNotFound from "./pages/NotFound/PageNotFound";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import HomePage from "./pages/Home/Homepage";
import AppLayout from "./pages/App/AppLayout";
import Login from "./pages/Login/Login";
import CityList from "./components/List/CityList";
import CountryList from "./components/List/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import { CitiesProvider } from "./contexts/CitiesContext";


function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" replace />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;

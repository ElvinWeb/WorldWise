import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { lazy, Suspense } from "react";

import CityList from "./components/List/CityList";
import CountryList from "./components/List/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import SpinnerFullPage from "./components/Spinner/SpinnerFullPage";
import Signup from "./pages/Signup/Signup";

const HomePage = lazy(() => import("./pages/Home/Homepage"));
const Login = lazy(() => import("./pages/Login/Login"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const AppLayout = lazy(() => import("./pages/App/AppLayout"));
const About = lazy(() => import("./pages/About/About"));
const PageNotFound = lazy(() => import("./pages/NotFound/PageNotFound"));

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate to="cities" replace />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;

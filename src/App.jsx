import { useState, useEffect } from "react";
import { Button, Sidebar } from "flowbite-react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Home/Main";
import FooterComponent from "./components/Footer/FooterComponent";
import "./App.css";
import PopularMoviesSection from "./components/Main/Home/MainSection/PopularMoviesSection";
import axios from "axios";
import CompanySection from "./components/CompanySection/CompanySection";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fetchMoviesData, setfetchMoviesData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/movies`
        );
        setfetchMoviesData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, []);

  const toggleCiaranMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
        <Header
          toggleCiaranMode={toggleCiaranMode}
          darkMode={darkMode}
          fetchMoviesData={fetchMoviesData}
        />
        <div className="">
          <Main fetchMoviesData={fetchMoviesData} />
        </div>
        {/*             <PopularMoviesSection />
         */}{" "}
        <CompanySection darkMod={darkMode} />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;

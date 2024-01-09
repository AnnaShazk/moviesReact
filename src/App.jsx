import { useState } from "react";
import { Button, Sidebar } from "flowbite-react";
import Header from "./components/Header/header";
import Main from "./components/Main/Home/Main";
import FooterComponent from "./components/Footer/FooterComponent";
import "./App.css";
import PopularMoviesSection from "./components/Main/Home/MainSection/PopularMoviesSection";
import Favourites from "./components/Main/Favourites/Favourites";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleCiaranMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
        <Header toggleCiaranMode={toggleCiaranMode} darkMode={darkMode} />
        <PopularMoviesSection />
        <Main />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;

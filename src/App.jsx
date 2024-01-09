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
        <div className="grid grid-cols-5">
          <div className="col-span-4">
            <Main />
          </div>
          <div className="col-span-1">
            <PopularMoviesSection />
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;

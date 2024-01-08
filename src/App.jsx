import { useState } from "react";
import { Button } from "flowbite-react";
import Header from "./components/Header/header";
import Main from "./components/Main/Home/Main";
import FooterComponent from "./components/Footer/FooterComponent";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleCiaranMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header toggleCiaranMode={toggleCiaranMode} darkMode={darkMode} />
        <Main />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;

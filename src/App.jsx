import { useState } from "react";
import { Button } from "flowbite-react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Home/Main";
import FooterComponent from "./components/Footer/FooterComponent";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;

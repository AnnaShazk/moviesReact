import { useState } from "react";
import { Button } from "flowbite-react";
import Header from "./components/Header/Header"
import Main from "./components/Main/Home/Main"
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

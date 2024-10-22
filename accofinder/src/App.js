import React from "react";
import MainLayout from "./MainLayout";
import Footer from "./componets/footer/Footer";
import NavBar from "./componets/header/NavBar";
import { BrowserRouter } from 'react-router-dom';
import "./App.css"


function App() {
  return (
    <BrowserRouter> 
      <div className="font-roboto">
        <NavBar />
        <MainLayout />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

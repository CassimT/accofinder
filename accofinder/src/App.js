import React from "react";
import MainLayout from "./MainLayout";
import Footer from "./componets/footer/Footer";
import NavBar from "./componets/header/NavBar";
import { BrowserRouter } from 'react-router-dom';
import "./App.css"
import { SearchProvider } from "./componets/utils/SearchContext";


function App() {
  return (
    <BrowserRouter> 
      <div className="font-roboto">
        <SearchProvider>
        <MainLayout />
        <Footer />
        </SearchProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

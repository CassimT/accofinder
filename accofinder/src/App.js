import React from "react";
import MainLayout from "./MainLayout";
import Footer from "./componets/footer/Footer";
import NavBar from "./componets/header/NavBar";

function App() {
  return (
    <div className=" font-roboto">
      <NavBar />
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;

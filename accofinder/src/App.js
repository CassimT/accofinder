import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomPage from "./pages/HomPage";
import AgentPage from "./pages/AgentPage";
import DetailsPage from "./pages/DetailsPage";
import SingInPage from "./pages/SingInPage";
import SingUpPage from "./pages/SingUpPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomPage />} />         
          <Route path="/agents" element={<AgentPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/signin" element={<SingInPage />} />
          <Route path="/signup" element={<SingUpPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

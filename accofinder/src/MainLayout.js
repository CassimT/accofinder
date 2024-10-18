import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fontsource/roboto'; // Default weight (400)
import '@fontsource/roboto/400.css'; // Regular weight
import '@fontsource/roboto/700.css'; // Bold weight
import HomPage from "./pages/HomPage";
import AgentPage from "./pages/AgentPage";
import DetailsPage from "./pages/DetailsPage";
import SingInPage from "./pages/SingInPage";
import SingUpPage from "./pages/SingUpPage";
import PaymentPage from "./pages/PaymentPage";
import SearchingPage from "./pages/SearchingPage";
import ProfilePage from "./pages/ProfilePage";


const MainLayout = () => {
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
          <Route path="/Searching" element={<SearchingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainLayout;

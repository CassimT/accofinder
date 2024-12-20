import React from "react";
import {Routes, Route, useLocation  } from "react-router-dom";
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
import NavBar from "./componets/header/NavBar";
import PrivateRouters from "./componets/utils/PrivateRouters";
import PaymentSelectionPage from "./pages/PaymentSelectionPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ProfileEditingPage from "./pages/ProfileEditingPage";
import PaymentsHistoryPage from "./pages/PaymentsHistoryPage";
import HistoryPage from "./pages/HistoryPage";
import TeamPage from "./pages/TeamPage";
import ListingEditPage from "./pages/ListingEditPage";



const MainLayout = () => {
  const location = useLocation();
  const noNavBarRoutes = [
    '/signin', '/signup', '/payment', '/details','/agents','/forgotpassword','/options','/profile/edit','/team','/editlisting','history'
  ];
  const hideNavBar = noNavBarRoutes.some(route => location.pathname.startsWith(route));

  return (
      <div>
        {!hideNavBar && <NavBar />}
        <Routes>
          <Route element = {<PrivateRouters/>}>
            <Route path="/payment" element={<PaymentPage />} /> 
            <Route path="/payment/history" element={<PaymentsHistoryPage />} /> 
            <Route path="/agents/*" element={<AgentPage />} />  
            <Route path="/history" element={<HistoryPage />} />        
          </Route>
          <Route path="/" element={<HomPage />} />                
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/signin" element={<SingInPage />} />
          <Route path="/signup" element={<SingUpPage/>} />
          <Route path="/Searching" element={<SearchingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/options" element={<PaymentSelectionPage />} />
          <Route path="/forgotpassword" element={<ForgetPasswordPage />} />
          <Route path="/profile/edit" element={<ProfileEditingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/editlisting" element={<ListingEditPage />} /> 
        </Routes>
      </div>
    
  );
};

export default MainLayout;

import React, { useEffect } from "react"; // Ensure React is imported at the top
import MainLayout from "./MainLayout";
import Footer from "./componets/footer/Footer";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import { SearchProvider } from "./componets/utils/SearchContext";
import { checkTokenExpiration } from "./componets/utils/ManageToken";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  useEffect(() => {
    // Run token expiration check on app load
    checkTokenExpiration();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
    <BrowserRouter>
      <div className="font-roboto">
        <SearchProvider>
          <MainLayout />
          <Footer />
        </SearchProvider>
      </div>
    </BrowserRouter>
    </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;

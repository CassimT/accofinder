import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../componets/sideBar/SideBar";
import AddListingForm from "../componets/agent/AddListingForm";
import AgentListing from "../componets/agent/AgentListing";
import Dashboard from "../componets/agent/Dashboard";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client instance
const queryClient = new QueryClient();

const AgentPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex">
        <SideBar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} /> 
            <Route path="add" element={<AddListingForm />} /> 
            <Route path="listing" element={<AgentListing />} /> 
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default AgentPage;

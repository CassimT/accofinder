import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../componets/sideBar/SideBar";
import AddListingForm from "../componets/agent/AddListingForm";
import AgentListing from "../componets/agent/AgentListing";
import Dashboard from "../componets/agent/Dashboard";

const AgentPage = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Default route for AgentPage */}
          <Route path="add" element={<AddListingForm />} /> {/* Adjusted path */}
          <Route path="listing" element={<AgentListing />} /> {/* Adjusted path */}
        </Routes>
      </div>
    </div>
  );
};

export default AgentPage;

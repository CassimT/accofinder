import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import SingInPage from "../../pages/SingInPage";

function PrivateRouters() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  // Restricted paths by role
  const agentRestrictedPaths = ["/agents"];
  const studentRestrictedPaths = ["/payment", "/payment/history"];

  // Capture the current path
  const currentPath = location.pathname;

  // Redirect unauthenticated users to the login page
  if (!token) {
    // Store the path for redirection after login
    localStorage.setItem("redirectAfterLogin", currentPath);
    console.log("No token found. Redirecting to login.");
    return <SingInPage />;
  }

  // Role-based access control
  const isAgentRestricted = agentRestrictedPaths.some((path) =>
    currentPath.startsWith(path)
  );
  const isStudentRestricted = studentRestrictedPaths.some((path) =>
    currentPath.startsWith(path)
  );

  if (role === "agent" && isStudentRestricted) {
    alert("Agents are not authorized to access this page.");
    console.log("Agent tried to access a student-restricted page.");
    return <Navigate to="/" replace />;
  }

  if (role === "student" && isAgentRestricted) {
    alert("Students are not authorized to access this page.");
    console.log("Student tried to access an agent-restricted page.");
    return <Navigate to="/" replace />;
  }

  // Allow access to authorized routes
  return <Outlet />;
}

export default PrivateRouters;

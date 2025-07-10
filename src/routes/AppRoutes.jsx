import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Home from "../pages/Home.jsx";
import DefaultLayout from "../components/layout/DefaultLayout.jsx";
import DashboardPage from "../pages/DashboardPage.jsx"; // create this soon

const AppRoutes = () => {
  return (
    <Routes>
      {
        <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      }
    </Routes>
  );
};
export default AppRoutes;

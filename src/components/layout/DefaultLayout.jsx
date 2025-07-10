import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";  

const DefaultLayout = () => {
    return (
        <>
           <Navbar />

            <main className="main"> <Outlet /></main>

            <Footer />

        </>
    );
}

export default DefaultLayout;
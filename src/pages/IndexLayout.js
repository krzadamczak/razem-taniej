import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

import "./IndexLayout.css";

const IndexLayout = () => {
    return (
        <>
            <header className='header'>
                <span className='company-name'>RAZEM TANIEJ</span>
                <Navigation />
            </header>
            <Outlet />
            <Footer />
        </>
    );
};

export default IndexLayout;

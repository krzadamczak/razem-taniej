import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const IndexLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
};

export default IndexLayout;

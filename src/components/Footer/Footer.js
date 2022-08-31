import React from "react";
import Navigation from "../Navigation/Navigation";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <span className='footer__copyright'>© 2022 RAZEM TANIEJ</span>
            <Navigation />
        </footer>
    );
};

export default Footer;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='nav__wrapper'>
                <NavLink className='nav__link' to='/'>
                    Strona główna
                </NavLink>
                <NavLink className='nav__link' to='/trasy'>
                    Trasy
                </NavLink>
                <Link className='nav__link' to='/logowanie'>
                    Zaloguj się
                </Link>
                <Link className='nav__link' to='/rejestracja'>
                    Zarejestruj się
                </Link>{" "}
                {/*Tymczasowo. Jak użyć loginWithRedirect bez onClick? https://stackoverflow.com/questions/66523916/how-to-call-auth0-loginwithredirect-function-in-react-useeffect-without-button-c */}
            </ul>
        </nav>
    );
};

export default Navigation;

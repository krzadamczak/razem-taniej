import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul>
                <NavLink to='/'>Strona główna</NavLink>
                <NavLink to='/trasy'>Trasy</NavLink>
                <Link to='/logowanie'>Zaloguj się</Link>
                <Link to='/rejestracja'>Zarejestruj się</Link>{" "}
                {/*Tymczasowo. Jak użyć loginWithRedirect bez onClick? https://stackoverflow.com/questions/66523916/how-to-call-auth0-loginwithredirect-function-in-react-useeffect-without-button-c */}
            </ul>
        </nav>
    );
};

export default Navigation;
